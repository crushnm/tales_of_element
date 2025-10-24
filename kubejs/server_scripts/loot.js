LootJS.modifiers((event)=>{
    // const modifiers = event.getGlobalModifiers();
    // modifiers.forEach((modifier) => {
    //     console.log(modifier)
    // });
    event.addLootTypeModifier(LootType.CHEST).removeLoot('minecraft:enchanted_book')
    event.addLootTypeModifier(LootType.CHEST).removeLoot('graveyard:dark_iron_ingot')
    event.addLootTypeModifier(LootType.CHEST).removeLoot('goety:jade')
    event.addLootTableModifier("lostcities:chests/lostcitychest")
    .randomChance(0.02)
    .addLoot('kubejs:mechanical_gear');
    event.addLootTableModifier("lostcities:chests/raildungeonchest")
    .randomChance(0.02)
    .addLoot('kubejs:mechanical_gear');
    
    event.addBlockLootModifier('flavor_immersed_daily:cucumber_3')
    .randomChance(0.01)
    .addLoot('kubejs:mtm_cucumber')
    // event
    // .addEntityLootModifier(/elementalcreepers:.*/)
    // // .randomChance(0.3)
    // .addLoot('goety:soul_emerald');
    event
    .addLootTypeModifier(LootType.CHEST) // or multiple LootType.BLOCK, LootType.ENTITY ...
    .randomChance(0.01)
    .addLoot(LootEntry.of('terrawhips_and_more:slime_crown',1));
    event.removeGlobalModifier("@moonstone");
    event.removeGlobalModifier("@celestial_artifacts");




    //mobloot
    event.addEntityLootModifier('terramity:pink_fairy').addLoot("feywild:fey_dust")
    event.addEntityLootModifier('terramity:green_fairy').addLoot("feywild:fey_dust")
    event.addEntityLootModifier('terramity:blue_fairy').addLoot("feywild:fey_dust")
    event.addEntityLootModifier('iceandfire:pixie').addLoot("feywild:fey_dust")
    event.addEntityLootModifier('paladins_oath:dread_knight').addLoot('kubejs:woodblewitt')
    event.addEntityLootModifier('alcaryabattle:magmagolem').addLoot('kubejs:woodblewitt')
    event.addEntityLootModifier('alcaryabattle:shinobisaber').addLoot('kubejs:woodblewitt')
    event.addEntityLootModifier('frostbound:glacier').addLoot('kubejs:woodblewitt')
    event.addEntityLootModifier("youtubersgod:fir").addLoot('kubejs:spring_gear')
    event.addEntityLootModifier("gomwaga:punisher").addLoot('kubejs:curving_gear')
    event.addEntityLootModifier("gomwaga:harpy_of_blades").addLoot(LootEntry.withChance('armageddon_mod:hunter_cloak',0.5))
    event.addEntityLootModifier('crimsonsteves_mutant_mobs:stunt_skeleton_upper_body').addLoot(LootEntry.of('kubejs:stunt_bone',4))
    event.addEntityLootModifier('gomwaga:big_jungle_slime').addLoot(LootEntry.of('kubejs:jungle_gel',4))
    event.addEntityLootModifier('gomwaga:big_jungle_slime').addLoot(LootEntry.withChance('armageddon_mod:fisher_hat',0.5))
    event.addEntityLootModifier('chaos_project:bone_breaker').addLoot(LootEntry.of('chaos_project:emberoted_chunk',2)).removeLoot('chaos_project:raw_tin').removeLoot('chaos_project:raw_redorict').removeLoot('chaos_project:raw_mintolis').removeLoot('chaos_project:raw_tontonolim').removeLoot('chaos_project:raw_natrium')
    event.addEntityLootModifier('bloodandmadness:silverbeast').addLoot(LootEntry.of('the_beginning_and_heaven:heaven',1))
    event.addEntityLootModifier('mcb:ancient_ent').addLoot(LootEntry.of('kubejs:temple_eye',1))
    event.addEntityLootModifier('legendary_monsters:overgrown_colossus').addLoot(LootEntry.of('kubejs:overgrown_crystal',4))
    event.addEntityLootModifier('sansausremaster:horrortale_sans').addLoot(LootEntry.of('kubejs:horror_bone',4))
    event.addEntityLootModifier('legendary_monsters:dune_sentinel').addLoot(LootEntry.of('legendary_monsters:crystal_of_sandstorm',4))
    event.addEntityLootModifier('legendary_monsters:frostbitten_golem').addLoot(LootEntry.of('kubejs:centrifuge_gear',4))
    event.addEntityLootModifier('crimsonsteves_mutant_mobs:chad_withered_boxer').addLoot(LootEntry.of('kubejs:chad_boxer_bone',4))
    event.addEntityLootModifier('jujutsucraft:cursed_spirit_grade_214').addLoot(LootEntry.of('kubejs:kuoyu_gel',4))
    event.addEntityLootModifier('kimetsunoyaiba:rui_father').addLoot(LootEntry.of('kubejs:energiser_gear',4))
    event.addEntityLootModifier('kimetsunoyaiba:sabito').addLoot(LootEntry.of('kubejs:helve_gear',4))
    event.addEntityLootModifier('mcb:king_piece').addLoot(LootEntry.of('kubejs:chess',4))
    event.addEntityLootModifier('gomwaga:harpy_of_blades').addLoot(LootEntry.of('kubejs:harpy_feather',2))
    event.addEntityLootModifier('mcb:undead_knight').addLoot(LootEntry.of('kubejs:lathe_gear',4))
    event.addEntityLootModifier('threateningly_mobs:hydra').addLoot(LootEntry.of('threateningly_mobs:horsehoecrab_blood',2))
    event.addEntityLootModifier('alcaryabattle:cyborg').addLoot(LootEntry.of('iter_rpg:iron_ring_sanguarnet'))
    event.addEntityLootModifier('alcaryabattle:reaper').addLoot(LootEntry.of('iter_rpg:iron_ring_diamond'))
    event.addEntityLootModifier('crimson_steves_mobs:cyborg_vindicator').addLoot(LootEntry.of('iter_rpg:iron_ring_emerald'))
    event.addEntityLootModifier('gomwaga:punisher').addLoot(LootEntry.of('iter_rpg:iron_ring_amethyst'))
    event.addEntityLootModifier('youtubersgod:farfadox_frenzy').addLoot(LootEntry.of('goety:scatter_focus'))
    event.addEntityLootModifier('organizers:furiousarmor').addLoot(LootEntry.of('iter_rpg:iron_ring_magmanum'))
    event.addEntityLootModifier('youtubersgod:bobicraft_corrupto').addLoot(LootEntry.of('iter_rpg:iron_ring_magmanum'))
    event.addEntityLootModifier('crimson_steves_mobs:big_snow_golem').addLoot(LootEntry.of('kubejs:snow_essence',4))
    event.addEntityLootModifier('paladins_oath:golem_of_undying_new').addLoot(LootEntry.of('paladins_oath:undying_scrap',4))
    event.addEntityLootModifier('terra_entity:king_slime').addLoot(LootEntry.of('kubejs:king_gel',6))
    event.addEntityLootModifier('randomweirdmobs:eyeofwater').addLoot(LootEntry.of('kubejs:tear_crystal',6))
    event.addEntityLootModifier('gomwaga:harpy_of_blades').removeLoot('gomwaga:gomwaga_bag')
    event.addEntityLootModifier('sansausremaster:sudden_changes').removeLoot('goety:burrowing_focus')
    event.addEntityLootModifier('youtubersgod:fir_naturaleza').removeLoot('goety:scatter_focus')
    event.addEntityLootModifier('dota:crystal_maiden_hero').addLoot(LootEntry.of('iter_rpg:iron_ring_flint'))
    event.addEntityLootModifier('too_much_bosses:frozen_warlock').addLoot(LootEntry.of('iter_rpg:iron_ring_stardust_ice'))
    event.addEntityLootModifier('gomwaga:big_jungle_slime').removeLoot('gomwaga:gomwagnumingot')
    event.addEntityLootModifier('gomwaga:big_jungle_slime').removeLoot('gomwaga:ritogium_ingot')
    event.addEntityLootModifier('gomwaga:big_jungle_slime').removeLoot('gomwaga:gomwaga_bag')
    event.addEntityLootModifier('minecraft:villager').removeLoot('mcb:surgical_needle')
    event.addEntityLootModifier('gomwaga:punisher').removeLoot('gomwaga:gomwaga_bag')
    event.addEntityLootModifier('sigmabosses:spellmaster').removeLoot('sigmabosses:thing_1_armor_helmet')
    event.addEntityLootModifier('aquamirae:maze_mother').removeLoot('aquamirae:abyssal_amethyst')

})


