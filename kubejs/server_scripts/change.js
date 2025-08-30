
ServerEvents.tags('item', event => {
  event.add('forge:ingots/tin', 'ancient_elements:tin_ingot')
  event.add('forge:ingots/tin', 'chaos_project:tin_ingot')
  event.add('forge:ingots/lead', 'ancient_elements:lead_ingot')
  event.add('forge:ingots/steel', 'ancient_elements:steel_ingot')
  event.add('forge:ingots/palladium', 'ancient_elements:palladium_ingot')
  event.add("reactive:blaze_sources", 'hmag:fire_bottle')
  event.add("reactive:blaze_sources", 'aardvarksweirdzoology:lizard_scale')
  event.add('forge:vegetables/cucumber', 'flavor_immersed_daily:cucumber')
  event.add('vintageimprovements:curving_heads', 'goety:soul_emerald')
  event.add('vintageimprovements:curving_heads', 'midnight:virilux')
  event.add('vintageimprovements:curving_heads', 'iter_rpg:ether_dust')
  event.add('forge:gem/topaz', 'adventuresmod:topaz')
  event.add('forge:gem/topaz', 'terramity:topaz')
})


BlockEvents.rightClicked("burrows:burrowentrance", event => {
  // event.cancel()
})