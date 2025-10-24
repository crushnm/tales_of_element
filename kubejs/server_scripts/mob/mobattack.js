function fallattack(mob) {
    let { x, y, z } = mob
    let target = mob.target;
    if (target != null) {
        mob.modifyAttribute("forge:entity_gravity", "hello", -0.2, "addition")
        mob.potionEffects.add("minecraft:resistance", 45, 125)
        mob.server.scheduleInTicks(20, c => {
            mob.modifyAttribute("forge:entity_gravity", "hello", 0.4, "addition")
            mob.server.scheduleInTicks(20, c => {
                mob.removeAttribute("forge:entity_gravity", "hello")
                mob.level.createExplosion(x, y, z).strength(15).explosionMode('none').exploder(mob).explode()
                mob.level.createExplosion(x, y, z).strength(.2).explosionMode('tnt').exploder(mob).explode()
                mob.level.spawnParticles("minecraft:explosion", false, x, y, z, 1, 1, 1, 5, 8)
                mob.level.spawnParticles("minecraft:explosion_emitter", false, x, y, z, 5, 0.75, 5, 2, 1)
                // let light = mob.level.createEntity("minecraft:lightning_bolt")
                // light.setPosition(x, y, z)
                // light.spawn()
            })
        })
    }
}


function shootprojectile(mob, p, count, angle, damages,time,interval) {
    let target = mob.target;
    let times = 1
    const level = mob.level
    if (target != null) {
        if (target.distanceToEntity(mob) > 5 && target.distanceToEntity(mob) < 20) {
            mob.getPotionEffects().add("minecraft:glowing", interval*time)
            mob.getPotionEffects().add("cataclysm:stun", interval*time, 5)
            mob.lookAt("eyes", new Vec3d(target.x, target.y, target.z));
            // 定义发射参数
            mob.server.scheduleRepeatingInTicks(interval, c => {
            for (let i = 0; i < count; i++) {
                // 计算当前弹射物的水平偏移角度（从 -SPREAD_ANGLE/2 到 +SPREAD_ANGLE/2）
                let angleOffset = (i - (count - 1) / 2) * angle;
                // 修改弹射物的速度方向（水平旋转）
                const v = 2;
                let dx = target.getX() - mob.getX();
                let dy = target.getY() - mob.getY() + target.getBbHeight() * 0.3;
                let dz = target.getZ() - mob.getZ();
                let d = Math.sqrt(dx * dx + dy * dy + dz * dz);
                let vx = (dx / d);
                let vy = (dy / d);
                let vz = (dz / d);
                // 创建弹射物
                let /**@type {Internal.ProjectileEntityJS} */ b = level.createEntity(p);
                b.setPosition(mob.x, mob.y + 1.3, mob.z);
                b.setOwner(mob);
                b.mergeNbt({ pickup: 2, damage: damages, PierceLevel: 5 })
                let radian = angleOffset * (JavaMath.PI / 180); // 角度转弧度
                let newVx = vx * Math.cos(radian) - vz * Math.sin(radian);
                let newVz = vx * Math.sin(radian) + vz * Math.cos(radian);
                b.setMotion(newVx * v, vy * v, newVz * v);
                b.spawn()
            }
            if(times<time){
                times++
                c.reschedule(10)
            }else{
                c.clear()
            }
            })
        }
    }
}

function throwmob(mob, sb) {
    let target = mob.target;
    if (target != null) {
        mob.lookAt("eyes", new Vec3d(target.x, target.y, target.z));
        const v = 2;
        let dx = target.getX() - mob.getX();
        let dy = target.getY() - mob.getY() + target.getBbHeight();
        let dz = target.getZ() - mob.getZ();
        let d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        let vx = (dx / d);
        let vy = (dy / d);
        let vz = (dz / d);
        let b = mob.block.createEntity(sb);
        b.setMotion(vx * v, vy * v, vz * v);
        b.spawn()
    }
}

