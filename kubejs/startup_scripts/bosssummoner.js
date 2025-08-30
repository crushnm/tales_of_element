StartupEvents.registry('block', event => {
  event
    .create(`fossil_bait_block`)
    .textureAll('kubejs:block/storage_block')
    .color(0, 0xAE4035)
    .requiresTool(true)
    .displayName('死神祭坛')
    .item(i => {
      i.color(0xAE4035)
    })
  event
    .create(`bosssummon_block`)
    .textureAll('kubejs:block/storage_block')
    .color(0, 0xAE4035)
    .requiresTool(true)
    .displayName('boss召唤祭坛')
    .item(i => {
      i.color(0xF18CAA)
    })
  event
    .create(`tp_block`)
    .textureAll('kubejs:block/tp_block')
    .color(0, 0xFFCF4A)
    .requiresTool(true)
    .displayName('boss房间传送方块')
    .item(i => {
      i.color(0xFFCF4A)
    })
  event
    .create(`undergarden_boss1_block`)
    .textureAll('kubejs:block/storage_block')
    .color(0, 0x1D281C)
    .requiresTool(true)
    .displayName('深园一阶boss祭坛')
    .item(i => {
      i.color(0x1D281C)
    })
  event
    .create(`overworld_boss1_block`)
    .textureAll('kubejs:block/storage_block')
    .color(0, 0xE78365)
    .requiresTool(true)
    .displayName('主世界一阶boss祭坛')
    .item(i => {
      i.color(0xE78365)
    })
  event
    .create(`lostcity_boss1_block`)
    .textureAll('kubejs:block/storage_block')
    .color(0, 0x13D269)
    .requiresTool(true)
    .displayName('失落之城一阶boss祭坛')
    .item(i => {
      i.color(0x13D269)
    })
})


