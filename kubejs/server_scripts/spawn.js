EntityEvents.spawned(event => {

    const overworldmod = ['ancient_elements']
    const overworldbanmod = ['burrows', "duckensinvasion", 'skeleton_uprising', 'cos_mc']
    const banmob = ['burrows:flee_9', 'unreal:f_2', 'unreal:f_1', 'midnight_madness:reaper', 'snowman:evil_snow_golem', 'jujutsucraft:stevenson_screen', 'jujutsucraft:crow', "aardvarksweirdzoology:nestdebug"]
    const boss = ['mokels_adventure:elemental', 'mokels_adventure:guardian_of_the_first_flame', 'mokels_adventure:tainted_flame']
    const overworldmob = ['the_pumpkin_challenge:lost_soul', 'crimson_steves_mobs:minion_redstone_golem']
    let entityMod_spawn = event.entity.type.split(':')[0]
    let dimensionMod = event.level.dimension.toString().split(':')[0]
    if(event.entity.type == "minecraft:bee" && event.level.dimension =='ceilands:the_ceilands'){
        event.cancel()
    }
    if (banmob.includes(event.entity.type)) {
        event.cancel()
    }
    if (overworldmod.includes(entityMod_spawn) && dimensionMod != 'minecraft') {
        event.cancel()
    }
    if (event.entity.isMonster() && event.level.dimension == 'tales_of_element:bossfight') {
        event.entity.modifyAttribute("minecraft:generic.follow_range", "uniqueidentifier", 128, "addition")
    }
    if (overworldbanmod.includes(entityMod_spawn) && dimensionMod == 'minecraft') {
        event.cancel()
    }
    if (boss.includes(event.entity.type) && event.level.dimension != 'tales_of_element:bossfight') {
        event.cancel()
    }
    if ((entityMod_spawn == "undead_revamp2" || event.entity.type == 'world_of_mobs:annoying_zombie_head') && event.level.dimension != "lostcities:lostcity") {
        event.cancel()
    }
    if ((entityMod_spawn == "enderzoology") && event.level.dimension != "undergarden:undergarden") {
        event.cancel()
    }
    if (overworldmob.includes(event.entity.type) && dimensionMod == 'minecraft') {
        event.cancel()
    }
    
event.server.runCommand(`say ${event.entity.type}`)

})

EntityEvents.checkSpawn(event => {
    const banmod_natural = ['sakamoto','terra_entity', 'pretension', 'warleryshq', 'mcb', 'cartoon_soul', 'mhheavenandhell', 'jujutsucraftv', 'midnight_madness', 'tales_of_element', 'cos_mc', 'dota', 'dark_blood', 'mia_mobs', 'torchesbecomesunlight', 'aardvarksweirdzoology', 'minepiece', 'jujutsucrafts', 'fright', 'edgeofrealities', 'kimetsunoyaiba', 'too_much_bosses', 'jujutsucraft', "crimsonsteves_mutant_mobs", 'zombie_variations', 'witch_hunter_', 'ragingpeacefuls', 'luminous_halloween', 'mna', 'the_pumpkin_challenge', 'ddenizens', 'zombiesmore', 'fromtheshadows', 'world_of_mobs', 'youtubersgod', 'arcalis_bosses', 'bloodandmadness', 'mutantmonsters', 'creatures_expanded', 'themutantmobsmod']
    const minecraftbandimension = ['ceilands:the_ceilands', 'burrows:the_burrows']
    const biomeban = { 
        "ceilands:the_ceilands": ['enemyexpansion:flutterfly', "enemyexpansion:direwolf",'enemyexpansion:drone','enemyexpansion:huntsman','enemyexpansion:drone','enemyexpansion:equestrian','enemyexpansion:faller','enemyexpansion:crawler', 'enemyexpansion:botfly','skeleton_uprising:rattler']

    }
    const dimension = event.level.dimension
    let dimensionMod = dimension.toString().split(':')[0]
    const entity = event.entity.type

    let entityMod_natural = event.entity.type.split(':')[0]
        // if(entityMod_natural == "jujutsucraft"){
        // event.server.runCommand(`say ${event.entity.type}`)}
    


    if (event.type == "NATURAL") {
        if(entity=="minecraft:skeleton"&&dimensionMod!="minecraft"){
            event.success(false)
        }
        if (banmod_natural.includes(entityMod_natural)) {
            event.success(false)
        }
        if (dimension == "tales_of_element:bossfight") {
            event.success(false)
        }
        for (var key in biomeban) {
            if (biomeban[key].includes(entity.toString()) && dimension != key) {
                // console.log(1)
                event.success(false)
            }
            if (dimension == key && !(biomeban[key].includes(entity.toString()))) {
                // console.log(entity)
                event.success(false)
            }
        }
        if (entityMod_natural == "minecraft" && minecraftbandimension.includes(dimension.toString())) {
            event.success(false)
        }
    }
    // if (banmod_natural.includes(entityMod_natural)) {
    //     event.server.runCommand(`say ${event.type}`)
    //     event.server.runCommand(`say ${event.entity.type}`)
    // }
})



