---
icon: material/clock-time-one-outline
---

<style>

.period-widget {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1rem;
  margin: 1.5rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.period-header h3 {
  color: var(--md-primary-fg-color);
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.25em;
  font-weight: bold !important;
}

.period-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.period-row {
  display: flex;
  align-items: baseline;
}

.period-label {
  font-weight: 600;
  min-width: 120px;
  color: #ddd;
}

.period-indicator {
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 4px;
}

.period-indicator.reward {
  color: #4CAF50;
  background: rgba(76, 175, 80, 0.1);
}

.period-indicator.register {
  color: #49a3dc;
  background: rgba(73, 163, 220, 0.1);
}

.period-description {
  font-weight: bold;
  color: #eee;
  flex-grow: 1;
}

.current-utctime {
  font-weight: bold;
  color: #eee;
}

.events-widget {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1rem;
  margin: 1.5rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.events-title {
  color: var(--md-primary-fg-color);
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  font-weight: bold !important;
}

.events-title::before {
  margin-right: 0.5rem;
}

.events-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}

.event-item {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  margin: 10px 0 !important;
}

.event-item:last-child {
  border-bottom: none;
}

.event-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 12px;
  font-size: 14px;
  flex-shrink: 0;
}

.event-name {
  font-weight: 600;
  min-width: 60px;
  margin-right: 1rem;
  color: white;
}

.event-time {
  color: #aaa;
  flex-grow: 1;
  text-align: right;
  font-size: 0.9em;
}

.event-time.active {
  color: #4CAF50;
  font-weight: bold;
}

.event-blink {
  margin-left: 8px;
  animation: blink 1s infinite;
}

.events-footer {
  color: #666;
  font-size: 0.8em;
  text-align: right;
}

@keyframes blink {
  50% { opacity: 0.5; }
}