function dash(mob) {
    let target = mob.target;
    let { x, y, z } = mob
    if (target != null) {
        mob.lookAt("eyes", new Vec3d(target.x, target.y, target.z));
        const v = 2;
        let dx = target.getX() - mob.getX();
        let dy = target.getY() - mob.getY() + target.getBbHeight();
        let dz = target.getZ() - mob.getZ();
        let d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        let vx = (dx / d);
        let vy = (dy / d);
        let vz = (dz / d);
        mob.setMotion(vx * v, vy * v, vz * v);
        mob.level.spawnParticles("minecraft:explosion", false, x, y, z, vx * v, vy * v, vz * v, 5, 1)
    }
}

function back(mob) {
    let target = mob.target;
    let { x, y, z } = mob
    if (target != null) {
        mob.lookAt("eyes", new Vec3d(target.x, target.y, target.z));
        const v = 2;
        let dx = target.getX() - mob.getX();
        let dy = target.getY() - mob.getY() + target.getBbHeight();
        let dz = target.getZ() - mob.getZ();
        let d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        let vx = (dx / d);
        let vy = (dy / d);
        let vz = (dz / d);
        mob.setMotion(-vx * v, vy * v, -vz * v);
        mob.level.spawnParticles("minecraft:explosion", false, x, y, z, vx * v, vy * v, vz * v, 5, 1)
    }
}

function randomsummonligntning(mob, count) {
    let target = mob.target;
    if (target != null) {
        let { x, y, z } = target;
        for (let i = 0; i < count; i++) {
            let rx = Math.floor(Math.random() * 15)
            let rz = -Math.floor(Math.random() * 15)
            let light = mob.level.createEntity("minecraft:lightning_bolt")
            light.setPosition(x + rx, y, z + rz)
            mob.level.spawnParticles("kimetsunoyaiba:particle_thunder", false, x + rx, y, z + rz, 1, 0, 1, 100, 0.1)
            mob.server.scheduleInTicks(20, c => {
                light.spawn()
            })
        }

    }
}

function summonligntning(mob) {
    let target = mob.target;
    if (target != null) {
        let x = target.getX();
        let y = target.getY();
        let z = target.getZ();
        let light = mob.level.createEntity("minecraft:lightning_bolt")
        light.setPosition(x, y, z)
        mob.level.spawnParticles("kimetsunoyaiba:particle_thunder", false, x, y, z, 1, 0, 1, 100, 0.1)
        mob.server.scheduleInTicks(20, c => {
            light.spawn()
        })

    }
}

function summonhandaround(mob, NumCircles, RadiusIncrement, projectile) {
    let target = mob.target;
    if (target != null) {
        let x = mob.getX();
        let y = mob.getY();
        let z = mob.getZ();

        // Define the number of circles and the radius increase  
        let numCircles = NumCircles; // Number of circles for spreading  
        let radiusIncrement = RadiusIncrement; // Distance between each circle  
        mob.potionEffects.add("minecraft:resistance", 20 * numCircles, 125)
        mob.potionEffects.add("minecraft:slowness", 20 * numCircles, 125)
        mob.potionEffects.add("minecraft:glowing", 20 * numCircles, 125)

        // Loop through to create multiple lightning bolts in a circular formation  
        for (let i = 0; i < numCircles; i++) {
            let radius = (i + 3) * radiusIncrement; // Calculate the radius for this circle  

            // Calculate points around the circle  
            for (let angle = 0; angle < 360; angle += 30) { // Angle increment can be adjusted for more/less lightning bolts  
                let radians = JavaMath.PI / 180 * angle; // Convert degrees to radians  
                let posX = x + Math.cos(radians) * radius; // Calculate x position  
                let posZ = z + Math.sin(radians) * radius; // Calculate z position  

                let light = mob.level.createEntity(projectile);
                light.setPosition(posX, y, posZ);

                mob.server.scheduleInTicks(20 * (i + 1), c => {
                    light.spawn(); // Spawn lightning with a delay based on the circle number  
                });
            }
        }
    }
}

function mob_spell(mob, spell, level,times,interval) {
    let time = 1
    mob.getPotionEffects().add("minecraft:glowing", times*interval)
    mob.getPotionEffects().add("cataclysm:stun", times*interval, 5)
    mob.server.scheduleRepeatingInTicks(interval, c => {
        mob.initiateCastSpell(Spell.of(spell), level) 
        if(time<times){
            time++
            c.reschedule()
        }else{
            c.clear()
        }
    })
}