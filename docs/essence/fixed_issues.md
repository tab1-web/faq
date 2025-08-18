<style>
.vanitasss-gradient {
    --custom-gradient-color-1: #a9c9ff;
    --custom-gradient-color-2: #d8b4fe;
    --custom-gradient-color-3: #ffbbec;
    --custom-gradient-color-4: #ffc3a0;
    
    color: transparent;
    background: linear-gradient(
        90deg,
        var(--custom-gradient-color-1),
        var(--custom-gradient-color-2),
        var(--custom-gradient-color-3),
        var(--custom-gradient-color-4),
        var(--custom-gradient-color-1)
    );
    background-size: 300% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient-scroll 5s linear infinite;
    
    text-shadow: 
        0 0 8px rgba(169, 201, 255, 0.5),
        0 0 16px rgba(216, 180, 254, 0.4),
        0 0 24px rgba(255, 187, 236, 0.3);
}

@keyframes gradient-scroll {
    0% { background-position: 0% center; }
    100% { background-position: 100% center; }
}

h3 {
    color: inherit !important;
    border: none !important;
    font-size: inherit !important;
    font-weight: normal !important;
    margin: 0 !important;
    padding: 0 !important;
    display: inline !important;
}

.content h3::before {
    content: "";
    display: none;
}
</style>

Thank you <span class="vanitasss-gradient">@Vanitasss</span> for providing what has already been fixed during the OBT.
Everything on this list is **fixed**{style="color:#28a745;"}.

## Closed Issues Update 18/08/2025

- ### (FIXED) Shilien's Help ID: 88072 from SK's passive ID: 45372 is not using soulshot bonus damage
- ### (FIXED) Force Storm ID: 35 is missing 10% ignore defense
- ### (FIXED) Guardian XP Scroll ID: 94636 is currently a package that doesn't give any item
- ### (FIXED) [Bug]beleth ring +5/6 id 97074 does not proc a buff
- ### (FIXED) [Bug] Heal incorrect modifiers
- ### (FIXED) 88285 Over the Rainbow isn't cleansing 45443 Cacophony of War
- ### (FIXED) Heroic doll guaranteed compounding not adding up
- ### (FIXED) Doombringer PVE Bonus from Ancient Sword Mastery is not working as intended
- ### (FIXED+FAKE NEWS) Trickster - legendary archer master/ mental panic shot and legendary twin shot.
- ### (FIXED) SLH PvE damage bonus from Rapier Mastery has no effect (Balance 3.0)
- ### (FIXED) Dark Disruption removes werewolf form instead of werewolf form upgrade
- ### (FIXED) 1452 Weaver's Shield recovers no MP when skill effect ends
- ### (FIXED) 87972 Supernova does not hit second time when Flowing Tears Lv 2 is applied
- ### (FIXED) SWS/BD main attack skill isn't triggering aoe when one-shotting mobs
- ### (FIXED) 47427 Ultimate Legendary Twin Shot has no visual effects and particles
- ### (FIXED) Mystic freeze bubble doesn't cast on target
- ### (FIXED) Chain heal is healing more than intended
- ### (FIXED) Received Items of System Messages are shown in regular chat instead of system message window only
- ### (FIXED) New jewels are missing pity system
- ### (FIXED) Rush type skills are spammed in autohunt against mobs with hitbox larger than rush distance treshhold
- ### (FIXED) Aden soul crystal lvl 22 - Movement Speed
- ### (FIXED) Target behaviour for Advanced Cleanse
- ### (FIXED) 50522 Absolute Zero from Frost Lord Weapons does not reduce Spear resistance
- ### (FIXED) 87307 Assassination does not trigger 3rd attack
- ### (FIXED) Tricksters Deadly Shooter debuff Aim guidance has lower priority than Bow vulnerability ( Class balance made it weaker )
- ### (FIXED) 87307 Assassination does not leave a shadow after killing target
- ### (FIXED) [Bug] Eva's Templar's "Aqua Wave" not working during autohunting
- ### (FIXED) Combat power isn't considering anything other than equipment
- ### (FIXED) Critical Blow is not using soulshots
- ### (FIXED) Reviving after death ID: 45346 has fixed cooldown
- ### (FIXED) HP Recovery effect on buffs that increase Max HP % should work on starting Max HP instead of modified Max HP value
- ### (FIXED) Displayed pity progression shows incorrect values
- ### (FIXED) Servitor skills have no effect
- ### (FIXED) Protection shield trigger heals max HP % instead of max hp % from INCREASED HP of the shield trigger ( Thanks Vahrenir )
- ### (FIXED)Main quests being repeated
- ### (FIXED) Quests "Thwarting Dragon's plans" 1 to 5 and "Exploring Cruma tower 2nd Floor" 1 to 3 can be accepted again after teleporting
- ### (FIXED) Cruma quest(s) Edit: Exploring the cruma tower 3rd floor 1 2 3 - Can be accepted again after teleporting anywhere
- ### (FIXED) Buff thief ID: 45390  Soul Steal ID: 1440 and Soul Snatch ID: 47980 heal HP when they steal healing buffs


