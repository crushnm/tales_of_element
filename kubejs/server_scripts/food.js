var legendery_food = ['kubejs:mtm_cucumber']
ServerEvents.tags('item', event => {
     for(const food of legendery_food){
        event.add('kubejs:legendery_food',food)
     }
})
ItemEvents.foodEaten((event)=>{
   const food = event.item
   const player = event.player
   if(!(global.eaten.includes(food.id))&&food.hasTag('kubejs:legendery_food')){
        FilesJS.appendLine(`kubejs/config/${event.server.persistentData.foodfile}.json`,food.id)
        if(food.id == 'kubejs:mtm_cucumber'){
                player.modifyAttribute('attributeslib:crit_chance','cbaed230-052f-4bc8-a9e2-ec8317cef4db',0.05,"addition")
                player.tell('多么美味的食物,你获得了0.05暴击率')
        }  
}
        global.eaten = FilesJS.readFile(`kubejs/config/${event.server.persistentData.foodfile}.json`)
})