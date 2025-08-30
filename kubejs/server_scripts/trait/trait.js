function compareArrays(arr1, arr2) {
    // 比较技能是否重合
    const temp = []
    for (let t of arr2) {
        temp.push(t.Name)
    }
    var commonValues = [];
    for (var i = 0; i < arr1.length; i++) {
        if (temp.indexOf(arr1[i]) !== -1) {
            commonValues.push(arr1[i]);
        }
    }

    var uniqueCommonValues = [];
    for (var j = 0; j < commonValues.length; j++) {
        if (uniqueCommonValues.indexOf(commonValues[j]) === -1) {
            uniqueCommonValues.push(commonValues[j]);
        }
    }

    return uniqueCommonValues.length >= 2 ? 1 : 0;
}


function hastrait(item, trait, form) {
    //检查特性
    const right = ["tales_of_element:natto_ball","tales_of_element:strong_fireball","tales_of_element:spear_spirit", "tales_of_element:flyshot", "tales_of_element:attack", "tales_of_element:arrow", "tales_of_element:yahaba2", "tales_of_element:thrower_skull", "tales_of_element:soul_absorption_ii", "tales_of_element:water", "tales_of_element:web_shot", "tales_of_element:hobblade", "tales_of_element:absorption", "tales_of_element:yahaba"]
    const left = ["tales_of_element:axe_throw_projectile","tales_of_element:p_bolade_nieve", "tales_of_element:arrow_left", "tales_of_element:ritogium_tomahawkprj", "tales_of_element:fragmented_soul", "tales_of_element:nova_spike"]
    const helmet = ["tales_of_element:confusion","tales_of_element:posion_goo_bullet","tales_of_element:drug", "tales_of_element:soul_rage", "tales_of_element:diver", "tales_of_element:bomb"]
    const chestplate = ["tales_of_element:hoshi_kirara","tales_of_element:into_shell", "tales_of_element:poison_shockwave", "tales_of_element:strength"]
    const legging = ["tales_of_element:thrown_geode","tales_of_element:ice_fragment", "tales_of_element:flesh_blob"]
    const boots = ["tales_of_element:levitation", "tales_of_element:speed"]
    const Traitsarray = item.nbt.SGear_Data.Properties.Traits
    for (let t of Traitsarray) {
        if (t.Name == trait) {
            if (form == "right" && compareArrays(right, Traitsarray)) return false
            if (form == "left" && compareArrays(left, Traitsarray)) return false
            if (form == "helmet" && compareArrays(helmet, Traitsarray)) return false
            if (form == "chestplate" && compareArrays(chestplate, Traitsarray)) return false
            if (form == "legging" && compareArrays(legging, Traitsarray)) return false
            if (form == "boots" && compareArrays(boots, Traitsarray)) return false
            return t.Level
        }
    }
    return false
}

