@echo off
chcp 65001 >nul
title myRacing 后端 (端口 3001)
cd /d "%~dp0"
node index.js
echo.
echo 后端已退出。按任意键关闭...
pause >nul
