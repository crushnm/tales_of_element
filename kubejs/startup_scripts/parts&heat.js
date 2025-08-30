//Makes Plates, Dusts, and Rods for Minecraft, Immersive Engineering, Create, and Thermal.
const ingot_properties = {
  copper: { color: copper },
  iron: { color: iron },
  gold: { color: gold },
  tin: { color: tin },
  silver: { color: silver },
  lead: { color: lead },
  nickel: { color: nickel },
  steel: { color: steel },
  aluminum: { color: aluminum },
  electrum: { color: electrum },
  constantan: { color: constantan },
  osmium: { color: osmium },
  bronze: { color: bronze },
  zinc: { color: zinc },
  brass: { color: brass },
  enderium: { color: enderium },
  lumium: { color: lumium },
  invar: { color: invar },
  signalum: { color: signalum },
  tungsten: { color: tungsten },
  signar: { color: signar },
  uranium: { color: uranium },
  ferrous: { color: ferrous },
  ghost: { color: ghost },
  boron: { color: boron },
  magnesium: { color: magnesium },
  demonite: { color: demonite },
  piglin_bone: { color: piglin_bone }
}



global.parts = [
  'copper',
  'iron',
  'gold',
  'tin',
  'silver',
  'lead',
  'nickel',
  'steel',
  'aluminum',
  'electrum',
  'constantan',
  'osmium',
  'bronze',
  'zinc',
  'brass',
  'enderium',
  'lumium',
  'invar',
  'signalum',
  'tungsten',
  'signar',
  'uranium',
  'ferrous',
  'ghost',
  'boron',
  'magnesium',
  'demonite',
  'piglin_bone'
]

global.partsname = [
  '铜',
  '铁',
  '金',
  '锡',
  '银',
  '铅',
  '镍',
  '钢',
  '铝',
  '琥珀金',
  '康铜',
  '锇',
  '青铜',
  '锌',
  '黄铜',
  '末影合金',
  '流明',
  '殷钢',
  '信素',
  '钨',
  'signar',
  '铀',
  '钢铁守卫',
  '幽灵',
  '硼',
  '镁',
  '魔矿',
  '猪灵骨'
]

StartupEvents.registry('item', event => {
  for (const [index,mat] of global.parts.entries()) {
    var name = global.partsname[index]
    event
      .create(`${mat}_plate`)
      .texture('layer0', 'kubejs:item/plate')
      .color(0, ingot_properties[mat].color)
      .tag('forge:plates')
      .tag(`forge:plates/${mat}`)
      .displayName(`${name}板`)
    event
      .create(`${mat}_dust`)
      .texture('layer0', 'kubejs:item/dust')
      .color(0, ingot_properties[mat].color)
      .tag('forge:dusts')
      .tag(`forge:dusts/${mat}`)
      .displayName(`${name}粉`)
    event
      .create(`${mat}_rod`)
      .texture('layer0', 'kubejs:item/rod')
      .color(0, ingot_properties[mat].color)
      .tag('forge:rods')
      .tag(`forge:rods/${mat}`)
      .displayName(`${name}杆`)
    event
      .create(`${mat}_gear`)
      .texture("layer0", "kubejs:item/gear")
      .color(0, ingot_properties[mat].color)
      .tag("forge:gears")
      .tag(`forge:gears/${mat}`)
      .displayName(`${name}齿轮`)
    event
      .create(`${mat}_ingot`)
      .texture('layer0', 'kubejs:item/ingot')
      .color(0, ingot_properties[mat].color)
      .tag('forge:ingots')
      .tag(`forge:ingots/${mat}`)
      .tag('minecraft:breacon_payment_items')
      .displayName(`${name}锭`)
    event
      .create(`${mat}_nugget`)
      .texture('layer0', 'kubejs:item/nugget')
      .color(0, ingot_properties[mat].color)
      .tag('forge:nugget')
      .tag(`forge:nugget/${mat}`)
      .displayName(`${name}粒`)
  }
})

StartupEvents.registry("fluid", event =>{
  for (const [index,mat] of global.parts.entries()) {
    var fluidname = global.partsname[index]
    event
      .create(`molten_${mat}`)
      .thickTexture(ingot_properties[mat].color)
      .bucketColor(ingot_properties[mat].color)
      .displayName(`熔融${fluidname}`)
  }
})

StartupEvents.registry('block', event => {
  for (const [index,mat] of global.parts.entries()) {
    var blockname = global.partsname[index]
    event
      .create(`${mat}_block`)
      .textureAll('kubejs:block/storage_block')
      .color(0, ingot_properties[mat].color)
      .tagBoth('forge:storage_blocks')
      .tagBoth(`forge:storage_blocks/${mat}`)
      .requiresTool(true)
      .soundType('metal')
      .item(i => {
        i.color(ingot_properties[mat].color)
      })
      .displayName(`${blockname}块`)
  }
})


