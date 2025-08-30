function player_shootprojectile(event, projectiles, levels, sounds, count, time) {
    //玩家发射投射物
    const { player, level } = event;
    // 获取玩家的视角向量并标准化
    const viewVector = player.getViewVector(1.0);
    const length = Math.sqrt(viewVector.x() * viewVector.x() + viewVector.y() * viewVector.y() + viewVector.z() * viewVector.z());
    const normalizedVector = {
        x: viewVector.x() / length,
        y: viewVector.y() / length,
        z: viewVector.z() / length
    };
    let times = 1
    player.server.scheduleRepeatingInTicks(5, c => {
        try {
            for (let i = 0; i < count; i++) {
                let angleOffset = (i - (count - 1) / 2) * 20;
                let projectile = level.createEntity(projectiles);
                //设定发射坐标
                projectile.setPosition(player.x, player.y + 1.6, player.z);
                // 设定速度基数
                let velocity = 2;
                // 设定弹射物发射者
                projectile.setOwner(player)
                // 设定弹射物nbt
                projectile.mergeNbt({ pickup: 2, damage: levels })
                projectile.persistentData.trait = 1
                // 设定弹射物方向
                let radian = angleOffset * (JavaMath.PI / 180); // 角度转弧度
                let newVx = normalizedVector.x * Math.cos(radian) - normalizedVector.z * Math.sin(radian);
                let newVz = normalizedVector.x * Math.sin(radian) + normalizedVector.z * Math.cos(radian);
                projectile.setMotion(newVx * velocity, normalizedVector.y * velocity, newVz * velocity);
                // 生成弹射物
                projectile.spawn();
            }
            if (sounds !== "") {
                event.server.runCommandSilent(`/playsound ${sounds} ambient ${player.profile.name} ${player.x} ${player.y} ${player.z}`)
            }
            if (times < time) {
                times++
                c.reschedule(5)
            } else {
                c.clear()
            }
        }catch(error){
            console.error(`弹射物发射失败:${error}`);
            c.clear()
        }
        
    })

}

let counts = 1
const MapPlayerLeftClickLastTime = {}
const rechargeTimeRatio = 1 //set this to 0.5, and you can fire again when the attack cool down is 50%.
function leftprojectile(event, projectile, damage, count, sounds,time) {
    //攻击时发射投射物
    const tickPerSecond = 20
    const { player, player: { uuid }, server: { tickCount } } = event
    const playerHashcode = uuid.hashCode()
    const lastLeftClickTime = MapPlayerLeftClickLastTime[playerHashcode] ?? 0
    const timeDifference = tickCount - lastLeftClickTime
    MapPlayerLeftClickLastTime[playerHashcode] = tickCount
    const playerAttackSpeed = player.getAttributeValue("minecraft:generic.attack_speed")
    if (playerAttackSpeed * timeDifference >= tickPerSecond * rechargeTimeRatio) {
        if (counts < count) {
            counts++
        } else {
            player_shootprojectile(event, projectile, damage, sounds,time,1)
            player.damageHeldItem('main_hand', 1)
            counts = 1
        }
    }
}

function demonart_release(event, items) {
    const { item, player, entity, level } = event
    player.potionEffects.add('kimetsunoyaiba:demon', 400)
    $StartKekkizyutuProcedure.execute(level, player, items)
    player.removeEffect('kimetsunoyaiba:demon')
    player.removeEffect('minecraft:regeneration')
    player.removeEffect('minecraft:night_vision')
}

function block_summon(event, projectiles, damages, block) {
    const { player, level } = event;
    const { x, y, z } = block
    const projectile = block.createEntity(projectiles);
    projectile.persistentData.trait = 1
    projectile.mergeNbt({ pickup: 2, damage: damages })
    projectile.spawn();
}

function minepiece_skill(player, select_num, skill) {
    player.mergeNbt({ ForgeCaps: { "minepiece:player_variables": { PlayerSelectNumber: select_num, PlayerSkill1: skill } } })
    $minepiecetech.execute(player)
    player.mergeNbt({ ForgeCaps: { "minepiece:player_variables": { PlayerSelectNumber: 0.0, PlayerSkill1: 0.0 } } })
}

function jujutsu_skill(event, select_num, skill) {
    const { player, level } = event
    const { x, y, z } = player
    player.mergeNbt({ ForgeCaps: { "jujutsucraft:player_variables": { PlayerCursePower: 600.0, PlayerCurseTechnique: select_num, PlayerSelectCurseTechnique: skill } } })
    $jujutsutech.execute(level, x, y, z, player)
    player.mergeNbt({ ForgeCaps: { "jujutsucraft:player_variables": { FlagSixEyes: 0, OVERLAY1: "", OVERLAY2: "", OverlayCost: "消耗咒力", OverlayCursePower: "咒力", PassiveTechnique: 0, PhysicalAttack: 1, PlayerCharge: 0.0, PlayerCursePower: 600.0, PlayerCursePowerChange: 0.0, PlayerCursePowerFormer: 200.0, PlayerCursePowerMAX: 600.0, PlayerCurseTechnique: 0.0, PlayerCurseTechnique2: 0.0, PlayerExperience: 0.0, PlayerFame: 0.0, PlayerFlag_A: 0, PlayerFlag_B: 1, PlayerLevel: 1.0, PlayerProfession: 0.0, PlayerSelectCurseTechnique: 0.0, PlayerSelectCurseTechniqueCost: 0.0, PlayerSelectCurseTechniqueCostOrgin: 0.0, PlayerSelectCurseTechniqueName: "攻击", PlayerTechniqueUsedNumber: 0.0, SecondTechnique: 0, cnt_curse1: 8.0, flag_shift: 0, flag_sukuna: 0, friend_num_keep: 0.0, noChangeTechnique: 0, p_flag_power: 0, p_x_power: -0.0, p_y_power: 0.0, p_z_power: 0.0 } } })
    $jujutsutech1.execute(level, x, y, z, player)
}