---
icon: material/message
---


# Colorful Messages

## Video Tutorial

<figure markdown>

[![Video](https://i.postimg.cc/hGqy179r/undefined-Imgur-1.gif)](https://postimg.cc/v43tQT2g)

</figure>

### For Eternal Server

Got the OK from the boss himself to share my system message I made for **Eternal**{style="color:red;"}.

0. Exit the Game
1. Download it [here.](https://discord.com/channels/622089207028121602/1496663249418981396/1496663249418981396)
2. Drag it to `system-eu` folder and over-write existing `SystemMsg_Classic-eu.dat` file.

Keep in mind this is only for **Eternal**, thank you!

<figure markdown>
[![image.png](https://i.postimg.cc/rs98MDg2/image.png)](https://postimg.cc/64ysh5DM)
<figcaption>Preview of Eternal System Message</figcaption>
</figure>


## Colorful Chat Previews

<figure markdown>

[![system-message.png](https://i.postimg.cc/d16xZHKh/system-message.png)](https://postimg.cc/R63RjThm)

Thanks **@Ascy**{style="color:red;"} for the image and **@Greatsky**{style="color:white;"} for the CN addition!

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
echo  6 - Ascy
echo.
echo  7 - Exit
echo.
set /p choice="Enter your choice (1-7): "

if "%choice%"=="1" set "mod_name=volix" & goto install
if "%choice%"=="2" set "mod_name=Xihpiro" & goto install
if "%choice%"=="3" set "mod_name=sepheriod" & goto install
if "%choice%"=="4" set "mod_name=Pharah" & goto install
if "%choice%"=="5" set "mod_name=johanmelv0gue" & goto install
if "%choice%"=="6" set "mod_name=Ascy" & goto install
if "%choice%"=="7" exit /b

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
