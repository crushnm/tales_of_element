
KeyBindEvents.firstKeyPress('helmet_skill', e => {
    const {player,entity} = e
    player.sendData('helmet_skill');
})

KeyBindEvents.firstKeyPress('legging_skill', e => {
    const {player,entity} = e
    player.sendData('legging_skill');
})

KeyBindEvents.firstKeyPress('chestplate_skill', e => {
    const {player,entity} = e
    player.sendData('chestplate_skill');
})

KeyBindEvents.firstKeyPress('boots_skill', e => {
    const {player,entity} = e
    player.sendData('boots_skill');
})