ItemEvents.rightClicked(event => {
    const { item, player, entity } = event
    if (item.mod == 'silentgear' && item.isDamageableItem) {
        const trait_projectile = {
            "tales_of_element:arrow": ["minecraft:arrow", 2.5, 5, '', 1, 1],
            "tales_of_element:hobblade": ["gomwaga:hobblade", 7.5, 10, '', 1, 1],
            "tales_of_element:web_shot": ["goety:web_shot", 1, 10, '', 1, 1],
            "tales_of_element:water": ["randomweirdmobs:water", 7.5, 10, '', 1, 1],
            "tales_of_element:natto_ball": ["tofucraft:natto_ball", 5, 20, '', 1, 1],
            "tales_of_element:thrower_skull": ["chaos_project:projectile_thrower_skull", 10, 20, 'chaos_project:crabby_hurt', 1, 1],
            "tales_of_element:flyshot": ["chaos_project:projectile_flyshot", 10, 25, 'chaos_project:unhy_hit', 1, 1],
            "tales_of_element:spear_spirit": ["chaos_project:projectile_spear_spirit", 13, 25, 'minecraft:entity.snowball.throw', 1, 1],
            "tales_of_element:strong_fireball": ["mhheavenandhell:weak_fireball", 15, 25, 'minecraft:entity.blaze.shoot', 1, 1],
        }
        const trait_effect = {
            "tales_of_element:absorption": ["minecraft:absorption", 5, 10],
            "tales_of_element:soul_absorption_ii": ["skeleton_uprising:soul_absorption_ii", 5, 15],
            "tales_of_element:lifesteal": ["terramity:lifesteal", 5, 15]

        }
        const trait_demonart = {
            "tales_of_element:yahaba": ['kimetsunoyaiba:blooddemonart_yahaba', 20],
            "tales_of_element:yahaba2": [Item.of('kimetsunoyaiba:blooddemonart_yahaba', '{change_flag:1b,select:1.0d,select_cooltime:160.0d,select_name:"§l§c Blood Demon Art: Koketsu Arrow Continuous"}'), 20]
        }
        const minepiece_traits = {
            "tales_of_element:attack": [0, 1, 15]
        }
        for (let trait in trait_projectile) {
            if (hastrait(item, trait, "right")) {
                let level = hastrait(item, trait, "right")
                player_shootprojectile(event, trait_projectile[trait][0], level * trait_projectile[trait][1], level * trait_projectile[trait][3], trait_projectile[trait][4], trait_projectile[trait][5])
                player.addItemCooldown(item.id, 20 * trait_projectile[trait][2])
            }
        }
        for (let effect_trait in trait_effect) {
            console.log(effect_trait)
            if (hastrait(item, effect_trait, "right")) {
                let level = hastrait(item, effect_trait, "right")
                player.potionEffects.add(trait_effect[effect_trait][0], 20 * trait_effect[effect_trait][1], level - 1)
                player.addItemCooldown(item, 20 * trait_effect[effect_trait][2])
            }
        }
        for (let demon_art in trait_demonart) {
            if (hastrait(item, demon_art, "right")) {
                let level = hastrait(item, demon_art, "right")
                demonart_release(event, trait_demonart[demon_art][0])
                player.addItemCooldown(item.id, 20 * trait_demonart[demon_art][1])
            }
        }
        for (let minepiece in minepiece_traits) {
            if (hastrait(item, minepiece, "right")) {
                let level = hastrait(item, minepiece, "right")
                minepiece_skill(player, minepiece_traits[minepiece][0], minepiece_traits[minepiece][1])
                player.addItemCooldown(item.id, 20 * minepiece_traits[minepiece][2])
            }
        }
    }

})

BlockEvents.rightClicked(event => {
    const { block, player, entity } = event
    const item = player.mainHandItem
    const block_summon_traits = {

    }
    for (let block_summon_trait in block_summon_traits) {
        if (hastrait(chestArmorItem, block_summon_trait, "chestplate")) {
            let level = hastrait(chestArmorItem, block_summon_trait, "chestplate")
            block_summon(event, block_summon_traits[block_summon_trait][0], block)
            player.potionEffects.add('kubejs:chestplate_skill', 20 * block_summon_traits[block_summon_trait][1])
        }
    }
})


ItemEvents.firstLeftClicked(event => {
    const { item, player, entity } = event

    if (item.mod == 'silentgear' && item.isDamageableItem) {
        const trait_projectile = {
            "tales_of_element:arrow_left": ["minecraft:arrow", 2.5, 3,'', 1],
            "tales_of_element:ritogium_tomahawkprj": ["gomwaga:ritogium_tomahawkprj", 5, 4,'', 1],
            "tales_of_element:fragmented_soul": ["terrawhips_and_more:projectile_fragmented_soul", 5, 3,'', 1],
            "tales_of_element:nova_spike": ["midnight:nova_spike", 5, 3,'', 1],
            "tales_of_element:axe_throw_projectile": ["sansausremaster:axe_throw_projectile", 7.5, 3,'', 1],
            "tales_of_element:spider_net_3": ["kimetsunoyaiba:spider_net_3_projectile", 8, 3,'', 1],
            "tales_of_element:p_bolade_nieve": ["the_beginning_and_heaven:p_bolade_nieve", 9, 3,'', 1],
        }
        for (let trait in trait_projectile) {
            if (hastrait(item, trait, "left")) {
                let level = hastrait(item, trait, "left")
                leftprojectile(event, trait_projectile[trait][0], level * trait_projectile[trait][1], trait_projectile[trait][2], trait_projectile[trait][3], trait_projectile[trait][4])
            }
        }
    }
})


