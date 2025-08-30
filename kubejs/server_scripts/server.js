BlockEvents.rightClicked('kubejs:tp_block', event => {
        event.server.runCommandSilent(`execute as ${event.player.uuid} at @s run tp @s ^ ^ ^7`)
})


ItemEvents.rightClicked('kubejs:catalyst_fake', event => {
        if (event.level.dimension == 'undergarden:undergarden') {
                event.player.teleportTo("minecraft:overworld", event.player.x, 125, event.player.z, 0, 0)
                event.player.getPotionEffects().add('minecraft:slow_falling', 200)
                event.server.runCommand(`execute in minecraft:overworld run spawnpoint @a`)
        }

})

ItemEvents.rightClicked('aquamirae:shell_horn', event => {
        event.cancel()
})

BlockEvents.rightClicked('the_bumblezone:crystalline_flower', event => {
        event.cancel()
})


var canholdtime = 0
ItemEvents.rightClicked('kubejs:battle_wand', event => {
        // let/**@type {Internal.ItemStack_} */ ingredients = '4x aerial'
        // console.log(`${event.recipes.createDeploying(inter, [inter, 'celestisynth:starstruck_feather'])}`)
        if (event.level.dimension == 'minecraft:the_nether' && event.player.y == 128) {
                event.player.teleportTo('tales_of_element:bossfight', 120, 129, 120, 0, 0)
        }

        if (event.level.dimension == 'minecraft:overworld') {
                // let content = FilesJS.readFile('kubejs/config/foodeaten.json')
                // console.log(`${event.player.nbt}`)
                event.player.persistentData.x = event.player.x
                event.player.persistentData.y = event.player.y
                event.player.persistentData.z = event.player.z
                if (canholdtime / 10 >= 1) {
                        event.player.teleportTo('tales_of_element:bossfight', 120, 131, 120, 0, 0)
                        if (!event.player.stages.has('starting_items')) {
                                event.player.stages.add('starting_items')
                                event.server.scheduleInTicks(1, c => { //make sure the chunks are loaded before trying to set the block
                                        event.server.runCommandSilent(`execute in tales_of_element:bossfight run setblock 100 127 100 minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"tales_of_element:boss",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                                        event.server.runCommandSilent(`execute in tales_of_element:bossfight run setblock 100 126 100 minecraft:redstone_block`)
                                        /*   c.server.runCommandSilent(`fill ${d.x} ${d.y} ${d.z} ${d.x} ${d.y - 1} ${d.z} air`) *///get rid of the structure and redstone block
                                })
                        }
                        event.server.runCommandSilent(`execute in tales_of_element:bossfight run setblock 100 126 100 minecraft:redstone_block`)
                        event.server.runCommandSilent(`execute in tales_of_element:bossfight run setblock 100 126 100 minecraft:bedrock`)

                        canholdtime = 0
                }
                canholdtime++;
                event.player.statusMessage = `准备传送中${canholdtime * 10}%`;
        }

        else if (event.level.dimension == 'tales_of_element:bossfight') {
                if (canholdtime / 10 >= 1) {
                        event.player.teleportTo('minecraft:overworld', event.player.persistentData.x, event.player.persistentData.y, event.player.persistentData.z, 0, 0)
                        canholdtime = 0
                }

                canholdtime++;
                event.player.statusMessage = `准备传送中${canholdtime * 10}%`;
        }


})

// PlayerEvents.dim((event) => {
//         if (event.server.tickCount % 20 == 0) { event.server.setDifficulty('normal', true) }
// })

function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
                let randomIndex = Math.floor(Math.random() * characters.length);
                result += characters[randomIndex];
        }
        return result;
}

//修改游戏规则
ServerEvents.loaded(event => {
        if (event.server.persistentData.gameRules) return
        event.server.persistentData.foodfile = generateRandomString(10)
        event.server.gameRules.set("jujutsuVanillaMobSpawning", true)
        event.server.gameRules.set("kimetsuGainPoint", false)
        event.server.gameRules.set("minepieceAutoRaidStart", false)
        event.server.persistentData.gameRules = true
        FilesJS.appendLine(`kubejs/config/${event.server.persistentData.foodfile}.json`, '新的一行');
})


const $ResourceKey = Java.loadClass("net.minecraft.resources.ResourceKey");
const structureNames = [
        "tales_of_element:undergarden_boss1"
];
const structureKeys = structureNames.map((name) =>
        $ResourceKey.create($ResourceKey.createRegistryKey("worldgen/structure"), name)
);



function structureCheck(event) {
        const { level, block, player } = event;
        if (!event.entity.isPlayer()) return;
        if (player.isCreative()) return;

        for (let structure of structureKeys) {
                if (level.structureManager().getStructureWithPieceAt(block.pos, structure).isValid()) {
                        player.tell('一股神秘力量阻止了你')
                        event.cancel();
                        break;
                }
        }
}



BlockEvents.broken((event) => {
        structureCheck(event);
});

BlockEvents.placed((event) => {
        structureCheck(event);
});


PlayerEvents.loggedIn(e => {
        const player = e.player
        player.mergeNbt({ ForgeCaps: { "jujutsucraft:player_variables": { FlagSixEyes: 0, OVERLAY1: "", OVERLAY2: "", OverlayCost: "消耗咒力", OverlayCursePower: "咒力", PassiveTechnique: 0, PhysicalAttack: 1, PlayerCharge: 0.0, PlayerCursePower: 600.0, PlayerCursePowerChange: 0.0, PlayerCursePowerFormer: 200.0, PlayerCursePowerMAX: 600.0, PlayerCurseTechnique: 0.0, PlayerCurseTechnique2: 0.0, PlayerExperience: 0.0, PlayerFame: 0.0, PlayerFlag_A: 0, PlayerFlag_B: 1, PlayerLevel: 1.0, PlayerProfession: 0.0, PlayerSelectCurseTechnique: 0.0, PlayerSelectCurseTechniqueCost: 0.0, PlayerSelectCurseTechniqueCostOrgin: 0.0, PlayerSelectCurseTechniqueName: "攻击", PlayerTechniqueUsedNumber: 0.0, SecondTechnique: 0, cnt_curse1: 8.0, flag_shift: 0, flag_sukuna: 0, friend_num_keep: 0.0, noChangeTechnique: 0, p_flag_power: 0, p_x_power: -0.0, p_y_power: 0.0, p_z_power: 0.0 } } })
        player.mergeNbt({ ForgeCaps: { "paladins_oath:player_variables": { Faith: 100.04999999999646, Healing: 0, MaxFaith: 100.0, Protection: 1, Retrebution: 0 } } })
        global.eaten = FilesJS.readFile(`kubejs/config/${e.server.persistentData.foodfile}.json`)

})

ItemEvents.entityInteracted(e => {
        if (e.item == 'minecraft:stick') {
                console.log(e.target.nbt)
        }
})

CommonAddedEvents.playerChangeDimension(e => {
        const { entity, player, oldWorldKey, newWorldKey } = e

        if (newWorldKey.path == 'bossfight') {
                player.potionEffects.add('minecraft:night_vision', 600000)
        }
        if (newWorldKey.path == 'overworld' && oldWorldKey.path == 'bossfight') {
                player.removeEffect('minecraft:night_vision')
        }
        if (newWorldKey.path == 'undergarden') {
                if (player.persistentData.firstenter) return
                player.persistentData.firstenter = true
                player.inventory.clear()
                player.give(Item.of('chaos_project:destiny_choiser', '{Damage:0}'))
                player.give(Item.of('minecraft:wooden_pickaxe', "{Damage:0,RepairCost:0,display:{Name:'{\"text\":\"初始木镐\"}'}}").enchant('minecraft:unbreaking', 3))
        }

})
//Credit: Liopyu (https://discord.com/channels/303440391124942858/1246451798743449640/1246465482761048165)
//掉落

function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
}


function loadAndUpdate(player, content) {
        player.mergeNbt({ Inventory: content });
        player.inventoryMenu.broadcastFullState()
}

EntityEvents.death("minecraft:player", e => {
        // const keep_slots = [9,10,11,12,13,14,15,16,17]
        const { player } = e;
        // player.inventory.allItems.forEach(item => {
        //         if (item.hasEnchantment('vanishing_curse', 1)) item.setCount(0)
        // });

        // const keep = [], clear = [];
        // player.nbt.Inventory.forEach(i =>
        //         keep_slots.includes(i.Slot) ? clear.push(i) : keep.push(i)
        // );
        // player.xp /= 2
        // player.persistentData.lastItems = keep;
        // loadAndUpdate(player, clear)
        // keep_slots = []
        // //or a death chest
        // const {up} = player.block;
        // up.set('chest');
        // up.mergeEntityData({Items: player.persistentData.lastItems});
        if (e.level.dimension == 'tales_of_element:bossfight') {
                e.server.setDifficulty('peaceful', true)
        }
        
})

PlayerEvents.respawned(e => {
        // const { player } = e, { persistentData: pData } = player;
        // loadAndUpdate(player, pData.lastItems);
        // pData.remove('lastItems')
        e.server.setDifficulty('normal', true)
})

//ban
PlayerEvents.inventoryChanged(event => {
        const bannedItems = ['goety:treasure_pouch', 'progression_mod:bundletrident', 'progression_mod:bundletool', 'progression_mod:bundlearmor', 'progression_mod:bundleranged', 'progression_mod:bundlesword', 'faded_conquest_2:stormclasher_katana']
        const { item, player } = event
        if (bannedItems.includes(item.id)) {
                console.log(bannedItems, item.id)
                player.tell([
                        Text.yellow(item.displayName),
                        "已被",
                        Text.red("禁用"),
                ]);
                player.inventory.clear(item);
        }
})