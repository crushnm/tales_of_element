const entityStages = {
    'mekanismadditions:baby_wither_sleleton':'no_mekanism_additions_mobs'
}

let modStages = {
    'elementalcreepers':'2',
    // 'randomweirdmobs':'2',
    'knightquest':'4'
}

EntityEvents.spawned(event => {
    const {entity, level} = event
    let entityType = entity.type
    let entityMod = entity.type.split(':')[0]
    let player = level.getNearestPlayer(entity, 128)
    //Uses mob id
    if (entityStages[entityType]) {
        if (player && !player.stages.has(entityStages[entityType])) {
            event.cancel()
            if (global.debug) console.log(`Canceling ${entityType} spawn as ${player.getName().getString()} has stage ${entityStages[entityType]}`)
        }

    //Uses mob mod
    } else if (modStages[entityMod]) {
        if (player && !player.stages.has(modStages[entityMod])) {
            event.cancel()
            if (global.debug) console.log(`Canceling ${entityType} spawn as ${player.getName().getString()} has stage ${modStages[entityMod]}`)
        }
    }
})