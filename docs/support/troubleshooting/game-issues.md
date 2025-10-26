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

Of course. Integrating `ping -t` and `tracert` is an excellent way to provide users with tangible proof of the network problem and the VPN solution. Here is the revised guide with new sections added.

***

## How can I fix lag and disconnection issues?

**For players in South America:**
The most reliable solution is to use a VPN to bypass a known damaged internet backbone between South America and the game's servers.

*   **Use a VPN:** Connect to a **New York, USA** server, as this is the location officially recommended by GMs to avoid the broken route. Many VPNs offer free trials. (Close game before switching VPN)
*   **Alternative Locations:** If New York doesn't work, try other US cities like Miami or Washington, European server or other VPNs.

**Why is this happening?**

The root cause for SA players is a damaged physical internet cable (internet backbone) between South America and the game's data centers.

This is a large-scale infrastructure issue outside the game staff's control. Using a VPN creates a new, stable "tunnel" for your data, bypassing this broken route. You can visualize these internet paths using the [ITU Infrastructure Connectivity Map](https://bbmaps.itu.int/bbmaps/).


### **How to Diagnose the Problem with `ping -t` and `tracert`**

[![netguide.png](https://i.postimg.cc/65jB2MgX/netguide.png)](https://postimg.cc/nCDyNGnR)

You can see the route problem for yourself using Windows Command Prompt tools. This helps confirm that a VPN is necessary.

**Step 1: Find the Game Server IP Address**

1.  Open the **Resource Monitor** (you can search for it in the Start Menu).
2.  Go to the **Network** tab.
3.  In the "TCP Connections" section, look for your game's process (e.g., `Discord.exe` in the example, but look for your game's .exe).
4.  Note the **Remote Address** 

**Step 2: Run a Continuous Ping (`ping -t`)**

1.  Open Command Prompt as Administrator.
2.  Type `ping -t [Server IP]` (for example, `ping -t 878.222.767`). The `-t` makes it run continuously.
3.  Let it run for 30-60 seconds, then press **Ctrl+C** to stop it.
4.  **Interpret the results:**
    *   **Good Connection:** Consistent, low latency (e.g., 20-80ms) with no "Request timed out" messages.
    *   **Bad Connection/Damaged Route:** You will see high latency (e.g., 200ms+), "Request timed out" messages, or high "Packet loss" percentage. This confirms packet loss is happening.

**Step 3: Trace the Route (`tracert`)**

This shows you *where* on the path the problem occurs.

1.  In Command Prompt, type `tracert [Server IP]` (for example, `tracert 878.222.767`).
2.  The command will list every "hop" (router) your data takes to the server.
3.  **Interpret the results:** Look for a hop where the latency suddenly jumps very high (e.g., from 40ms to 300ms) or starts showing asterisks `* * *` (meaning timeouts). The hops *after* this point will also have high latency.
    *   **This is the damaged backbone.** It's often a hop in a major US network hub that is the common failure point for SA players.

**The Proof:**

1.  Run `tracert` and `ping -t` without the VPN and note the high latency/packet loss.
2.  Connect to your New York VPN.
3.  Run the same `ping -t` command to the same game server IP.
4.  You will likely see the latency drop significantly and the packet loss disappear, proving the VPN is providing a better route.

### **General Troubleshooting:**

*   **Try other Proxies:** Go to the Login Menu and select another Proxy.
*   **Reset Connections:** Fully close the game client and restart your router and PC.
*   **Network Fixes:** Flush your DNS (`ipconfig /flushdns` in Admin Command Prompt) and change your DNS servers to `1.1.1.1` / `1.0.0.1` (Cloudflare) or `8.8.8.8` / `8.8.4.4` (Google).
*   **Firewall:** Set exclusions for the game's main files (e.g., the Reborn client) in your firewall.

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

**Power-cycle your Modem/Router/Switch** and **PC**. If that doesn't work: **Delete the System folder** & do **Client Repair**.

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

