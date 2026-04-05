
# 🤖 ILHANBOT - Minecraft AFK Bot

A powerful Minecraft bot with auto-reconnect, AFK movements, and smart username management.

## ✨ Features

- 🔄 **Auto Join Server** - Automatically connects to any Minecraft server
- 🔁 **Auto Reconnect** - Reconnects every 20 seconds if disconnected
- 🦘 **AFK Movement System**:
  - Random jumps every 3 minutes
  - Random movement every 4 minutes  
  - Camera rotation every 5 minutes
- 💬 **Random Chat Messages** - Sends random messages every 5-6 minutes
- 🔄 **Auto Restart** - Bot restarts every hour
- 👤 **Smart Username Management** - Changes username ONLY when banned
- ⚡ **Server Recovery** - Auto retry when server is offline

## 📋 Requirements

- **Node.js** (v14 or higher)
- **Minecraft Java Edition** server (1.20.1 compatible)
- **Git** - For cloning the repository

## 🚀 Installation (Turmax/Linux)

### 1. Update System Packages
```bash
sudo apt update && sudo apt upgrade -y
```

2. Install Required Software

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs git

# Verify installations
node --version
npm --version
git --version
```

3. Clone the Repository

```bash
# Clone directly from GitHub
git clone https://github.com/ilhandv123/24-7BOT.git

# Navigate to bot directory
cd 24-7BOT
```

4. Install Dependencies

```bash
npm install
```

The following packages will be installed:

· mineflayer - Minecraft bot library
· readline-sync - For user input
· chalk - For colorful console output

5. Run the Bot

```bash
node bot.js
```

🎮 Quick Start

After installation, simply run:

```bash
cd 24-7BOT
node bot.js
```

Then enter:

· 🌐 Server IP - Minecraft server address
· 🔌 Port - Server port (usually 25565)
· 👤 Bot Name - Bot username (default: ILHANBOT)

🛠️ Turmax Specific Setup

Run Bot in Background with Screen

```bash
# Install screen if not installed
sudo apt install screen -y

# Create new screen session
screen -S minecraft-bot

# Run the bot
cd 24-7BOT
node bot.js

# Detach from screen (Ctrl+A, then D)
# Reattach later with: screen -r minecraft-bot
```

Update to Latest Version

```bash
cd 24-7BOT
git pull
npm install  # Reinstall if new dependencies added
```

Auto-Start on Boot (Systemd)

Create a service file:

```bash
sudo nano /etc/systemd/system/minecraft-bot.service
```

Add this content (change paths accordingly):

```ini
[Unit]
Description=Minecraft AFK Bot
After=network.target

[Service]
Type=simple
User=YOUR_USERNAME
WorkingDirectory=/home/YOUR_USERNAME/24-7BOT
ExecStart=/usr/bin/node /home/YOUR_USERNAME/24-7BOT/bot.js
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Enable and start the service:

```bash
sudo systemctl enable minecraft-bot
sudo systemctl start minecraft-bot
sudo systemctl status minecraft-bot
```

📁 Project Structure After Clone

```
24-7BOT/
├── bot.js          # Main bot file
├── package.json    # Dependencies
├── package-lock.json
└── node_modules/   # Installed packages (after npm install)
```

🔧 Troubleshooting

Common Issues & Solutions:

Error: "Command 'git' not found"

```bash
sudo apt install git -y
```

Error: "Permission denied" when cloning

```bash
# Clone to home directory instead
cd ~
git clone https://github.com/ilhandv123/24-7BOT.git
```

Error: "Cannot find module 'mineflayer'"

```bash
cd 24-7BOT
npm install mineflayer readline-sync chalk
```

Error: "Connection refused"

· Check if server IP and port are correct
· Ensure server is online
· Check firewall settings

Bot gets kicked immediately

· Server might have anti-bot protection
· Bot will automatically change username on ban
· Some servers require premium accounts

Update Node.js (if version issues)

```bash
# Check current version
node --version

# Update if below v14
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

📊 Managing Multiple Bots

Run multiple instances from same clone:

```bash
# Copy bot to different directories
cp -r 24-7BOT bot1
cp -r 24-7BOT bot2

# Run each in separate screen sessions
cd bot1 && screen -dmS bot1 node bot.js
cd bot2 && screen -dmS bot2 node bot.js
```

🎯 Quick Commands Reference

Command Description
git clone https://github.com/ilhandv123/24-7BOT.git Download bot
cd 24-7BOT Enter bot directory
npm install Install dependencies
node bot.js Start bot
Ctrl+C Stop bot
screen -S bot Create screen session
Ctrl+A, D Detach from screen
screen -r bot Reattach to screen
git pull Update bot to latest version
pkill node Kill all node processes

📝 Notes

· Bot works with cracked and premium servers
· Username only changes when banned (not on normal disconnects)
· Bot automatically handles server restarts
· All movements are randomized to avoid detection
· The repository will be updated with new features

🔄 Updating

To get the latest features:

```bash
cd 24-7BOT
git pull
npm install  # If package.json changed
```

📞 Support & Social

· GitHub: ilhandv123/24-7BOT
· Instagram: @ilhan.pk
· YouTube: OxViper

⚠️ Disclaimer

This bot is for educational purposes. Use responsibly and respect server rules. Some servers may ban bot usage.

---

Made with ❤️ by ILHAN

```

This updated README now features:
- Complete `git clone` installation method
- Repository structure explanation
- Update instructions with `git pull`
- Multiple bot management tips
- Proper GitHub repository linking
- All commands using the cloned directory name `24-7BOT`
