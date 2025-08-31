ItemEvents.tooltip(event => {
  event.addAdvanced('#kubejs:legendery_food', (item, advanced, text) => {
    if (global.eaten.includes(item.id)) {
      text.add(Text.of('珍馐(已品尝)').red())
    }else{
      text.add(Text.of('珍馐').gold())
    }
  })
    event.add('animalistic_a:soul_bottle','使用水瓶右键灵魂沙获得')

    event.add('kubejs:mtm_cucumber',"这个，不需要了")
    function add_color_description(itemName, rarity, color) {
        event.add(itemName, Text.of(rarity)[color]())
    }

    for (let i = 0; i < global.bag_name.length; i++) { 
        add_color_description(`kubejs:${global.bag_name[i]}_bag_${global.rarity[0]}`, 'Common', global.rarity_color.common)
        add_color_description(`kubejs:${global.bag_name[i]}_bag_${global.rarity[1]}`, 'Rare', global.rarity_color.rare)
        add_color_description(`kubejs:${global.bag_name[i]}_bag_${global.rarity[2]}`, 'Epic', global.rarity_color.epic);
      }
    // event.add(/refinedstorage:red_/, 'Can be any color')
})

function element_item_tooltip(items,texts){
  ItemEvents.tooltip(event=>{
        event.addAdvanced(items,(item,advanced,text) =>{
          if (!event.ctrl) {
          text.add(1, [Text.of('按下').gold(), Text.of('ctrl').yellow(), Text.of('查看物品伤害类型').gold()])
        }else{
          text.add(1,text.of(texts))
        }
      })
})
}

const element_item = {
      "undergarden:slingshot":"弹药为渊燧卵石时:85%钝器&15%暗\n弹药为腐坏疱梅时:85%钝器&15%光",
      "undergarden:blisterbomb":"75%钝器&25%光",
      "midnight:bladeshroom_cap":"100%锐利",
      "midnight:nagrilite_bladeloop":"50%锐利&50%黑暗",
      "flintnpowder:log_cannon":"50%钝器&50%木",
      "flintnpowder:copper_roundshot_item":"50%钝器&50%火",
      "flintnpowder:cast_iron_round_shot":"50%钝器&50%火",
      "flintnpowder:steel_buckshot":"50%钝器&50%火",
      "flintnpowder:steel_roundshot":"50%钝器&50%火",
      "flintnpowder:heavy_cast_iron_roundshot":"50%钝器&50%土",
      "chaos_project:pistol":"10伤害\n50%钝器&50%火",
      "armageddon_mod:sparkling_stick":"15伤害\n65%突刺&35%火"
}
for(let items in element_item){
  element_item_tooltip(items,element_item[items])
}

