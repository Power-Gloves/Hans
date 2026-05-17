@echo off
chcp 65001 >nul
title myRacing 启动器

echo ================================
echo   myRacing 实时监控 - 一键启动
echo ================================
echo.

cd /d "%~dp0"

echo [1/2] 启动后端服务 (端口 3001)...
start "myRacing 后端" "%~dp005-后端服务\_run.bat"

timeout /t 2 /nobreak >nul

echo [2/2] 启动前端应用 (端口 5173)...
start "myRacing 前端" "%~dp006-前端应用\_run.bat"

timeout /t 5 /nobreak >nul

echo.
echo ================================
echo   启动完成！正在打开浏览器...
echo ================================
start http://localhost:5173

echo.
echo 关闭此窗口不会停止服务。
echo 如需停止，运行 停止.bat 或关闭弹出的两个窗口。
timeout /t 5 /nobreak >nul