StartupEvents.registry("item", (event) => {
  event.create(`reaper_warrior_eye`).texture('layer0', 'kubejs:item/boss_eye').color(0, 0xDAD49C).displayName('死神召唤石')
  event.create('stun_skeleton').displayName('骷髅灵魂')
  event.create('chad_boxer').displayName('凋零拳击手灵魂')
  event.create('jungle_slime').displayName('丛林史莱姆王冠')
  event.create('harpy_feather').displayName('哈比羽毛')
  event.create('wizor_ring').displayName('巫师戒指')
  event.create('knight_ring').displayName('骑士戒指')
  event.create('mechanical_carrot').displayName('机械胡萝卜')
  event.create('sand_warrior_eye').displayName('沙之勇士之眼')
  event.create('ferrous').displayName('铁面具')
  event.create('frozen_warlock_gem').displayName('冰霜宝钻')
  event.create('mechanism_head').displayName('机械头颅')
  event.create('horror_skull').displayName('可怖头骨')
  event.create('mutant_sniffer_egg').displayName('突变嗅探兽蛋')
  event.create('totem_of_undying_golem').displayName('不死图腾？')
  event.create('evil_snowball').displayName('邪恶雪球')
  event.create('furious_head').displayName('狂怒头盔')
  event.create('bone_crush').displayName('破碎骨头')
  event.create('minister_mask').displayName('教父面具')
  event.create('await_core').displayName('await核心')
  event.create('eye_of_frost').displayName('冰霜之眼')
  event.create('eye_of_ghost').displayName('幽灵之眼')
  event.create('eye_of_moss').displayName('青苔之眼')
  event.create('eye_of_sandstorm').displayName('沙暴之眼')
  event.create('steel_orb').displayName('钢之精华')
  event.create('redstone_energy').displayName('红石能源')
  event.create('sand_necklace').displayName('沙之挂坠')
  event.create('dragoon_necklace').displayName('龙之挂坠')
  event.create('plague_core').displayName('疫病核心')
  event.create('eye_of_many_ribs').displayName('多肋之眼')
  event.create('drowned_conjurer_mask').displayName('溺亡召唤师面具')
  event.create('slime_king2').displayName('史莱姆皇冠')
  event.create('dark_shaman').displayName('黑暗萨满')
  event.create('mutant_zombified_piglin').displayName('变异僵尸猪灵')
  event.create('book_dog_eared').displayName('书本')
  event.create('cyromancer_orb').displayName('冰法师宝石')
  event.create('crone_ring').displayName('巫婆戒指')
  event.create('eyeillager').displayName('灾厄村民眼球')
  event.create('orb_spider').displayName('育母蜘蛛卵')
  event.create('coldread_orb').displayName('寒霜水晶')
  event.create('pyromancer').displayName('死灵灾厄法师')
  event.create('lava_demon').displayName('熔岩恶魔')
  event.create('aero_gem').texture('layer0', 'kubejs:item/bossummon/aero_gem').displayName('大气宝石')
  event.create('suspicious_eyes').displayName('可疑的眼球')
  event.create('illawizard_wand').displayName('灾厄巫师权杖')
  event.create('temple_eye').displayName('神庙之眼')
  event.create('terminal_teleporter').texture('layer0', 'pedriki_extras:item/teleportpocket').displayName('终端传送器')
  event.create('suspicious_key').texture('layer0', 'pedriki_extras:item/key').displayName('可疑的钥匙')
  event.create('tumi').texture('layer0', 'inka:item/tumi').displayName('可疑雕像')
  event.create('nehemoth').texture('layer0', 'kubejs:item/bossummon/shadow_fiend').displayName('恶魔低语者')
  event
    .create(`drownlord_heart`)
    .texture('layer0', 'kubejs:item/drownlord_heart')
    .color(0, 0x4FC1FF)
    .displayName(`湛蓝心脏`)
  event
    .create(`bullin_heart`)
    .texture('layer0', 'kubejs:item/drownlord_heart')
    .color(0, 0x822BD8)
    .displayName(`牛灵心脏`)
  event
    .create(`piglin_heart`)
    .texture('layer0', 'kubejs:item/drownlord_heart')
    .color(0, 0xBF545B)
    .displayName(`猪灵心脏`)
  event
    .create(`wither_heart`)
    .texture('layer0', 'kubejs:item/drownlord_heart')
    .displayName(`溺亡心脏`)
  event
    .create(`sudden_skull`)
    .texture('layer0', 'kubejs:item/skull')
    .color(0, 0xCCCCCC)
    .displayName(`可疑头骨`)
  event
    .create(`punisher_skull`)
    .texture('layer0', 'kubejs:item/skull')
    .color(0, 0x1F1F1F)
    .displayName(`处罚者面具`)
  event
    .create(`fir_core`)
    .texture('layer0', 'kubejs:item/magma_core')
    .color(0, 0xCCCCCC)
    .displayName(`fir核心`)
  event
    .create(`bobicraft_core`)
    .displayName(`bobicraft核心`)
  event
    .create(`farfadox_core`)
    .texture('layer0', 'kubejs:item/freeze_gem')
    .color(0, 0x6A8F3E)
    .displayName(`farfadox核心`)
  event
    .create(`infernal_worm`)
    .texture('layer0', 'kubejs:item/worm')
    .displayName(`地狱蠕虫`)
  event
    .create(`abomination_summoner`)
    .texture('layer0', 'randomweirdmobs:item/bosstotem')
    .displayName(`罪恶接收器`)
  for (let i = 0; i < 80; i++) {
    event
      .create(`curse_bait_${i}`)
      .texture('layer0', 'kubejs:item/curse_bait')
      .displayName(`异界饵食 ${i + 1}`)
  }
  for (let i = 0; i < 20; i++) {
    event
      .create(`hunter_scroll_${i}`)
      .texture('layer0', 'kubejs:item/hunter_scroll')
      .displayName(`狩猎凭证 ${i + 1}`)
  }
});
