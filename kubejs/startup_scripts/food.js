StartupEvents.registry('item',(event)=>{
    event.create('mtm_cucumber').food(food=>{
        food
        .hunger(2)
        .effect('minecraft:strength',600,0,1)
    }).displayName('睦头的黄瓜')
})