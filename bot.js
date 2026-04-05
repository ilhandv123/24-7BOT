#!/usr/bin/env node

const { execSync } = require('child_process')

// 📦 Auto install function
function ensurePackages() {
  try {
    require.resolve('mineflayer')
    require.resolve('readline-sync')
    require.resolve('chalk')
  } catch (e) {
    console.log('📦 Installing required packages...\n')
    execSync('npm install mineflayer readline-sync chalk', { stdio: 'inherit' })
    console.log('\n✅ Installation complete! Restarting...\n')

    // Restart script
    require('child_process').spawn(process.argv[0], process.argv.slice(1), {
      stdio: 'inherit'
    })
    process.exit()
  }
}

ensurePackages()

// ✅ Now safe to require
const mineflayer = require('mineflayer')
const readline = require('readline-sync')
const chalk = require('chalk')

// 🎲 Random username generator
function randomName() {
  const chars = 'abcdefghijklmnopqrstuvwxyz'
  let name = 'ILHANBOT_'
  for (let i = 0; i < 5; i++) {
    name += chars[Math.floor(Math.random() * chars.length)]
  }
  return name
}

// 🎨 Banner
console.clear()
console.log(chalk.green(`
██████████████████████████████
██████████████████████████████
████░░░░░░░░░░░░░░░░░░░░░░▀███
████░░▄▄▄▄▄▄▄░░░░▄▄▄▄▄▄▄▄░░███
████░░███████░░░░████████░░███
████░░████▀▀▀░░░░▀▀▀▀████░░███
████░░████░░░░░░░░░░░░███░░███
████░░████░░███████░░░███░░███
████░░░░░░░░███████░░░░░░░░███
████░░░░░░░░███████░░░░░░░░███
████░░████░░███████░░░███░░███
████░░████░░░░░░░░░░░░███░░███
████░░████▄▄▄░░░░▄▄▄▄████░░███
████░░███████░░░░████████░░███
████░░▀▀▀▀▀▀▀░░░░▀▀▀▀▀▀▀▀░░███
████░░░░░░░░░░░░░░░░░░░░░░▄███
██████████████████████████████
██████████████████████████████
`))

console.log(chalk.cyan('🤖 ILHANBOT AFK SYSTEM\n'))

// 📥 Input
const ip = readline.question('🌐 Server IP: ')
const port = parseInt(readline.question('🔌 Port: '))
let username = readline.question('👤 Bot Name (default ILHANBOT): ') || 'ILHANBOT'

console.log(chalk.blue(`\n📡 Connecting to ${ip}:${port} as ${username}\n`))

startBot(ip, port, username)

// 🤖 BOT SYSTEM
function startBot(ip, port, username) {

  function createBot() {

    console.log(chalk.blue(`🔄 Trying as ${username}...\n`))

    const bot = mineflayer.createBot({
      host: ip,
      port: port,
      username: username,
      version: '1.20.1'
    })

    let connected = false
    let wasKicked = false
    let isRestarting = false

    bot.on('spawn', () => {
      connected = true
      console.log(chalk.green(`✅ Joined as ${username}\n`))

      // 💬 Chat loop
      const messages = ['ok', 'hello', 'hai', 'anyone here?', 'lets play']
      function chatLoop() {
        setTimeout(() => {
          const msg = messages[Math.floor(Math.random() * messages.length)]
          bot.chat(msg)
          console.log(chalk.magenta(`💬 ${msg}`))
          chatLoop()
        }, 5 * 60 * 1000)
      }
      chatLoop()

      // 🦘 Jump
      setInterval(() => {
        bot.setControlState('jump', true)
        setTimeout(() => bot.setControlState('jump', false), 800)
      }, 3 * 60 * 1000)

      // 🚶 Move
      setInterval(() => {
        bot.setControlState('forward', true)
        setTimeout(() => bot.setControlState('forward', false), 3000)
      }, 4 * 60 * 1000)

      // 🔁 Restart
      setTimeout(() => {
        console.log('🔁 Restarting...')
        isRestarting = true
        bot.quit()
      }, 60 * 60 * 1000)
    })

    bot.on('kicked', () => wasKicked = true)

    bot.on('end', () => {
      console.log('🔁 Reconnecting in 20s...')

      if (wasKicked && !isRestarting) {
        username = randomName()
        console.log(`🔄 New username: ${username}`)
      }

      wasKicked = false
      isRestarting = false

      setTimeout(createBot, 20000)
    })
  }

  createBot()
      }
