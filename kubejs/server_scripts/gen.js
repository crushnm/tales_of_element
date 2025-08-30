/** Used in a datapack event to remove a configured feature by its resource location */
const removeFeature = function(event, featureName) {
    featureName = featureName.split(':')
    let namespace = featureName[0]
    let identifier = featureName[1]
    event.addJson(`${namespace}:worldgen/configured_feature/${identifier}`, {
        "type": "minecraft:no_op",
        "config": {}
    })
}
ServerEvents.lowPriorityData(event => {
    removeFeature(event, 'minecraft:ore_redstone')
    removeFeature(event, 'minecraft:ore_redstone_lower')
})