.event-tvt .event-icon { background: #FF5722; }
.event-ctf .event-icon { background: #4CAF50; }
.event-dm .event-icon { background: #2196F3; }

.server-timer {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1rem;
  margin: 1.5rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-left: auto;
}

.countdown-timer {
  font-weight: bold;
  color: #ff9800;
  margin-left: auto;
}

.opening-time {
  font-weight: bold;
  color: #eee;
  margin-left: auto;
}
</style>

## Quick Links

<figure markdown="span">
  [Features Info](https://l2reborn.org/eternal-interlude/full-description/){ .md-button .lightbox }
  [Reborn Guide](https://l2reborn.org/news/adventure-guide/){ .md-button .lightbox }
  [PvP Video](https://www.youtube.com/watch?v=3xNf4zb5Jms){ .md-button .lightbox }
  [Reborn News](https://l2reborn.org/latest-news/){ .md-button .lightbox }
</figure>

## Time Tables

<div class="server-timer">
  <div class="period-header">
    <h3>Server Countdown</h3>
  </div>
  <div class="period-content">
    <div class="period-row">
      <span class="period-label">Opening Time:</span>
      <span class="opening-time">July 18th at 18:00 UTC</span>
    </div>
    <div class="period-row">
      <span class="period-label">Time Remaining:</span>
      <span class="countdown-timer main-countdown"></span>
    </div>
    <div class="period-header">
      <h3>OBT Opening</h3>
    </div>
        <div class="period-row">
      <span class="period-label">OBT Start:</span>
      <span class="opening-time">July 11th at 18:00 UTC</span>
    </div>
    <div class="period-row">
      <span class="period-label">Time Remaining:</span>
      <span class="countdown-timer beta-test-countdown"></span>
    </div>
      <div class="period-header">
        <h3>OBT Event Day</h3>
      </div>
        <div class="period-row">
      <span class="period-label">OBT Event Date:</span>
      <span class="opening-time">July 13th (Sunday)</span>
    </div>
    <div class="period-row">
      <span class="period-label">Starts In:</span>
      <span class="countdown-timer beta-event-countdown"></span>
    </div>
  </div>
</div>

<div class="events-widget">
    <h3 class="events-title">Event Schedules</h3>
    <ul class="events-list">
    </ul>
</div>

<div class="period-widget">
    <div class="period-header">
        <h3>Seven Signs Status</h3>
    </div>
    <div class="period-content">
        <div class="period-row">
        <span class="period-label">Current Status:</span>
        <span class="period-indicator"></span>
        </div>
        <div class="period-row">
        <span class="period-label">Description:</span>
        <span class="period-description"></span>
        </div>
        <div class="period-row">
        <span class="period-label">UTC Time:</span>
        <span class="current-utctime"></span>
        </div>
    </div>
</div>

## Commands

<style>

  
.md-typeset .command-section {
  margin: 2rem 0;
}

.md-typeset h2.command-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 2.5rem 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--md-primary-fg-color);
  color: var(--md-primary-fg-color);
}

.md-typeset .command-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.md-typeset .command-card {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  padding: 1.25rem;
  border-left: 4px solid var(--md-accent-fg-color);
  transition: transform 0.2s;
}

.md-typeset .command-card:hover {
  transform: translateY(-3px);
}

.md-typeset .command-card h3 {
  font-weight: bold;
  margin: 0 0 0.5rem 0;
  font-size: 1.1em;
  display: flex;
  align-items: center;
}

.md-typeset .command-card h3 code {
  background-color: transparent;
  color: inherit;
  font-size: 1em;
  padding: 0;
}

.md-typeset .command-card h3::before {
  content: "$";
  color: var(--md-accent-fg-color);
  margin-right: 0.5rem;
  font-weight: bold;
}

.md-typeset .command-desc {
  margin: 0;
  font-size: 0.9em;
}

.md-typeset .command-category {
  font-size: 0.8em;
  margin-top: 0.5rem;
  color: var(--md-typeset-a-color);
  font-style: italic;
}

.warning-note {
  color: #ff6e42;
  font-weight: 500;
  font-size: 0.85em;
  margin-top: 0.5rem;
}
</style>

Most commands are also available in **ALT + B**{style="color:fuchsia;"}, but you can take a look here.

<div class="grid cards" markdown>

- ### .cfg

    Opens advanced game settings menu

- ### .exp

    Toggle experience gain on/off

</div>


## :material-gamepad: Performance Commands

<div class="grid cards" markdown>

- ### .aoe

    Toggle AOE skill animations

- ### .shots

    Toggle projectile animations

- ### .fastload

    Toggle faster character loading

</div>

## :material-shield: Security & UI

<div class="grid cards" markdown>

- ### .lock/.unlock

    Toggle trade/combat restrictions

- ### .castbar

    Toggle skill cast bar visibility

- ### .chances

    Show debuff success rates

</div>

## :material-tshirt-crew: Cosmetic Commands

<div class="grid cards" markdown>

- ### .suits

    Toggle suit cosmetics

- ### .agats

    Toggle agathion effects

- ### .cloaks

    Toggle cloak visibility

- ### .trycosmetic

    Preview shop cosmetics

</div>

## :material-heart-remove: Buff Management
<div class="grid cards" markdown>

- ### alt+click

    Remove buffs from your character

</div>


<hr class="divider" >


<figure markdown="span">
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1222530409&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-299123333" title="DistritoMMO" target="_blank" style="color: #cccccc; text-decoration: none;">DistritoMMO</a> · <a href="https://soundcloud.com/user-299123333/sets/lineage-2" title="Lineage 2" target="_blank" style="color: #cccccc; text-decoration: none;">Lineage 2</a></div>

<br> <br>

    <a href="https://postimg.cc/nssvvRK0">
        ![Hero](https://i.postimg.cc/W48XcxdL/catsitting.gif){ .lightbox width=50% }
    </a> 

</figure>




<script src='../js/general.js'></script>
<script src='../js/event.js'></script>
<script src='../js/timer.js'></script>