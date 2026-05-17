@echo off
chcp 65001 >nul
title myRacing 前端 (端口 5173)
cd /d "%~dp0"
if not exist "node_modules" (
    echo 首次运行，正在安装依赖...
    call npm install
)
call npm run dev
echo.
echo 前端已退出。按任意键关闭...
pause >nul