ItemEvents.rightClicked('born_in_chaos_v1:supreme_measure', event => {
    const { item, player, entity, level } = event
    const { x, y, z } = player
    let time = 0
    player_shootprojectile(event, "the_beginning_and_heaven:p_bolade_blustnieve", 15, 'chaos_project:crabby_hurt', 1, 1)
    const block = player.block
    // block_summon(event,"paladins_oath:roc",15,block)
    // player.mergeNbt({ ForgeCaps: {"jujutsucraft:player_variables":{PlayerCursePower:600.0,PlayerCurseTechnique:1.0,PlayerSelectCurseTechnique:1.0}}})
    // $jujutsutech.execute(level,x,y,z,entity)
    // player.mergeNbt({ ForgeCaps: { "jujutsucraft:player_variables": { FlagSixEyes: 0, OVERLAY1: "", OVERLAY2: "", OverlayCost: "消耗咒力", OverlayCursePower: "咒力", PassiveTechnique: 0, PhysicalAttack: 1, PlayerCharge: 0.0, PlayerCursePower: 600.0, PlayerCursePowerChange: 0.0, PlayerCursePowerFormer: 200.0, PlayerCursePowerMAX: 600.0, PlayerCurseTechnique: 0.0, PlayerCurseTechnique2: 0.0, PlayerExperience: 0.0, PlayerFame: 0.0, PlayerFlag_A: 0, PlayerFlag_B: 1, PlayerLevel: 1.0, PlayerProfession: 0.0, PlayerSelectCurseTechnique: 0.0, PlayerSelectCurseTechniqueCost: 0.0, PlayerSelectCurseTechniqueCostOrgin: 0.0, PlayerSelectCurseTechniqueName: "攻击", PlayerTechniqueUsedNumber: 0.0, SecondTechnique: 0, cnt_curse1: 8.0, flag_shift: 0, flag_sukuna: 0, friend_num_keep: 0.0, noChangeTechnique: 0, p_flag_power: 0, p_x_power: -0.0, p_y_power: 0.0, p_z_power: 0.0 } } })
    // $jujutsutech1.execute(level,x,y,z,entity)
    // minepiece_skill(player,1,1)
    // $StartBreathesProcedure.execute(level,player,Item.of('kimetsunoyaiba:nichirinsword_zenitsu', '{Damage:0,Power:0.125d,change_flag:1b,cooltime:220.0d,select:11.0d,select_name:"§l§eThunder Breathing First Form: Thunderclap and Flash Eightfold"}'))
    // // player.mergeNbt({ ForgeCaps: {"kimetsunoyaiba:player_variables":{NUM_SKILL:0.0}}})
    // $NichirinswordSenior2EntitySwingsItemProcedure.execute(player)
    // console.log(player.nbt.ForgeCaps["jujutsucraft:player_variables"])
    // event.player.addItemCooldown(event.player.mainHandItem.id, 20)
})

