StartupEvents.registry("item", (event) => {
  const curse_bait = {'yahaba':'失琶羽','hoshi_kirara':'星 绮罗罗','charles_bernard':'查理 贝尔纳','fullbody':'全身人形','tashigi':'达斯琪','alvida_2':'亚尔丽塔','kukuru':'躯俱留队',
  'kyogai':'响凯','cursed_spirit_grade_211':'狼人','hanyu':'飞机女','rui_mother':'累的母亲','sham':'山姆','sabito':'镇兔','miwa_kasumi':'三轮霞','buggy':'巴基','cursed_spirit_grade_11':'尊巴','buchi':'布治',
  'rui_father':'累的父亲','kuro':'克洛'
   }
  event.create(`catalyst_fake`).texture('kubejs:item/catalyst_fake').displayName('未充能的深园催化剂')
  event.create('battle_wand').displayName('传送杖')
  event.create('goblin_coin').displayName('哥布林金币')
  event.create('shell_horn').displayName('充能贝壳号角')
  event.create('dark_oak_golem_summon').displayName('深色橡木傀儡召唤器')
  event.create('amethystgolemitem').displayName('紫水晶傀儡召唤器')
  event.create('dark_golems_statue_item').displayName('幽匿傀儡召唤器')
  event.create('first_of_basalt').displayName('玄武岩傀儡召唤器')
  event.create('first_of_sand_item').displayName('沙巨人傀儡召唤器')
  event.create('first_of_the_archer').displayName('发射器傀儡召唤器')
  event.create('first_of_the_village_item').displayName('村庄傀儡召唤器')
  event.create('obsidiangolemitem').displayName('黑曜石傀儡召唤器')
  event.create('prismarine_miinistrosity_statue').displayName('水晶守护者召唤器')
  event.create('spruce_giant_statue').displayName('云杉巨人召唤器')
  event.create('tnt_yeteer_statue').displayName('TNT投手傀儡召唤器')
  event.create('tnt_statue').displayName('地面TNT傀儡召唤器')
  event.create('tnt_golem_statue').displayName('空中TNT傀儡召唤器')
  event.create('stunt_bone').displayName('特技骨')
  event.create('bulldrogioth').displayName('被污染的龙虾')
  event.create('villagersoul').displayName('忍者灵魂')
  event.create('magma_core').displayName('熔岩核心')
  event.create('overgrown_crystal').displayName('青苔水晶')
  event.create('jungle_gel').displayName('丛林凝胶')
  event.create('snow_essence').displayName('雪人精华')
  event.create('horror_bone').displayName('可怖骨头')
  event.create('misc_box').displayName('未完成品')
  event.create('spider_fang').displayName('蜘蛛女王毒牙')
  event.create('kuoyu_gel').displayName('蛞蝓粘液')
  event.create('fortress_lamp').displayName('要塞提灯')
  event.create('spell_orb').displayName('咒术精华')
  event.create('nether_drill').displayName('地狱钻头')
  event.create('chess').displayName('国际象棋')
  event.create('tear_crystal').displayName('泪晶')
  for(var key in curse_bait){
    event
    .create(`${key}_soul`)
    .texture('layer0', 'kubejs:item/soul')
    .displayName(`${curse_bait[key]}灵魂`)
  }
  event.create('woodblewitt').food(food => {
    food
      .hunger(2)
      .effect('kubejs:slim', 600, 0, 1)
  }).displayName('缩小菇')
  event.create('spider_tracker').displayName('蜘蛛巢穴探测器')
  event.create('freeze_gem').displayName('冰术师宝石')
  event.create('gear_model').displayName('齿轮模具')
  event.create('king_gel').displayName('王之凝胶')

  event
    .create(`mechanical_gear`)
    .texture('layer0', 'kubejs:item/gear')
    .color(0, 0xE43D30)
    .displayName('机械核心')
    event
    .create(`chad_boxer_bone`)
    .texture('layer0', 'kubejs:item/horror_bone')
    .color(0, 0x1F1F1F)
    .displayName('凋零拳击手骨头')
  event
  .create(`spring_gear`)
  .texture('layer0', 'kubejs:item/gear')
  .color(0, 0x5C605D)
  .displayName('卷簧机组件')
  event
  .create(`curving_gear`)
  .texture('layer0', 'kubejs:item/gear')
  .color(0, 0x848484)
  .displayName('冲压机组件')
  event
  .create(`vibrationg_gear`)
  .texture('layer0', 'kubejs:item/gear')
  .color(0, 0x806039)
  .displayName('振动台组件')
  event
  .create(`centrifuge_gear`)
  .texture('layer0', 'kubejs:item/gear')
  .color(0, 0x301E0B)
  .displayName('离心机组件')
  event
  .create(`energiser_gear`)
  .texture('layer0', 'kubejs:item/gear')
  .color(0, 0x307E0B)
  .displayName('激发器组件')
  event
  .create(`helve_gear`)
  .texture('layer0', 'kubejs:item/gear')
  .color(0, 0x307E0B)
  .displayName('杠杆锤组件')
  event
  .create(`lathe_gear`)
  .texture('layer0', 'kubejs:item/gear')
  .color(0, 0x307E8B)
  .displayName('车床组件')
  event
    .create(`fall_bone`)
    .texture('layer0', 'kubejs:item/stunt_bone')
    .color(0, 0x1F1F1F)
    .displayName('堕落骑士之骨')
  event
    .create(`iron_mechanism`)
    .texture('layer0', 'create:item/precision_mechanism')
    .color(0, 0xD5D5D5)
    .displayName('铁构件')
    event
    .create(`blackpiglin_gem`)
    .texture('layer0', 'minecraft:item/diamond')
    .color(0, 0x1F1F1F)
    .displayName('黑色猪灵宝石')
    event
    .create(`redpiglin_gem`)
    .texture('layer0', 'minecraft:item/diamond')
    .color(0, 0xC70000)
    .displayName('红色色猪灵宝石')
    event
    .create(`whitepiglin_gem`)
    .texture('layer0', 'minecraft:item/diamond')
    .color(0, 0xD2E4F4)
    .displayName('白色猪灵宝石')
  event
    .create(`freeze_core`)
    .texture('layer0', 'kubejs:item/gear')
    .color(0, 0x69CAE7)
    .displayName('冰霜核心')
    event
    .create(`dread_core`)
    .texture('layer0', 'kubejs:item/gear')
    .color(0, 0x560000)
    .displayName('恐惧核心')
});
