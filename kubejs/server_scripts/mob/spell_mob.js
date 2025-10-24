EntityJSEvents.addGoalSelectors("tales_of_element:undergardenchicken", event => {
        event.arbitraryGoal(1, (e) => {
            return new WizardAttackGoal(e, 1, 200) // Parameters are the entity, movement speed modifier, and cast interval
                .setSpells(
                    [Spell.of('irons_spellbooks:blaze_storm')], // Attack
                    [Spell.of('irons_spellbooks:slow')], // Defense
                    [Spell.of('irons_spellbooks:blood_step')], // Movement
                    [] // Support
                )
        })
})

EntityJSEvents.addGoalSelectors("tales_of_element:undergardenenderman", event => {
    event.arbitraryGoal(1, (e) => {
        return new WizardAttackGoal(e, 1, 200) // Parameters are the entity, movement speed modifier, and cast interval
            .setSpells(
                [Spell.of('irons_spellbooks:ball_lightning')], // Attack
                [Spell.of('irons_spellbooks:blood_slash')], // Defense
                [Spell.of('irons_spellbooks:blood_step')], // Movement
                [] // Support
            )
    })

    
})

function mob_play_spell(mobs,cooltime,spell,level,times,interval){
    level = typeof level !== "undefined" ? level : 1;
    times = typeof times !== "undefined" ? times : 1;
    interval = typeof interval !== "undefined" ? interval : 20;
    EntityJSEvents.addGoalSelectors(mobs, e => {
    e.customGoal(
        'follow_target',
        1,
        mob => true,
        mob => true,
        true,
        mob => { },
        mob => { },
        true,
        mob => {
            if(mob.age % cooltime != 0) return
            mob_spell(mob,spell,level,times,interval)
        }
    )
})
}

function mob_shoot_projectile(mobs,cooltime,projectile, damages ,times ,count, angle,interval){
    count = typeof count !== "undefined" ? count : 1;
    times = typeof times !== "undefined" ? times : 1;
    angle = typeof angle !== "undefined" ? angle : 10;
    interval = typeof interval !== "undefined" ? interval : 20;
    EntityJSEvents.addGoalSelectors(mobs, e => {
    e.customGoal(
        'follow_target',
        1,
        mob => true,
        mob => true,
        true,
        mob => { },
        mob => { },
        true,
        mob => {
            if(mob.age % cooltime != 0) return
            shootprojectile(mob,projectile,count,angle,damages,times,interval)
        }
    )
})
}

mob_play_spell('alcaryabattle:wizor',180,'irons_spellbooks:magic_missile')
mob_play_spell('jujutsucraft:hoshi_kirara',180,'irons_spellbooks:ball_lightning')
mob_play_spell('alcaryabattle:magmagolem',180,'blaze_storm')
mob_shoot_projectile('bloodandmadness:beast_patient',90,"aerialhell:iron_shuriken",10)
mob_shoot_projectile('alcaryabattle:shinobisaber',90,"aerialhell:iron_shuriken",10,3,3)