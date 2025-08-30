//TODO: Currently does not support itemArray ingredients!
/**
 * @param {Special.Enchantment} enchantment The enchantment name with the mod id, e.g. 'minecraft:sharpness'
 * @param {Internal.ItemStack_[][]} ingredients An array containing arrays of ItemJS. e.g. [[minecraft:apple], ['2x minecraft:golden_apple', '4x minecraft:ender_pearl']].
 * Each array is a level, so in the previous case, the enchantment would have a max level of 2.
 */
function AddEnchantmentRecipe(enchantment, ingredients) {
    const enchantment_name = enchantment.replace(/.*[:]/, ""); //Isolate the enchantment name from the mod id.
    const path = "kubejs/data/enchanting-system-overhaul/ench-recipes/" + enchantment_name + ".json"; //Get the path to write the .json file

    ingredients.forEach((ingredient, key)=>{
        ingredient = ingredient.map((item) => Item.of(item))
        ingredients[key] = ingredient
    })

    const data = {
        //prepare the json data structure
        enchantment_id: enchantment,
        maxLevel: 0,
        levels: {},
    };

    let level = 1,
        { length } = ingredients;
    for (level; level <= length; level++) {
        //using the length of the ingredients param, prepare the arrays for each level
        if (data.levels[level] == null) {
            data.levels[level] = [];
        }
    }

    ingredients.forEach((ingredientArray, level) => {
        //fill the level arrays with the recipe ingredients
        ingredientArray.forEach((ingredient) => {
            data.levels[level + 1].push({ id: ingredient.id, amount: ingredient.count });
        });
    });

    JsonIO.write(path, data); //Write down data.
}


ForgeEvents.onEvent("net.minecraftforge.event.server.ServerAboutToStartEvent", event => {
    AddEnchantmentRecipe('create:capacity', [
        ['12x create:copper_sheet', '2x minecraft:copper_block', '4x minecraft:dried_kelp'],
        ['12x create:brass_sheet', '8x create:brass_ingot', '16x create:andesite_alloy', '16x minecraft:dried_kelp'],
        ['8x create:sturdy_sheet', '2x create:electron_tube', '4x create:precision_mechanism'],
    ])
    AddEnchantmentRecipe('improved_exp:haste', [
        ["minecraft:iron_pickaxe", "minecraft:golden_pickaxe", "iceandfire:silver_pickaxe"]
    ])
    AddEnchantmentRecipe('celestial_enchantments:fleet_of_foot', [
        ["8x minecraft:feather", "4x silentgear:fluffy_feather", "16x minecraft:gold_ingot"],
        ["8x mna:animated_quill", "4x malum:aerial_spirit", "16x kubejs:electrum_ingot"]
    ])
    AddEnchantmentRecipe('enchantableblocks:storing', [
        ["1x minecraft:chest"]
    ])
    AddEnchantmentRecipe('extra_enchantments:fishermans_blade', [
        ["3x minecraft:feather","8x malum:aerial_spirit","4x malum:hex_ash"]
    ])
    

    // event.server.runCommandSilent("reload")
})