/**
@param{Internal.BlockRightClickedEventJS} event
*/
function boss_summon(event, item, mob, form) {
        const { player, level, server, block } = event
        if (player.mainHandItem.id == item && !event.player.hasEffect('kubejs:boss')) {
                player.addItemCooldown(event.player.mainHandItem.id, 600)
                level.runCommandSilent(`particle aerialhell:shadow_particle ${event.block.x} ${event.block.y} ${event.block.z} 0.5 0.5 0.5 0.5 300 normal`)
                player.potionEffects.add('kubejs:boss', 400)
                server.scheduleInTicks(40, c => {
                        if (form == 1) {
                                block.up.createEntity(mob).spawn()
                        } else if (form == 2) {
                                server.runCommandSilent(`execute at ${event.player.uuid} positioned ${event.block.x} ${event.block.y + 1} ${event.block.z} run brutalbosses spawnboss ${mob}`)
                        }
                })
        }
}

function boss_summon1(event, local, num, structure, structure_name) {
        const { level, player, server } = event
        if (level.dimension == 'minecraft:overworld') {
                player.persistentData.x = event.player.x
                player.persistentData.y = event.player.y
                player.persistentData.z = event.player.z
                if (canholdtime / 10 >= 1) {
                        player.teleportTo('tales_of_element:bossfight', local[0], local[1], local[2], 0, 0)
                        player.potionEffects.add('minecraft:levitation', 20)
                        server.scheduleInTicks(1, c => { //make sure the chunks are loaded before trying to set the block
                                server.runCommandSilent(`execute in tales_of_element:bossfight run setblock ${101 + num[0]} 127 ${100 + num[1]} minecraft:structure_block{ignoreEntities:0b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"${structure}",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
                                server.runCommandSilent(`execute in tales_of_element:bossfight run setblock ${101 + num[0]} 126 ${100 + num[1]} minecraft:redstone_block`)
                                server.runCommandSilent(`execute in tales_of_element:bossfight run setblock ${101 + num[0]} 126 ${100 + num[1]} minecraft:bedrock`)
                        })
                        canholdtime = 0
                }
                canholdtime++;
                event.player.statusMessage = `准备前往${structure_name + canholdtime * 10}%`;
        }
}

const boss_item = ['mcb:white_king_chess_piece', 'midnight_madness:enchanted_midnight_necronomicon','gomwaga:sharp_leaf','meetyourfight:haunted_bell']
for (const item of boss_item) {
        ItemEvents.rightClicked(item, event => {
                event.cancel()
        })
}



BlockEvents.rightClicked('kubejs:fossil_bait_block', event => {
        boss_summon(event, 'kubejs:reaper_warrior_eye', 'alcaryabattle:cyborg', 1)
})

BlockEvents.rightClicked('kubejs:bosssummon_block', event => {
        boss_summon(event, 'armageddon_mod:iron_remote', 'armageddon_mod:the_iron_colossus', 1)
        boss_summon(event, 'armageddon_mod:strange_coin', 'armageddon_mod:the_gobelin_lord', 1)
        boss_summon(event, 'meetyourfight:fossil_bait', 'meetyourfight:swampjaw', 1)
        boss_summon(event, 'armageddon_mod:emerald_totem', 'armageddon_mod:arion_tyrantofthe_emerald_wrath_ravager', 1)
        boss_summon(event, 'armageddon_mod:builder_stone', 'armageddon_mod:eldoraththe_ancient_builder', 1)
        boss_summon(event, 'gomwaga:sharp_leaf', 'gomwaga:harpy_of_blades', 1)
        boss_summon(event, 'kubejs:shell_horn', 'aquamirae:captain_cornelia', 1)
        boss_summon(event, 'kubejs:freeze_gem', 'mutant_iceologer', 2)
        boss_summon(event, 'kubejs:stun_skeleton', 'mutant_skeleton', 2)
        boss_summon(event, 'skeleton_uprising:old_crown', 'skeleton_uprising:emperor_skeleton_iii', 1)
        boss_summon(event, 'glowroots:shimmer_core', 'glowroots:lumirott', 1)
        boss_summon(event, 'kubejs:magma_core', 'alcaryabattle:magmagolem', 1)
        boss_summon(event, 'kubejs:villagersoul', 'alcaryabattle:shinobisaber', 1)
        boss_summon(event, 'kubejs:freeze_core', 'frostbound:glacier', 1)
        boss_summon(event, 'kubejs:dread_core', 'paladins_oath:dread_knight', 1)
        boss_summon(event, 'progression_mod:magicconch', 'progression_mod:oldboss', 1)
        boss_summon(event, 'kubejs:jungle_slime', 'gomwaga:big_jungle_slime', 1)
        boss_summon(event, 'kubejs:curse_bait_0', 'curse_user_1', 2)
        boss_summon(event, 'kubejs:sand_warrior_eye', 'hs_bosses:sand_warrior', 1)
        boss_summon(event, 'kubejs:drownlord_heart', 'randomweirdmobs:drownedlord', 1)
        boss_summon(event, 'horrors_of_halloween:pumpkin_soul', 'horrors_of_halloween:pumpkin_reaper', 1)
        boss_summon(event, 'terrawhips_and_more:spiritofthemountainssummoner', 'terrawhips_and_more:soulofmountains', 1)
        boss_summon(event, 'kubejs:wizor_ring', 'alcaryabattle:wizor', 1)
        boss_summon(event, 'kubejs:totem_of_undying_golem', 'paladins_oath:golem_of_undying_new', 1)
        boss_summon(event, 'kubejs:mechanism_head', 'cyborg_vindicator', 2)
        boss_summon(event, 'kubejs:curse_bait_1', 'yahaba', 2)
        boss_summon(event, 'kubejs:abomination_summoner', 'randomweirdmobs:abomination', 1)
        boss_summon(event, 'kubejs:infernal_worm', 'chaos_project:pumpmare', 1)
        boss_summon(event, 'kubejs:sudden_skull', 'sudden_changes', 2)
        boss_summon(event, 'kubejs:punisher_skull', 'gomwaga:punisher', 1)
        boss_summon(event, 'kubejs:farfadox_core', 'youtubersgod:farfadox', 1)
        boss_summon(event, 'kubejs:fir_core', 'youtubersgod:fir', 1)
        boss_summon(event, 'kubejs:curse_bait_2', 'hand_demon', 2)
        boss_summon(event, 'kubejs:curse_bait_3', 'hoshi_kirara', 2)
        boss_summon(event, 'kubejs:curse_bait_4', 'morgan', 2)
        boss_summon(event, 'kubejs:evil_snowball', 'frosty', 2)
        boss_summon(event, 'kubejs:furious_head', 'organizers:furiousarmor', 1)
        boss_summon(event, 'kubejs:bone_crush', 'chaos_project:bone_breaker', 1)
        boss_summon(event, 'kubejs:curse_bait_5', 'charles_bernard', 2)
        boss_summon(event, 'kubejs:bobicraft_core', 'youtubersgod:bobicraft', 1)
        boss_summon(event, 'kubejs:curse_bait_6', 'higuma', 2)
        boss_summon(event, 'kubejs:curse_bait_7', 'fullbody', 2)
        boss_summon(event, 'faded_conquest_2:terrible_tensummon', 'faded_conquest_2:terrible_ten', 1)
        boss_summon(event, 'kubejs:knight_ring', 'alcaryabattle:magmagolem', 1)
        boss_summon(event, 'meetyourfight:haunted_bell', 'meetyourfight:bellringer', 1)
        boss_summon(event, 'kubejs:horror_skull', 'horrortale_sans', 2)
        boss_summon(event, 'kubejs:mutant_sniffer_egg', 'mutant_sniffer', 2)
        boss_summon(event, 'kubejs:curse_bait_8', 'tashigi', 2)
        boss_summon(event, 'kubejs:curse_bait_9', 'alvida', 2)
        boss_summon(event, 'kubejs:curse_bait_10', 'alvida_2', 2)
        boss_summon(event, 'legendary_monsters:eye_of_air', 'cloud_golem', 2)
        boss_summon(event, 'kubejs:mechanical_carrot', 'crimson_steves_mobs:t_rabus', 1)
        boss_summon(event, 'kubejs:curse_bait_11', 'susamaru', 2)
        boss_summon(event, 'kubejs:aero_gem', 'kukuru', 2)
        boss_summon(event, 'kubejs:curse_bait_13', 'cursed_spirit_grade_212', 2)
        boss_summon(event, 'kubejs:minister_mask', 'goety:minister', 1)
        boss_summon(event, 'iter_rpg:seven_seas_concoction', 'iter_rpg:insatiable', 1)
        boss_summon(event, 'kubejs:frozen_warlock_gem', 'too_much_bosses:frozen_warlock', 1)
        boss_summon(event, 'kubejs:await_core', 'youtubersgod:awita', 1)
        boss_summon(event, 'kubejs:first_of_basalt', 'first_of_basalt', 2)
        boss_summon(event, 'kubejs:curse_bait_14', 'kyogai', 2)
        boss_summon(event, 'kubejs:curse_bait_15', 'hakuji', 2)
        boss_summon(event, 'kubejs:curse_bait_16', 'cursed_spirit_grade_211', 2)
        boss_summon(event, 'kubejs:curse_bait_17', 'cursed_spirit_grade_210', 2)
        boss_summon(event, 'kubejs:chad_boxer', 'chad_withered_boxer', 2)
        boss_summon(event, 'chaos_project:relict_carrot', 'chaos_project:carrepeer_king', 1)
        boss_summon(event, 'kubejs:curse_bait_18', 'haba', 2)
        boss_summon(event, 'kubejs:curse_bait_19', 'hanyu', 2)
        boss_summon(event, 'kubejs:curse_bait_20', 'yoshino_junpei', 2)
        boss_summon(event, 'chaos_project:relict_carrot', 'chaos_project:carrepeer_king', 1)
        boss_summon(event, 'skeleton_uprising:suspicious_ritual', 'skeleton_uprising:revenant_general', 1)
        boss_summon(event, 'kubejs:steel_orb', 'paladins_oath:steel_sovereign', 1)
        boss_summon(event, 'kubejs:redstone_energy', 'crimson_steves_mobs:crude_redstone_monstrosity', 1)
        boss_summon(event, 'kubejs:sand_necklace', 'normalzombiemod:tsar', 1)
        boss_summon(event, 'kubejs:dragoon_necklace', 'better_boss:doragon', 1)
        boss_summon(event, 'kubejs:plague_core', 'faded_conquest_2:the_plauge_bringer', 1)
        boss_summon(event, 'kubejs:curse_bait_21', 'rui_brother', 2)
        boss_summon(event, 'kubejs:curse_bait_22', 'rui_mother', 2)
        boss_summon(event, 'kubejs:curse_bait_23', 'chu', 2)
        boss_summon(event, 'kubejs:curse_bait_24', 'sham', 2)
        boss_summon(event, 'kubejs:curse_bait_25', 'cursed_spirit_grade_214', 2)
        boss_summon(event, 'better_boss:dede', 'better_boss:rongam', 1)
        boss_summon(event, 'kubejs:curse_bait_26', 'axe_hero', 2)
        boss_summon(event, 'kubejs:curse_bait_27', 'pudge_hero', 2)
        boss_summon(event, 'kubejs:curse_bait_28', 'juggernaut_hero', 2)
        boss_summon(event, 'kubejs:curse_bait_29', 'lina_hero', 2)
        boss_summon(event, 'kubejs:curse_bait_30', 'makomo', 2)
        boss_summon(event, 'kubejs:curse_bait_31', 'sabito', 2)
        boss_summon(event, 'kubejs:curse_bait_32', 'nobara_kugisaki', 2)
        boss_summon(event, 'kubejs:curse_bait_33', 'miwa_kasumi', 2)
        boss_summon(event, 'kubejs:curse_bait_34', 'kuroobi', 2)
        boss_summon(event, 'kubejs:curse_bait_35', 'penguin', 2)
        boss_summon(event, 'kubejs:bulldrogioth', 'bulldrogioth', 2)
        boss_summon(event, 'kubejs:drowned_conjurer_mask', 'adventuresmod:drowned_conjurer', 1)
        boss_summon(event, 'kubejs:mutant_zombified_piglin', 'mutant_zombified_piglin', 2)
        boss_summon(event, 'terrawhips_and_more:theancestorofice', 'terrawhips_and_more:souloficewitch', 1)
        boss_summon(event, 'kubejs:slime_king2', 'terra_entity:king_slime', 1)
        boss_summon(event, 'kubejs:curse_bait_36', 'buggy', 2)
        boss_summon(event, 'kubejs:curse_bait_37', 'koala', 2)
        boss_summon(event, 'kubejs:curse_bait_38', 'cursed_spirit_grade_11', 2)
        boss_summon(event, 'kubejs:curse_bait_39', 'shigemo_haruta', 2)
        boss_summon(event, 'kubejs:curse_bait_40', 'buchi', 2)
        boss_summon(event, 'kubejs:curse_bait_41', 'kez_hero', 2)
        boss_summon(event, 'kubejs:curse_bait_42', 'wei_hero', 2)
        boss_summon(event, 'mcb:zombie_will', 'mcb:undead_knight', 1)
        boss_summon(event, 'better_boss:egg', 'better_boss:rex_2', 1)
        boss_summon(event, 'bloodandmadness:eggs/silverbeast_spawn_egg', 'silverbeast', 2)
        boss_summon(event, 'the_beginning_and_heaven:eospher_shield', 'the_beginning_and_heaven:eospher', 1)
        boss_summon(event, 'kubejs:dark_shaman', 'arkane_domains:dark_shaman', 1)
        boss_summon(event, 'rpgadventures:heart_of_machine', 'rpgadventures:groblum', 1)
        boss_summon(event, 'kubejs:hunter_scroll_0', 'rock_snail', 2)
        boss_summon(event, 'kubejs:hunter_scroll_1', 'earth_loong', 2)
        boss_summon(event, 'kubejs:hunter_scroll_2', 'yianspawn', 2)
        boss_summon(event, 'kubejs:curse_bait_43', 'rui_father', 2)
        boss_summon(event, 'kubejs:curse_bait_44', 'gin', 2)
        boss_summon(event, 'kubejs:curse_bait_45', 'kuro', 2)
        boss_summon(event, 'agonysing_hell:shroomy_crown', 'agonysing_hell:kingshroos', 1)
        boss_summon(event, 'rpgadventures:heart_of_goblins', 'rpgadventures:the_goblin_king', 1)
        boss_summon(event, 'kubejs:nether_drill', 'egorsanss_bosses:nether_drillman', 1)
        boss_summon(event, 'kubejs:fortress_lamp', 'egorsanss_bosses:nether_admillar', 1)
        boss_summon(event, 'kubejs:spell_orb', 'sigmabosses:spellmaster', 1)
        boss_summon(event, 'kubejs:curse_bait_46', 'kechizu', 2)
        boss_summon(event, 'kubejs:curse_bait_47', 'krieg', 2)
        boss_summon(event, 'kubejs:hunter_scroll_3', 'beast_horseshoe_crab', 2)
        boss_summon(event, 'arcalis_bosses:cursed_pirate_hat', 'arcalis_bosses:captain_deadbone', 1)
        boss_summon(event, 'kubejs:cyromancer_orb', 'frozone:cyromancer', 1)
        boss_summon(event, 'chaos_project:ameclutch', 'chaos_project:ametholem', 1)
        boss_summon(event, 'kubejs:illawizard_wand', 'pedriki_extras:wizard', 1)
        boss_summon(event, 'kubejs:eyeillager', 'eyeillager', 2)
        boss_summon(event, 'kubejs:curse_bait_48', 'arlong', 2)
        boss_summon(event, 'kubejs:curse_bait_49', 'mimiko', 2)
        boss_summon(event, 'kubejs:curse_bait_49', 'nanako', 2)
        boss_summon(event, 'kubejs:coldread_orb', 'frozone:coldread', 1)
        boss_summon(event, 'mcb:surgical_needle', 'mcb:dread_doctor', 1)
        boss_summon(event, 'kubejs:suspicious_eyes', 'terra_entity:eye_of_cthulhu', 1)
        boss_summon(event, 'kubejs:pyromancer', 'pyromancer', 2)
        boss_summon(event, 'kubejs:lava_demon', 'lava_mutant_zombie', 2)
        boss_summon(event, 'kubejs:curse_bait_50', 'cursed_spirit_grade_13', 2)
        boss_summon(event, 'mcb:white_king_chess_piece', 'mcb:king_piece', 1)
        boss_summon(event, 'midnight_madness:enchanted_midnight_necronomicon', 'midnight_madness:skeleton_king', 1)
        boss_summon(event, 'kubejs:bullin_heart', 'bullkindar', 2)
        boss_summon(event, 'kubejs:piglin_heart', 'pigmar', 2)
        boss_summon(event, 'kubejs:nehemoth', 'nehemoth', 2)
        boss_summon(event, 'kubejs:curse_bait_51', 'hitman', 2)
        boss_summon(event, 'kubejs:curse_bait_52', 'cursed_spirit_grade_110', 2)
        boss_summon(event, 'kubejs:evil_snowball', 'big_snow_golem', 2)
        boss_summon(event, 'kubejs:tumi', 'capac', 2)
        boss_summon(event, 'kubejs:tumi', 'headclava', 2)
        boss_summon(event, 'greekfantasy:gigante_head', 'greekfantasy:geryon', 1)
        boss_summon(event, 'foodbosses:pizza_item', 'foodbosses:pizza', 1)
})


BlockEvents.rightClicked('kubejs:undergarden_boss1_block', event => {
        event.block.set('minecraft:air')
        let undergardenboss = Math.floor(Math.random() * 4)
        event.server.runCommandSilent(`execute at ${event.player.uuid} positioned ${event.block.x} ${event.block.y} ${event.block.z} run brutalbosses spawnboss undergarden_bossone_${undergardenboss}`)
})



// ItemEvents.rightClicked('kubejs:spider_tracker', event => {
//         boss_summon1(event, [285, 131, 294], [100, 100], "tales_of_element:spider_den", "育母蜘蛛巢穴")
// })

ItemEvents.rightClicked('kubejs:ferrous', event => {
        boss_summon1(event, [206, 130, 213], [100, 100], "tales_of_element:wroughtnaut_chamber", "钢之锻造室")
})

ItemEvents.rightClicked('kubejs:eye_of_frost', event => {
        boss_summon1(event, [306, 130, 313], [200, 200], "tales_of_element:frostbitten_temple", "冰霜竞技场")
})

ItemEvents.rightClicked('kubejs:eye_of_moss', event => {
        boss_summon1(event, [404, 130, 406], [300, 300], "tales_of_element:overgrown_colossus", "青苔遗迹")
})

ItemEvents.rightClicked('kubejs:eye_of_sandstorm', event => {
        boss_summon1(event, [510, 132, 510], [400, 400], "tales_of_element:ruined_pyramid", "废墟金字塔")
})

ItemEvents.rightClicked('kubejs:eye_of_ghost', event => {
        boss_summon1(event, [626, 143, 616], [500, 500], "tales_of_element:abandoned_crypt", "废弃墓穴")
})

ItemEvents.rightClicked('kubejs:eye_of_many_ribs', event => {
        boss_summon1(event, [716, 132, 725], [600, 600], "tales_of_element:ancient_stronghold", "远古要塞")
})

ItemEvents.rightClicked('mcb:ancient_figurine', event => {
        boss_summon1(event, [805, 132, 804], [700, 700], "tales_of_element:ancientreservatory", "古代巨树")
})

ItemEvents.rightClicked('kubejs:temple_eye', event => {
        boss_summon1(event, [932, 189, 923], [800, 800], "tales_of_element:temple_to_methuselah", "玛雅神庙")
})

ItemEvents.rightClicked('kubejs:book_dog_eared', event => {
        boss_summon1(event, [1010, 130, 1007], [900, 900], "tales_of_element:class", "教室")
})

ItemEvents.rightClicked('kubejs:suspicious_key', event => {
        boss_summon1(event, [31, 131, 2], [-100, -100], "tales_of_element:eyestructureoverhaul5", "守门人领地")
})

ItemEvents.rightClicked('kubejs:terminal_teleporter', event => {
        boss_summon1(event, [-100, 130, -100], [-200, -200], "tales_of_element:robotfightbeta1", "未来遗址")
})

ItemEvents.rightClicked('kubejs:spider_tracker', event => {
        boss_summon1(event, [-185, 131, -194], [-300, -300], "tales_of_element:spider_den", "育母蜘蛛巢穴")
})

ItemEvents.rightClicked('kubejs:wither_heart', event => {
        boss_summon1(event, [-294, 148, -288], [-400, -400], "tales_of_element:drowner", "溺亡者神庙")
})