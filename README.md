# Dungeon Buddy

Dungeon buddy is a Discord bot built with [DiscordJS](https://discord.js.org/) exclusively for the
[No Pressure](https://discord.gg/nopressureeu) discord server.

It allows for an interactive group building experience, where members can create groups, join groups, and leave groups.
The bot also provide information on the group, such as the dungeon, keystone level and the roles required. All
information is updated in real-time so there shouldn't be any confusion on who is in the group.

When a member joins the group, they receive a randomly generated passphrase (unique to the group) which they can attach
as a 'note' in-game. This confirms they are from the NoP Discord and is used to prevent any bad actors from sneaking
into NoP groups and trolling.

## Commands

`/lfg` - create a group for the dungeon. Choose desired dungeon > dungeon difficulty > timed/completed > your role >
required roles from a drop-down style menu.

`/lfgquick` - create a group using a '_quick string_' rather than a drop-down style menu.

Example quick string: `fall 10t d hdd`

    <dungeonShorthand> <keyLevel><timed/completed> <yourRole><requiredRoles>

`/lfghistory` - check up-to 10 of your latest groups. Previous teammates & passphrases can be found here.

`/lfgstats` - check total groups created, groups created in the last 24h, 7d, 30d & also the most popular dungeons for
each key range.
