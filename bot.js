# Termux / Mobile Setup

This guide is for Android users using Termux.

## 1. Install required tools

```bash
pkg update
pkg upgrade -y
pkg install -y git nodejs
```

## 2. Clone the project

```bash
cd $HOME
git clone https://github.com/ilhandv123/24-7BOT.git
cd 24-7BOT
```

## 3. Install dependencies

```bash
npm install
```

## 4. Create your config

```bash
cp .env.example .env
nano .env
```

Example:

```env
MC_HOST=play.example.com
MC_PORT=25565
MC_USERNAME=ILHANBOT
MC_VERSION=1.21.11
```

## 5. Run in background

```bash
nohup npm start > bot.log 2>&1 &
```

To view the log later:

```bash
cat bot.log
```

## 6. Keep it alive

If the mobile app kills processes, use `screen` or `tmux`.

```bash
pkg install -y screen
screen -S minecraftbot
cd 24-7BOT
npm start
```

To detach:

```bash
Ctrl + A
D
```

## Notes

- Some mobile networks can disconnect the bot. Keeping it in the background reduces this risk.
- Use a stable server and correct port.
- If the server is strict, use a valid username format.

