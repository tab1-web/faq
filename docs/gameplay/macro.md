---
icon: material/pen
---

# Macros System

## Overview

Access your macros by pressing the **R** key. Macros enable you to create and execute predefined sequences of actions.

!!! warning
    Do not automate the macros with coins/physical objects or other software, [it can lead to a ban](../support/rules.md#1-botting).

**Supported Content:**

- All slash (`/`) commands
- All chat symbols and commands

## Substitutions by name

<figure markdown>

| Variable       | Description                          |
|-|--|
| `%target`      | Displays name of current target      |
| `%self`        | Displays your character's name       |
| `%pet`         | Displays your pet's name             |
| `%party1`-`%party8` | Displays party member names (slots 1-8) |

</figure>

## Macro Commands

### **Delay Command:**

`/delay [time_in_seconds]`

- Pauses macro execution for specified duration
- Example: `/delay 2` waits 2 seconds

### **Character Actions:**

- `/sit` - Sit down
- `/stand` - Stand up  
- `/sitstand` - Toggle sitting/standing

*Tip:* Drag action icons directly into the macro editor instead of typing commands.

## Channel Prefixes

<figure markdown="span" markdown>
<div class="grid cards" markdown>
- | Prefix | Channel       |
        |--||
        | `#`    | Party chat    |
        | `@`    | Clan chat     |
        | `$`    | Alliance chat |
        | `!`    | Area chat     |
        | `+`    | Buy/Sell chat <br> (not really used on Reborn) |

    <figcaption>Example: !WTS Arcana Mace 250m</figcaption>

- <figure markdown="span">
            <a href="https://postimg.cc/XZzyMJ5K">
            ![Macro](https://i.postimg.cc/W32mkqby/macro.jpg){ .lightbox }
            </a>
            <figcaption>Macro Menu using `%self` substitution</figcaption>
        </figure>

</figure>

## Shortcut Commands

### **Regular Shortcut:**

`/useshortcut [container] [slot]`

- Example: `/useshortcut 1 3` uses slot 3 in container 1



### **Forced Shortcut:**

`/useshortcutforce [container] [slot]`

- Equivalent to Ctrl+Click on the shortcut



## Skill Commands

### **Regular Skill Use:**

`/useskill [skillName]`

- Example: `/useskill Windstrike`



### **Forced Skill Use:**

`/useskillforce [skillName]`

- Equivalent to Ctrl+Click on the skill




