ServerEvents.recipes(event => { //listen for the "recipes" server event.

  //还没用
  event.remove({ id: 'paladins_oath:a_7' })
  // boss掉落
  event.remove({ id: 'iter_rpg:ring_iron_sanguarnet_craft' })
  event.remove({ id: 'iter_rpg:ring_iron_diamond_craft' })
  event.remove({id:'iter_rpg:ring_iron_abyssquartz_craft'})
  event.remove({id:'iter_rpg:ring_iron_stardust_ice_craft'})
  event.remove({id:'iter_rpg:ring_iron_stardust_ice_decraft'})
  event.remove({id:'extremecore:heaven_remnantsrecpie'})
  event.remove({id:'iter_rpg:ring_iron_flint_craft'})
  event.remove({id:'iter_rpg:ring_iron_emerald_craft'})
  event.remove({id:'iter_rpg:ring_iron_amethyst_craft'})
  event.remove({id:'goety:focus/burrowing_focus'})
  event.remove({id:'iter_rpg:ring_iron_magmanum_craft'})
  event.remove({id:'iter_rpg:ring_iron_magmanum_decraft'})
  event.remove({id:'iter_rpg:ring_iron_awakened_sanguarnet_craft'})
  event.remove({id:'iter_rpg:ring_iron_awakened_sanguarnet_decraft'})
  event.remove({id: /minecraft:doll_.*/ });
  //有序合成
  event.remove({ id: 'undergarden:shard_to_crystal' })
  // event.remove({output:'beansbackpacks:backpack'})
  event.remove({id:'kaleidoscope_doll:doll_machine'})
  event.remove({id:'the_beginning_and_heaven:recetajoyeria'})
  event.remove({ id: 'undergarden:froststeel_nugget_to_ingot' })
  event.remove({ id: 'beansbackpacks:leather_backpack' })
  event.remove({ id: 'beansbackpacks:iron_backpack' })
  event.remove({ id: 'ad_astra:coal_generator' })
  event.remove({id:'sigmabosses:bossspawncraft'})
  event.remove({id:'armageddon_mod:gilded_plate_recipe'})
  event.remove({ id: 'terrawhips_and_more:spawnkingcraft' })
  event.remove({ id: 'armageddon_mod:gildedshacklesrecipe' })
  event.remove({ id: 'silentgear:katana_template' })
  event.remove({ id: 'silentgear:machete_template' })
  event.remove({ id: 'silentgear:spear_template' })
  event.remove({ id: 'silentgear:knife_template' })
  event.remove({ id: 'silentgear:dagger_template' })
  event.remove({ id: 'silentgear:paxel_template' })
  event.remove({ id: 'silentgear:hammer_template' })
  event.remove({ id: 'normalzombiemod:tsarcraft' })
  event.remove({ id: 'silentgear:excavator_template' })
  event.remove({ output: 'gomwaga:sharp_leaf' })
  event.remove({ id: 'silentgear:saw_template' })
  event.remove({ id: 'silentgear:mattock_template' })
  event.remove({ id: 'silentgear:prospector_hammer_template' })
  event.remove({ id: 'silentgear:sickle_template' })
  event.remove({ id: 'silentgear:bow_template' })
  event.remove({ id: 'silentgear:crossbow_template' })
  event.remove({ id: 'silentgear:blueprint_paper' })
  event.remove({ id: 'silentgear:ring_template' })
  event.remove({ id: 'silentgear:bracelet_template' })
  event.remove({ id: 'ancient_elements:mineral_compounder' })
  event.remove({ id: 'randomweirdmobs:dscraft' })
  event.remove({ id: 'undergarden:catalyst' })
  event.remove({ id: 'wrd:block_of_skulls_r' })
  event.remove({ id: 'mna:improvised_manaweaver_wand' })
  event.remove({ id: 'aether:leather_gloves' })
  event.remove({ id: 'aether:iron_gloves' })
  event.remove({ id: 'ceilands:spider_silk' })
  event.remove({ id: 'aether:golden_gloves' })
  event.remove({ id: 'aether:diamond_gloves' })
  event.remove({ id: 'goety:empty_focus_burner' })
  event.remove({ id: 'crossroads:base_materials/bronze_alloy_ingot' })
  event.remove({ id: 'legendary_monsters:eye_of_sandstorm' })
  event.remove({ id: 'create:crafting/kinetics/spout' })
  event.remove({ id: 'the_pumpkin_challenge:pumpkin_medallion_craft' })
  event.remove({ id: 'create:mixing/brass_ingot' })
  event.remove({id:'terramity:sapphire_ring_recipe'})
  event.remove({ id: 'aether:netherite_gloves_smithing' })
  event.remove({ id: 'gomwaga:gomwaga_bag_craft' })
  event.remove({ id: 'kitchenkarrot:carrot_spices_from_carrot' })
  event.remove({ id: 'kitchenkarrot:carrot_spices_from_gem_carrot' })
  event.remove({ id: 'meetyourfight:passages_toll' })
  event.remove({ id: 'gaiadimension:glint_and_gold' })
  event.remove({ id: 'extremecore:wither_skull_recipe' })
  event.remove({id:'infinite_abyss:fourth_layer_key_recipe'})
  event.remove({ id: 'meetyourfight:caged_heart' })
  event.remove({ id: 'paladins_oath:b_6' })
  event.remove({ id: 'gomwaga:b_ig_seed_craft_2' })
  event.remove({ id: 'gomwaga:strange_slimeball_craft' })
  event.remove({id:'the_beginning_and_heaven:altohornocobrepuro'})
  event.remove({ mod: "irons_spellbooks" })
  event.remove({ mod: "gateways" })
  event.remove({ id: 'youkaishomecoming:drying_rack_from_bamboo_block_stonecutting' })
  event.remove({ id: 'goety:empty_focus_craft' })
  event.remove({ id: 'gomwaga:mark_of_jungles_craft' })
  event.remove({id:'agonysing_hell:staff_of_greed_craft'})
  event.remove({id:'agonysing_hell:corrupter_stick_craft'})
  event.remove({ id: 'gomwaga:big_seedcraft' })
  event.remove({ id: 'dungeons_and_combat:combat_style_manual_recipe' })
  event.remove({ id: 'enigmaticlegacy:enchantment_transposer' })
  event.remove({ id: 'gomwaga:big_seedcraft_2' })

  event.shaped('kubejs:reaper_warrior_eye', [// arg 1: output
    'A B',
    'ACB', // arg 2: the shape (array of strings)
    'A B'
  ], {
    A: 'minecraft:copper_ingot',
    B: 'ancient_elements:tin_ingot',  //arg 3: the mapping object
    C: 'undergarden:utheric_shard'
  }
  )

  event.shaped('create:spout', [// arg 1: output
    ' A ',
    ' B ', // arg 2: the shape (array of strings)
    ' C '
  ], {
    A: 'create:copper_casing',
    B: 'minecraft:dried_kelp',  //arg 3: the mapping object
    C: 'kubejs:ferrous_ingot'
  }
  )

  event.shaped('kubejs:first_of_basalt', [// arg 1: output
    'CAC',
    'BBB', // arg 2: the shape (array of strings)
    ' B '
  ], {
    A: 'emotive_blocks:scarypumpkin',
    B: 'minecraft:basalt',  //arg 3: the mapping object
    C: 'the_pumpkin_challenge:ectoplasm'
  }
  )

  event.remove({ id: 'silentgear:template_board' })
  event.shapeless(
    Item.of('silentgear:template_board', 4), // arg 1: output
    [
      'minecraft:copper_ingot',
      '#minecraft:logs'
    ]
  )

  event.remove({ output: 'armageddon_mod:iron_remote' })
  event.shaped('armageddon_mod:iron_remote', [// arg 1: output
    'DAE',
    'AFA', // arg 2: the shape (array of strings)
    'CAB'
  ], {
    A: 'minecraft:iron_ingot',
    B: 'minecraft:gunpowder',  //arg 3: the mapping object
    C: 'minecraft:rotten_flesh',
    D: 'minecraft:spider_eye',
    E: "minecraft:bone",
    F: "#minecraft:flowers"
  }
  )

  event.remove({ id: 'gnumus:vintage_rifle_k' })
  event.shaped('gnumus:vintage_rifle', [// arg 1: output
    '   ',
    'AAB', // arg 2: the shape (array of strings)
    'CDE'
  ], {
    A: 'gnumus:vintage_alloy_ingot',
    B: 'gnumus:vintage_parts',  //arg 3: the mapping object
    C: 'armageddon_mod:colossal_iron_ingot',
    D: 'gnumus:vintage_charger',
    E: '#minecraft:logs'
  }
  )

  event.remove({ id: 'create_new_age:shaped/redstone_magnet' })
  event.shaped('2x create_new_age:redstone_magnet', [// arg 1: output
    ' A ',
    'ABA', // arg 2: the shape (array of strings)
    ' A '
  ], {
    A: 'extendedcrafting:redstone_ingot',
    B: 'create_new_age:magnetite_block'
  }
  )

  event.remove({ id: 'skeleton_uprising:spinewhip_r' })
  event.shaped('skeleton_uprising:spinewhip', [// arg 1: output
    ' AC',
    'ABB', // arg 2: the shape (array of strings)
    'DC '
  ], {
    A: 'armageddon_mod:splintered_bone',
    B: 'skeleton_uprising:vertebrae',
    C: 'skeleton_uprising:mystic_bone',
    D: 'silentgear:fishing_rod_blueprint'
  }
  )

  event.remove({ id: 'create_new_age:shaped/layered_magnet' })
  event.shaped('2x create_new_age:layered_magnet', [// arg 1: output
    ' C ',
    'ABA', // arg 2: the shape (array of strings)
    ' C '
  ], {
    A: 'create_new_age:overcharged_gold',
    B: 'create_new_age:magnetite_block',
    C: 'create_new_age:overcharged_iron'
  }
  )

  event.remove({ id: 'create_new_age:shaped/fluxuated_magnetite' })
  event.shaped('2x create_new_age:fluxuated_magnetite', [// arg 1: output
    'BAB',
    'ACA', // arg 2: the shape (array of strings)
    'BAB'
  ], {
    A: 'create_new_age:overcharged_diamond',
    B: 'create_new_age:magnetite_block',
    C: 'threateningly_mobs:lighting_gem'
  }
  )

  event.remove({ id: 'gnumus:lucky_hat_k' })
  event.shaped('gnumus:lucky_hat_helmet', [// arg 1: output
    ' B ',
    'CAD', // arg 2: the shape (array of strings)
    'AAA'
  ], {
    A: '#minecraft:mouse_rabbit_skin',
    B: 'silentgear:helmet_template',  //arg 3: the mapping object
    C: 'gnumus:gnumus_claw',
    D: 'minecraft:rabbit_foot'
  }
  )

  event.remove({ output: 'goety:cursed_infuser' })
  event.shaped('goety:cursed_infuser', [// arg 1: output
    ' C ',
    'DAD', // arg 2: the shape (array of strings)
    'EBE'
  ], {
    A: '#forge:storage_blocks/steel',
    B: 'reactive:crucible',
    C: 'goety:soul_emerald',
    D: 'reactive:runestone',
    E: 'goety:shade_stone'  //arg 3: the mapping object
  }
  )

  event.remove({ output: 'minecraft:furnace' })
  event.shaped('minecraft:furnace', [// arg 1: output
    'AAA',
    'ACA', // arg 2: the shape (array of strings)
    'AAA'
  ], {
    A: '#forge:cobblestone',
    C: 'minecraft:iron_nugget',  //arg 3: the mapping object
  }
  )

  event.remove({ output: 'create:windmill_bearing' })
  event.shaped('create:windmill_bearing', [// arg 1: output
    ' B ',
    'ACA', // arg 2: the shape (array of strings)
    ' D '
  ], {
    B: 'minecraft:lime_carpet',
    A: '#forge:plates/iron',
    C: 'goety:shade_stone',
    D: 'create:shaft'  //arg 3: the mapping object
  }
  )

  event.remove({ output: 'reactive:scroll' })
  event.shaped('reactive:scroll', [// arg 1: output
    'EBD',
    'ACA', // arg 2: the shape (array of strings)
    'DB '
  ], {
    B: 'minecraft:redstone_wire',
    A: 'minecraft:cave_vines',
    C: 'pasterdream:pergamyn',
    D: 'mna:resonating_dust',
    E: 'kubejs:spider_fang'  //arg 3: the mapping object
  }
  )

  // event.shaped('kubejs:cyborg', [// arg 1: output
  //     ' C ',
  //     'BAB', // arg 2: the shape (array of strings)
  //     'DBD'
  // ], {
  //     B: 'minecraft:dark_oak_log',
  //     A: '#forge:gears/iron',
  //     C: 'minecraft:carved_pumpkin',
  //     D: 'goety:ectoplasm'  //arg 3: the mapping object
  // }
  // )

  event.shaped('mbd2:undergarden_furnace', [// arg 1: output
    'AAA',
    'A A', // arg 2: the shape (array of strings)
    'AAA'
  ], {
    A: 'undergarden:depthrock'
  }
  )


  event.remove({ output: 'create:water_wheel' })
  event.shaped('create:water_wheel', [// arg 1: output
    'BBB',
    'ACA', // arg 2: the shape (array of strings)
    ' D '
  ], {
    B: '#minecraft:logs',
    A: '#forge:plates/iron',
    C: 'goety:shade_stone',
    D: 'create:shaft'  //arg 3: the mapping object
  }
  )

  event.remove({ id: 'goety:dark_wand' })
  event.shaped(
    Item.of('goety:dark_wand'),
    [
      'ABA',
      ' C ',
      ' D '
    ],
    {
      B: 'goety:empty_focus',
      C: 'malum:rune_of_volatile_distortion',
      A: 'goety:magic_fabric',
      D: 'goety:haunted_planks'
    }
  )

  event.remove({ id: 'armageddon_mod:strange_coin_recipe' })

  event.remove({ output: 'armageddon_mod:emerald_totem' })
  event.shaped('armageddon_mod:emerald_totem', [// arg 1: output
    ' A ',
    'ACA', // arg 2: the shape (array of strings)
    ' A '
  ], {
    A: 'goety:magic_emerald',
    C: 'armageddon_mod:sleepy_emerald_totem',  //arg 3: the mapping object
  }
  )

  event.shaped('bloodandmadness:eggs/silverbeast_spawn_egg', [// arg 1: output
    ' E ',
    'BAD', // arg 2: the shape (array of strings)
    ' C '
  ], {
    A: 'better_boss:ken',
    B: 'naturesaura:tainted_gold',
    C: 'naturesaura:infused_iron',
    D: 'divinerpg:oxdrite_ingot',
    E: 'divinerpg:ice_stone'  //arg 3: the mapping object
  }
  )

  event.remove({ output: 'goety:totem_of_roots' })


  event.remove({ output: 'mekanismgenerators:heat_generator' })
  event.shaped('mekanismgenerators:heat_generator', [// arg 1: output
    'EDE',
    'B B', // arg 2: the shape (array of strings)
    'ECE'
  ], {
    B: '#forge:silicon',
    C: 'minecraft:blast_furnace',
    D: 'kubejs:mechanical_gear',
    E: '#forge:plates/copper'  //arg 3: the mapping object
  }
  )

  event.remove({ output: 'armageddon_mod:builder_stone' })
  event.shaped('armageddon_mod:builder_stone', [// arg 1: output
    'BCB',
    'DAD', // arg 2: the shape (array of strings)
    'BDB'
  ], {
    A: 'armageddon_mod:ancient_blueprint',
    C: 'the_forgotten_dimensions:redstone_nucleus',
    B: 'goety:shade_stone',
    D: 'goety:cursed_ingot'  //arg 3: the mapping object
  }
  )

  event.remove({ id: 'ad_astra:etrionic_blast_furnace' })
  event.shaped('ad_astra:etrionic_blast_furnace', [// arg 1: output
    'ADA',
    'DCD', // arg 2: the shape (array of strings)
    'ADA'
  ], {
    A: '#forge:plates/iron',
    C: 'kubejs:mechanical_gear',
    D: 'the_forgotten_dimensions:lesser_redstone_nucleus'  //arg 3: the mapping object
  }
  )

  event.remove({ id: 'skeleton_uprising:old_crown_r' })
  event.shaped('skeleton_uprising:old_crown', [// arg 1: output
    ' C ',
    'BAB', // arg 2: the shape (array of strings)
    '   '
  ], {
    A: 'terrawhips_and_more:slime_crown',
    B: 'kubejs:stunt_bone',
    C: 'minecraft:gold_block'  //arg 3: the mapping object
  }
  )

  event.shaped('midnight:rift_placer', [// arg 1: output
    ' C ',
    'BBB', // arg 2: the shape (array of strings)
    'AAA'
  ], {
    A: 'terrawhips_and_more:ectoplasm',
    B: 'midnight:corrupted_pearl',
    C: '#minecraft:doors'  //arg 3: the mapping object
  }
  )

  event.remove({ id: 'silentgear:metal_alloyer' })


  event.shaped('tofucraft:tofustick', [// arg 1: output
    '  C',
    ' B ', // arg 2: the shape (array of strings)
    'A  '
  ], {
    A: '#forge:rods/constantan',
    B: 'tofucraft:tofumetal',
    C: 'goety:ominous_shard'  //arg 3: the mapping object
  }
  )

  event.remove({ id: 'createmetallurgy:foundry_mixer' })
  event.shaped('createmetallurgy:foundry_mixer', [// arg 1: output
    ' C ',
    ' B ', // arg 2: the shape (array of strings)
    ' A '
  ], {
    A: 'createmetallurgy:sturdy_whisk',
    B: 'create:copper_casing',
    C: 'kubejs:horror_bone'  //arg 3: the mapping object
  }
  )

  event.remove({ id: 'flavor_immersed_daily:bonecutterknifemaking' })
  event.shaped('flavor_immersed_daily:bonecutterknife', [// arg 1: output
    ' CC',
    'CBB', // arg 2: the shape (array of strings)
    '  A'
  ], {
    A: '#forge:rods/wooden',
    B: '#forge:ingots/bronze',
    C: '#forge:nugget/bronze'  //arg 3: the mapping object
  }
  )

  event.remove({ id: 'pneumaticcraft:thermopneumatic_processing_plant' })
  event.shaped('pneumaticcraft:thermopneumatic_processing_plant', [// arg 1: output
    'CCC',
    'DBD', // arg 2: the shape (array of strings)
    'CAC'
  ], {
    A: 'kubejs:snow_essence',
    B: 'pneumaticcraft:pressure_tube',
    C: 'pneumaticcraft:reinforced_stone_slab',
    D:'pneumaticcraft:small_tank'  //arg 3: the mapping object
  }
  )

  event.remove({ id: 'vintageimprovements:craft/laser' })
  event.shaped('vintageimprovements:laser', [// arg 1: output
    'ABA',
    'CDE', // arg 2: the shape (array of strings)
    'FGF'
  ], {
    A: 'create:cogwheel',
    B: 'minecraft:redstone_block',
    C: 'create:precision_mechanism',
    D: 'create:brass_casing',
    E: 'vintageimprovements:iron_spring',
    F: 'the_beginning_and_heaven:light_fallen',
    G: 'vintageimprovements:laser_item'  //arg 3: the mapping object
  }
  )

  event.remove({ id: 'flavor_immersed_daily:agriculturalappraisalmachinemaking' })
  event.shaped('flavor_immersed_daily:agriculturalappraisalmachine', [// arg 1: output
    'CAC',
    'ABA', // arg 2: the shape (array of strings)
    'CAC'
  ], {
    A: '#forge:ingots/invar',
    B: 'minecraft:redstone_block',
    C: 'minecraft:wheat'  //arg 3: the mapping object
  }
  )

  event.remove({ id: 'pasterdream:crafting_82' })
  event.shaped('pasterdream:protect_deck', [// arg 1: output
    'AA ',
    'BC ', // arg 2: the shape (array of strings)
    '   '
  ], {
    A: 'vintageimprovements:silver_spring',
    B: 'minecraft:leather',
    C: 'pasterdream:fabric'  //arg 3: the mapping object
  }
  )

  event.remove({ id: 'naturesaura:offering_table' })
  event.shaped('naturesaura:offering_table', [// arg 1: output
    'CDC',
    'ACB', // arg 2: the shape (array of strings)
    'EEE'
  ], {
    A: 'naturesaura:token_sorrow',
    B: 'naturesaura:token_fear',
    C: 'unearthed_journey:pelt',
    E: '#minecraft:logs',
    D: 'rpgadventures:steel_ingot'  //arg 3: the mapping object
  }
  )

  event.remove({ id: 'create:crafting/kinetics/basin' })
  event.shaped('create:basin', [// arg 1: output
    '   ',
    'A A', // arg 2: the shape (array of strings)
    'AAA'
  ], {
    A: 'reactive:runestone'  //arg 3: the mapping object
  }
  )

  event.remove({ id: 'mna:runeforge_alt' })
  event.remove({ id: 'mna:runeforge' })
  event.shaped('mna:runeforge', [// arg 1: output
    'DED',
    'BAB', // arg 2: the shape (array of strings)
    'CAC'
  ], {
    A: 'mna:decoration/arcane_sandstone',
    B: '#mna:stone_runes',
    C: 'malum:soulwood_log',
    D: 'mna:transmuted_silver',
    E: 'kubejs:jungle_gel'  //arg 3: the mapping object
  }
  )

  event.remove({ id: 'vintageimprovements:craft/spring_coiling_machine' })
  event.shaped('vintageimprovements:spring_coiling_machine', [// arg 1: output
    'AD ',
    'BCE', // arg 2: the shape (array of strings)
    'AD '
  ], {
    A: '#forge:ingots/steel',
    B: 'vintageimprovements:spring_coiling_machine_wheel',
    C: 'kubejs:spring_gear',
    D: 'create:andesite_casing',
    E: 'create:shaft'  //arg 3: the mapping object
  }
  )

  event.shaped('kubejs:curse_bait_17', [// arg 1: output
    'CD ',
    'BAB', // arg 2: the shape (array of strings)
    'CC '
  ], {
    A: 'tide:magnetic_bait',
    B: 'biomancy:mob_marrow',
    C: 'overworldpiglins:small_piglin_fang',
    D: 'gloom_caves:phylerite_ingot'
  }
  )

  event.remove({ id: 'vintageimprovements:craft/curving_press' })
  event.shaped('vintageimprovements:curving_press', [// arg 1: output
    ' D ',
    'ECE', // arg 2: the shape (array of strings)
    'ABA'
  ], {
    A: 'vintageimprovements:iron_spring',
    B: 'create:andesite_casing',
    C: 'kubejs:curving_gear',
    D: 'create:shaft',
    E: 'vintageimprovements:steel_spring'  //arg 3: the mapping object
  }
  )

  event.remove({ id: 'flavor_immersed_daily:kitchenknifemaking' })
  event.shaped('flavor_immersed_daily:kitchenknife',
    [
      'B  ',
      'BB ',
      '  A'
    ],
    {
      B: '#forge:ingots/invar',
      A: 'minecraft:stick'
    }
  )

  event.remove({ id: 'flavor_immersed_daily:teapotmaking' })
  event.shaped('flavor_immersed_daily:teapot',
    [
      'BB ',
      'BCC',
      'A  '
    ],
    {
      B: '#forge:ingots/invar',
      A: 'reactive:runestone',
      C: 'minecraft:clay_ball'
    }
  )
  event.shaped('kubejs:dark_shaman',
    [
      ' B ',
      'CAC',
      ' B '
    ],
    {
      B: 'the_beginning_and_heaven:pure_copper',
      A: 'forbidden_arcanus:cloth',
      C: 'the_beginning_and_heaven:aetherium'
    }
  )

  event.remove({ id: 'flavor_immersed_daily:squeezingmachinemaking' })
  event.shaped('flavor_immersed_daily:squeezingmachine',
    [
      'BAB',
      'BAB',
      'BCB'
    ],
    {
      B: 'create:framed_glass_pane',
      A: '#forge:ingots/constantan',
      C: 'minecraft:piston'
    }
  )

  event.remove({ id: 'flavor_immersed_daily:dryermaking' })
  event.shaped('flavor_immersed_daily:dryer',
    [
      'BBB',
      'AAA',
      'BBB'
    ],
    {
      B: '#forge:ingots/constantan',
      A: 'minecraft:white_wool'
    }
  )

  event.remove({ id: 'vintageimprovements:craft/vacuum_chamber' })
  event.shaped('vintageimprovements:vacuum_chamber', [// arg 1: output
    ' D ',
    'ECE', // arg 2: the shape (array of strings)
    'ABA'
  ], {
    A: 'vintageimprovements:andesite_sheet',
    B: 'create:mechanical_pump',
    C: 'create:andesite_casing',
    D: 'tofucraft:adv_tofugem',
    E: 'vintageimprovements:steel_spring'  //arg 3: the mapping object
  }
  )

  event.remove({ id: 'terrawhips_and_more:soulsummonercraft' })
  event.shaped(
    Item.of('terrawhips_and_more:spiritofthemountainssummoner'),
    [
      'AAA',
      'BCB',
      'CBC'
    ],
    {
      B: 'pasterdream:fabric',
      C: 'terrawhips_and_more:soul',
      A: 'minecraft:grass_block'
    }
  )

  event.remove({ id: 'skeleton_uprising:cloth_r' })
  event.shaped(
    Item.of('4x skeleton_uprising:cloth'),
    [
      'AB ',
      'BB ',
      'B  '
    ],
    {
      B: '#minecraft:wool',
      A: 'silentgear:fluffy_puff'
    }
  )

  event.shaped(
    Item.of('kubejs:bullin_heart'),
    [
      ' A ',
      'BCB',
      ' B '
    ],
    {
      B: 'silentgear:crimson_iron_ingot',
      C: 'flavor_immersed_daily:rawcattleheart',
      A: 'just_in_nether:vital_vein_ingot'
    }
  )

    event.shaped(
    Item.of('kubejs:piglin_heart'),
    [
      ' A ',
      'BCB',
      ' B '
    ],
    {
      B: 'silentgear:crimson_iron_ingot',
      C: 'flavor_immersed_daily:rawpigheart',
      A: 'just_in_nether:vital_vein_ingot'
    }
  )

  event.remove({ id: 'create_new_age:shapeless/energiser_t1' })
  event.shaped(
    Item.of('create_new_age:energiser_t1'),
    [
      'ABC',
      '   ',
      '   '
    ],
    {
      B: 'minecraft:lightning_rod',
      C: 'kubejs:energiser_gear',
      A: 'create:brass_casing'
    }
  )


  event.shaped(Item.of('gateways:gate_pearl', '{gateway:"tales_of_element:red_piglin"}'), [// arg 1: output
    ' A ',
    'ACA', // arg 2: the shape (array of strings)
    ' B '
  ], {
    A: 'feywild:raw_autumn_elven_quartz',
    B: 'biomancy:living_flesh',
    C: 'minecraft:ender_pearl'
  }
  )

  event.shaped(Item.of('gateways:gate_pearl', '{gateway:"tales_of_element:black_piglin"}'), [// arg 1: output
    ' A ',
    'ACA', // arg 2: the shape (array of strings)
    ' B '
  ], {
    A: 'feywild:raw_winter_elven_quartz',
    B: 'biomancy:living_flesh',
    C: 'minecraft:ender_pearl'
  }
  )

  event.shaped(Item.of('gateways:gate_pearl', '{gateway:"tales_of_element:white_piglin"}'), [// arg 1: output
    ' A ',
    'ACA', // arg 2: the shape (array of strings)
    ' B '
  ], {
    A: 'feywild:raw_elven_quartz',
    B: 'biomancy:living_flesh',
    C: 'minecraft:ender_pearl'
  }
  )

  event.remove({ id: 'biomancy:crafting/primordial_core' })
  event.shaped('biomancy:primordial_core', [// arg 1: output
    'ABC',
    'DEF', // arg 2: the shape (array of strings)
    'GBH'
  ], {
    A: 'minecraft:chicken',
    B: 'minecraft:ender_pearl',
    C: 'minecraft:beef',
    D: 'minecraft:porkchop',
    E: 'chaos_project:soul_of_majesty',
    F: 'minecraft:rotten_flesh',
    G: 'minecraft:spider_eye',
    H: 'minecraft:mutton'  //arg 3: the mapping object
  }
  )
  event.remove({ id: 'pneumaticcraft:air_compressor' })
  event.shaped('pneumaticcraft:air_compressor', [// arg 1: output
    'AAA',
    'ACD', // arg 2: the shape (array of strings)
    'ABA'
  ], {
    A: 'pneumaticcraft:reinforced_bricks',
    B: 'minecraft:furnace',
    C: 'silentgear:blaze_gold_ingot',
    D: 'pneumaticcraft:pressure_tube'
  }
  )

  event.remove({ id: 'skeleton_uprising:suspicious_ritual_r' })
  event.shaped('skeleton_uprising:suspicious_ritual', [// arg 1: output
    'CBC',
    'BAB', // arg 2: the shape (array of strings)
    'CBC'
  ], {
    A: 'skeleton_uprising:tome_of_cursebinding',
    B: '#minecraft:candles',
    C: 'gaiadimension:tektite'
  }
  )

  event.remove({ id: 'legendary_monsters:eye_of_moss' })
  event.shaped('kubejs:eye_of_moss', [// arg 1: output
    'CBC',
    'BAB', // arg 2: the shape (array of strings)
    'DBD'
  ], {
    A: 'chaos_project:emberoted_chunk',
    B: 'minecraft:moss_block',
    C: 'chaos_project:redorict_ingot',
    D: 'minecraft:ender_pearl'
  }
  )

  event.remove({ id: 'ceilands:ceilands_portal_activator' })
  event.shaped('ceilands:ceilands_portal_activator', [// arg 1: output
    '  C',
    ' B ', // arg 2: the shape (array of strings)
    'A  '
  ], {
    A: 'vintageimprovements:nickel_rod',
    B: 'kubejs:overgrown_crystal',
    C: 'minecraft:echo_shard'
  }
  )

  event.remove({ id: 'vintageimprovements:craft/belt_grinder' })
  event.shaped('vintageimprovements:belt_grinder', [// arg 1: output
    ' C ',
    'EBD', // arg 2: the shape (array of strings)
    ' A '
  ], {
    A: 'create:shaft',
    B: 'create:andesite_casing',
    C: 'vintageimprovements:grinder_belt',
    D: 'ceilands:ceilinum_ingot',
    E: 'vintageimprovements:iron_spring'
  }
  )

  event.remove({ id: 'vintageimprovements:craft/centrifuge' })
  event.shaped('vintageimprovements:centrifuge', [// arg 1: output
    'AEA',
    'DCD', // arg 2: the shape (array of strings)
    'ABA'
  ], {
    A: 'vintageimprovements:tin_spring',
    B: 'create:andesite_casing',
    C: 'create:shaft',
    D: '#minecraft:logs',
    E: 'kubejs:centrifuge_gear'
  }
  )

  event.remove({ id: 'gloom_caves:flint_and_diamond' })
  event.shaped('gloom_caves:gloomcaves', [// arg 1: output
    'AB ',
    ' C ', // arg 2: the shape (array of strings)
    '   '
  ], {
    A: 'legendary_monsters:crystal_of_sandstorm',
    B: 'minecraft:diamond',
    C: 'goety:ignite_focus'
  }
  )



  event.remove({ id: 'create:crafting/kinetics/mechanical_crafter' })
  event.shaped('2x create:mechanical_crafter', [// arg 1: output
    'AB ',
    ' C ', // arg 2: the shape (array of strings)
    ' D '
  ], {
    A: 'paladins_oath:dungeon_key',
    B: 'create:electron_tube',
    C: 'create:brass_casing',
    D: 'minecraft:crafting_table'
  }
  )

  event.remove({ id: 'naturesaura:gold_fiber' })
  event.shaped('4x naturesaura:gold_fiber', [// arg 1: output
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ADA'
  ], {
    A: '#minecraft:leaves',
    B: 'vintageimprovements:golden_spring',
    C: 'minecraft:grass',
    D: 'infinite_abyss:deeprock_golem_spirit_stone'
  }
  )

  event.remove({ id: 'terrawhips_and_more:ancientfarolcraft' })
  event.shaped('terrawhips_and_more:theancestorofice', [// arg 1: output
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'BBB'
  ], {
    A: 'iter_rpg:sanguarnet',
    B: 'terrawhips_and_more:ectoplasm',
    C: 'terrawhips_and_more:thebrokencrown'
  }
  )

  event.remove({ id: 'infinite_abyss:first_layer_key_recipe' })
  event.shaped('infinite_abyss:first_layer', [// arg 1: output
    ' AC',
    ' BA', // arg 2: the shape (array of strings)
    'C  '
  ], {
    A: 'minecraft:amethyst_block',
    B: 'legendary_monsters:molten_metal_ingot',
    C: 'biomancy:living_flesh'
  }
  )

  event.shaped('create:blaze_burner', [// arg 1: output
    ' A ',
    'ABA', // arg 2: the shape (array of strings)
    ' A '
  ], {
    A: '#forge:plates/steel',
    B: 'ceilands:ceilingneous'
  }
  )

  event.shaped('kubejs:jungle_slime', [// arg 1: output
    'CBC',
    ' A ', // arg 2: the shape (array of strings)
    'AAA'
  ], {
    A: 'terrawhips_and_more:gel_real',
    B: 'mna:transmuted_silver',
    C: 'minecraft:gold_block'  //arg 3: the mapping object
  }
  )

  event.shaped('kubejs:spider_tracker', [// arg 1: output
    'CBC',
    ' A ', // arg 2: the shape (array of strings)
    'AAA'
  ], {
    A: 'minecraft:cobweb',
    B: 'mna:resonating_dust',
    C: 'minecraft:spider_eye'  //arg 3: the mapping object
  }
  )

  event.remove({ id: 'arcalis_bosses:cursed_pirate_hat_recipe' })
  event.shaped('arcalis_bosses:cursed_pirate_hat', [// arg 1: output
    'CBC',
    ' A ', // arg 2: the shape (array of strings)
    'DAD'
  ], {
    A: 'unearthed_journey:chert',
    B: 'magichem:signalite_equating',
    C: 'naturesaura:sky_ingot',
    D: 'minecraft:blue_wool'  //arg 3: the mapping object
  }
  )

  event.shaped('kubejs:punisher_skull', [// arg 1: output
    ' B ',
    'DAE', // arg 2: the shape (array of strings)
    ' C '
  ], {
    A: 'mowziesmobs:wrought_helmet',
    B: 'vintageimprovements:golden_spring',
    C: 'vintageimprovements:andesite_spring',
    D: 'vintageimprovements:copper_spring',
    E: 'vintageimprovements:steel_spring'  //arg 3: the mapping object
  }
  )


  event.shaped('kubejs:battle_wand', [// arg 1: output
    'C  ',
    'A  ', // arg 2: the shape (array of strings)
    '   '
  ], {
    A: 'minecraft:stick',
    C: 'minecraft:ender_pearl',  //arg 3: the mapping object
  }
  )

  event.shaped('kubejs:fir_core', [// arg 1: output
    ' A ',
    'ACA', // arg 2: the shape (array of strings)
    ' A '
  ], {
    A: 'midnight:tendrilweed',
    C: 'midnight:rendium_shard',  //arg 3: the mapping object
  }
  )

  const create = event.recipes.create
  //砂纸打磨
  create.sandpaper_polishing('minecraft:leather', 'undergarden:mogmoss')


  //注液
  create.filling('kubejs:gear_model', [Fluid.of("kubejs:molten_steel"), 'kubejs:mechanical_gear'])
  create.filling('kubejs:mechanism_head', [Fluid.of("kubejs:molten_steel"), 'kubejs:ferrous'])
  create.filling('silentgear:sword_blueprint', [Fluid.of("kubejs:molten_gold"), 'silentgear:sword'])


  //动力合成
  event.recipes.create.mechanical_crafting('kubejs:redstone_energy', [
    ' D ',
    'DAD',
    ' D '
  ], {
    A: 'gaiadimension:bismuth_crystal',
    D: 'vintageimprovements:redstone_module'
  })

  event.remove({ id: 'biomancy:crafting/bio_forge' })
  event.recipes.create.mechanical_crafting('biomancy:bio_forge', [
    'DED',
    'CAC',
    'CBC'
  ], {
    A: 'kitchenkarrot:slime_mousse',
    B: 'biomancy:living_flesh',
    C: '#forge:food/raw_fish',
    D: 'biomancy:regenerative_fluid',
    E: 'frozone:cyro_scrap'
  })

  event.remove({ id: 'legendary_monsters:monstrous_anchor' })
  event.recipes.create.mechanical_crafting('legendary_monsters:monstrous_anchor', [
    'CCC',
    ' A ',
    ' B '
  ], {
    A: 'silentgear:pickaxe_blueprint',
    B: 'legendary_monsters:anchor_handle',
    C: 'minecraft:iron_block',
  })

  event.remove({ id: 'silentgear:coating_template' })
  event.recipes.create.mechanical_crafting('silentgear:coating_template', [
    'DDD',
    'DAB'
  ], {
    A: 'minecraft:diamond',
    B: 'gaiadimension:tektite',
    D: 'silentgear:template_board',
  })


  event.recipes.create.mechanical_crafting('kubejs:slime_king2', [
    ' B ',
    'DAD',
    ' B '
  ], {
    A: 'terrawhips_and_more:slime_crown',
    B: 'kubejs:electrum_plate',
    D: 'terrawhips_and_more:frostcore'
  })

  event.recipes.create.mechanical_crafting('kubejs:suspicious_key', [
    'CBC',
    'DAD',
    'EBE'
  ], {
    A: 'paladins_oath:dungeon_key',
    B: 'unearthed_journey:lead_ingot',
    C: 'unearthed_journey:hide',
    D: 'biomancy:gem_fragments',
    E: 'biomancy:bio_lumens'
  })

  event.remove({ id: 'vintageimprovements:mechanical_crafting/helve_hammer' })
  event.recipes.create.mechanical_crafting('vintageimprovements:helve_hammer', [
    ' A BB',
    'ACCCD',
    'AA  E'
  ], {
    A: 'kubejs:bronze_block',
    B: 'vintageimprovements:steel_spring',
    C: '#minecraft:logs',
    D: 'create:andesite_casing',
    E: 'kubejs:helve_gear'
  })

  event.remove({ id: 'vintageimprovements:mechanical_crafting/lathe' })
  event.recipes.create.mechanical_crafting('vintageimprovements:lathe', [
    ' ABC ',
    'DEEFG',
    '  BC '
  ], {
    A: 'create:precision_mechanism',
    B: 'vintageimprovements:invar_spring',
    C: 'create:andesite_alloy',
    D: 'create:shaft',
    E: 'create:andesite_casing',
    F: '#forge:storage_blocks/steel',
    G: 'kubejs:lathe_gear'
  })

  event.recipes.create.mechanical_crafting('kubejs:drowned_conjurer_mask', [
    ' B ',
    'DAD',
    ' B '
  ], {
    A: 'kubejs:ferrous',
    D: 'destroy:silica',
    B: 'create:experience_nugget'
  })

  event.remove({ id: 'better_boss:ohw' })
  event.recipes.create.mechanical_crafting('better_boss:dede', [
    'CBC',
    'DAD',
    'CBC'
  ], {
    A: 'vintageimprovements:redstone_module',
    D: 'destroy:silica',
    C: 'create:crushed_raw_iron',
    B: 'infinite_abyss:red_glowing_crystal'
  })

  event.remove({ id: 'infinite_abyss:second_layer_key_recipe' })
  event.recipes.create.mechanical_crafting('infinite_abyss:second_layer', [
    ' CB',
    'CBD',
    'BC '
  ], {
    D: 'the_pumpkin_challenge:pumpkin_blade',
    C: 'infinite_abyss:pink_glowing_crystal',
    B: 'vintagedelight:salt_lamp_pink'
  })

  event.remove({ id: 'biomancy:crafting/decomposer' })
  event.recipes.create.mechanical_crafting('biomancy:decomposer', [
    'AEA',
    'BDF',
    'BCF'
  ], {
    D: 'biomancy:mob_gland',
    C: 'biomancy:living_flesh',
    A: '#biomancy:fangs',
    B: 'flavor_immersed_daily:stirfriedboiledporkslicesinhotsauce',
    E: 'goety:spider_nest',
    F: 'farmersdelight:fish_stew'
  })

  event.remove({ id: 'chaos_project:amecrafta' })
  event.recipes.create.mechanical_crafting('chaos_project:ameclutch', [
    'FEF',
    'ADA',
    'BCB'
  ], {
    D: 'chaos_project:soul_of_majesty',
    C: 'chaos_project:terrain_gem',
    A: 'chaos_project:amethynd_ingot',
    B: 'chaos_project:redorict_ingot',
    E: 'biomancy:gem_fragments',
    F: 'biomancy:tough_fibers'
  })

  event.recipes.create.mechanical_crafting('the_pumpkin_challenge:iron_pumpkin_medallion', [
    'CBC',
    'DAD',
    'CBC'
  ], {
    A: 'the_pumpkin_challenge:copper_pumpkin_medallion',
    D: 'create:precision_mechanism',
    C: 'create:crushed_raw_iron',
    B: 'create:sturdy_sheet'
  })

  event.recipes.create.mechanical_crafting('kubejs:coldread_orb', [
    'CBC',
    'DAD',
    'CBC'
  ], {
    A: 'kubejs:eye_of_frost',
    D: 'unearthed_journey:sarracenia',
    C: 'unearthed_journey:betula_branch',
    B: 'biomancy:toxin_extract'
  })

  event.recipes.create.mechanical_crafting('kubejs:curse_bait_48', [
    'CBC',
    'DAD',
    'CBC'
  ], {
    A: 'tide:lucky_bait',
    D: 'biomancy:mineral_fragment',
    C: 'biomancy:bone_fragments',
    B: 'biomancy:elastic_fibers'
  })


  event.recipes.create.mechanical_crafting('kubejs:sand_necklace', [
    'A',
    'D'
  ], {
    A: 'terramity:gold_necklace',
    D: 'kubejs:sand_warrior_eye'
  })

  event.remove({ id: 'create:mechanical_crafting/crushing_wheel' })
  event.recipes.create.mechanical_crafting('create:crushing_wheel', [
    ' AAA ',
    'AABAA',
    'ABCBA',
    'AABAA',
    ' AAA '
  ], {
    A: 'create:andesite_alloy',
    B: 'infinite_abyss:blue_glowing_crystal',
    C: 'kubejs:kuoyu_gel'
  })


  event.recipes.create.mechanical_crafting('kubejs:dragoon_necklace', [
    ' A ',
    ' D ',
    'BCB'
  ], {
    A: 'terramity:gold_necklace',
    D: 'gaiadimension:sugilite',
    C: 'skeleton_uprising:mystic_bone',
    B: 'iceandfire:dragonbone'
  })

  event.recipes.create.mechanical_crafting('kubejs:plague_core', [
    ' D ',
    'DAD',
    ' D '
  ], {
    A: 'biomancy:living_flesh',
    D: 'gaiadimension:euclase'
  })

  event.recipes.create.mechanical_crafting('kubejs:eye_of_many_ribs', [
    'CDC',
    'DAD',
    ' D '
  ], {
    A: 'minecraft:ender_pearl',
    D: 'undead_revamp2:chiseled_dripstonepillar',
    C: 'gaiadimension:benitoite'
  })


  //粉碎轮
  event.recipes.create.crushing('kubejs:curse_bait_7', 'tide:lucky_bait').processingTime(500)
  event.recipes.create.crushing('kubejs:curse_bait_8', 'kubejs:curse_bait_7').processingTime(500)
  event.recipes.create.crushing('kubejs:curse_bait_9', 'kubejs:curse_bait_8').processingTime(500)
  event.recipes.create.crushing('kubejs:curse_bait_10', 'kubejs:curse_bait_9').processingTime(500)


  //混合搅拌
  create.mixing('kubejs:ferrous', ['burrows:mole_suit_ability_helmet', 'ad_astra:steel_block', 'reactive:stardust'])
  create.mixing('paladins_oath:ingot_of_undying', ['4x paladins_oath:undying_scrap', '4x minecraft:iron_ingot'])
  event.remove({ id: 'graveyard:dark_iron_ingot' })
  event.remove({ id: 'flintnpowder:steel_alloy_craft' })
  create.mixing('graveyard:dark_iron_ingot', ['graveyard:corruption', 'minecraft:iron_ingot'])
  create.mixing('flintnpowder:steel_alloy', ['kubejs:steel_ingot', 'flintnpowder:cast_iron_alloy'])
  create.mixing('kubejs:frozen_warlock_gem', ['minecraft:diamond', '3x kubejs:ghost_ingot'])
  create.mixing('ancient_elements:frost_ingot', ['4x ancient_elements:frost_shard', '#forge:ingots/steel'])
  create.mixing('kubejs:sand_warrior_eye', ['minecraft:ender_pearl', 'enderzoology:confusing_powder', 'enderzoology:ender_fragment'])
  create.mixing('2x kubejs:ghost_ingot', ['2x mna:superheated_vinteum_ingot', 'terrawhips_and_more:ectoplasm', 'reactive:stardust'])
  create.mixing('kubejs:bulldrogioth', ['alexsmobs:cooked_lobster_tail', '2x infinite_abyss:cut_red_crystal', Fluid.of("undergarden:virulent_mix_source", 300), 'reactive:stardust'])

  //压块塑性
  event.recipes.create.compacting('youkaishomecoming:drying_rack', ['reactive:force_rock', 'minecraft:stripped_bamboo_block'])
  event.remove({ id: 'overworldpiglins:piglin_slayer_helmet' })
  event.remove({ id: 'overworldpiglins:piglin_slayer_chestplate' })
  event.remove({ id: 'overworldpiglins:piglin_slayer_boots' })
  event.remove({ id: 'overworldpiglins:piglin_slayer_leggins' })
  event.recipes.create.compacting('overworldpiglins:piglin_slayer_armor_2_helmet', ['2x overworldpiglins:small_piglin_fang', 'overworldpiglins:grand_piglin_fang','5x mna:transmuted_silver','silentgear:helmet_blueprint'])
  event.recipes.create.compacting('overworldpiglins:piglin_slayer_armor_2_chestplate', ['4x overworldpiglins:small_piglin_fang', '3x overworldpiglins:grand_piglin_fang','8x mna:transmuted_silver','silentgear:chestplate_blueprint'])
  event.recipes.create.compacting('overworldpiglins:piglin_slayer_armor_2_leggings', ['3x overworldpiglins:small_piglin_fang', '2x overworldpiglins:grand_piglin_fang','7x mna:transmuted_silver','silentgear:leggings_blueprint'])
  event.recipes.create.compacting('overworldpiglins:piglin_slayer_armor_2_boots', ['overworldpiglins:small_piglin_fang', 'overworldpiglins:grand_piglin_fang','4x mna:transmuted_silver','silentgear:boots_blueprint'])

  //序列组装
  let inter = "kubejs:misc_box"
  create.sequenced_assembly(['kubejs:nehemoth'], 'kubejs:lava_demon', [
    event.recipes.createPressing(inter, inter),
    event.recipes.createDeploying(inter, [inter, 'netherexp:lightspores']),
    event.recipes.createDeploying(inter, [inter, 'theabyss:crimson_crystal_ore']),
    event.recipes.createFilling(inter, [inter, Fluid.of("netherexp:ectoplasm", 500)])
  ]).transitionalItem(inter).loops(3)

    create.sequenced_assembly(['kubejs:mutant_sniffer_egg'], 'minecraft:sniffer_egg', [
    event.recipes.createPressing(inter, inter),
    event.recipes.createDeploying(inter, [inter, 'goety:cursed_metal_block']),
    event.recipes.createDeploying(inter, [inter, 'malum:processed_soulstone']),
    event.recipes.createDeploying(inter, [inter, 'malum:arcane_spirit'])
  ]).transitionalItem(inter).loops(3)

    create.sequenced_assembly(['foodbosses:pizza_item'], 'netherexp:nether_pizza', [
    event.recipes.createPressing(inter, inter),
    event.recipes.createDeploying(inter, [inter, 'flavor_immersed_daily:tomato']),
    event.recipes.createDeploying(inter, [inter, 'flavor_immersed_daily:strawberry']),
    event.recipes.createDeploying(inter, [inter, 'flavor_immersed_daily:mango']),
    event.recipes.createDeploying(inter, [inter, 'minecraft:beef']),
    event.recipes.createFilling(inter, [inter, Fluid.of("pneumaticcraft:vegetable_oil", 300)])
  ]).transitionalItem(inter).loops(3)

  create.sequenced_assembly(['meetyourfight:haunted_bell'], 'minecraft:bell', [
    event.recipes.createDeploying(inter, [inter, 'goety:haunted_glass']),
    event.recipes.createDeploying(inter, [inter, 'soulsweapons:lost_soul']),
    event.recipes.createDeploying(inter, [inter, 'malum:arcane_spirit']),
    event.recipes.createFilling(inter, [inter, Fluid.of("createmetallurgy:molten_gold", 300)])
  ]).transitionalItem(inter).loops(3)

  create.sequenced_assembly(['kubejs:terminal_teleporter'], 'vintageimprovements:redstone_module', [
    event.recipes.createDeploying(inter, [inter, 'biomancy:exotic_compound']),
    event.recipes.createDeploying(inter, [inter, 'biomancy:organic_compound']),
    event.recipes.createDeploying(inter, [inter, 'biomancy:unstable_compound']),
    event.recipes.createDeploying(inter, [inter, 'biomancy:genetic_compound']),
    event.recipes.createFilling(inter, [inter, Fluid.of("kubejs:molten_demonite", 90)])
  ]).transitionalItem(inter).loops(2)


  create.sequenced_assembly(['kubejs:steel_orb'], 'gaiadimension:pink_essence', [
    event.recipes.createDeploying(inter, [inter, 'gaiadimension:carnelian']),
    event.recipes.createDeploying(inter, [inter, 'gaiadimension:goshenite']),
    event.recipes.createDeploying(inter, [inter, 'gaiadimension:celestine']),
    event.recipes.createFilling(inter, [inter, Fluid.of("createmetallurgy:molten_steel", 300)])
  ]).transitionalItem(inter).loops(3)

  create.sequenced_assembly(['kubejs:curse_bait_20'], 'tide:lucky_bait', [
    event.recipes.createDeploying(inter, [inter, 'gaiadimension:shiny_bone']),
    event.recipes.createDeploying(inter, [inter, 'gaiadimension:proustite']),
    event.recipes.createDeploying(inter, [inter, 'gaiadimension:bismuth_crystal']),
    event.recipes.createDeploying(inter, [inter, 'gaiadimension:euclase'])
  ]).transitionalItem(inter).loops(2)

  create.sequenced_assembly(['kubejs:curse_bait_9'], 'tide:lucky_bait', [
    event.recipes.createDeploying(inter, [inter, 'malum:living_flesh']),
    event.recipes.createDeploying(inter, [inter, 'goety:cursed_ingot']),
    event.recipes.createDeploying(inter, [inter, 'reactive:soul_bottle']),
    event.recipes.createFilling(inter, [inter, Fluid.of("createfood:squid_ink", 300)])
  ]).transitionalItem(inter).loops(5)

  create.sequenced_assembly(['kubejs:eye_of_ghost'], 'minecraft:ender_pearl', [
    event.recipes.createDeploying(inter, [inter, 'minecraft:ender_pearl']),
    event.recipes.createDeploying(inter, [inter, 'biomancy:mob_gland']),
    event.recipes.createDeploying(inter, [inter, 'reactive:soul_bottle']),
    event.recipes.createFilling(inter, [inter, Fluid.of("createmetallurgy:molten_brass", 300)]),
    event.recipes.createPressing(inter, inter)
  ]).transitionalItem(inter).loops(3)

  // create.sequenced_assembly(['create_optical:optical_device'],'gloom_caves:diminite_shard',[
  //   event.recipes.createDeploying("create_optical:incomplete_optical_device", ["create_optical:incomplete_optical_device", 'vintageimprovements:constantan_sheet']),
  //   event.recipes.createDeploying("create_optical:incomplete_optical_device", ["create_optical:incomplete_optical_device", 'undergarden:sediment_glass_pane']),
  //   event.recipes.createFilling("create_optical:incomplete_optical_device", ["create_optical:incomplete_optical_device", Fluid.of("createfood:squid_ink",300)]),
  //   event.recipes.createPressing("create_optical:incomplete_optical_device", "create_optical:incomplete_optical_device")
  // ]).transitionalItem(inter).loops(3)



  create.sequenced_assembly(['legendary_monsters:eye_of_air'], 'minecraft:ender_pearl', [
    event.recipes.createDeploying(inter, [inter, 'celestisynth:starstruck_feather']),
    event.recipes.createDeploying(inter, [inter, 'malum:rune_of_the_aether']),
    event.custom({
      "type": "vintageimprovements:vibrating",
      "ingredients": [{
        "item": "kubejs:misc_box"
      }
      ],
      "results": [
        {
          "item": "kubejs:misc_box"
        }
      ],
      "processingTime": 120
    })
  ]).transitionalItem(inter).loops(2)

  create.sequenced_assembly(['better_boss:egg'], 'unusual_delight:sculked_egg', [
    event.recipes.createDeploying(inter, [inter, 'divinerpg:ice_stone']),
    event.recipes.createDeploying(inter, [inter, 'divinerpg:snowflake']),
    event.recipes.createFilling(inter, [inter, Fluid.of("createfood:berry_ice_cream", 500)]),
    event.custom({
      "type": "vintageimprovements:turning",
      "ingredients": [{
        "item": "kubejs:misc_box"
      }
      ],
      "results": [
        {
          "item": "kubejs:misc_box"
        }
      ],
      "processingTime": 240
    })
  ]).transitionalItem(inter).loops(2)


  create.sequenced_assembly(['the_pumpkin_challenge:copper_pumpkin_medallion'], 'minecraft:pumpkin', [
    event.recipes.createFilling(inter, [inter, Fluid.of("createmetallurgy:molten_gold", 300)]),
    event.recipes.createFilling(inter, [inter, Fluid.of("createmetallurgy:molten_copper", 300)]),
    event.recipes.createDeploying(inter, [inter, 'tofucraft:tofudiamond']),
    event.recipes.createDeploying(inter, [inter, 'celestial_artifacts:copper_reinforce_plate']),
    event.custom({
      "type": "vintageimprovements:vibrating",
      "ingredients": [{
        "item": "kubejs:misc_box"
      }
      ],
      "results": [
        {
          "item": "kubejs:misc_box"
        }
      ],
      "processingTime": 120
    })
  ]).transitionalItem(inter).loops(3)



  create.sequenced_assembly(['kubejs:eye_of_frost'], 'minecraft:ender_pearl', [
    event.recipes.createFilling(inter, [inter, Fluid.water(2000)]),
    event.recipes.createDeploying(inter, [inter, 'kitchenkarrot:ice_cubes']),
    event.recipes.createDeploying(inter, [inter, 'minecraft:blue_ice']),
    event.recipes.createDeploying(inter, [inter, 'ancient_elements:frost_ingot']),
    event.custom({
      "type": "vintageimprovements:vibrating",
      "ingredients": [{
        "item": "kubejs:misc_box"
      }
      ],
      "results": [
        {
          "item": "kubejs:misc_box"
        }
      ],
      "processingTime": 120
    })
  ]).transitionalItem(inter).loops(3)



  event.remove({ id: 'legendary_monsters:eye_of_air' })
  event.remove({ id: 'meetyourfight:haunted_bell' })
  event.remove({ id: 'legendary_monsters:eye_of_frost' })
  // event.remove({id:'create_optical:sequenced_assembly/optical_device'})
  event.remove({ id: 'legendary_monsters:eye_of_ghost' })

  //合金炉

  event.custom({
    "type": "ad_astra:alloying",
    "cookingtime": 200,
    "energy": 40,
    "ingredients": [
      {
        "tag": 'forge:ingots/steel'
      },
      {
        "item": 'aquamirae:shell_horn'
      }
    ],
    "result": {
      "count": 1,
      "id": 'kubejs:shell_horn'
    }
  })

  event.remove({ id: 'mna:vinteum_coated_iron' })
  event.custom({
    "type": "ad_astra:alloying",
    "cookingtime": 200,
    "energy": 50,
    "ingredients": [
      {
        "item": 'minecraft:iron_ingot'
      },
      {
        "item": 'mna:vinteum_dust'
      }
    ],
    "result": {
      "count": 1,
      "id": 'mna:vinteum_coated_iron'
    }
  })

  event.remove({ id: 'paladins_oath:he' })


  //冶金灌注器
  event.custom({
    "type": "mekanism:metallurgic_infusing",
    "chemicalInput": { "amount": 40, "tag": "mekanism:gold" },
    "itemInput": { "ingredient": { "tag": "forge:ingots/silver" } },
    "output": { "item": 'kubejs:electrum_ingot' }
  })


  //诅咒注入
  function cursed_infuser_recipes(ingredient, result, cookingTime) {
    event.custom({
      "type": "goety:cursed_infuser_recipes",
      "ingredient": {
        "item": ingredient
      },
      "result": result,
      "cookingTime": cookingTime
    })
  }

  cursed_infuser_recipes('minecraft:diamond', 'bosses_of_mass_destruction:soul_star', 120)
  cursed_infuser_recipes('malum:natural_quartz_cluster', 'minecraft:quartz', 120)
  cursed_infuser_recipes('midnight:bloomcrystal_shard', 'goety:empty_focus', 120)

  //精魂灌注
  function spirit_infusion(extra_items, input, output, spirits) {
    const extra_item = []
    extra_items = extra_items.map((item) => Item.of(item))
    extra_items.forEach(item => {
      extra_item.push({ count: item.count, item: item.id })
    });
    input = Item.of(input)
    output = Item.of(output)
    event.custom({
      "type": "malum:spirit_infusion",
      "extra_items": extra_item,
      "input": {
        "count": input.count,
        "item": input.id
      },
      "output": {
        "count": output.count,
        "item": output.id
      },
      "spirits": spirits
    })
  }

  spirit_infusion(["8x minecraft:gold_ingot", "4x gnumus:gnumus_doubloons", "2x malum:hex_ash"], "armageddon_mod:strange_alloy", "armageddon_mod:strange_coin",
    [
      {
        "type": "aerial",
        "count": 8
      },
      {
        "type": "aqueous",
        "count": 8
      },
      {
        "type": "earthen",
        "count": 8
      }
    ]
  )

  event.remove({id:'armageddon_mod:sparkling_stick_recipe'})
  spirit_infusion(["8x minecraft:coal"], "jerotes:simple_spear", "armageddon_mod:sparkling_stick",
    [
      {
        "type": "infernal",
        "count": 4
      }
    ]
  )

  event.remove({id:'legendary_monsters:the_great_frost'})
  spirit_infusion(["2x legendary_monsters:primal_ice_shard","legendary_monsters:frozen_rune","2x undergarden:froststeel_ingot"], "silentgear:machete_blueprint", "legendary_monsters:the_great_frost",
    [
      {
        "type": "aqueous",
        "count": 16
      }
    ]
  )

  event.remove({id:'paladins_oath:spe'})
  spirit_infusion(["2x paladins_oath:boulder_rod","3x paladins_oath:dark_steel_ingot","4x gaiadimension:sturdy_pebble"], "silentgear:spear_blueprint", "paladins_oath:boulder_breaker_spear",
    [
      {
        "type": "earthen",
        "count": 16
      }
    ]
  )

  event.remove({id:'flintnpowder:flinter_craft'})
  spirit_infusion(["8x minecraft:copper_ingot", "armageddon_mod:colossal_iron_ingot"], "flintnpowder:log_cannon", "flintnpowder:flinter",
    [
      {
        "type": "aerial",
        "count": 8
      },
      {
        "type": "infernal",
        "count": 8
      }
    ]
  )

  event.remove({id:'goety:fanged_dagger'})
  spirit_infusion(["3x goety:savage_tooth", "2x goety:venomous_fang","3x goety:cursed_ingot"], "silentgear:knife_template", "goety:fanged_dagger",
    [
      {
        "type": "arcane",
        "count": 3
      },
      {
        "type": "earthen",
        "count": 2
      }
    ]
  )

  spirit_infusion(["8x minecraft:lapis_lazuli", "4x malum:alchemical_calx", "4x kubejs:nickel_ingot"], "goety:ectoplasm", "goety:totem_of_roots",
    [
      {
        "type": "aerial",
        "count": 3
      },
      {
        "type": "arcane",
        "count": 3
      },
      {
        "type": "earthen",
        "count": 3
      }
    ]
  )
  event.remove({ id: 'malum:spirit_infusion/alchemical_impetus' })
  spirit_infusion(["3x malum:processed_soulstone", "1x malum:hex_ash", "1x mna:arcane_compound"], "8x malum:alchemical_calx", "malum:alchemical_impetus",
    [
      {
        "type": "arcane",
        "count": 4
      },
      {
        "type": "earthen",
        "count": 4
      }
    ]
  )

  event.remove({ id: 'malum:spirit_infusion/spirit_crucible' })
  spirit_infusion(["8x malum:twisted_rock", "4x malum:hex_ash", "8x malum:tainted_rock", "8x infinite_abyss:slimy_deepstone"], "minecraft:blast_furnace", "malum:spirit_crucible",
    [
      {
        "type": "arcane",
        "count": 4
      },
      {
        "type": "infernal",
        "count": 12
      }
    ]
  )

  event.remove({ id: 'meetyourfight:bone_raker' })
  spirit_infusion(["4x minecraft:iron_ingot", "8x minecraft:bone", "2x malum:processed_soulstone"], "meetyourfight:mossy_tooth", "meetyourfight:bone_raker",
    [
      {
        "type": "earthen",
        "count": 3
      }
    ]
  )
  event.remove({ id: 'terrawhips_and_more:slimestaffcraft' })
  spirit_infusion(["2x terrawhips_and_more:gel_real", "2x malum:processed_soulstone"], "even_more_magic:amethyst_wand", "terrawhips_and_more:slime_staff",
    [
      {
        "type": "arcane",
        "count": 3
      }
    ]
  )
  spirit_infusion(["kubejs:mechanical_gear", "8x minecraft:gold_ingot", "8x kubejs:nickel_ingot"], "minecraft:furnace", "silentgear:metal_alloyer",
    [
      {
        "type": "aerial",
        "count": 3
      },
      {
        "type": "arcane",
        "count": 3
      },
      {
        "type": "earthen",
        "count": 3
      }
    ]
  )
  event.remove({ output: 'confluence:magic_mirror' })
  spirit_infusion(["2x minecraft:diamond", "4x create:golden_sheet"], "4x minecraft:glass", "confluence:magic_mirror",
    [
      {
        "type": "arcane",
        "count": 4
      }
    ]
  )

  event.custom({
    "type": "malum:spirit_infusion",
    "extra_items": [
      {
        "count": 1,
        "item": "minecraft:diamond"
      },
      {
        "count": 4,
        "item": "feywild:fey_dust"
      }
    ],
    "input": {
      "count": 1,
      "tag": "minecraft:saplings"
    },
    "output": {
      "count": 1,
      "item": "feywild:summer_tree_sapling"
    },
    "spirits": [
      {
        "type": "earthen",
        "count": 4
      }
    ]
  })
  event.custom({
    "type": "malum:spirit_infusion",
    "extra_items": [
      {
        "count": 1,
        "item": "minecraft:diamond"
      },
      {
        "count": 4,
        "item": "feywild:fey_dust"
      }
    ],
    "input": {
      "count": 1,
      "tag": "minecraft:saplings"
    },
    "output": {
      "count": 1,
      "item": "feywild:spring_tree_sapling"
    },
    "spirits": [
      {
        "type": "aerial",
        "count": 4
      }
    ]
  })
  event.custom({
    "type": "malum:spirit_infusion",
    "extra_items": [
      {
        "count": 1,
        "item": "minecraft:diamond"
      },
      {
        "count": 4,
        "item": "feywild:fey_dust"
      }
    ],
    "input": {
      "count": 1,
      "tag": "minecraft:saplings"
    },
    "output": {
      "count": 1,
      "item": "feywild:autumn_tree_sapling"
    },
    "spirits": [
      {
        "type": "infernal",
        "count": 4
      }
    ]
  })
  event.custom({
    "type": "malum:spirit_infusion",
    "extra_items": [
      {
        "count": 1,
        "item": "minecraft:diamond"
      },
      {
        "count": 4,
        "item": "feywild:fey_dust"
      }
    ],
    "input": {
      "count": 1,
      "tag": "minecraft:saplings"
    },
    "output": {
      "count": 1,
      "item": "feywild:winter_tree_sapling"
    },
    "spirits": [
      {
        "type": "aqueous",
        "count": 4
      }
    ]
  })

  spirit_infusion(["2x malum:soul_stained_steel_ingot", "4x minecraft:diamond", "minecraft:wooden_shovel"], "allthecompressed:dirt_1x", "burrows:burrowentrance",
    [
      {
        "type": "aqueous",
        "count": 3
      },
      {
        "type": "earthen"
      },
      {
        "type": "arcane"
      }
    ]
  )

  spirit_infusion(["4x kubejs:nickel_ingot", "4x minecraft:gold_ingot", "2x terrawhips_and_more:enredadera"], "3x minecraft:feather", "gomwaga:sharp_leaf",
    [
      {
        "type": "earthen",
        "count": 3
      }
    ]
  )

  spirit_infusion(["4x chaos_project:redorict_ingot", "2x chaos_project:emberoted_chunk", "1x chaos_project:terrain_shard", "1x kubejs:chad_boxer_bone"], "kitchenkarrot:gem_carrot", "chaos_project:relict_carrot",
    [
      {
        "type": "earthen",
        "count": 3
      },
      {
        "type": "wicked",
        "count": 2
      },
      {
        "type": "aqueous",
        "count": 2
      }
    ]
  )

  event.remove({ id: 'chaos_project:relict_craft' })
  spirit_infusion(["4x mna:bone_ash", "4x reactive:flower_vine", "2x reactive:phantom_residue"], "minecraft:totem_of_undying", "kubejs:totem_of_undying_golem",
    [
      {
        "type": "earthen",
        "count": 3
      }
    ]
  )


  event.remove({ id: 'malum:spirit_infusion/runewood_totem_base' })
  spirit_infusion(["3x mna:decoration/arcane_stone", "4x malum:runewood_planks", "3x malum:hex_ash"], "4x malum:runewood_log", "2x malum:runewood_totem_base",
    [
      {
        "type": "infernal",
        "count": 2
      },
      {
        "type": "wicked",
        "count": 2
      },
      {
        "type": "aqueous",
        "count": 2
      },
      {
        "type": "earthen",
        "count": 2
      },
      {
        "type": "arcane",
        "count": 2
      },
      {
        "type": "aerial",
        "count": 2
      }
    ]
  )

  event.remove({ id: 'malum:spirit_infusion/soul_stained_steel_ingot' })
  event.custom({
    "type": "malum:spirit_infusion",
    "extra_items": [
      {
        "count": 4,
        "item": "malum:processed_soulstone"
      }
    ],
    "input": {
      "count": 1,
      "tag": "forge:ingots/steel"
    },
    "output": {
      "item": "malum:soul_stained_steel_ingot"
    },
    "spirits": [
      {
        "type": "wicked",
        "count": 3
      },
      {
        "type": "earthen"
      },
      {
        "type": "arcane"
      }
    ]
  })

  event.remove({ id: 'malum:spirit_infusion/runic_workbench' })
  spirit_infusion(["4x midnight:ebonite", "4x malum:hallowed_gold_ingot", "8x malum:runewood_planks"], "malum:runewood_item_pedestal", "malum:runic_workbench",
    [
      {
        "type": "aqueous",
        "count": 16
      },
      {
        "type": "sacred",
        "count": 8
      },
      {
        "type": "arcane",
        "count": 8
      }
    ]
  )

  event.remove({ id: 'chaos_project:carrot_craft' })
  spirit_infusion(["3x kitchenkarrot:gem_carrot", "chaos_project:soul_of_majesty", "3x chaos_project:mintolis_ingot"], "silentgear:hammer_blueprint", "chaos_project:carrot_hammer",
    [
      {
        "type": "earthen",
        "count": 16
      },
      {
        "type": "wicked",
        "count": 4
      },
      {
        "type": "arcane",
        "count": 8
      }
    ]
  )

  event.remove({ id: 'malum:spirit_infusion/hallowed_gold_ingot' })
  spirit_infusion(["4x reactive:quartz"], "minecraft:gold_ingot", "malum:hallowed_gold_ingot",
    [
      {
        "type": "sacred",
        "count": 2
      },
      {
        "type": "arcane"
      }
    ]
  )

  //精魂聚焦
  function spirit_focusing(durabilityCost, input, output, spirits, time) {
    output = Item.of(output)
    event.custom({
      "type": "malum:spirit_focusing",
      "durabilityCost": durabilityCost,
      "input": {
        "item": input
      },
      "output": {
        "count": output.count,
        "item": output.id
      },
      "spirits": spirits,
      "time": time
    })
  }

  spirit_focusing(6, "tide:lucky_bait", "kubejs:curse_bait_5",
    [
      {
        "type": "sacred",
        "count": 2
      },
      {
        "type": "wicked",
        "count": 3
      }
    ], 1800
  )

  spirit_focusing(6, "kubejs:curse_bait_5", "kubejs:curse_bait_6",
    [
      {
        "type": "arcane",
        "count": 2
      },
      {
        "type": "wicked",
        "count": 3
      }
    ], 1800
  )

  spirit_focusing(6, "kubejs:curse_bait_6", "kubejs:curse_bait_23",
    [
      {
        "type": "sacred",
        "count": 2
      },
      {
        "type": "aqueous",
        "count": 3
      }
    ], 1800
  )

  spirit_focusing(6, "kubejs:curse_bait_23", "kubejs:curse_bait_24",
    [
      {
        "type": "earthen",
        "count": 2
      },
      {
        "type": "infernal",
        "count": 3
      }
    ], 1800
  )

  spirit_focusing(6, "kubejs:curse_bait_24", "kubejs:curse_bait_25",
    [
      {
        "type": "earthen",
        "count": 2
      },
      {
        "type": "aqueous",
        "count": 3
      }
    ], 1800
  )

  //符文工作台
  /**
   * @param {Internal.ItemStack_} output
   * @param {Internal.ItemStack_} primaryInput
   * @param {Internal.ItemStack_} secondaryInput
   */
  function runeworking(output, primaryInput, secondaryInput) {
    output = Item.of(output)
    primaryInput = Item.of(primaryInput)
    secondaryInput = Item.of(secondaryInput)
    event.custom({
      "type": "malum:runeworking",
      "output": {
        "item": output.id
      },
      "primaryInput": {
        "count": primaryInput.count,
        "item": primaryInput.id
      },
      "secondaryInput": {
        "count": secondaryInput.count,
        "item": secondaryInput.id
      }
    })
  }

  runeworking("kubejs:abomination_summoner", "4x midnight:rendium_shard", "16x malum:wicked_spirit")
  runeworking("kubejs:sudden_skull", "1x minecraft:skeleton_skull", "8x midnight:dark_pearl")
  runeworking("kubejs:evil_snowball", "2x unusual_delight:living_snowball", "2x netherexp:will_o_wisp")

  //嬗变
  function spirit_transmutation(input, output) {
    event.custom({
      "type": "malum:spirit_transmutation",
      "input": {
        "item": input
      },
      "output": {
        "item": output
      }
    })
  }
  event.custom({
    "type": "mna:transmutation",
    "targetBlock": "minecraft:packed_ice",
    "lootTable": "tales_of_element:freeze_gem",
    "representationItem": "kubejs:freeze_gem"
  })

  event.custom({
    "type": "mna:transmutation",
    "targetBlock": "wrd:block_of_skulls",
    "lootTable": "tales_of_element:stun_skeleton",
    "representationItem": "kubejs:stun_skeleton"
  })


  spirit_transmutation("minecraft:skeleton_skull", "wrd:block_of_skulls")
  spirit_transmutation("allthecompressed:dirt_1x", "kubejs:infernal_dirtworm")

  function reactive_transmutation(reactant, product, reagents, min, cost) {
    product = Item.of(product)
    event.custom({
      "type": "reactive:transmutation",
      "reactant": {
        "item": reactant
      },
      "product": {
        "item": product.id,
        "count": product.count
      },
      "reagents": reagents,
      "min": min,
      "cost": cost
    })
  }

  reactive_transmutation("kubejs:catalyst_fake", "undergarden:catalyst", ["reactive:warp", "reactive:acid"], 200, 200)
  reactive_transmutation("aether:golden_ring", "kubejs:wizor_ring", ["reactive:warp", "reactive:acid"], 400, 400)
  reactive_transmutation("tide:bait", "kubejs:curse_bait_0", ["reactive:curse"], 1000, 1000)
  reactive_transmutation("midnight_madness:soul", "4x malum:infernal_spirit", ["reactive:blaze"], 100, 100)
  reactive_transmutation("midnight_madness:soul", "4x malum:earthen_spirit", ["reactive:verdant"], 100, 100)
  reactive_transmutation("midnight_madness:soul", "4x malum:aqueous_spirit", ["reactive:body"], 100, 100)
  reactive_transmutation("midnight_madness:soul", "4x malum:aerial_spirit", ["reactive:soul"], 100, 100)
  reactive_transmutation("midnight_madness:dark_soul", "4x malum:sacred_spirit", ["reactive:light"], 100, 100)
  reactive_transmutation("midnight_madness:dark_soul", "4x malum:arcane_spirit", ["reactive:warp"], 100, 100)
  reactive_transmutation("midnight_madness:dark_soul", "4x malum:eldritch_spirit", ["reactive:vital"], 100, 100)
  reactive_transmutation("midnight_madness:dark_soul", "4x malum:wicked_spirit", ["reactive:mind"], 100, 100)
  event.remove({ id: 'flavor_immersed_daily:honeycombbriquetmaking' })
  reactive_transmutation("minecraft:coal", "3x flavor_immersed_daily:honeycombbriquet", ["reactive:blaze"], 100, 100)


  event.remove({ id: 'reactive:transmutation/copper_symbol' })
  reactive_transmutation("kubejs:copper_gear", "reactive:copper_symbol", ["reactive:caustic"], 500, 500)

  event.remove({ id: 'reactive:transmutation/gold_symbol' })
  reactive_transmutation("kubejs:gold_gear", "reactive:gold_symbol", ["reactive:caustic", "reactive:light"], 500, 500)

  event.remove({ id: 'reactive:transmutation/iron_symbol' })
  reactive_transmutation("kubejs:iron_gear", "reactive:iron_symbol", ["reactive:caustic"], 500, 500)

  //精灵祭坛
  function altar(ingredients, output) {
    const ingredient = []
    ingredients = ingredients.map((item) => Item.of(item))
    ingredients.forEach(item => {
      ingredient.push({ item: item.id })
    });
    output = Item.of(output)
    event.custom({
      "type": "feywild:altar",
      "ingredients": ingredient,
      "output": {
        "count": output.count,
        "item": output.id
      }
    })
  }

  altar(["flavor_immersed_daily:rawpigheart", "minecraft:prismarine_shard", "enderzoology:ender_fragment", "enderzoology:ender_fragment", "enderzoology:ender_fragment"], "kubejs:drownlord_heart")
  event.remove({ id: 'feywild:dwarven_anvil' })
  altar(["feywild:fey_dust", "feywild:lesser_fey_gem", "feywild:lesser_fey_gem", "flintnpowder:flinter", "kubejs:steel_ingot"], "flintnpowder:volleygun")
  altar(["feywild:fey_dust", "feywild:lesser_fey_gem", "feywild:lesser_fey_gem", "minecraft:iron_block", "ad_astra:steel_block"], "feywild:dwarven_anvil")
  event.remove({ id: 'skeleton_uprising:skeleton_war_banner_r' })
  altar(["mna:transmuted_silver", "mna:transmuted_silver", "skeleton_uprising:cloth", "skeleton_uprising:cloth", "feywild:fey_ink_bottle"], "skeleton_uprising:skeleton_war_banner_item")
  event.remove({ id: 'mna:fluid_jug' })
  altar(["mna:transmuted_silver", "mna:transmuted_silver", "skeleton_uprising:amalgamated_bone", "minecraft:terracotta", "create:framed_glass_pane"], "mna:fluid_jug")
  event.remove({ id: 'skeleton_uprising:tome_of_flesh_r' })
  altar(["mna:transmuted_silver", "mna:transmuted_silver", "minecraft:enchanted_book", "skeleton_uprising:vertebrae", "skeleton_uprising:vertebrae"], "skeleton_uprising:tome_of_flesh")
  altar(["soulsweapons:iron_skull", "ceilands:spider_monarch_fang", "ceilands:ceilinum_ingot", "ceilands:ceilinum_ingot", "ceilands:ceilinum_ingot"], "kubejs:horror_skull")
  event.remove({ id: 'mna:fluid_jug' })
  event.remove({ id: 'goety:focus/iron_hide_focus' })
  altar(["mna:transmuted_silver", "skeleton_uprising:amalgamated_bone", "skeleton_uprising:amalgamated_bone", "even_more_magic:emerald_wand", "mna:superheated_vinteum_ingot"], "skeleton_uprising:staffof_summoning")
  event.remove({ id: 'skeleton_uprising:staffof_summoning_r' })
  altar(["kubejs:ferrous_plate", "kubejs:ferrous_plate", "goety:empty_focus", "goety:magic_emerald", "goety:magic_emerald"], "goety:iron_hide_focus")
  event.remove({ id: 'goety:focus/shocking_focus' })
  altar(["vintageimprovements:bronze_sheet", "vintageimprovements:bronze_sheet", "goety:empty_focus", "feywild:raw_spring_elven_quartz", "feywild:raw_spring_elven_quartz"], "goety:shocking_focus")
  event.remove({ id: 'goety:focus/cushion_focus' })
  altar(["mna:arcane_compound", "mna:arcane_compound", "goety:empty_focus", "ancient_elements:cloud", "ancient_elements:cloud"], "goety:cushion_focus")
  event.remove({ id: 'goety:focus/soul_bolt_focus' })
  altar(["goety:ectoplasm", "goety:ectoplasm", "goety:empty_focus", "meetyourfight:phantoplasm", "terrawhips_and_more:ectoplasm"], "goety:soul_bolt_focus")
  event.remove({ id: 'goety:focus/fire_breath_focus' })
  altar(["hmag:fire_bottle", "hmag:fire_bottle", "goety:empty_focus", "midnight:bogshroom_powder", "midnight:bogshroom_powder"], "goety:fire_breath_focus")
  event.remove({ id: 'skeleton_uprising:tome_of_cursebinding_r' })
  altar(["skeleton_uprising:cloth", "skeleton_uprising:cloth", "skeleton_uprising:runed_band", "skeleton_uprising:runed_band", "minecraft:book"], "skeleton_uprising:tome_of_cursebinding")
  event.remove({ id: 'skeleton_uprising:runed_band_r' })
  altar(["skeleton_uprising:mystic_bone", "skeleton_uprising:mystic_bone", "skeleton_uprising:runed_band", "skeleton_uprising:runed_band", "mna:vinteum_ingot"], "skeleton_uprising:runed_band")
  event.remove({ id: 'skeleton_uprising:elite_war_banner_r' })
  altar(["skeleton_uprising:mystic_bone", "allthecompressed:coal_block_1x", "skeleton_uprising:skeleton_war_banner_item", "skeleton_uprising:runed_band", "mna:superheated_vinteum_ingot"], "skeleton_uprising:expert_skeleton_war_banner_item")
  event.remove({ id: 'goety:focus/swarm_focus' })
  altar(["enemyexpansion:scorpion_tail", "goety:corpse_blossom", "goety:corpse_blossom", "goety:empty_focus", "minecraft:rotten_flesh"], "goety:swarm_focus")
  event.remove({ id: 'goety:focus/prisma_beam_focus' })
  altar(["celestial_core:guardian_spike", "minecraft:prismarine_shard", "minecraft:prismarine_shard", "minecraft:prismarine_crystals", "goety:empty_focus"], "goety:prisma_beam_focus")
  event.remove({ id: 'goety:focus/frost_breath_focus' })
  altar(["ancient_elements:frost_ingot", "minecraft:snowball", "minecraft:snowball", "minecraft:packed_ice", "goety:empty_focus"], "goety:frost_breath_focus")
  event.remove({ id: 'goety:focus/quaking_focus' })
  altar(["minecraft:obsidian", "minecraft:obsidian", "kubejs:overgrown_crystal", "kubejs:invar_ingot", "goety:empty_focus"], "goety:quaking_focus")
  event.remove({ id: 'goety:focus/bubble_stream_focus' })
  altar(["celestial_core:ocean_essence", "minecraft:soul_sand", "minecraft:soul_sand", "minecraft:magma_block", "goety:empty_focus"], "goety:bubble_stream_focus")
  event.remove({ id: 'goety:focus/biting_focus' })
  altar(["ceilands:spider_monarch_fang", "goety:savage_tooth", "goety:savage_tooth", "flavor_immersed_daily:bovinebone", "goety:empty_focus"], "goety:biting_focus")
  altar(["minecraft:anvil", "feywild:summoning_scroll", "feywild:lesser_fey_gem", "feywild:lesser_fey_gem", "iter_rpg:abstruse_cloth"], "feywild:summoning_scroll_dwarf_blacksmith")


  //森林仪式
  function tree_ritual(ingredients, output, sapling, time) {
    const ingredient = []
    ingredients = ingredients.map((item) => Item.of(item))
    ingredients.forEach(item => {
      ingredient.push({ item: item.id })
    });
    output = Item.of(output)
    event.custom({
      "type": "naturesaura:tree_ritual",
      "ingredients": ingredient,
      "sapling": {
        "item": sapling
      },
      "output": {
        "item": output.id,
        "count": output.count
      },
      "time": time
    })
  }
  tree_ritual(["tide:lucky_bait", "infinite_abyss:blue_glowing_crystal", "infinite_abyss:pink_glowing_crystal", "infinite_abyss:yellow_glowing_crystal", "infinite_abyss:green_glowing_crystal"], "kubejs:curse_bait_11", "minecraft:spruce_sapling", 600)
  tree_ritual(["minecraft:rabbit_foot", "infinite_abyss:deeprock_golem_spirit_stone", "infinite_abyss:red_deepstone", "infinite_abyss:red_deepstone", "infinite_abyss:cut_red_crystal"], "kubejs:curse_bait_12", "minecraft:dark_oak_sapling", 600)
  tree_ritual(["fright:bolts", "fright:bolts", "kubejs:electrum_gear", "kubejs:electrum_gear", "malum:alchemical_impetus", "malum:alchemical_impetus"], "kubejs:curse_bait_32", "minecraft:birch_sapling", 600)
  tree_ritual(["feywild:raw_winter_elven_quartz", "feywild:raw_winter_elven_quartz", "kubejs:bronze_gear", "kubejs:bronze_gear", "infinite_abyss:opal", "infinite_abyss:opal"], "kubejs:curse_bait_33", "gaiadimension:blue_agate_sapling", 600)
  tree_ritual(["chaos_project:corrupted_rotten_flesh", "chaos_project:corrupted_rotten_flesh", "infinite_abyss:cut_red_crystal", "naturesaura:token_fear", "destroy:chalk_dust", "destroy:chalk_dust"], "kubejs:mutant_zombified_piglin", "gaiadimension:pink_agate_sapling", 600)
  event.remove({ id: 'divinerpg:shaped/snow_globe' })
  tree_ritual(["kubejs:king_gel", "infinite_abyss:opal", "infinite_abyss:cut_red_crystal", "naturesaura:token_fear", "minecraft:diamond_block", "minecraft:snow_block"], "divinerpg:snow_globe", "minecraft:birch_sapling", 600)
  event.remove({ id: 'naturesaura:tree_ritual/nature_altar' })
  event.remove({ id: 'iter_rpg:enchantome_recipe' })
  event.remove({ id: 'extremecore:heart_recipe' })
  event.remove({ id: 'iter_rpg:ametrine_staff_recipe' })
  event.remove({ id: 'industrialforegoing:iron_gear' })
  event.remove({ id: 'industrialforegoing:gold_gear' })
  event.remove({ id: 'rpgadventures:heart_craft_mecha' })
  event.remove({ id: 'mcb:ancient_figurine_recipe' })
  event.remove({ id: 'rpgadventures:heart_of_goblins_craft' })
  event.remove({ id: 'immortalers_delight:enchantal_cooler' })
  tree_ritual(["naturesaura:token_joy", "divinerpg:ice_stone", "mna:decoration/arcane_stone", "mna:decoration/arcane_stone", "mna:decoration/arcane_stone", "naturesaura:gold_leaf", "greek_tales:golden_feather"], "naturesaura:nature_altar", "minecraft:oak_sapling", 600)
  tree_ritual(["naturesaura:infused_iron", "naturesaura:infused_iron", "naturesaura:tainted_gold", "naturesaura:tainted_gold", "divinerpg:snowflake", "divinerpg:snowflake", "chaos_project:corrupted_rotten_flesh"], "mcb:zombie_will", "minecraft:oak_sapling", 600)
  tree_ritual(["minecraft:diamond", "minecraft:diamond", "minecraft:book", "iter_rpg:ether_dust", "iter_rpg:ether_dust", "naturesaura:gold_powder", "naturesaura:gold_powder"], "iter_rpg:enchantome", "minecraft:dark_oak_sapling", 600)
  tree_ritual(["iter_rpg:amethyst_wand", "iter_rpg:abyssquartz_wand", "minecraft:blaze_powder", "minecraft:blaze_powder", "minecraft:diamond", "naturesaura:gold_powder", "naturesaura:gold_powder"], "iter_rpg:ametrine_staff", "minecraft:oak_sapling", 600)
  tree_ritual(["minecraft:redstone_block", "the_beginning_and_heaven:eternal", "the_beginning_and_heaven:eternal", "naturesaura:infused_iron", "naturesaura:infused_iron", "armageddon_mod:colossal_iron_ingot", "armageddon_mod:colossal_iron_ingot"], "rpgadventures:heart_of_machine", "minecraft:dark_oak_sapling", 600)
  tree_ritual(["pasterdream:pergamyn", "malum:earthen_spirited_glass", "malum:earthen_spirited_glass", "chaos_project:terrain_shard", "chaos_project:terrain_shard", "the_beginning_and_heaven:pure_copper", "the_beginning_and_heaven:pure_copper"], "kubejs:hunter_scroll_1", "the_beginning_and_heaven:alamo_sapling", 600)
  tree_ritual(["minecraft:poisonous_potato", "threateningly_mobs:nature_shell", "threateningly_mobs:wood_horn", "mhheavenandhell:kut_ku_scale", "naturesaura:infused_iron", "naturesaura:infused_iron", "create_new_age:overcharged_diamond"], "mcb:ancient_figurine", "the_beginning_and_heaven:alamo_sapling", 600)
  tree_ritual(["unearthed_journey:psilocybe_azurescens", "minecraft:red_mushroom", "minecraft:brown_mushroom", "chaos_project:goo", "naturesaura:infused_iron", "naturesaura:infused_iron"], "agonysing_hell:shroomy_crown", "gaiadimension:green_agate_sapling", 600)
  tree_ritual(["land_of_goblins:blank_totem", "create_new_age:overcharged_gold", "chaos_project:tontonolim_ingot", "chaos_project:goo", "kubejs:steel_ingot", "kubejs:steel_ingot", "naturesaura:infused_iron"], "rpgadventures:heart_of_goblins", "gaiadimension:green_agate_sapling", 600)
  tree_ritual(["threateningly_mobs:horsehoecrab_blood", "minecraft:writable_book", "magichem:signalite_meticulous", "magichem:signalite_equating", "magichem:signalite_devouring", "naturesaura:token_rage", "naturesaura:sky_ingot", "chaos_project:crabby_claw"], "kubejs:book_dog_eared", "gaiadimension:green_agate_sapling", 600)
  // tree_ritual(["minecraft:lapis_block", "minecraft:lapis_block", "naturesaura:sky_ingot", "frozone:ice_core", "goety:cursed_ingot", "goety:cursed_ingot", "unearthed_journey:chert_bricks", "unearthed_journey:chert_bricks"], "immortalers_delight:enchantal_cooler", "gaiadimension:blue_agate_sapling", 600)
  tree_ritual(["terrawhips_and_more:frostcore", "terrawhips_and_more:frostcore", "vintageimprovements:palladium_rod", "vintageimprovements:palladium_rod", "unusual_delight:snow_head", "silentgear:sickle_blueprint"], "terrawhips_and_more:frostscythe", "gaiadimension:blue_agate_sapling", 600)
  event.remove({ id: 'terrawhips_and_more:frosscytlecraft' })
  tree_ritual(["the_beginning_and_heaven:pure_copper", "the_beginning_and_heaven:pure_copper", "adventuresmod:aquatic_debris", "adventuresmod:aquatic_debris", "adventuresmod:twisted_bone", "adventuresmod:twisted_bone", "silentgear:trident_blueprint"], "adventuresmod:conjurer_trident", "gaiadimension:blue_agate_sapling", 600)
  event.remove({ id: 'adventuresmod:conjurer_trident' })
  event.remove({ id: 'chaos_project:stalker_knife_craft' })
  event.recipes.naturesaura.tree_ritual('chaos_project:haunting_knife', [
    'chaos_project:redoricter_rapier',
    'chaos_project:stalker_skin',
    'chaos_project:stalker_skin',
    'chaos_project:natrium_ingot',
    'chaos_project:natrium_ingot',
    'chaos_project:dweller_spike',
    'silentgear:dagger_blueprint',
  ],'gaiadimension:corrupted_sapling')
  event.remove({ id: 'threateningly_mobs:ep_craft' })
  event.recipes.naturesaura.tree_ritual('threateningly_mobs:earthpunch', [
    'threateningly_mobs:nature_shell',
    'threateningly_mobs:nature_shell',
    'threateningly_mobs:nature_shell',
    'threateningly_mobs:nature_shell',
    'extendedcrafting:black_iron_ingot',
    'extendedcrafting:black_iron_ingot',
    'silentgear:shield_blueprint',
  ],'malum:runewood_sapling')

  //自然祭坛
  function naturealtar(input, output, aura, time) {
    event.custom({
      "type": "naturesaura:altar",
      "input": {
        "item": input
      },
      "output": {
        "item": output
      },
      "aura": aura,
      "time": time
    })
  }
  function naturealtar_withcatalyst(input, output, catalyst, aura, time) {
    event.custom({
      "type": "naturesaura:altar",
      "input": {
        "item": input
      },
      "output": {
        "item": output
      },
      "catalyst": {
        "item": catalyst
      },
      "aura": aura,
      "time": time
    })
  }
  naturealtar("tide:lucky_bait", "kubejs:curse_bait_13", 100000, 300)
  naturealtar_withcatalyst("minecraft:book", "kubejs:hunter_scroll_3", "naturesaura:conversion_catalyst", 100000, 300)

  //矮人铁砧
  function dwarven_anvil(ingredients, mana, output, schematics) {
    const ingredient = []
    ingredients = ingredients.map((item) => Item.of(item))
    ingredients.forEach(item => {
      ingredient.push({ item: item.id })
    });
    output = Item.of(output)
    event.custom({
      "type": "feywild:dwarven_anvil",
      "ingredients": ingredient,
      "mana": mana,
      "output": {
        "count": output.count,
        "item": output.id
      },
      "schematics": {
        "item": schematics
      }
    })
  }

  dwarven_anvil(['kubejs:punisher_skull', 'feywild:raw_autumn_elven_quartz', 'feywild:raw_autumn_elven_quartz', 'feywild:raw_spring_elven_quartz', 'feywild:raw_spring_elven_quartz'], 200, "kubejs:furious_head", "feywild:schematics_elven_quartz")
  dwarven_anvil(['minecraft:goat_horn', 'minecraft:goat_horn', 'minecraft:skeleton_skull', 'vintageimprovements:andesite_spring', 'vintageimprovements:andesite_spring'], 300, "faded_conquest_2:terrible_tensummon", "feywild:schematics_elven_quartz")
  dwarven_anvil(['feywild:greater_fey_gem', 'feywild:greater_fey_gem', 'feywild:greater_fey_gem', 'feywild:greater_fey_gem', 'tide:bait'], 300, "kubejs:aero_gem", "feywild:schematics_elven_quartz")
  dwarven_anvil(['goety:soul_emerald', 'call_of_yucutan:jade', 'iceandfire:sapphire_gem', 'feywild:raw_summer_elven_quartz', 'feywild:raw_summer_elven_quartz'], 300, "kubejs:bobicraft_core", "feywild:schematics_elven_quartz")
  event.remove({ id: 'vintageimprovements:craft/vibrating_table' })
  dwarven_anvil(['kubejs:vibrationg_gear', 'vintageimprovements:golden_spring', 'vintageimprovements:golden_spring', 'create:andesite_casing', 'create:copper_casing'], 50, "vintageimprovements:vibrating_table", "feywild:schematics_elven_quartz")
  event.remove({ id: 'aquamirae:abyssal_amethyst' })
  dwarven_anvil(["minecraft:amethyst_shard", "minecraft:amethyst_shard", "aquamirae:ship_graveyard_echo", "aquamirae:ship_graveyard_echo", "aquamirae:ship_graveyard_echo"], 50, "aquamirae:abyssal_amethyst", "feywild:schematics_elven_quartz")
  event.remove({ id: 'farmersdelight:cooking_pot' })
  dwarven_anvil(["vintageimprovements:iron_spring", "vintageimprovements:iron_spring", "vintageimprovements:iron_spring", "minecraft:brick", "minecraft:brick"], 50, "farmersdelight:cooking_pot", "feywild:schematics_elven_quartz")
  dwarven_anvil(["feywild:shiny_fey_gem", "minecraft:heart_of_the_sea"], 50, "aquaticcreaturesmod:mesopelagic_heart", "feywild:schematics_elven_quartz")
  event.remove({ id: 'valoria:jeweler_table' })
  dwarven_anvil(["minecraft:crafting_table", "feywild:raw_spring_elven_quartz", "feywild:raw_summer_elven_quartz", "feywild:raw_autumn_elven_quartz", "feywild:raw_winter_elven_quartz"], 300, "valoria:jeweler_table", "feywild:schematics_elven_quartz")
  event.remove({ id: 'skeleton_uprising:bonecutter_r' })
  dwarven_anvil(["allthecompressed:bone_block_1x", "skeleton_uprising:runed_bone", "minecraft:iron_ingot", "minecraft:iron_ingot", "silentgear:katana_blueprint"], 300, "skeleton_uprising:bonecutter", "feywild:schematics_elven_quartz")
  event.remove({ id: 'skeleton_uprising:occult_scarf_r' })
  dwarven_anvil(["skeleton_uprising:cloth", "skeleton_uprising:cloth", "skeleton_uprising:runed_bone", "skeleton_uprising:runed_bone", "silentgear:helmet_blueprint"], 300, "skeleton_uprising:occult_scarf_helmet", "feywild:schematics_elven_quartz")
  event.remove({ id: 'mhheavenandhell:kut_ku_hammer_recipe' })
  dwarven_anvil(["mhheavenandhell:kut_ku_beak", "mhheavenandhell:kut_ku_wing", "mhheavenandhell:kut_ku_wing", "silentgear:hammer_blueprint", "reactive:blaze_bottle"], 300, "mhheavenandhell:kut_ku_hammer", "feywild:schematics_elven_quartz")
  //符文锻炉
  function arcane_furnace(tier, input, output, burnTime) {
    output = Item.of(output)
    event.custom({
      "type": "mna:arcane-furnace",
      "tier": tier,
      "input": input,
      "output": output.id,
      "outputQuantity": output.count,
      "burnTime": burnTime
    })
  }

  arcane_furnace(1, "tide:bait", "kubejs:curse_bait_0", 600)
  event.recipes.mna.arcaneFurnace("flintnpowder:cast_iron_alloy","flintnpowder:cast_iron_ingot",600)
  event.recipes.mna.arcaneFurnace("gomwaga:raw_ritogium","gomwaga:ritogium_ingot",600)


  //卷簧机
  event.custom({
    "type": "vintageimprovements:coiling",
    "springColor": "d0d4d4",
    "ingredients": [{
      "item": "tide:bait"
    }
    ],
    "results": [
      {
        "item": "kubejs:curse_bait_1",
        "count": 1
      }
    ],
    "processingTime": 240
  })

  //冲压机
  function curving(itemAsHead, ingredients, results) {
    results = Item.of(results)
    event.custom({
      "type": "vintageimprovements:curving",
      "itemAsHead": itemAsHead,
      "ingredients": [
        {
          "item": ingredients
        }
      ],
      "results": [
        {
          "item": results.id,
          "count": results.count
        }
      ]
    })
  }

  event.remove({id:'iter_rpg:abstruse_cloth_craft'})
  curving("midnight:virilux", "tide:bait", "kubejs:curse_bait_3")
  curving("goety:soul_emerald", "malum:rune_of_warding", "kubejs:farfadox_core")
  curving("goety:soul_emerald", "malum:rune_of_the_aether", "kubejs:curse_bait_4")
  curving("goety:soul_emerald", "kubejs:infernal_dirtworm", "kubejs:infernal_worm")
  curving("iter_rpg:ether_dust", "pasterdream:fabric", "iter_rpg:abstruse_cloth")

  //振动台
  function vibrating(ingredients, results, processingTime) {
    results = Item.of(results)
    event.custom({
      "type": "vintageimprovements:vibrating",
      "ingredients": [{
        "item": ingredients
      }
      ],
      "results": [
        {
          "item": results.id,
          "count": results.count
        }
      ],
      "processingTime": processingTime
    })
  }

  vibrating("tide:lucky_bait", "kubejs:curse_bait_6", 300)
  vibrating("emotive_blocks:happy_grass", "kubejs:curse_bait_7", 300)
  vibrating("wrd:chiseled_bone_wall", "kubejs:bone_crush", 300)
  event.remove({ id: 'farmersdelight:cutting_board' })
  vibrating("allthecompressed:oak_log_1x", "farmersdelight:cutting_board", 300)
  vibrating("kubejs:curse_bait_9", "kubejs:curse_bait_10", 3000)
  event.remove({ id: 'wizards_reborn:shapeless/arcanum_dust_with_redstone' })
  event.remove({ id: 'wizards_reborn:shapeless/arcanum_dust' })
  vibrating("wizards_reborn:arcanum", "2x wizards_reborn:arcanum_dust", 300)

  //砂带磨床
  function polishing(speed_limits, ingredients, results, processingTime) {
    results = Item.of(results)
    event.custom({
      "type": "vintageimprovements:polishing",
      "speed_limits": speed_limits,
      "ingredients": [
        {
          "item": ingredients
        }
      ],
      "results": [
        {
          "item": results.id,
          "count": results.count
        }
      ],
      "processingTime": processingTime
    })
  }

  polishing(1, "aether:golden_ring", "kubejs:knight_ring", 120)
  polishing(2, "kitchenkarrot:gem_carrot", "kubejs:mechanical_carrot", 120)
  polishing(2, "tide:lucky_bait", "kubejs:curse_bait_8", 120)
  event.remove({ id: 'gaiadimension:smelting/crystal_redstone' })
  event.remove({ id: 'gaiadimension:smelting/crystal_lapis' })
  event.remove({ id: 'soulsweapons:lost_soul' })
  event.remove({ id: 'silentgear:bronze_ingot' })
  polishing(2, "minecraft:lapis_lazuli", "gaiadimension:crystallized_lapis_lazuli", 60)
  polishing(2, "minecraft:redstone", "gaiadimension:crystallized_redstone", 60)
  polishing(2, "minecraft:soul_sand", "soulsweapons:lost_soul", 60)


  //离心机
  event.custom({
    "type": "vintageimprovements:centrifugation",
    "minimalRPM": 250,
    "ingredients": [
      {
        "item": "tide:lucky_bait"
      }
    ],
    "results": [
      {
        "item": "kubejs:curse_bait_2",
        "count": 1
      }
    ],
    "processingTime": 1000
  })

  event.custom({
    "type": "vintageimprovements:centrifugation",
    "minimalRPM": 200,
    "ingredients": [
      {
        "item": "reactive:body_bottle"
      },
      {
        "item": "ad_astra:steel_block"
      },
      {
        "item": "goety:cursed_metal_block"
      },
      {
        "item": "malum:cornered_weave"
      }
    ],
    "results": [
      {
        "item": "kubejs:minister_mask",
        "count": 1
      }
    ],
    "processingTime": 1000
  })

  event.custom({
    "type": "vintageimprovements:centrifugation",
    "minimalRPM": 200,
    "ingredients": [
      {
        "item": "tofucraft:soybean"
      }
    ],
    "results": [
      {
        "fluid": "minecraft:water",
        "amount": 1000
      }
    ],
    "processingTime": 1000
  })

  event.custom({
    "type": "vintageimprovements:centrifugation",
    "minimalRPM": 200,
    "ingredients": [
      {
        "item": "undergarden:utherium_crystal"
      },
      {
        "item": "undergarden:utherium_crystal"
      },
      {
        "item": "legendary_monsters:corrupted_soul"
      }
    ],
    "results": [
      {
        "item": "gaiadimension:glint_and_gold",
        "count": 1
      }
    ],
    "processingTime": 1000
  })

  event.remove({ id: 'kitchenkarrot:water' })
  event.custom({
    "type": "vintageimprovements:centrifugation",
    "minimalRPM": 200,
    "ingredients": [
      {
        "fluid": "minecraft:water",
        "amount": 1000
      }
    ],
    "results": [
      {
        "item": "kitchenkarrot:water",
        "count": 6
      }
    ],
    "processingTime": 1000
  })

  //压缩机
  event.remove({ id: 'iter_rpg:seven_seas_concoction_craft' })
  event.custom({
    "type": "vintageimprovements:vacuumizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      {
        "fluid": "createfood:melon_cream_frosting",
        "amount": 1000
      },
      {
        "item": "iter_rpg:seashell",
        "count": 1
      },
      {
        "item": "minecraft:sea_pickle",
        "count": 3
      },
      {
        "tag": "forge:raw_fishes",
        "count": 3
      }
    ],
    "results": [
      {
        "item": "iter_rpg:seven_seas_concoction",
        "count": 1
      }
    ],
    "processingTime": 600
  })

  event.remove({ id: 'gaiadimension:smelting/pink_essence' })
  event.custom({
    "type": "vintageimprovements:vacuumizing",
    "secondaryFluidInput": 0,
    "heatRequirement": "heated",
    "ingredients": [
      {
        "item": "gaiadimension:gaia_stone",
        "count": 1
      }
    ],
    "results": [
      {
        "item": "gaiadimension:pink_essence",
        "count": 1
      }
    ],
    "processingTime": 600
  })

  event.custom({
    "type": "vintageimprovements:vacuumizing",
    "secondaryFluidInput": 0,
    "heatRequirement": "heated",
    "ingredients": [
      {
        "fluid": "kubejs:molten_zinc",
        "amount": 100
      },
      {
        "item": "overworldpiglins:grand_piglin_fang",
        "count": 1
      },
      {
        "item": "overworldpiglins:small_piglin_fang",
        "count": 2
      }
    ],
    "results": [
      {
        "item": "kubejs:piglin_bone_ingot",
        "count": 1
      }
    ],
    "processingTime": 100
  })

  event.custom({
    "type": "vintageimprovements:vacuumizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      {
        "fluid": "createmetallurgy:molten_bronze",
        "amount": 1000
      },
      {
        "item": "iceandfire:sapphire_block",
        "count": 1
      },
      {
        "item": "reactive:soul_bottle",
        "count": 2
      }
    ],
    "results": [
      {
        "item": "kubejs:await_core",
        "count": 1
      }
    ],
    "processingTime": 600
  })

  event.remove({ id: 'iter_rpg:ametrine_ingot_craft' })
  event.custom({
    "type": "vintageimprovements:vacuumizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      {
        "fluid": "createmetallurgy:molten_invar",
        "amount": 30
      },
      {
        "item": "iter_rpg:ether_dust",
        "count": 1
      },
      {
        "item": "minecraft:gold_ingot",
        "count": 1
      },
      {
        "item": "minecraft:copper_ingot",
        "count": 1
      },
      {
        "item": "minecraft:amethyst_shard",
        "count": 1
      }
    ],
    "results": [
      {
        "item": "iter_rpg:ametrine_ingot",
        "count": 1
      }
    ],
    "processingTime": 600
  })

  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      {
        "fluid": "minecraft:lava",
        "amount": 10000
      },
      {
        "item": "kubejs:sand_warrior_eye",
        "count": 1
      },
      {
        "item": "createmetallurgy:refractory_mortar",
        "count": 3
      }
    ],
    "results": [
      {
        "item": "kubejs:eye_of_sandstorm",
        "count": 1
      }
    ],
    "processingTime": 600
  })

  event.remove({ id: 'extendedcrafting:redstone_ingot' })
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      {
        "fluid": "kubejs:molten_ferrous",
        "amount": 10
      },
      {
        "item": "minecraft:redstone",
        "count": 1
      },
      {
        "item": "minecraft:iron_ingot",
        "count": 1
      },
      {
        "item": "naturesaura:gold_powder",
        "count": 2
      }
    ],
    "results": [
      {
        "item": "extendedcrafting:redstone_ingot",
        "count": 1
      }
    ],
    "processingTime": 600
  })

  event.remove({ id: 'extendedcrafting:black_iron_ingot' })
  event.custom({
    "type": "vintageimprovements:pressurizing",
    "secondaryFluidInput": 0,
    "ingredients": [
      {
        "fluid": "createmetallurgy:molten_steel",
        "amount": 50
      },
      {
        "item": "minecraft:black_dye",
        "count": 1
      },
      {
        "item": "minecraft:iron_ingot",
        "count": 1
      },
      {
        "item": "naturesaura:gold_powder",
        "count": 2
      }
    ],
    "results": [
      {
        "item": "extendedcrafting:black_iron_ingot",
        "count": 1
      }
    ],
    "processingTime": 600
  })

  //光束加工
  function optical(ingredients, processingTime, required_beam_type, results) {
    event.custom({
      "type": "create_optical:focusing",
      "ingredients": [
        {
          "item": ingredients
        }
      ],
      "processingTime": processingTime,
      "required_beam_type": required_beam_type,
      "results": [
        {
          "item": results
        }
      ]
    })
  }

  // optical("tide:lucky_bait",200,1,"kubejs:curse_bait_3")
  // optical("tide:lucky_bait",200,0,"kubejs:curse_bait_4")
  // optical("kubejs:stun_skeleton",200,3,"kubejs:chad_boxer")
  // optical("overworldpiglins:grand_piglin_fang",200,3,"kubejs:curse_bait_16")

  //杠杆锤
  function hammering(hammerBlows, ingredients, results) {
    event.custom({
      "type": "vintageimprovements:hammering",
      "hammerBlows": hammerBlows,
      "ingredients": [
        {
          "item": ingredients
        }
      ],
      "results": [
        {
          "item": results
        }
      ]
    })
  }
  event.remove({ id: 'infinite_abyss:cut_crystal_recipe' })
  hammering(5, "tide:lucky_bait", "kubejs:curse_bait_34")
  hammering(5, "kubejs:curse_bait_34", "kubejs:curse_bait_35")
  hammering(5, "infinite_abyss:glowing_red_crystal", "infinite_abyss:cut_red_crystal")
  hammering(5, "kubejs:jungle_slime", "terrawhips_and_more:thebrokencrown")

  //重组机
  function restructuring(byproduct, cookingtime, experience, ingredient, result) {
    event.custom({
      "type": "gaiadimension:restructuring",
      "byproduct": byproduct,
      "cookingtime": cookingtime,
      "experience": experience,
      "ingredient": {
        "item": ingredient
      },
      "result": result
    })
  }

  restructuring("gaiadimension:black_residue", 400, 0.5, "tide:lucky_bait", "kubejs:curse_bait_18")

  //净化机
  function purifying(byproduct, cookingtime, experience, ingredient, result) {
    event.custom({
      "type": "gaiadimension:purifying",
      "byproduct": {
        "item": byproduct
      },
      "cookingtime": cookingtime,
      "experience": experience,
      "ingredient": {
        "item": ingredient
      },
      "result": result
    })
  }

  purifying("gaiadimension:black_residue", 400, 0.5, "tide:lucky_bait", "kubejs:curse_bait_19")
  event.remove({ id: 'flavor_immersed_daily:saltywatermake' })
  purifying("minecraft:sugar", 200, 0.25, "minecraft:water_bucket", "flavor_immersed_daily:saltywater")

  //晒干架
  function drying_rack(cookingtime, experience, ingredient, result) {
    event.custom({
      "type": "youkaishomecoming:drying_rack",
      "category": "misc",
      "cookingtime": cookingtime,
      "experience": experience,
      "ingredient": {
        "item": ingredient
      },
      "result": result
    })
  }
  event.remove({ id: 'undergarden:smelt_glitterkelp' })
  event.remove({ id: 'minecraft:dried_kelp_from_smelting' })
  event.remove({ id: 'minecraft:dried_kelp_from_smoking' })
  event.remove({ id: 'undergarden:smoke_glitterkelp' })
  event.remove({ id: 'unusual_delight:brpicklerecp' })
  event.remove({ id: 'minecraft:dried_kelp_from_campfire_cooking' })
  drying_rack(400, 5.0, "minecraft:kelp", "minecraft:dried_kelp")
  drying_rack(400, 5.0, "undergarden:glitterkelp", "minecraft:dried_kelp")
  drying_rack(400, 5.0, "unusual_delight:prepared_sea_pickle", "unusual_delight:braised_sea_pickle")

  //激光切割
  function laser_cutting(ingredients, results, energy, maxChargeRate) {
    results = Item.of(results)
    event.custom({
      "type": "vintageimprovements:laser_cutting",
      "ingredients": [
        {
          "item": ingredients
        }
      ],
      "results": [
        {
          "item": results.id,
          "count": results.count
        }
      ],
      "energy": energy,
      "maxChargeRate": maxChargeRate
    })
  }
  event.remove({ id: 'the_beginning_and_heaven:hornocobrepuro' })
  event.remove({ id: 'forbidden_arcanus:cloth' })
  laser_cutting("minecraft:copper_block", "the_beginning_and_heaven:pure_copper", 8000, 60)
  laser_cutting("minecraft:white_wool", "forbidden_arcanus:cloth", 6000, 60)
  laser_cutting("minecraft:writable_book", "kubejs:hunter_scroll_0", 12000, 60)
  laser_cutting("tide:lucky_bait", "kubejs:curse_bait_16", 12000, 60)

  //车床
  function turning(ingredients, results, processingTime) {
    results = Item.of(results)
    event.custom({
      "type": "vintageimprovements:turning",
      "ingredients": [
        {
          "item": ingredients
        }
      ],
      "results": [
        {
          "item": results.id,
          "count": results.count
        }
      ],
      "processingTime": processingTime
    })
  }
  turning("tide:lucky_bait", "kubejs:curse_bait_14", 600)
  turning("kubejs:curse_bait_14", "kubejs:curse_bait_15", 600)

  //充电
  function energising(energy_needed, ingredients, results) {
    event.custom({
      "type": "create_new_age:energising",
      "energy_needed": energy_needed,
      "ingredients": [
        {
          "item": ingredients
        }
      ],
      "results": [
        {
          "item": results
        }
      ]
    })
  }
  energising(20000, "tide:lucky_bait", "kubejs:curse_bait_44")
  energising(40000, "kubejs:curse_bait_44", "kubejs:curse_bait_45")
  energising(40000, "minecraft:writable_book", "kubejs:hunter_scroll_2")

  //祭祀诸神
  function offering(input, start_item, output) {
    event.custom({
      "type": "naturesaura:offering",
      "input": {
        "item": input
      },
      "start_item": {
        "item": start_item
      },
      "output": {
        "item": output
      }
    })
  }

  event.remove({ id: 'magichem:shaped/alembic' })
  offering("create:mechanical_drill", "naturesaura:calling_spirit", "kubejs:nether_drill")
  offering("minecraft:soul_lantern", "valoria:amber_gem", "kubejs:fortress_lamp")
  offering("kubejs:steel_orb", "naturesaura:token_euphoria", "kubejs:spell_orb")
  offering("tide:lucky_bait", "naturesaura:token_terror", "kubejs:curse_bait_46")
  offering("reactive:crucible", "egorsanss_bosses:ultra_drill", "magichem:alembic")
  offering("kubejs:curse_bait_46", "magichem:signalite", "kubejs:curse_bait_47")
  offering("kubejs:freeze_gem", "magichem:signalite_gatekeeping", "kubejs:cyromancer_orb")
  offering("kubejs:curse_bait_48", "biomancy:bio_lumens", "kubejs:curse_bait_49")

  //anointing
  function anointing(targetBlock, materia, chance, result) {
    event.custom({
      "type": "magichem:anointing",
      "targetBlock": targetBlock,
      "materia": materia,
      "chance": chance,
      "result": result
    })
  }

  event.remove({ id: 'naturesaura:gold_brick' })
  anointing("minecraft:stone_bricks", "magichem:admixture_energy", 10, "naturesaura:gold_brick")

  //生物锻炉
  function bio_forging(ingredients, nutrientsCost, result) {
    const ingredient = []
    ingredients = ingredients.map((item) => Item.of(item))
    ingredients.forEach(item => {
      ingredient.push({ count: item.count, item: item.id })
    });
    result = Item.of(result)
    event.custom({
      "type": "biomancy:bio_forging",
      "bio_forge_tab": "biomancy:misc",
      "ingredients": ingredient,
      "nutrientsCost": nutrientsCost,
      "result": {
        "item": result.id,
        "coumt": result.count
      }
    })
  }

  event.remove({id:'mcb:white_king_chess_piece_recipe'})
  event.remove({id:'biomancy:bio_forging/bio_lab'})
  bio_forging(["3x biomancy:flesh_bits","4x biomancy:tough_fibers","3x biomancy:mineral_fragment","2x flavor_immersed_daily:cookedpigear"],10,"kubejs:pyromancer")
  bio_forging(["3x biomancy:flesh_bits","16x terramity:artificial_lava_display","3x chaos_project:corrupted_rotten_flesh","2x midnight:nightshroom_powder"],50,"kubejs:lava_demon")
  bio_forging(["2x biomancy:creator_mix","2x unearthed_journey:manganese_steel_ingot","better_boss:ojh","5x tide:magnetic_bait"],50,"kubejs:curse_bait_50")
  bio_forging(["2x biomancy:creator_mix","4x minecraft:fermented_spider_eye","5x minecraft:white_dye","12x divinerpg:checker"],50,"mcb:white_king_chess_piece")
  bio_forging(["2x biomancy:creator_mix","4x biomancy:exotic_dust","1x kubejs:chess","2x biomancy:living_flesh","flavor_immersed_daily:steamedfish"],50,"biomancy:bio_lab")
  bio_forging(["minecraft:enchanted_book","4x biomancy:bone_fragments","1x biomancy:insomnia_cure","2x eidolon:bone_pile"],50,"midnight_madness:enchanted_midnight_necronomicon")
  bio_forging(["2x minecraft:spider_eye","biomancy:organic_compound","8x goety:haunted_glass","biomancy:insomnia_cure"],50,"kubejs:suspicious_eyes")

  //活体酿造台
  function bio_brewing(ingredients,nutrientsCost,processingTime,reactant,result){
    const ingredient = []
    ingredients = ingredients.map((item) => Item.of(item))
    ingredients.forEach(item => {
      ingredient.push({item: item.id })
    });
    event.custom({
      "type":"biomancy:bio_brewing",
      "ingredients":ingredient,
      "nutrientsCost":nutrientsCost,
      "processingTime":processingTime,
      "reactant":{"item":reactant},
      "result":{"item":result}})
  }
  bio_brewing(["biomancy:unstable_compound","biomancy:exotic_compound","kimetsunoyaiba:human_flesh"],30,120,"biomancy:vial","mcb:surgical_needle")

  //压力室
  function pressure_chamber(ingredients,pressure,output){
    const ingredient = []
    const outputs = []
    ingredients = ingredients.map((item) => Item.of(item))
    ingredients.forEach(item => {
      ingredient.push({type:"pneumaticcraft:stacked_item", count: item.count, item: item.id })
    });
    output = output.map((item) => Item.of(item))
    output.forEach(item => {
      outputs.push({type:"pneumaticcraft:stacked_item", count: item.count, item: item.id })
    });
    event.custom({
  "type": "pneumaticcraft:pressure_chamber",
  "inputs": ingredient,
  "pressure": pressure,
  "results": outputs
})
  }
  event.remove({id:'chaos_project:zombie_craft'})
  event.remove({id:'silentgear:blaze_gold_ingot'})
  event.remove({id:'silentgear:compounding/metal/blaze_gold_ingot'})
  pressure_chamber(["2x chaos_project:redorict_ingot","2x chaos_project:corrupted_rotten_flesh","minecraft:skeleton_skull","chaos_project:shine_soul"],3,["chaos_project:zombie_brain"])
  pressure_chamber(["2x netherexp:verdant_frogmist","8x minecraft:quartz","minecraft:skeleton_skull"],3,["greekfantasy:gigante_head"])
  pressure_chamber(["minecraft:gold_ingot","4x minecraft:blaze_powder","biomancy:volatile_fluid"],3,["silentgear:blaze_gold_ingot"])
  pressure_chamber(["call_of_drowner:broken_drowned_soul","minecraft:heart_of_the_sea","celestial_core:ocean_essence","inka:headclavablock"],3,["kubejs:wither_heart"])

  //热气动加工机
  event.custom({
  "type": "pneumaticcraft:thermo_plant",
  "air_use_multiplier": 3.0,
  "exothermic": false,
  "fluid_input": {
    "type": "pneumaticcraft:fluid",
    "amount": 2000,
    "tag": "forge:lubricant"
  },
  "item_input": {
    "item": "minecraft:golden_helmet"
  },
  "item_output": {
    "item": "kubejs:tumi"
  },
  "pressure": 3.0,
  "speed": 0.5
})

  // //魔凝机
  // function enchantal_cooler(ingredients, container, output) {
  //   const ingredient = []
  //   ingredients = ingredients.map((item) => Item.of(item))
  //   ingredients.forEach(item => {
  //     ingredient.push({ item: item.id })
  //   });
  //   output = Item.of(output)
  //   event.custom({
  //     "type": "immortalers_delight:enchantal_cooler",
  //     "ingredients": ingredients,
  //     "container": {
  //       "item": container
  //     },
  //     "output": {
  //       "item": output.id,
  //       "count": output.count
  //     }
  //   })
  // }

  // event.remove({ id: 'goety:spider_nest' })
  // event.remove({ id: 'chaos_project:terrain_craft' })
  // enchantal_cooler(["valoria:amber_gem", "naturesaura:token_rage", "iter_rpg:ametrine_ingot", "magichem:signalite_equating"], "kubejs:knight_ring", "kubejs:crone_ring")
  // enchantal_cooler(["mna:transmuted_silver", "iter_rpg:ether_dust", "magichem:admixture_industry", "magichem:admixture_cold"], "adventuresmod:diamond_caster", "kubejs:illawizard_wand")
  // enchantal_cooler(["magichem:essentia_nourishing", "magichem:essentia_rotten", "valoria:amber_gem", "create_new_age:overcharged_diamond"], "naturesaura:eye", "kubejs:eyeillager")
  // enchantal_cooler(["goety:spider_egg", "goety:ectoplasm", "goety:soul_emerald", "malum:rune_of_the_arena"], "kubejs:spider_tracker", "kubejs:orb_spider")
  // enchantal_cooler(["chaos_project:terrain_shard", "chaos_project:terrain_shard", "chaos_project:mintolis_ingot", "chaos_project:mintolis_ingot"], "create_new_age:overcharged_diamond", "chaos_project:terrain_gem")

  //熔炼
  function metallurgy(input) {
    event.recipes.createmetallurgy.melting(Fluid.of(`kubejs:molten_${input}`, 90), `kubejs:${input}_ingot`, 90, 'heated')
    event.recipes.createmetallurgy.melting(Fluid.of(`kubejs:molten_${input}`, 90), `kubejs:${input}_dust`, 90, 'heated')
    event.recipes.createmetallurgy.melting(Fluid.of(`kubejs:molten_${input}`, 45), `kubejs:${input}_rod`, 45, 'heated')
    event.recipes.createmetallurgy.melting(Fluid.of(`kubejs:molten_${input}`, 360), `kubejs:${input}_gear`, 180, 'heated')
    event.recipes.createmetallurgy.melting(Fluid.of(`kubejs:molten_${input}`, 90), `kubejs:${input}_plate`, 90, 'heated')
    event.recipes.createmetallurgy.melting(Fluid.of(`kubejs:molten_${input}`, 10), `kubejs:${input}_nugget`, 20, 'heated')
    event.recipes.createmetallurgy.casting_in_basin(`kubejs:${input}_block`, Fluid.of(`kubejs:molten_${input}`, 810), 120)
    event.recipes.createmetallurgy.casting_in_table(`kubejs:${input}_ingot`, [Fluid.of(`kubejs:molten_${input}`, 90), 'createmetallurgy:graphite_ingot_mold'], 90, false)
    event.recipes.createmetallurgy.casting_in_table(`kubejs:${input}_rod`, [Fluid.of(`kubejs:molten_${input}`, 45), 'createmetallurgy:graphite_rod_mold'], 45, false)
    event.recipes.createmetallurgy.casting_in_table(`kubejs:${input}_gear`, [Fluid.of(`kubejs:molten_${input}`, 360), 'createmetallurgy:graphite_gear_mold'], 180, false)
    event.recipes.createmetallurgy.casting_in_table(`kubejs:${input}_plate`, [Fluid.of(`kubejs:molten_${input}`, 90), 'createmetallurgy:graphite_plate_mold'], 90, false)
    event.recipes.createmetallurgy.casting_in_table(`kubejs:${input}_nugget`, [Fluid.of(`kubejs:molten_${input}`, 20), 'createmetallurgy:graphite_nugget_mold'], 20, false)
  }
  metallurgy('ferrous')
  metallurgy('ghost')
  metallurgy('demonite')
  event.remove({ id: 'celestial_core:ocean_ingot' })
  event.remove({ id: 'chaos_project:amecraft' })
  event.recipes.createmetallurgy.alloying('celestial_core:ocean_ingot', [Fluid.of(`createmetallurgy:molten_iron`, 90), '2x minecraft:prismarine_crystals', '2x minecraft:prismarine_shard', 'celestial_core:ocean_essence'], 90, 'heated')
  event.recipes.createmetallurgy.alloying('chaos_project:amethynd_ingot', [Fluid.of(`createmetallurgy:molten_brass`, 90), '2x minecraft:amethyst_shard', 'infinite_abyss:green_glowing_crystal', 'infinite_abyss:blue_glowing_crystal'], 90, 'heated')

})