// OVERHAUL FUNCTION SCRIPT (Hardcoded) (Use $u, meaning undefined for parameters that aren't needed)
LootJS.modifiers(event => {


    // CONSTANT VARIABLE FOR UNDEFINED PARAMETERS
    const $u = undefined;


    // CUSTOM FUNCTION TO DEFINE CONDITIONS AND BUILDER FOR THE FISHING LOOT TABLES!!

    function fishingLoot(event, anybiomes, biomes, chance, luckychance1, luckychance2, luckychance3, luckychance4, loot) {

        // VARIABLE TO HOLD THE FISHING MODIFIER BUILDER
        let builder = event.addLootTypeModifier(LootType.FISHING);


        // LOGIC FOR ANY BIOMES (Checks if ANY biome/biome tag matches)
        if (anybiomes) {

            builder.anyBiome(anybiomes);

        }


        // LOGIC FOR BIOME CHECKS (Check if equal to EXACTLY a particular biome/biome tag)
        if (biomes) {

            builder.biome(biomes);

        }

        return builder.randomChanceWithEnchantment('luck_of_the_sea', [chance, luckychance1, luckychance2, luckychance3, luckychance4]).addLoot(loot); // RETURN THE MODIFIED LOOT TABLE RESULTS WITH RESPECTIVE MODIFIERS

    }





    // COLD BIOME FISHING LOOT

    // SIMPLER FUNCTION FORMAT: event, ANY BIOME THAT MATCHES, SPECIFIC BIOME THAT MATCHES, 
    // THEN: loot item with whatever functions on it (LOOT ENTRY OR ITEM.OF), default chance, luck of sea 1 chance, luck of sea 2 chance etc


    // // FISH ONLY
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.4, 0.4, 0.4, 0.4, 0.4, LootEntry.of('minecraft:cod').limitCount([1, 2])); // 40% Chance of 1 - 2 Cod
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.2, 0.2, 0.2, 0.2, 0.2, LootEntry.of('minecraft:salmon').limitCount([1, 2])); // 20% Chance of 1 - 2 Salmon
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.2, 0.2, 0.2, 0.2, 0.2, LootEntry.of('naturalist:bass').limitCount([1, 2])); // 20% Chance of 1 - 2 Bass
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.2, 0.2, 0.2, 0.2, 0.2, LootEntry.of('naturalist:catfish').limitCount([1, 2])); // 20% Chance of 1 - 2 Catfish


    // // JUNK ONLY
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.05, 0.05, 0.05, 0.05, 0.05, LootEntry.of('kubejs:plant_string').limitCount([1, 2])); // 5% Chance of 1 - 2 Plant String
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.05, 0.05, 0.05, 0.05, 0.05, LootEntry.of('minecraft:stick').limitCount([1, 2])); // 5% Chance of 1 - 2  Sticks
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.05, 0.05, 0.05, 0.05, 0.05, LootEntry.of('minecraft:ink_sac').limitCount([1, 2])); // 5% Chance of 1 - 2 Ink Sacs
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.05, 0.05, 0.05, 0.05, 0.05, LootEntry.of('minecraft:bowl').limitCount([1, 2])); // 5% Chance of 1 - 2 Bowls
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.05, 0.1, 0.1, 0.1, 0.1, LootEntry.of('minecraft:potion', '{Potion:"minecraft:water",Purity:2}').limitCount([1, 2])); // 5% Chance of 1 - 2 Water Bottle (Purified cause I'm nice XD)
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.05, 0.1, 0.1, 0.1, 0.1, LootEntry.of('cold_sweat:goat_fur').limitCount([1, 2])); // 5% Chance of 1 - 2 Goat Fur
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.05, 0.1, 0.1, 0.1, 0.1, LootEntry.of('minecraft:leather_boots').damage([0, 1]).limitCount(1)); // 5% Chance of DAMAGED (0 min - 1 max) Leather Boots
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.05, 0.1, 0.1, 0.1, 0.1, LootEntry.of('minecraft:leather_leggings').damage([0,1]).limitCount(1)); // 5% Chance of DAMAGED (0 min - 1 max) Leather Leggings
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.05, 0.1, 0.1, 0.1, 0.1, LootEntry.of('minecraft:leather_chestplate').damage([0,1]).limitCount(1)); // 5% Chance of DAMAGED (0 min - 1 max) Leather Chestplate
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.05, 0.1, 0.1, 0.1, 0.1, LootEntry.of('minecraft:leather_helmet').damage([0, 1]).limitCount(1)); // 5% Chance of DAMAGED (0 min - 1 max) Leather Helmet
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.05, 0.05, 0.05, 0.05, 0.05, LootEntry.of('minecraft:leather').limitCount([1, 2])); // 5% Chance of 1 - 2 Leather
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.05, 0.05, 0.05, 0.05, 0.05, LootEntry.of('minecraft:flint').limitCount([1, 2])); // 5% Chance of 1 - 2 Flint
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.05, 0.1, 0.1, 0.1, 0.1, LootEntry.of('minecraft:coal').limitCount([1, 2])); // 5% Chance of 1 - 2 Coal
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.05, 0.1, 0.1, 0.1, 0.1, LootEntry.of('minecraft:charcoal').limitCount([1, 2])); // 5% Chance of 1 - 2 Charcoal



    // // TREASURE LOOT ONLY
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of("minecraft:book").enchantRandomly(['aqua_affinity', 'bane_of_arthropods', 'binding_curse', 'blast_protection',
    //     'channeling', 'depth_strider', 'efficiency', 'farmersdelight:backstabbing', 'feather_falling', 'fire_aspect', 'fire_protection', 'flame', 'fortune', 'frost_walker',
    //     'impaling', 'infinity', 'infinity', 'knockback', 'kubejs:thunderstrike', 'looting', 'loyalty', 'luck_of_the_sea', 'lure', 'mending', 'multishot', 'vanishing_curse',
    //     'unbreaking', 'thorns', 'swift_sneak', 'sweeping', 'supplementaries:stasis', 'soul_speed', 'soul_flame', 'soul_fire_aspect', 'smite', 'silk_touch', 'sharpness',
    //     'riptide', 'respiration', 'quick_charge', 'punch', 'protection', 'projectile_protection', 'power', 'piercing']).limitCount(1)); // 0.01% Chance of 1 ENCHANTED BOOK
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of("enchanted_golden_apple").limitCount([1, 3])); // 0.01% Chance of Enchanted Golden Apple
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:4s}]}').limitCount(1)); // 0.01% Chance of ALL ANCIENT TOMES
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:thorns",lvl:3s}]}').limitCount(1));
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:5s}]}').limitCount(1));
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:smite",lvl:5s}]}').limitCount(1));
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:5s}]}').limitCount(1));
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:knockback",lvl:2s}]}').limitCount(1));
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:2s}]}').limitCount(1));
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:looting",lvl:3s}]}').limitCount(1));
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:3s}]}').limitCount(1));
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:5s}]}').limitCount(1));
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:3s}]}').limitCount(1));
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:fortune",lvl:3s}]}').limitCount(1));
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:power",lvl:5s}]}').limitCount(1));
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:punch",lvl:2s}]}').limitCount(1));
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:3s}]}').limitCount(1));
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:lure",lvl:3s}]}').limitCount(1));
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:3s}]}').limitCount(1));
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:impaling",lvl:5s}]}').limitCount(1));
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:riptide",lvl:3s}]}').limitCount(1));
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of('quark:ancient_tome', '{StoredEnchantments:[{id:"minecraft:piercing",lvl:4s}]}').limitCount(1));
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of("cold_sweat:goat_fur_boots").limitCount(1)); // 0.01% CHANCE OF GOAT FUR INSULATION
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of("cold_sweat:goat_fur_cap").limitCount(1));
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of("cold_sweat:goat_fur_pants").limitCount(1));
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of("cold_sweat:goat_fur_parka").limitCount(1));
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of("cold_sweat:soulspring_lamp").limitCount(1)); // 0.01% CHANCE OF SOULSPRING LAMP
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of("cold_sweat:thermometer").limitCount(1)); // 0.01% CHANCE OF THERMOMETER
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of("golden_apple").limitCount([1, 4])); // 0.01% CHANCE 1 - 4 GOLDEN APPLES
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of("name_tag").limitCount([1, 2])); // 0.01% CHANCE 1 - 2 NAME TAGS
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of("recovery_compass").limitCount(1)); // 0.01% CHANCE RECOVERY COMPASS
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of("ender_eye").limitCount([1, 2])); // 0.01% CHANCE 1 - 2 EYES OF ENDER
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of("saddle").limitCount(1)); // 0.01% CHANCE SADDLE
    // fishingLoot(event, ["#forge:is_cold"], $u, 0.0001, 0.001, 0.01, 0.05, 0.1, LootEntry.of("quark:abacus").limitCount(1)); // 0.01% CHANCE ABACUS
});