## Closed Issues - 09/08/2025

- ### (FIXED) Soul Mark ID: 47976 is using silence atk/resistance on land rate chance
- ### (FIXED) Tantar Crystals aren't dropped in the inventory
- ### (FIXED) Titled mobs in Tower of Insolence are missing all skills  making them significantly weaker than common mobs
- ### (FIXED) Titan's skills are unable to be buff stolen
- ### (FIXED) Buff thief ID: 45390  Soul Steal ID: 1440 and Soul Snatch ID: 47980 heal HP when they steal healing buffs
- ### (FIXED) Blazing beast ID: 47855 can be stolen and or cancelled
- ### (FIXED) Shining Claidheam ID: 87718 when enchanted doesn't seem to gain any area of effect range as stated in the description
- ### (FIXED) Multiple +10 item compounding failures results in one +0 item instead of one +10 item
- ### (FIXED) 88084 Assassination buff from 87307 Assassination skill adds incorrect stat
- ### (FIXED) OBT Compounding chances
- ### (FIXED) Class Change from Warg returns incorrect number of spellbooks
- ### (FIXED) Class change: Grand Khavatari - incorrect skill book refund.
- ### (FIXED) [Bug] Greater upgrade stone/sealed/time limited-sealed
- ### (FIXED) Immortality Weapon blessing does not grant bonus attribute attack
- ### (FIXED) Divine Templar cannot heal himself without target.
- ### (FIXED) Protection Helmet Bless missing spear resistance
- ### (FIXED) Divine Templar healing skills cannot crit
- ### (FIXED) Roar of Death ID: 45328 doesn't heal 55% HP at level 5
- ### (FIXED) 93130 +7 Agathion Procella missing enchant option with 101531 Greater Upgrade Stone
- ### (FIXED) 93129 +7 Agathion Nebula missing enchant option with 101531 Greater Upgrade Stone
- ### (FIXED) 93128 +7 Agathion Ignis missing enchant option with 101531 Greater Upgrade Stone
- ### (FIXED) 93301 +7 Cloak of Protection missing enchant option with 101531 Greater Upgrade Stone
- ### (FIXED) 100547 +5/+6/+7 Heavenly Talisman missing enchant option with 101531 Greater Upgrade Stone
- ### (FIXED) 97559 +7 Blessed Talisman of Eva missing enchant option with 101531 Greater Upgrade Stone
- ### (FIXED) 92018 +7 Talisman of Eva missing enchant option with 101531 Greater Upgrade Stone
- ### (FIXED) 97558 +7 Blessed Talisman of Speed missing enchant option with 101531 Greater Upgrade Stone
- ### (FIXED) 92403 +7 Talisman of Speed missing enchant option with 101531 Greater Upgrade Stone
- ### (FIXED) 98610 +7 Blessed Talisman of Authority missing enchant option with 101531 Greater Upgrade Stone
- ### (FIXED) 91061 +7 Talisman of Aden missing enchant option with 101531 Greater Upgrade Stone
- ### (FIXED) 98709 +7 Blessed Talisman of Aden missing enchant option with 101531 Greater Upgrade Stone
- ### (FIXED) 91745 +7 Talisman of Aden missing enchant option with 101531 Greater Upgrade Stone
- ### (FIXED) 94621 +5/+6/+7 Blessed Dragon Belt missing enchant option with 101531 Greater Upgrade Stone
- ### (FIXED) 91862 +7 Dragon Belt missing enchant option with 101531 Greater Upgrade Stone
- ### (FIXED) 98205 +7 Blessed Circlet of Hero missing enchant option with 101531 Greater Upgrade Stone
- ### (FIXED) 98205 +6 Blessed Circlet of Hero has incorrect success chance to upgrade with 101531 Greater Upgrade Stone
- ### (FIXED) 94166 +7 Circlet of Hero missing enchant option with 101531 Greater Upgrade Stone
- ### (FIXED) 102673 +7 Blessed Phantom Mask missing enchant option with 101531 Greater Upgrade Stone
- ### (FIXED) 100545 +7 Phantom Mask missing enchant option with 101531 Greater Upgrade Stone
- ### (FIXED) 102672 +7 Blessed Piecing Mask missing enchant option with 101531 Greater Upgrade Stone
- ### (FIXED) 102672 +6 Blessed Piercing Mask has incorrect success chance to upgrade with 101531 Greater Upgrade Stone
- ### (FIXED) 97259 +7 Piecing Mask missing enchant option with 101531 Greater Upgrade Stone
- ### (FIXED) 45439 Cacophony of War: Master adds less than expected Knockback Atk. Rate
- ### (FIXED) Devastating Assault (88413) / Vortex of Claws has smaller aoe than in off.
- ### (FIXED) Daily Mission 'Hunt in Transcendent Instance Zones' does not count all mobs for progression
- ### (FIXED) 82293 Summon Elemental Unicorn does not give M. Skill Critical Rate +10%  Hold Atk. Rate +20%.
- ### (FIXED) 88285 Over the Rainbow: Master (ID: 88285) can be used without Elemental Unicorn summoned.
- ### (FIXED) 47912 Summon Elemental Cubic does not give 'Received damage from M. counterattack decrease +20%'.
- ### (FIXED) 98782 Gran Kain's Pendant should add red glow animation on character around the chest area
- ### (FIXED) 47491 Titanic Champion missing buff animation on character
- ### (FIXED) Fox pet skill 'Charm' spams buff on reuse

