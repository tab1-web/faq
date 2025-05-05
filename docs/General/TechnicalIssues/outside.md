---
icon: material/monitor-arrow-down
---

## General

### Ultimate Fix Summary 
:white_check_mark:  Try all steps, check off what you've tested, and share your results in [Discord](https://discord.com/invite/l2reborn) if the issue continues :slight_smile:

Please make sure that:

- [ ] You are using **Windows 10 or 11**.
- [ ] Your Windows copy is **legitimate** and **not run in a virtual environment**. **No debug/insider version**.
- [ ] **Reborn files (l2.exe)** and **folders** are added as **exceptions/exclusions** in your [antivirus](https://youtu.be/1r93NtwZt4o) and [firewall settings](https://youtu.be/zijsJZionv0). 
- [ ] ESET/BitDefender/Kaspersky/McAfee/Malwarebytes/Avast/AVG anti-viruses
    - **Don't care about your settings, uninstall them to run L2**.
- [ ] If you’re using a touchpad, note that it may be blocked; please use a mouse instead.
- [ ] If you get stuck at the proxy selection screen, **go back into the login menu again** and **select another proxy.**
- [ ] Ensure you have the [latest Visual C++ Redistributable for x86](https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/) installed.
- [ ] Your **drivers** are **up-to-date**.
- [ ] You are logging in with your in-game account's username **(e.g. le_lenny13)** and not your Master Account's email.

Additionally try:

- [ ] Restarting your **router**
- [ ] Restarting your **computer**
- [ ] Disabling **Riot's Vanguard**, and **other anti-cheats**.
    - [Here's how to play League with L2](#how-to-play-riots-games)
- [ ] Deleting your **system folder** and **repairing your files**.
- [ ] **Disabling all overlay extensions**: Discord, Overwolf etc..


<hr>

### Do Linux & MacOS operating systems work?
:material-close: **Does not work on Reborn servers** – SmartGuard (anti-cheat) only supports Windows 10/11.

:material-close: **M1/M2 Macs (Apple Silicon) are NOT supported.**

:material-check: Only works on **Intel-based Macs** with a Windows partition (via Boot Camp).

<hr>

### Does Cloud Gaming work?
**No**, keyboard presses through streaming software don't work.

<hr>

### Do virtual systems work?
**No**, SmartGuard (anti-cheat) prevents this.

<hr>

### Does Steam Deck work?
[Yes, it does.](https://imgur.com/a/fl2vN55) You need to download Windows: [tutorial.](https://youtu.be/yBHzVSDVEqw?si=dX0EqR_q8-1_svqu)

Key remap softwares: [reWASD](https://www.rewasd.com/) or [SWICD](https://youtu.be/07sP60nivXE?si=i2xpPtBbf_f3wIC8)

Thanks for the video @royce6735 !

<hr>

### Launcher doesn't load
- Upgrade your graphic drivers and restart your computer.
- If that does not work: **restart your router and computer.**

<figure markdown="span">
    <a href="https://postimg.cc/HcgP7hZ4">
    ![Launcher Buttons Not Loading](https://i.postimg.cc/LXYdGdj7/image-16.png){.lightbox width=40% }
    </a>
</figure>

<hr>

### Discord Permissions Fix
If you can't see certain discord channels, assign yourself the Origins role.

<figure markdown="span">
    <a href="https://postimg.cc/62R2Mtqj">
    ![Video](https://i.postimg.cc/bJVxNvhh/discordperms.gif){.lightbox width=40% }
    </a>
</figure>

<hr>

### Missing Account on Website
Make sure that you are not on the correct Master Account.

- If you are: **Exit the Account** and **clear the cookies** and **refresh**.

<hr>

### How to play Riot's games?
1. Open L2.
2. Open Riot Launcher.
3. Exit Vanguard
4. Click Start on Riot Launcher.

<hr>

## SmartGuard fixes

### Invalid SafeAuth

Save `l2reborn_easylogin.ini` file to Desktop, it contains your passwords.

**Delete your System folder** and do **Repair**.

<hr>

### Client Red Error
Close Updater, delete that file that has problem, re-launch Updater.

<figure markdown="span">
    <a href="https://postimg.cc/wyb04cd4">
    ![Client Red Error](https://i.postimg.cc/qqpSRjDr/image.png){.lightbox width=40% }
    </a>
</figure>

<hr>

### 0301 CDEF0007
1. Method 1: Uninstall the Latest Update (for Minor Updates)

2. Open Settings → Press Win + I

3. Go to Update & Security → Windows Update

4. Click View update history

5. Select Uninstall updates

6. Find the most recent update, select it, and click Uninstall

7. Restart your computer

<figure markdown="span">
    <a href="https://postimg.cc/gJpvGmvJ">
    ![Image](https://i.postimg.cc/gJpvGmvJ/image3.png){.lightbox width=50% }
    </a>
</figure>

Credit: @mefox_ @abeisede 

<hr>

### 0301 CDEF0002
Make sure you have Windows 10/11 and no '[Insider Mode](https://www.microsoft.com/en-us/windowsinsider/leave-program)' or other Beta/[Debug](https://youtu.be/RwwULJe8QNE?si=Hp1c4G2bY8RwDGu-) features enabled.

<hr>

### 0301 0000135

- [ ] Download and Run: [All in One VC Redistributables](https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/)
- [ ] Latest Windows 11 version might not be supported by SmartGuard, wait ~3 days for SmartGuard to catch up or [revert the update.](https://support.microsoft.com/en-us/windows/how-to-uninstall-a-windows-update-c77b8f9b-e4dc-4e9f-a803-fdec12e59fb0#ID0EBF=Windows_11)
- [ ] You are not missing a file.

<hr>

### 0xC0000005
Restart your computer.

<hr>

### 0301 CDEF000 

[Turn Core Isolation off](https://discord.com/channels/622089207028121602/1307133204854997032/1318727734398156810)

<hr>

### 0301 CDEF002
Make sure you have Windows 10/11 and no 'Insider Mode' or other Beta/Debug features enabled.

[Might require fresh Windows install with formatting PC.](https://youtu.be/OtHZueEZe9s?si=g9VtoAPseIRzo-S1&t=101)

<hr>

### SmartGuard stuck loading
Reboot your PC and Router.

- Temporary fix: Use a [VPN](#) to connect. 

<figure markdown="span">
<a href="https://postimg.cc/BbgXQYD1/">
![SmartGuard stuck](https://i.postimg.cc/BbgXQYD1/stucksmartguard.png){.lightbox width=40% }
</a>
</figure>

<hr>