NetworkEvents.dataReceived('helmet_skill', event => {
    const { player, entity, level } = event
    const { x, y, z } = entity
    const { headArmorItem, feetArmorItem, legsArmorItem, chestArmorItem } = player
    const armor_projectile_traits = {
        "tales_of_element:bomb": ["legendary_monsters:bomb", 7.5, 20, '', 1, 1],
        "tales_of_element:posion_goo_bullet": ["threateningly_mobs:posion_goo_bullet", 12, 20, 'threateningly_mobs:impact_1', 1, 1],
    }
    const armor_effect_traits = {
        "tales_of_element:confusion": [["minecraft:strength", "mna:confusion"], 10, 20],
        "tales_of_element:diver": [["minecraft:water_breathing"], 15, 20],
        "tales_of_element:soul_rage": [["legendary_monsters:soul_rage"], 5, 20],
        "tales_of_element:night_vision": [["minecraft:night_vision"], 15, 20]
    }
    const trait_demonart = {
            "tales_of_element:drug": ['kimetsunoyaiba:drug', 20],
        }
    if (!player.hasEffect('kubejs:helmet_skill')) {
        for (let armor_effect_trait in armor_effect_traits) {
            if (hastrait(headArmorItem, armor_effect_trait, "helmet")) {
                let level = hastrait(headArmorItem, armor_effect_trait, "helmet")
                for (let i in armor_effect_traits[armor_effect_trait][0]) {
                    player.potionEffects.add(armor_effect_traits[armor_effect_trait][0][i], 20 * armor_effect_traits[armor_effect_trait][1], level - 1)
                }
                player.potionEffects.add('kubejs:helmet_skill', 20 * armor_effect_traits[armor_effect_trait][2])
            }
        }
        for (let trait in armor_projectile_traits) {
            if (hastrait(headArmorItem, trait, "helmet")) {
                let level = hastrait(headArmorItem, trait, "helmet")
                player_shootprojectile(event, armor_projectile_traits[trait][0], level * armor_projectile_traits[trait][1], armor_projectile_traits[trait][3], armor_projectile_traits[trait][4], armor_projectile_traits[trait][5])
                player.potionEffects.add('kubejs:helmet_skill', 20 * armor_projectile_traits[trait][2])
            }
        }
        for (let demon_art in trait_demonart) {
            if (hastrait(headArmorItem, demon_art, "helmet")) {
                let level = hastrait(headArmorItem, demon_art, "helmet")
                demonart_release(event, trait_demonart[demon_art][0])
                player.potionEffects.add('kubejs:helmet_skill', 20 * trait_demonart[demon_art][1])
            }
        }
    }
})

NetworkEvents.dataReceived('legging_skill', event => {
    const { player, entity, level } = event
    const { x, y, z } = entity
    const { headArmorItem, feetArmorItem, legsArmorItem, chestArmorItem } = player
    const armor_effect_traits = {
    }
    const armor_blocksummon_traits = {
        "tales_of_element:flesh_blob": ['biomancy:flesh_blob', 1, 20, '', 1, 1]
    }
    const armor_projectile_traits = {
        "tales_of_element:thrown_geode": ['midnight:thrown_geode', 1, 20, '', 1, 1],
        "tales_of_element:ice_fragment": ['terrawhips_and_more:projectile_ice_fragment', 15, 25, 'minecraft:entity.snowball.throw', 1, 1]
    }
    if (!player.hasEffect('kubejs:legging_skill')) {
        for (let armor_projectile_trait in armor_projectile_traits) {
            if (hastrait(legsArmorItem, armor_projectile_trait, "legging")) {
                let level = hastrait(legsArmorItem, armor_projectile_trait, "legging")
                player_shootprojectile(event, armor_projectile_traits[armor_projectile_trait][0], level * armor_projectile_traits[armor_projectile_trait][1], armor_projectile_traits[armor_projectile_trait][3], armor_projectile_traits[armor_projectile_trait][4], armor_projectile_traits[armor_projectile_trait][5])
                player.potionEffects.add('kubejs:legging_skill', 20 * armor_projectile_traits[armor_projectile_trait][2])
            }
        }
        for (let armor_blocksummon_trait in armor_blocksummon_traits) {
            if (hastrait(legsArmorItem, armor_blocksummon_trait, "legging")) {
                let level = hastrait(legsArmorItem, armor_blocksummon_trait, "legging")
                block_summon(event, armor_blocksummon_traits[armor_blocksummon_trait][0], armor_blocksummon_traits[armor_blocksummon_trait][1])
                player.potionEffects.add('kubejs:legging_skill', 20 * armor_blocksummon_traits[armor_blocksummon_trait][2])
            }
        }
    }
})