## Closed Issues - 05/08/2025

- ### (FIXED) 88034 Shillien's Curse - Dark Elves has no effect
- ### (FIXED) 88270 Elemental Resistance effect from 88284 Over the Rainbow adds incorrect amount of stat
- ### (FIXED) Guardian Vulcan: cannot learn skills 49086 Mace Smash  49090 Hammer Fall and 49087 Iron Age
- ### (FIXED) Multiple guardians cannot learn various skills
- ### (FIXED) [Bug] Summon get aoe damage
- ### (FIXED) Stun Gauntlets' swift fist ID: 50431 is not using soulshot bonus damage
- ### (FIXED) 88408 Imminent Piercing - stats of damaged armor pieces are still in effect until they are unequipped
- ### (FIXED) 88293 Summon Elemental Unicorn; Unicorn does nothing while player is using skills
- ### (FIXED) [Test] Amber land rate removal of opal not consistent with description?
- ### (FIXED) Mastery of Haste ID: 88115 seems to be giving more P.atk than intended
- ### (FIXED) Life force harmony level 2 is applied even at full health
- ### (FIXED) Purge keys can be used 40 times when it shows 1 key in initial purge window
- ### (FIXED) 87850 Divine Guardian is summoned but does not do anything while player   is using skills
- ### (FIXED) Vanilla Mass Enchant window
- ### (FIXED) Hidden power cannot be switched or upgraded
- ### (FIXED) 94119 Talisman of Baium adds incorrect values of M Skill Critical Rate stat
- ### (FIXED) 102817-102824 Sapphire should add % magic critical damage; instead it adds flat number
- ### (FIXED) [Bug] Devastating Assault Cooldown visual bug after leaving Wolf transform
- ### (FIXED) 88412 Upward Strike and 88413 Devastating Assault are not changing to their wolf version after transformation to Werewolf
- ### (FIXED) Autohunt is slow to change dead target to next
- ### (FIXED) Facelifting potions don't work on new faces/hairs for elf
- ### (FIXED) 50839-50843 Blessing of Immortality does not proc while using 97088 Sword of Immortality.
- ### (FIXED) Autohunt does not prioritise rush skills upon target change
- ### (FIXED) Missing Game Assistant option to exchange legacy Ancient Ruins Time Stones
- ### (FIXED) Fortune seeker's "Adena stun" custom buff shows on the wrong buff row
- ### (FIXED) 88408 Imminent Piercing  should not open inventory when item is damaged
- ### (FIXED) +5 Spirit agathion exchange coupon ID: 101335 in random craft is empty
- ### (FIXED) Blazing Strike ID: 45425 AND Burning strike ID: 45423 can fail to attack completely at a certain range
- ### (FIXED) Ferion's Necklace does not add -% skill cooldown
- ### (FIXED) Pattern upgrade window is non-responsive. Dye compounding doesn't show chance nor use pity system
- ### (FIXED) 88490 Tough Skin does not trigger ? Provocation Resistance
- ### (FIXED) Tranquility: Master ID: 88318 Has no visual effect of provocation resistance  failed to find it as a different ID
- ### (FIXED) Pagan temple Secret Hall ( lvl 2 ) teleports under water
- ### (FIXED) Inventory extra bags ID: 87925 isn't giving 49 slots as stated in description. Dragon Belt ID: 94621 is still incorrectly giving inventory bag slots
- ### (FIXED) 88113 Final Secret: Grand Khavatari cannot be enchanted with guaranteed skill enchantment coupons
- ### (FIXED) 88113 Final Secret: Grand Khavatari draining spellbook coupons for enchanting skill adds incorrect amount of skill exp
- ### (FIXED) 102807 through 102814 Emerald adds wrong Soulshot/Spiritshots damage stats
- ### (FIXED) 88059 Power of Lightning Lv 3 buff duration does not refresh when using 88010 Templar's Assault
- ### (FIXED) 88048 Power of Water Lv 3 buff duration does not refresh when using 88009 Templar's Assault
- ### (FIXED) 88012 Apocalypse should consume 88011 Condemnation: Master buff upon use
- ### (FIXED) System messages are not contained to system message window only
- ### (FIXED) 94086 Sea Boots proc buff Swift Evasion istead of Abyss Protection
- ### (FIXED) Class Change window has no effect
- ### (FIXED) OBT GM Shop missing new jewels from section Brooch
- ### (FIXED) 88313 Final Secret: Grand Khavatari cannot drain 97175 Enhanced Spellbook Coupon for skill enhancenment exp
- ### (FIXED) 88293 Summon Elemental Unicorn  summoned Elemental Unicorn is not immune to damage
- ### (FIXED) Challenge points can't be used on blessed phantom mask/piercing mask
- ### (FIXED) 100371 Ferion's Necklace cannot be equipped on pet
- ### (FIXED) Bug - Class change cupon
- ### (FIXED) Hidden Power did not transfer to OBT
- ### (FIXED) Embrace of Darkness +3 ID: 88304 attacks twice in PVP. Even when resisted the -%hp attack is triggering.
- ### (FIXED) Cardinal skills are always their dark side icon and description
- ### (FIXED) Chaos ID: 88300 and Chaos: Master ID: 88319 aren't randomly trying to apply one debuff
- ### (FIXED) Expand inventory skill ID: 1372 doesn't use High-grade inventory coupon ID: 92007 when learning it
- ### (FIXED) 45439 Cacophony of War reduces less Max HP than expected
- ### (FIXED) 45439 Cacophony of War attacked 19 targets  should attack up to 12 targets
- ### (FIXED) 45506 Blazing Strike debuff from skill 45425 Blazing Strike does removes less Speed than expected
- ### (FIXED) 88108 Jump Attack adds buff adds effect but no buff bar icon
- ### (FIXED) 109 Ogre's Essence does not decrease MP Recovery Rate
- ### (FIXED) Every item can be mailed
- ### (FIXED) 88403/88413 Devastating Assault and 88423/88433 Vortex of Claws always attacks 7 targets  should attack up to 8 targets
- ### (FIXED) ItemID 97176 <Rare> Unique Spellbook Coupon(Sealed) contains no exhange option for ItemID 103017 <Rare> Spellbook: Confused Mind(Sealed)
- ### (FIXED) Quest 'Peace at the Cemetery 1-2-3-4' - missing Taik Orc Supply Officer to count towards quest progress
- ### (FIXED) 88119 Khavatari's Armor Mastery adds wrong evasion stat
- ### (FIXED) 292 Bison Spirit Totem adds wrong amount of stat
- ### (FIXED) 287 Lionheart adds incorrect stats
- ### (FIXED) Daily enchant scroll pack is missing custom chances
- ### (FIXED) Class Change dialog has no effect
- ### (FIXED) Character Creator fails to create new character
- ### (FIXED) 88494 Claw Mark Lv3 does not trigger additional hit
- ### (FIXED) 88450 Ancient Might buff from 88460 Ancient Power does not provide Unequip Resistance stat
- ### (FIXED) No option for third class change on critical path
- ### (FIXED) 87828 Decoy buff from skill 87824 Decoy transfers debuffs from party members without distance restriction
- ### (FIXED) 87828 Decoy effect from skill 87824 Decoy sends debufs to party leader instead of caster
- ### (FIXED) 103262 / 103277 Wolf's Rune Lv. 1 shows in compounding window but cannot be added as material for compounding
- ### (FIXED) Traces of Battle - 1 2 3 4 and 5 don't count Fierce Guard for quest completion
- ### (FIXED) Memory of the Glorious past - 1 2 3 4 don't count Guard of Honor for quest completion
- ### (FIXED) Not so silent valley - 1 2 3 4 and 5 don't count Ancient Guard for quest completion
- ### (FIXED) Sapphire jewels are being equipped on top body slot
- ### (FIXED) Guaranteed skill enchantment items only work for 3 star ( heroic ) skills
- ### (FIXED) Skill window does not show green tag on skills that are available to learn
- ### (FIXED) 87160 Master of Aggression incorrectly upgrades 28 Aggression to 45051 Overwhelming Aggression
- ### (FIXED) 88031 Thunder Master incorrectly upgrades 10094 Mass Lightning Strike to 87995 Shillen's Tempest
- ### (FIXED) 88071 Water Master incorrectly upgrades skills
- ### (FIXED) 87157 Master of Aggression does not correctly upgrade 28 Aggression
- ### (FIXED) 45371 (1003) +3 Eva's Help does not show in 'Enchantment Extraction' Window
- ### (FIXED) Skills upgraded by 47318 +3 Blessed by Eva show incorrectly when not under effect of this buff
- ### (FIXED) 88080 (1003) +3 Templar's Power does not show in Enchantment extraction window
- ### (FIXED) 88044 (1003) +3 Templar's Power does not show in Enchantment extraction window
- ### (FIXED) 88060 Lightning Boost buff from 87993 Lightning Wave Break does not reduce damage
- ### (FIXED) Abyss beam ID: 88306 doesn't attack twice.
- ### (FIXED) [Bug] Warg- Devastating Assault
- ### (FIXED) 45284 (1003) Eva's Summoner +3 is not available for Enchantment Extraction
- ### (FIXED) 88241 (1003) Elemental Mastery +3 does not show in Enchantment Extraction window
- ### (FIXED) 45372 (1003) +3 Shillien's Help does not show in 'Enchantment Extraction' window
- ### (FIXED) 88284 Over the Rainbow does not get replaced by 88285 Over the Rainbow: Master when passive skill 88248 Fairy Rainbow: Master is learned
- ### (FIXED) 88201 Elemental Shackles does not get visually upgraded to 88218/88232 Elemental Shackles when 88248 Fairy Rainbow is learned
- ### (FIXED) 88217 Elemental Shackles attacked 11 targets  should attack up to 10
- ### (FIXED) 88251 Elemental Concentration does not visually upgrade to 88252 Elemental Concentration when 88248 Elemental Mastership is learned
- ### (FIXED) 88204 Elemental Vortex attacked 6 targets  should attack up to 5 targets
- ### (FIXED) 88204 Elemental Vortex does not get visually upgraded when learning 88248 Fairy Rainbow
- ### (FIXED) 88214 Elemental Vortex (Fairy Rainbow effect) attacked 9 targets  should attack up to 8 targets
- ### (FIXED) 88201 Elemental Strike does not upgrade to 88211 Elemental Strike when passive skill 88242 Elemental Mastership is learned
- ### (FIXED) 88409 Moon Influence visually shows as not upgraded in presence of 88460 Ancient Power: Master
- ### (FIXED) 88280 Elemental Roots attacked 6 targets  should attack up to 5
- ### (FIXED) SP pouch cost and reward
- ### (FIXED) 47310 Shelter: Master does not apply 87975 Flowing Tears to enemies
- ### (FIXED) 47318 (1003) +3 Blessed by Eva does not add P Skill Critical Damage
- ### (FIXED) 88452 Warg's Armor Mastery doesn't grant received damage stat
- ### (FIXED) 88284 Over The Rainbow attacked 9 targets  should attack up to 8
- ### (FIXED) Stop sel mahum troops - 3 quest cannot be completed
- ### (FIXED) Legendary Spellbook Coupons do not exchange for any legendary spellbooks
- ### (FIXED) 88050 Templar's Armor Mastery applies incorrect effects
- ### (FIXED) 87992 Templar's Rush does not work at all
- ### (FIXED) 87995 Shillien's Tempest attacks 11 targets in PvE  should attack up to 10 targets instead
- ### (FIXED) 88001 Dark Rush attacks 7 targets in PvE  should attack up to 6 targets
- ### (FIXED) 88056 Dark Shield Throwing attacks 7 targets in PvE  should attack up to 6 targets
- ### (FIXED) 47275 Toughness - Shield Defense not added correctly
- ### (FIXED) 87993 Lightning Wave Break attacks 11 targets  should attack up to 10 targets
- ### (FIXED) 47313 Condemnation: Master attacks 16 targets in PvE  should attack up to 15 targets
- ### (FIXED) 47313 Condemnation attacks 14 targets  should attack up to 12 targets
- ### (FIXED) 88012 Apocalypse deals 50% of target HP as unexplainable damage
- ### (FIXED) 88071 Water Master adds less PvE Damage than expected
- ### (FIXED) 87978 Eva's Tempest attacked 9 targets  should attack up to 8 targets
- ### (FIXED) 87981 Sea Vortex Rush attacked 7 targets  should attack up to 6 targets
- ### (FIXED) 88054 Water Shield Throwing attacked 7 targets  should attack up to 6 targets
- ### (FIXED) 47310 Shelter: Master does not trigger Water Spout effect while using 88009 Templar's Assault
- ### (FIXED) 45284 Eva's Summoner does not add all stats from the description
- ### (FIXED) Enchanting 47318 Blessed of Eva is unavailable
- ### (FIXED) 87994 Lightning Flash reduces too much Paralysis Resistance



<script>
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('li, p');
  
  elements.forEach(element => {
    const html = element.innerHTML;
    
    const fixedStyled = html.replace(
      /\(FIXED\)/g, 
      '<span style="color: #28a745; font-weight: bold;">(FIXED)</span>'
    );
    
    const fakeNewsStyled = fixedStyled.replace(
      /\(FAKE NEWS\)/g, 
      '<span style="color: #fd7e14; font-weight: bold;">(FIXED)</span>'
    );
    
    if (fakeNewsStyled !== html) {
      element.innerHTML = fakeNewsStyled;
    }
  });

  const ellipsisElements = document.querySelectorAll('.md-ellipsis');
  
  ellipsisElements.forEach(element => {
    if (element.textContent.includes('Closed Issues')) {
      element.innerHTML = element.innerHTML.replace(
        /(Closed Issues)/,
        '<span style="color: red;">$1</span>'
      );
    }
  });
});
</script>