function projectile_damage(entity,damage) {
    EntityEvents.spawned(entity, event => {
        if (event.entity.persistentData.trait != 1) {
            event.entity.mergeNbt({damage: damage })
        }
    })
}

projectile_damage('chaos_project:projectile_bulletshot',5)
projectile_damage('armageddon_mod:fire_spark',7.5)
projectile_damage('too_much_bosses:ice_pikes',10)
projectile_damage('terrawhips_and_more:projectile_spirit_proyectile',10)
projectile_damage('youtubersgod:projectil_earth_shoot',10)
projectile_damage('youtubersgod:projectil_earth_shoot_2',12)
projectile_damage('youtubersgod:corruption_fang',10)
projectile_damage('chaos_project:projectile_stone_shot',10)
projectile_damage('goety:magic_bolt',14)
projectile_damage('goety:vicious_tooth',15)
projectile_damage('tofucraft:fukumame',12.5)
projectile_damage('ter_rpg:insatdroplet_projectile_projectileiable',12.5)
projectile_damage('iter_rpg:blob',15)
projectile_damage('threateningly_mobs:posion_goo_bullet',25)
projectile_damage('dota:windranger_arrow',20)
projectile_damage('threateningly_mobs:the_earthloong',20)