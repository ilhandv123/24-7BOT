
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

