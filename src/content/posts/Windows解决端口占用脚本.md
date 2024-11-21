---
title: Windows解决端口占用脚本
pubDate: 2024-11-21
categories: ['gpt']
description: 'Windows script to solve port occupation'
---

## Powershell

```
@echo off
echo =============================
echo   Kill Process Occupying Port
echo =============================

:: Prompt the user to enter the port number
set /p port=Enter the port number to free:

:: Find the process ID occupying the specified port
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :%port% ^| findstr LISTENING') do (
    set pid=%%a
)

:: Check if a process ID was found
if "%pid%"=="" (
    echo No process found using port %port%.
    pause
    exit /b
)

:: Notify the found process ID and ask for confirmation to kill it
echo Port %port% is being used by process ID %pid%.
set /p confirm=Do you want to kill this process? (Y/N):

if /i "%confirm%"=="Y" (
    :: Kill the process
    taskkill /PID %pid% /F
    echo Process has been terminated.
) else (
    echo Operation canceled.
)

pause
```
