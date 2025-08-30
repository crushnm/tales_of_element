StartupEvents.registry('mob_effect', event => {
  event.create('slim')
    .color(0xE63E31)
    .displayName('缩小')
    .beneficial()
  event.create('boss')
    .color(0x1F1F1F)
    .displayName('boss召唤冷却')
    .beneficial()
  event.create('helmet_skill')
    .color(0x1F1F1F)
    .displayName('头盔技能冷却')
    .beneficial()
  event.create('chestplate_skill')
    .color(0x1F1F1F)
    .displayName('胸甲技能冷却')
    .beneficial()
  event.create('legging_skill')
    .color(0x1F1F1F)
    .displayName('护腿技能冷却')
    .beneficial()
  event.create('boots_skill')
    .color(0x1F1F1F)
    .displayName('鞋子技能冷却')
    .beneficial()
})


const effectsToClearWithMilk = ["minecraft:poison", "minecraft:bad_omen"]
ForgeEvents.onEvent("net.minecraftforge.event.entity.living.MobEffectEvent$Applicable", event => global.Example$MobEffectEvent$Applicable(event))
global.Example$MobEffectEvent$Applicable = (/**@type {Internal.MobEffectEvent$Applicable} */event) => {
    const $EffectInstance = Java.loadClass("net.minecraft.world.effect.MobEffectInstance")
    const {effectInstance} = event
    const curativeItems = event.effectInstance.curativeItems
    if(effectsToClearWithMilk.some(effect => new $EffectInstance(effect).effect.equals(effectInstance.effect))) return;
    curativeItems.removeIf(item => item.hasTag('forge:milk/milk'))
    effectInstance.setCurativeItems(curativeItems)
}