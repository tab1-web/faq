---
icon: fontawesome/solid/gamepad
---

## Maximum Characters Reached

Login with the last character you logged.

**Eternal:**

- I fixed it one time for my friend by logging his character and using Maria to teleport.
- Daily Server Restart at 8 am UTC helps too.
- If issue persists, [open a ticket](https://l2reborn.org/support/).

> GMs in the past tried to kick the player, but that solution did not work.

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

## Nothing happens when I click on Character Create or Server Select and I use the laptop's mouse pad, how to fix it?

- If you take too long on server selection, you will need a fresh login to proceed.
- Use a desktop mouse instead, the laptop's mouse pad may be blocked. 

## Server Selection Stuck

**Try another proxy** by **going into login menu again**, and connect to another proxy.
<figure markdown="1">
<a href="https://postimg.cc/Jt8TXM4n">
![Server Selection Stuck GIF](https://i.postimg.cc/xjJBW1wK/proxystuck.gif){ width=60% .lightbox }
</a>
</figure>

Of course! Here is a more generalized version of the guide that focuses on the universal problem of damaged internet routes, making it applicable to players anywhere in the world.

***

## How to Fix Lag and Disconnection Issues: A General Guide

Experiencing lag, disconnections, or high ping is often not a problem with your own internet, but with the path your data takes to the game's servers. The internet is a vast network of interconnected physical cables and routers, and damage or congestion on any part of that path can cause issues.

**The most reliable solution for many is to use a VPN.** A VPN can create a new, more stable "tunnel" for your data, bypassing the broken or congested part of the internet.

### **The Quick Fix: Using a VPN**

*   **How it helps:** A VPN reroutes your connection through a different set of servers, avoiding the problematic network hop that is causing packet loss and high latency.
*   **What to do:**
    1.  Choose a reputable VPN provider (many offer free trials).
    2.  Connect to a VPN server that is geographically close to the game's data center. For example, if the game servers are in New York, connect to a New York VPN server.
    3.  If one location doesn't work, try another nearby city or country.
    4.  **Always fully close your game before connecting or disconnecting the VPN.**

### **How to Diagnose the Problem Yourself**

You can confirm that your connection issues are due to a bad internet route using built-in Windows tools. This helps you decide if a VPN is the right solution.

[![netguide.png](https://i.postimg.cc/65jB2MgX/netguide.png)](https://postimg.cc/nCDyNGnR)

**Step 1: Find the Game Server's IP Address**

1.  Open the **Resource Monitor** (search for it in the Start Menu).
2.  Go to the **Network** tab.
3.  In the "TCP Connections" section, look for your game's process (e.g., `YourGame.exe`).
4.  Note the **Remote Address** it's connected to. This is the game server's IP.

**Step 2: Run a Continuous Ping (`ping -t`)**

This test checks for packet loss and unstable latency.

1.  Open **Command Prompt** as Administrator.
2.  Type `ping -t [Server IP]` (e.g., `ping -t 123.456.789.123`). The `-t` flag makes it run until you stop it.
3.  Let it run for 30-60 seconds while you play or experience lag, then press **Ctrl+C** to stop it.
4.  **Interpret the results:**
    *   **Good Connection:** Consistent, low latency with no "Request timed out" messages.
    *   **Bad Connection:** You will see high latency, "Request timed out" messages, or a high "Packet loss" percentage at the end. This confirms the issue.

**Step 3: Trace the Route (`tracert`)**

This shows you the exact path your data takes and *where* the problem occurs.

1.  In Command Prompt, type `tracert [Server IP]`.
2.  The command lists every "hop" (router) between you and the server.
3.  **Interpret the results:** Look for a hop where the latency suddenly jumps very high (e.g., from 20ms to 250ms) or starts showing asterisks `* * *` (meaning timeouts).
    *   **This hop is the likely culprit.** The problem is with that specific router or network link, which is outside of your or the game developer's control.

**Proving the VPN Fix:**

1.  Run `tracert` and `ping -t` **without** the VPN and note the high latency/packet loss.
2.  Connect to your VPN.
3.  Run the same `ping -t` command again.
4.  If the VPN is working, you will see a significant drop in latency and the packet loss will disappear, proving it found a better route.

### **General Troubleshooting (Before Using a VPN)**

*   **Switch Proxies/Gateways:** If your game has the option, try selecting a different proxy or gateway from the login menu.
*   **Reset Your Network:** Fully close the game client and then restart your router and PC. This can clear up local routing issues.
*   **Flush Your DNS:** Open an Admin Command Prompt and type `ipconfig /flushdns`. This clears your local DNS cache.
*   **Change Your DNS:** Try using a public DNS service like Cloudflare (`1.1.1.1`, `1.0.0.1`) or Google (`8.8.8.8`, `8.8.4.4`). This can sometimes provide a more reliable path for domain lookups.
*   **Check Your Firewall:** Ensure your firewall or antivirus is not blocking the game. Add the game's main executable files to its exclusion list.

## Camera Sensitivity

Fine-tune your DPI in your mouse software and Windows' Mouse Setting.

## Tree Flickering
Put shader to `off` and reflections to sky instead of all.
Thanks @Csilk 



## Unresponsive Buttons Fix
This solution fixes the buttons not working for Monster Data / Spoil / Reborn Store etc..

Delete `windowsinfo.ini` and `option.ini` and **repair**.

They're found in: `\Reborn\games\signature\system\`

OR try make your l2 window really small and go full screen with alt+enter. 

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

**Power-cycle your Modem/Router/Switch** and **PC**. If that doesn't work: **Save l2reborn_easylogin.ini to Desktop, Delete the System folder** & do **Client Repair**.

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

