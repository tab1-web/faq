---
icon: material/message
---


# Colorful Messages

## Video Tutorial

<figure markdown>

[![Video](https://i.postimg.cc/hGqy179r/undefined-Imgur-1.gif)](https://postimg.cc/v43tQT2g)

</figure>

## Colorful Chat Previews

<figure markdown>

[![Previews](https://i.postimg.cc/g234jkf6/Y1-Vr-PZK-Imgur.png)](https://postimg.cc/RWVwb9CM)

</figure>

## Script for Applying Custom Messages

<figure markdown>

Save it as a `.bat` file, close the game, edit paths if needed and run it.

Thanks **@Evan**{style="color:red;"} for the suggestion

</figure>
    
```bash
@echo off
title Custom System Message Installer
cls

:: =============================================
:: USER CONFIGURATION - Edit these if needed
:: =============================================
set "game_folder=C:\Program Files (x86)\Reborn\games\signature"
set "lang_folder=\system\lang\e"
set "plugin_folder=\plugins"
:: =============================================

:menu
cls
echo  ------------------------------------------
echo    Custom System Message Installer
echo            Close the Game!
echo  ------------------------------------------
echo.
echo  Choose which message pack to install:
echo.
echo  1 - volix
echo  2 - Xihpiro
echo  3 - sepheriod
echo  4 - Pharah
echo  5 - johanmelv0gue
echo.
echo  6 - Exit
echo.
set /p choice="Enter your choice (1-6): "

if "%choice%"=="1" set "mod_name=volix" & goto install
if "%choice%"=="2" set "mod_name=Xihpiro" & goto install
if "%choice%"=="3" set "mod_name=sepheriod" & goto install
if "%choice%"=="4" set "mod_name=Pharah" & goto install
if "%choice%"=="5" set "mod_name=johanmelv0gue" & goto install
if "%choice%"=="6" exit /b

echo Invalid choice! Please try again.
timeout /t 2 >nul
goto menu

:install
cls
echo Installing %mod_name% system messages...
echo.

set "source=%game_folder%%plugin_folder%\custom_systemMsg_%mod_name%\SystemMsg-e.dat"
set "destination=%game_folder%%lang_folder%"

if not exist "%source%" (
    echo ERROR: Source file not found!
    echo %source%
    echo.
    pause
    goto menu
)

copy /Y "%source%" "%destination%"

if %errorlevel% equ 0 (
    echo File replaced successfully!
    echo %destination%\SystemMsg-e.dat
) else (
    echo ERROR: File copy failed!
)

echo.
timeout /t 3 >nul
goto menu
```
