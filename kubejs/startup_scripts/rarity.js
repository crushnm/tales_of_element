RarityJSEvents.register(event =>
{
// Creating new rarity:
    event.addRarity("tales_of_element.silent", "pink") // Check the section (1) below.

// Set a rarity to a specific item:
    event.setRarity('legendary_monsters:monstrous_anchor', 'tales_of_element.silent')
    event.setRarity('adventuresmod:conjurer_trident', 'tales_of_element.silent')
    event.setRarity('terrawhips_and_more:frostscythe', 'tales_of_element.silent')
    event.setRarity('chaos_project:carrot_hammer', 'tales_of_element.silent')
    event.setRarity('skeleton_uprising:occult_scarf_helmet', 'tales_of_element.silent')
    event.setRarity('skeleton_uprising:bonecutter', 'tales_of_element.silent')
    event.setRarity('paladins_oath:boulder_breaker_spear', 'tales_of_element.silent')
    event.setRarity('mhheavenandhell:kut_ku_hammer', 'tales_of_element.silent')
    event.setRarity('skeleton_uprising:spinewhip', 'tales_of_element.silent')
    event.setRarity('chaos_project:haunting_knife', 'tales_of_element.silent')

    // event.setRarity('minecraft:apple', 'minecraft:epic') // <- Using minecraft rarity.

// if you want a whole mod to have this rarity.
//    event.setRarityByMod('avaritia', 'minecraft:epic')

// if you want all items a specific rarity (other command like setRarity or setRarityByMod take priority and will be used before this one):
//    event.setDefaultRarity('raritymod.uncommon')
});