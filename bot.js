#!/usr/bin/env node

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
██╗██╗     ██╗  ██╗ █████╗ ███╗   ██╗██████╗  ██████╗ ████████╗
██║██║     ██║  ██║██╔══██╗████╗  ██║██╔══██╗██╔═══██╗╚══██╔══╝
██║██║     ███████║███████║██╔██╗ ██║██████╔╝██║   ██║   ██║   
██║██║     ██╔══██║██╔══██║██║╚██╗██║██╔══██╗██║   ██║   ██║   
██║███████╗██║  ██║██║  ██║██║ ╚████║██████╔╝╚██████╔╝   ██║   
╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝  ╚═════╝    ╚═╝
`))

console.log(chalk.cyan('🤖 ILHANBOT AFK SYSTEM'))
console.log(chalk.gray('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'))

// 📋 FEATURES BOARD
console.log(chalk.yellow('📋 FEATURES:\n'))
console.log('• Auto Join Server')
console.log('• Auto Reconnect (20s)')
console.log('• AFK Move / Jump / Rotate')
console.log('• Random Chat Messages')
console.log('• Auto Restart (1 Hour)')
console.log('• Change Username ONLY on Ban')
console.log('• Auto Retry when Server OFF')

console.log(chalk.gray('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'))

// 🔴 Social
console.log(
  chalk.bgRed.white.bold(' 📸 Instagram: ilhan.pk ') + ' ' +
  chalk.bgRed.white.bold(' ▶ YouTube: OxViper ')
)

console.log(chalk.gray('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n'))

// 📥 Input
const ip = readline.question('🌐 Server IP: ')
const port = parseInt(readline.question('🔌 Port: '))
let username = readline.question('👤 Bot Name (default ILHANBOT): ') || 'ILHANBOT'

console.log(chalk.gray('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'))
console.log(chalk.blue(`📡 Connecting to ${ip}:${port} as ${username}\n`))

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
        const delay = (Math.random() * (6 - 5) + 5) * 60 * 1000
        setTimeout(() => {
          const msg = messages[Math.floor(Math.random() * messages.length)]
          bot.chat(msg)
          console.log(chalk.magenta(`💬 ${msg}`))
          chatLoop()
        }, delay)
      }
      chatLoop()

      // 🦘 Jump
      setInterval(() => {
        bot.setControlState('jump', true)
        setTimeout(() => bot.setControlState('jump', false), 800)
        console.log(chalk.yellow('🦘 Jump'))
      }, 3 * 60 * 1000)

      // 🚶 Move
      setInterval(() => {
        bot.setControlState('forward', true)
        setTimeout(() => bot.setControlState('forward', false), 3000)
        console.log(chalk.cyan('🚶 Move'))
      }, 4 * 60 * 1000)

      // 🔄 Rotate
      setInterval(() => {
        let yaw = bot.entity.yaw
        let steps = 20
        let step = 0

        const rotate = setInterval(() => {
          yaw += (Math.PI * 2) / steps
          bot.look(yaw, bot.entity.pitch, true)
          step++
          if (step >= steps) clearInterval(rotate)
        }, 200)

        console.log(chalk.blue('🔄 Rotate'))
      }, 5 * 60 * 1000)

      // 🔁 Restart after 1 hour (NO username change)
      setTimeout(() => {
        console.log(chalk.red('\n🔁 Restarting bot...\n'))
        isRestarting = true
        bot.quit()
      }, 60 * 60 * 1000)
    })

    // 🚫 Detect kick
    bot.on('kicked', (reason) => {
      wasKicked = true
      console.log(chalk.red(`🚫 Kicked: ${reason}`))
    })

    // ⚠️ Error (server offline etc.)
    bot.on('error', (err) => {
      if (!connected) {
        console.log(chalk.red('⚠️ Server offline... retrying'))
      } else {
        console.log(chalk.red(err.message))
      }
    })

    // 🔄 Reconnect logic
    bot.on('end', () => {
      console.log(chalk.yellow('🔁 Reconnecting in 20s...\n'))

      if (wasKicked && !isRestarting) {
        username = randomName()
        console.log(chalk.gray(`🔄 New Username: ${username}`))
      } else {
        console.log(chalk.blue(`🔁 Rejoining with same username: ${username}`))
      }

      // reset flags
      wasKicked = false
      isRestarting = false

      setTimeout(createBot, 20000)
    })
  }

  createBot()
      }
