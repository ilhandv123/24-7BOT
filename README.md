# 🤖 ILHANBOT - Minecraft AFK Bot
**Easy Setup for Linux & Termux**

---

## 🎯 QUICK INSTRUCTIONS (MUST READ!)

### ✔️ Bot Name Rule
```
❌ WRONG: My Bot (with space)
✅ RIGHT: My_Bot or MyBot (use underscore)
```

### ✔️ Auto Ban Protection
The bot **automatically detects if you're banned**, changes the name, and rejoins the server!

### ✔️ Aternos Server Users
Enable "Cracked" mode:
1. Go to **Aternos Dashboard**
2. Click **Settings** → **Server Settings**
3. Find **"Cracked"** option → Turn **ON**
4. Click **Save** and **Restart Server**

### ✔️ Bedrock Players ⚠️
If you play **Bedrock Edition** (not Java), watch this video first:
📹 **Video Link:** https://youtu.be/your-video-link

(Java Edition players can skip this)

---

## ✨ What Does It Do?

- 🔄 **Auto Reconnect** - Joins back if disconnected
- 🚶 **Anti-AFK** - Moves around so you don't get kicked
- 💬 **Random Chat** - Chats automatically to look active
- 🧠 **AI Helper** - Optional AI that responds to commands

---

## 📱 Setup for TERMUX (Android Phone)

### Step 1️⃣: Update Termux

```bash
pkg update && pkg upgrade -y
```

Press **Enter** and wait for it to finish.

---

### Step 2️⃣: Install Node.js

```bash
pkg install nodejs -y
```

Wait for the download to complete.

---

### Step 3️⃣: Verify Installation

```bash
node -v
npm -v
```

You should see version numbers like `v18.x.x` ✅

---

### Step 4️⃣: Download ILHANBOT

```bash
cd $HOME
git clone https://github.com/ilhandv123/24-7BOT.git
cd 24-7BOT
```

---

### Step 5️⃣: Install Bot Files

```bash
npm install mineflayer readline-sync chalk @google/generative-ai
```

This takes 1-2 minutes. ⏳

---

### Step 6️⃣: Run the Bot! 🚀

```bash
node bot.js
```

The bot will ask you questions:

```
🌐 Enter Server IP: play.example.com
🔌 Enter Server Port: 25565
👤 Enter Bot Name: My_Bot
🤖 Enter Gemini API Key (press Enter to skip): 
```

**Done! Your bot is running!** 🎉

---

## 🐧 Setup for LINUX (Ubuntu/Debian)

### Step 1️⃣: Update Your System

```bash
sudo apt update
sudo apt upgrade -y
```

---

### Step 2️⃣: Install Node.js

```bash
sudo apt install nodejs npm -y
```

---

### Step 3️⃣: Verify It Works

```bash
node -v
npm -v
```

---

### Step 4️⃣: Download ILHANBOT

```bash
cd ~
git clone https://github.com/your-repo/ilhanbot.git
cd ilhanbot
```

---

### Step 5️⃣: Install Dependencies

```bash
npm install mineflayer readline-sync chalk @google/generative-ai
```

---

### Step 6️⃣: Run the Bot! 🚀

```bash
node index.js
```

Answer the questions:

```
🌐 Enter Server IP: play.example.com
🔌 Enter Server Port: 25565
👤 Enter Bot Name: My_Bot
🤖 Enter Gemini API Key (press Enter to skip): 
```

---

## 🧠 AI Chat (Optional)

The bot can reply to commands with AI!

### How to Enable AI:

1. Go to: **https://makersuite.google.com/app/apikey**
2. Click **"Create API Key"**
3. Copy the key
4. Paste it when the bot asks

### How to Use AI:

- `.hello` → Bot replies ✅
- `hello` → Bot ignores it ❌

**Important:** The dot (`.`) is required!

---

## 🎮 Bot Features

| Feature | What It Does |
|---------|-------------|
| ✅ Auto Join | Connects to server automatically |
| ✅ Auto Reconnect | Rejoins if disconnected |
| ✅ AFK Movement | Moves, jumps, rotates randomly |
| ✅ Random Chat | Sends messages every few minutes |
| ✅ AI Commands | Responds to `.` commands |
| ✅ Auto Restart | Restarts every 1 hour |
| ✅ Ban Protection | Changes name & rejoins if banned |

---

## ❓ Troubleshooting

### ❌ "Command not found: node"
Install Node.js again. Go back to Step 1-2.

### ❌ "Permission denied"
Add `sudo` before the command.

### ❌ "Bot keeps disconnecting"
Check your **Server IP** and **Port** are correct!

### ❌ "Can't find bot name"
Remember: **No spaces!** Use `My_Bot` not `My Bot`

### ❌ "Bot won't start"
Make sure you're in the `ilhanbot` folder:
```bash
cd ilhanbot
```

---

## 🚨 Pro Tips

**Run in background (Linux):**
```bash
nohup node index.js &
```

**Stop the bot:**
```
Press Ctrl + C
```

**Use a persistent session (Linux):**
```bash
screen -S mybot
node index.js
```
(Detach: `Ctrl + A`, then `D`)

---

## 🎉 You're All Set!

Your bot is now protecting your AFK time! 

**Happy gaming!** 🚀