NetworkEvents.dataReceived('chestplate_skill', event => {
    const { player, entity, level } = event
    const { headArmorItem, feetArmorItem, legsArmorItem, chestArmorItem } = player
    const block = player.block
    // console.log(block)
    const armor_effect_traits = {
        "tales_of_element:strength": [["minecraft:strength"], 10, 20],
        "tales_of_element:into_shell": [["minecraft:resistance","greekfantasy:stunned"], 10, 20]
    }
    const armor_projectile_traits = {
        "tales_of_element:conjurer_trident": ['adventuresmod:conjurer_trident', 5, 30, '', 1, 3]
    }

    if (!player.hasEffect('kubejs:chestplate_skill')) {
        if (hastrait(chestArmorItem, "tales_of_element:hoshi_kirara", "chestplate")) {
            $NichirinswordSenior2EntitySwingsItemProcedure.execute(player)
            player.potionEffects.add('kubejs:chestplate_skill', 20 * 10)
        }
        if (hastrait(chestArmorItem, "tales_of_element:poison_shockwave", "chestplate")) {
            block_summon(event, "legendary_monsters:poison_shockwave_spawner", 20, block)
            player.potionEffects.add('kubejs:chestplate_skill', 20 * 15)
        }
        for (let armor_effect_trait in armor_effect_traits) {
            if (hastrait(chestArmorItem, armor_effect_trait, "chestplate")) {
                let level = hastrait(chestArmorItem, armor_effect_trait, "chestplate")
                for (let i in armor_effect_traits[armor_effect_trait][0]) {
                    player.potionEffects.add(armor_effect_traits[armor_effect_trait][0][i], 20 * armor_effect_traits[armor_effect_trait][1], level - 1)
                }
                player.potionEffects.add('kubejs:chestplate_skill', 20 * armor_effect_traits[armor_effect_trait][2])
            }
        }
        for (let armor_projectile_trait in armor_projectile_traits) {
            if (hastrait(chestArmorItem, armor_projectile_trait, "chestplate")) {
                let level = hastrait(chestArmorItem, armor_projectile_trait, "chestplate")
                player_shootprojectile(event, armor_projectile_traits[armor_projectile_trait][0], level * armor_projectile_traits[armor_projectile_trait][1], armor_projectile_traits[armor_projectile_trait][3], armor_projectile_traits[armor_projectile_trait][4], armor_projectile_traits[armor_projectile_trait][5])
                player.potionEffects.add('kubejs:chestplate_skill', 20 * armor_projectile_traits[armor_projectile_trait][2])
            }
        }
    }
})

NetworkEvents.dataReceived('boots_skill', event => {
    const { player, entity, level } = event
    const { x, y, z } = entity
    const { headArmorItem, feetArmorItem, legsArmorItem, chestArmorItem } = player
    const armor_effect_traits = {
        "tales_of_element:levitation": [["minecraft:levitation"], 5, 15],
        "tales_of_element:speed": [["aerialhell:head_in_the_clouds"], 5, 15]
    }
    if (!player.hasEffect('kubejs:boots_skill')) {
        for (let armor_effect_trait in armor_effect_traits) {
            if (hastrait(feetArmorItem, armor_effect_trait, "boots")) {
                let level = hastrait(feetArmorItem, armor_effect_trait, "boots")
                for (let i in armor_effect_traits[armor_effect_trait][0]) {
                    player.potionEffects.add(armor_effect_traits[armor_effect_trait][0][i], 20 * armor_effect_traits[armor_effect_trait][1], level - 1)
                }
                player.potionEffects.add('kubejs:boots_skill', 20 * armor_effect_traits[armor_effect_trait][2])
            }
        }
    }
})

ItemEvents.entityInteracted(event => {
    const { target, player, item, server } = event
    if (item.mod == 'silentgear' && item.isDamageableItem) {
        if (target.type == "better_boss:tori_1" && hastrait(item, "tales_of_element:moms_love", "right")) {
            server.runCommandSilent(`execute in ${event.level.dimension} run effect give ${target.uuid} minecraft:strength 20`)
            server.runCommandSilent(`execute in ${event.level.dimension} run effect give ${target.uuid} minecraft:resistance 20`)
            player.damageHeldItem('main_hand', 10)
            event.server.runCommandSilent(`playsound minecraft:entity.player.levelup ambient ${player.profile.name} ${player.x} ${player.y} ${player.z}`)
        }
    }
})