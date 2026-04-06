#!/usr/bin/env node

const mineflayer = require('mineflayer')
const readline = require('readline-sync')
const chalk = require('chalk')
const { GoogleGenerativeAI } = require('@google/generative-ai')

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

console.log(chalk.cyan('🤖 ILHANBOT AFK + AI SYSTEM'))
console.log(chalk.gray('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'))

console.log(chalk.yellow('📋 FEATURES:\n'))
console.log('• Auto Join Server')
console.log('• Auto Reconnect (20s)')
console.log('• AFK Move / Jump / Rotate')
console.log('• Random Chat Messages')
console.log('• Gemini AI (.command only)')
console.log('• Auto Restart (1 Hour)')
console.log('• Change Username ONLY on Ban')

console.log(chalk.gray('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'))

// 📥 Input
const ip = readline.question('🌐 Server IP: ')
const port = parseInt(readline.question('🔌 Port: '))
let username = readline.question('👤 Bot Name (default ILHANBOT): ') || 'ILHANBOT'

// 🔑 Optional API key
const apiKey = readline.question('🤖 Gemini API Key (optional): ')

// 🤖 Setup AI (optional)
let model = null
if (apiKey) {
  const genAI = new GoogleGenerativeAI(apiKey)
  model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })
  console.log('🤖 AI Enabled\n')
} else {
  console.log('⚠️ AI Disabled (no API key)\n')
}

console.log(chalk.gray('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'))
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

    // 📊 Counters
    let jumpCount = 0
    let moveCount = 0
    let rotateCount = 0

    function updateStats() {
      process.stdout.write(
        `\r🦘 Jump: ${jumpCount} | 🚶 Move: ${moveCount} | 🔄 Rotate: ${rotateCount}`
      )
    }

    bot.on('spawn', () => {
      connected = true
      console.log(chalk.green(`\n✅ Joined as ${username}\n`))

      // 💬 Auto chat loop
      const messages = ['ok', 'hello', 'hai', 'anyone here?', 'lets play']
      function chatLoop() {
        const delay = (Math.random() * (6 - 5) + 5) * 60 * 1000
        setTimeout(() => {
          const msg = messages[Math.floor(Math.random() * messages.length)]
          bot.chat(msg)
          console.log(chalk.magenta(`\n💬 ${msg}`))
          updateStats()
          chatLoop()
        }, delay)
      }
      chatLoop()

      // 🦘 Jump
      setInterval(() => {
        bot.setControlState('jump', true)
        setTimeout(() => bot.setControlState('jump', false), 800)
        jumpCount++
        updateStats()
      }, 3 * 60 * 1000)

      // 🚶 Move
      setInterval(() => {
        bot.setControlState('forward', true)
        setTimeout(() => bot.setControlState('forward', false), 3000)
        moveCount++
        updateStats()
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

        rotateCount++
        updateStats()
      }, 5 * 60 * 1000)

      // 🔁 Restart after 1 hour
      setTimeout(() => {
        console.log(chalk.red('\n\n🔁 Restarting bot...\n'))
        isRestarting = true
        bot.quit()
      }, 60 * 60 * 1000)
    })

    // 🤖 AI Chat (.only)
    bot.on('chat', async (player, message) => {
      if (player === bot.username) return
      if (!message.startsWith('.')) return
      if (!model) return

      const prompt = message.slice(1).trim()
      if (!prompt) return

      try {
        const result = await model.generateContent(prompt)
        let reply = result.response.text()

        reply = reply.replace(/\n/g, ' ').substring(0, 100)

        setTimeout(() => {
          bot.chat(reply)
          console.log(`\n🤖 AI: ${reply}`)
          updateStats()
        }, 2000)

      } catch (err) {
        console.log('\nAI Error:', err.message)
      }
    })

    // 🚫 Detect kick
    bot.on('kicked', (reason) => {
      wasKicked = true
      console.log(chalk.red(`\n🚫 Kicked: ${reason}`))
    })

    // ⚠️ Error
    bot.on('error', (err) => {
      if (!connected) {
        console.log(chalk.red('\n⚠️ Server offline... retrying'))
      } else {
        console.log(chalk.red(`\n${err.message}`))
      }
    })

    // 🔄 Reconnect
    bot.on('end', () => {
      console.log(chalk.yellow('\n🔁 Reconnecting in 20s...\n'))

      if (wasKicked && !isRestarting) {
        username = randomName()
        console.log(chalk.gray(`🔄 New Username: ${username}`))
      } else {
        console.log(chalk.blue(`🔁 Rejoining with same username: ${username}`))
      }

      wasKicked = false
      isRestarting = false

      setTimeout(createBot, 20000)
    })
  }

  createBot()
            }
