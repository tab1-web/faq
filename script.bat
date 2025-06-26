@echo off
echo Creating new directory structure...

mkdir docs\getting-started 2>nul
mkdir docs\gameplay 2>nul
mkdir docs\gameplay\progression 2>nul
mkdir docs\cosmetics 2>nul
mkdir docs\features 2>nul
mkdir docs\support 2>nul
mkdir docs\support\troubleshooting 2>nul

echo Moving files to new structure...

REM Getting Started
if exist "docs\General\Website\website.md" move "docs\General\Website\website.md" "docs\getting-started\welcome.md"
if exist "docs\General\Servers\servers.md" move "docs\General\Servers\servers.md" "docs\getting-started\servers.md"
if exist "docs\General\Security\UserSafety\email.md" move "docs\General\Security\UserSafety\email.md" "docs\getting-started\login-issues.md"

REM Gameplay
if exist "docs\Game\General\game.md" move "docs\Game\General\game.md" "docs\gameplay\core-mechanics.md"
if exist "docs\Game\General\pk.md" move "docs\Game\General\pk.md" "docs\gameplay\pvp-system.md"
if exist "docs\Game\subclasses.md" move "docs\Game\subclasses.md" "docs\gameplay\progression\subclasses.md"
if exist "docs\Game\noblesse.md" move "docs\Game\noblesse.md" "docs\gameplay\progression\noblesse.md"
if exist "docs\Game\heroes.md" move "docs\Game\heroes.md" "docs\gameplay\progression\heroes.md"
if exist "docs\Signature\Progression\Quests\signature-quests.md" move "docs\Signature\Progression\Quests\signature-quests.md" "docs\gameplay\quests.md"

REM Cosmetics
if exist "docs\General\Cosmetics\cosmetics-general.md" move "docs\General\Cosmetics\cosmetics-general.md" "docs\cosmetics\overview.md"
if exist "docs\General\Cosmetics\Hats\hats.md" move "docs\General\Cosmetics\Hats\hats.md" "docs\cosmetics\hats.md"
if exist "docs\General\Cosmetics\Suits\suits.md" move "docs\General\Cosmetics\Suits\suits.md" "docs\cosmetics\suits.md"
if exist "docs\General\Cosmetics\Cloaks\cloaks.md" move "docs\General\Cosmetics\Cloaks\cloaks.md" "docs\cosmetics\cloaks.md"
if exist "docs\General\Cosmetics\Agathions\agathions.md" move "docs\General\Cosmetics\Agathions\agathions.md" "docs\cosmetics\agathions.md"

REM Features
if exist "docs\Signature\Combat\signature-combat.md" move "docs\Signature\Combat\signature-combat.md" "docs\features\combat-system.md"
if exist "docs\Signature\Progression\signature-progression.md" move "docs\Signature\Progression\signature-progression.md" "docs\features\progression-features.md"
if exist "docs\Signature\L2Calc\l2calc.md" move "docs\Signature\L2Calc\l2calc.md" "docs\features\l2calc.md"

REM Support
if exist "docs\General\Security\UserSafety\rules.md" move "docs\General\Security\UserSafety\rules.md" "docs\support\rules.md"
if exist "docs\General\Security\UserSafety\security.md" move "docs\General\Security\UserSafety\security.md" "docs\support\user-safety.md"
if exist "docs\General\Security\UserSafety\report.md" move "docs\General\Security\UserSafety\report.md" "docs\support\reporting.md"
if exist "docs\General\Security\UserSafety\ticket.md" move "docs\General\Security\UserSafety\ticket.md" "docs\support\tickets.md"
if exist "docs\General\TechnicalIssues\inside.md" move "docs\General\TechnicalIssues\inside.md" "docs\support\troubleshooting\game-issues.md"
if exist "docs\General\TechnicalIssues\outside.md" move "docs\General\TechnicalIssues\outside.md" "docs\support\troubleshooting\technical-issues.md"

echo Cleaning up empty directories...
timeout /t 2 /nobreak >nul

REM Clean up empty directories
for /d %%i in ("docs\General\*") do rmdir "%%i" 2>nul
for /d %%i in ("docs\Game\*") do rmdir "%%i" 2>nul
for /d %%i in ("docs\Signature\*") do rmdir "%%i" 2>nul
rmdir "docs\General" 2>nul
rmdir "docs\Game" 2>nul
rmdir "docs\Signature" 2>nul

echo Done! Files have been reorganized.
echo Please update your mkdocs.yml with the new navigation structure.
pause