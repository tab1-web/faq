---
icon: fontawesome/solid/gamepad
---

## Maximum Characters Reached
- Login with the **last character** you logged.
    - So if you were on Account A and wish to log Account B, you must first log-in with Account A.
    - If you don't have 2 accounts, try unstuck your character from the [Webpanel > Overview](https://l2reborn.org/game-account/), your character is still in-game.
    - I fixed it one time for my friend by logging his character. 

<div class="grid cards" markdown>
<figure markdown="1">
<a href="https://postimg.cc/S2yWJtST">
![LoginGIF](https://i.postimg.cc/85vwXqqS/loginwithlast.gif){ width=90% .lightbox }
</a>
<figcaption>Video</figcaption>
</figure>



<figure markdown="1">
<a href="https://postimg.cc/zbBFxPsL">
![MaxCharPNG](https://i.postimg.cc/LXkQ6cvV/maxchar.png){ .lightbox }
</a> 
<figcaption>Error Message</figcaption>
</figure>
</div>



## Server Selection Stuck

**Try another proxy** by **going into login menu again**, and connect to another proxy.
<figure markdown="1">
<a href="https://postimg.cc/Jt8TXM4n">
![Server Selection Stuck GIF](https://i.postimg.cc/xjJBW1wK/proxystuck.gif){ width=60% .lightbox }
</a>
</figure>


## Camera Sensitivity

Fine-tune your DPI in your mouse software.



## Tree Flickering
Put shader to `off` and reflections to sky instead of all.
Thanks @Csilk 



## Unresponsive Buttons Fix
This solution fixes the buttons not working for Monster Data / Spoil / Reborn Store etc..

Delete `windowsinfo.ini` and `option.ini` and **repair**.

They're found in: `\Reborn\games\signature\system\`
<figure markdown="1">
<a href="https://postimg.cc/yD7dg1Qs">
![Buttons Fix Video](https://i.postimg.cc/2SZBt3nb/13Jl6Qc.gif){ width=50% .lightbox }
</a>
</figure>


## Small Texts and Buttons on 4k Monitor

### 1st option
Enter fullscreen mode, and lower resolution.

### 2nd option
You will have to download and extract [NirCMD](https://www.nirsoft.net/utils/nircmd.zip).

Make sure to adjust the path of your executable and path to **nircmd.exe** in the notepad. Save it as `.bat file` and run it.

[**Copy paste the example .bat file**](https://pastebin.com/raw/TgFE05vg)


## Event Code 10/5 or 39/1
This happens when there is either an interruption in your connection and/or an interruption to the SmartGuard service.

Add **Reborn files (l2.exe)** and **folders** are added as **exceptions/exclusions** in your [antivirus](https://youtu.be/1r93NtwZt4o) and [firewall settings](https://youtu.be/zijsJZionv0). 

**Power-cycle your Modem/Router/Switch**. If that doesn't work: **Delete the System folder** & do **Client Repair**.

<figure markdown="span">
<a href="https://postimg.cc/14YQqDPB">
![Smartguard error 05](https://i.postimg.cc/5NfNDmRh/105.png){.lightbox width=90%  }
</a>
</figure>

## Critical Error on Server Selection

1. Your game is outdated → **Run the "Repair" option** in your game launcher.
2. Server is slow to update → If others on Discord report the same issue, wait for the GMs to fix it.

### Still having Trouble?
- Check the Discord for updates.
- If only you are affected, repairing the client should help!

<div class="grid cards" markdown>
- <figure markdown="span">
    [![crit-error-server-select.png](https://i.postimg.cc/wjrBdqSm/crit-error-server-select.png){ .lightbox }](https://postimg.cc/PCmHWjfX)
    </figure>

- <figure markdown="span">
    [![updateclient.png](https://i.postimg.cc/6Qjk5Y0y/updateclient.png){ .lightbox }](https://postimg.cc/cK39F7PS)
    <figcaption>Repairing the Game</figcaption>
    </figure>
</div>


## smrt64.exe Error
Restart your PC. `Error at hooking API ...`
<figure markdown="span">
<a href="https://postimg.cc/CB7drC4k">
![Smartguard error 10/5](https://i.postimg.cc/L5KfXNYC/dump.png){.lightbox width=80%  }
</a>
</figure>

