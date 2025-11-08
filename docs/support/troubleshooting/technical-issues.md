---
icon: material/monitor-arrow-down
---

## Ultimate Fix Summary 
Try all steps, :white_check_mark: what you've tested, and share your results in [Discord](https://discord.com/invite/l2reborn) or [write a support ticket.](https://l2reborn.org/support/) :slight_smile: 

Please make sure that:

- [ ] You are using **Windows 10 or 11**.
- [ ] Game folders are not Read Only in Properties. (Right Click)
    - [ ] Trying reinstall/repair with mobile data or vpn.
- [ ] Your Windows copy is **legitimate** and **not run in a virtual environment**. **No debug/insider version**.
- [ ] [Windows Core Isolation is disabled](https://youtu.be/CkcZSELETlQ) ! (otherwise it gives Kernel Mode Trap and you can enable it back with time)
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
    - [Here's how to play League with L2](https://postimg.cc/9whF6rPR)
- [ ] Deleting your **system folder** and **repairing your files**.
- [ ] Doing full **re-install** by deleting the game folder.
- [ ] **Disabling all overlay extensions**: Discord, Overwolf etc..
- [ ] [Reinstalling .NET frameworks or Enable them](https://youtu.be/57HbrVq6Ej0?si=uUNFievc5M00opIf&t=105), click on drop down and tick the options below as well.
- [ ] Updating your Windows. (23H2 , 24H2 seems to work)




## Do Linux & MacOS operating systems work?
:material-close: **Does not work on Reborn servers** – SmartGuard (anti-cheat) only supports Windows 10/11.

:material-close: **M1/M2 Macs (Apple Silicon) are NOT supported.**

:material-check: Only works on **Intel-based Macs** with a Windows partition (via Boot Camp).

 

## Does Cloud Gaming work?
**No**, keyboard presses through streaming software don't work.



## Do virtual systems work?
**No**, SmartGuard (anti-cheat) prevents this.



## Does Steam Deck work?
[Yes, it does.](https://imgur.com/a/fl2vN55) You need to download Windows: [tutorial.](https://youtu.be/yBHzVSDVEqw?si=dX0EqR_q8-1_svqu)

Key remap softwares: [reWASD](https://www.rewasd.com/) or [SWICD](https://youtu.be/07sP60nivXE?si=i2xpPtBbf_f3wIC8)

Thanks for the video @royce6735 !



## Launcher doesn't load
- Upgrade your graphic drivers and restart your computer.
- If that does not work: **restart your router and computer.**
- You can also try running the game directly from system.

<figure markdown="span">
    <a href="https://postimg.cc/HcgP7hZ4">
    ![Launcher Buttons Not Loading](https://i.postimg.cc/LXYdGdj7/image-16.png){.lightbox width=50% }
    </a>
</figure>



## Discord Permissions Fix
If you can't see certain discord channels, assign yourself the Origins role.

<figure markdown="span">
    <a href="https://postimg.cc/62R2Mtqj">
    ![Video](https://i.postimg.cc/bJVxNvhh/discordperms.gif){.lightbox width=40% }
    </a>
</figure>



## Missing Account on Website
Make sure that you are not on the correct Master Account.

- If you are: **Exit the Account** and **clear the cookies** and **refresh**.



## Setup / Windows Installer Fail

[Reinstall .NET frameworks](https://youtu.be/57HbrVq6Ej0?si=uUNFievc5M00opIf&t=105), or enable them in `Turn Windows features on or off`.

<figure markdown="span">
    <a href="https://postimg.cc/mPsVKt4C">
    ![Setup Fail Image](https://i.postimg.cc/jSW9w7kg/setup-fail.png){.lightbox width=60% }
    </a>
</figure>



## How to play Riot's games?
<figure>
<blockquote class="imgur-embed-pub" lang="en" data-id="gRNgSl3" data-context="false" ><a href="//imgur.com/gRNgSl3"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
</figure>


## VPN Recommendation

[Cloudflare Warp](https://one.one.one.one/)




## Invalid SafeAuth

Save `l2reborn_easylogin.ini` file to Desktop, it contains your passwords.

- Put it back in System folder after the install is done and don't share that file. **Ever.**

**Save l2reborn_easylogin.ini to Desktop, Delete your System folder** and do **Repair**.

<figure markdown="span">
    <a href="https://postimg.cc/Pvn93fv5">
    ![Safe Auth](https://i.postimg.cc/cCvWJrsw/invalidsafe.png){.lightbox  }
    </a>
</figure>



## Client Red Error
Close Updater, delete that file that has problem, re-launch Updater.

<figure markdown="span">
    <a href="https://postimg.cc/wyb04cd4">
    ![Client Red Error](https://i.postimg.cc/qqpSRjDr/image.png){.lightbox width=40% }
    </a>
</figure>



## 0301 CDEF0007
1. Method 1: Uninstall the Latest Update (for Minor Updates)

2. Open Settings → Press Win + I

3. Go to Update & Security → Windows Update

4. Click View update history

5. Select Uninstall updates

6. Find the most recent update, select it, and click Uninstall

7. Restart your computer

<figure markdown="span">
    <a href="https://postimg.cc/gJpvGmvJ">
    ![Image](https://i.postimg.cc/gJpvGmvJ/image3.png){.lightbox width=70% }
    </a>
</figure>

Credit: @mefox_ @abeisede 



## 0301 CDEF0002
Make sure you have Windows 10/11 and no '[Insider Mode](https://www.microsoft.com/en-us/windowsinsider/leave-program)' or other Beta/[Debug](https://youtu.be/RwwULJe8QNE?si=Hp1c4G2bY8RwDGu-) features enabled.
[Might require fresh Windows install with formatting PC.](https://youtu.be/OtHZueEZe9s?si=g9VtoAPseIRzo-S1&t=101)


<figure markdown="span">
<a href="https://postimg.cc/BtLbQvcy">
![Smartguard error 002](https://i.postimg.cc/KcQMfkKZ/1uweBrL.png){.lightbox width=60%  }
</a>
</figure>


## 0301 0000135 / 0xc0000135

- [ ] Download and Run: [All in One VC Redistributables](https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/) (This solution fixes it most of the time)
- [ ] Latest Windows 11 version might not be supported by SmartGuard, wait ~3 days for SmartGuard to catch up or [revert the update.](https://support.microsoft.com/en-us/windows/how-to-uninstall-a-windows-update-c77b8f9b-e4dc-4e9f-a803-fdec12e59fb0#ID0EBF=Windows_11)
- [ ] Please make sure that you are not missing a file.



## 0301 CDEF001
Disable system's debug mode: [here](https://smart-guard.eu/en/support/game-client/debugger-detected)



## 0301 000001B1

Try everything from [here](#ultimate-fix-summary)



## 0xc000041d
Anti-virus is blocking Smartguard

Uninstall the anti-virus (AVG, ESET ...) or add L2Reborn/Smartguard files/folders as Anti-virus Exceptions.
Antiviruses can disregard exceptions, uninstalling is recommended. 

This [forum post](https://windowsforum.com/threads/windows-10-application-0xc000041d-unable-to-start.336723/#post-838615) might help too.

<figure markdown="span">
<a href="https://postimg.cc/FYJDbdMc">
![Smartguard error 41d](https://i.postimg.cc/sgTqr5Kn/antivirus.png){.lightbox width=50%  }
</a>
</figure>



## 0xC0000005 / 0401 00000005
Restart your computer and/or save l2reborn_easylogin.ini, delete `/system/` folder and run **Repair** in the Launcher.
<figure markdown="span">
<a href="https://postimg.cc/GHTQmBFB">
![Smartguard error 05](https://i.postimg.cc/tC2mDW7z/05.png){.lightbox width=90%  }
</a>
</figure>


## 0301 CDEF000 / 0301 C000007B

[Turn Core Isolation off](https://discord.com/channels/622089207028121602/1307133204854997032/1318727734398156810) and restart your PC. 

<figure markdown="span">
<a href="https://postimg.cc/rDVbVD22">
![Smartguard error 000](https://i.postimg.cc/DwLKcGC0/coreisolat.png){.lightbox width=60%  }
</a>
</figure>



## 0301 0000041D
It seems like this error comes from new AMI BIOS + Driver updates, roll them back.



## SmartGuard stuck loading
Reboot your PC and Router.

- Temporary fix: Use a [VPN](#vpn-recommendation) or Mobile Data to connect. 

<figure markdown="span">
<a href="https://postimg.cc/BbgXQYD1/">
![SmartGuard stuck](https://i.postimg.cc/BbgXQYD1/stucksmartguard.png){.lightbox width=40% }
</a>
</figure>



## I tried everything from above 

If you are still having issues after [Ultimate Fix Summary](#ultimate-fix-summary) and the above posts, check out this [page](https://smart-guard.eu/ru/support/game-client), let us know in the Discord or [write a support ticket.](https://l2reborn.org/support/).




