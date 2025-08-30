function curios_addattribute(curios,attribute){
    ItemEvents.modification(event => {
    event.modify(curios, item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => { })
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => true)
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    let i = 0
                    for(let attributes in attribute){
                        attributeModificationContext.modify(
                            attributes,
                            `identify${i}`,
                            attribute[attributes],
                            'addition'
                        )
                        i++
                    }
                })
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => true)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
    })
})
}

curios_addattribute('iter_rpg:iron_ring_stardust_ice',{"rpgdamageoverhaul:frost.armor":3})
curios_addattribute('iter_rpg:iron_ring_abyssquartz',{"irons_spellbooks:max_mana":50})
curios_addattribute('iter_rpg:iron_ring_amethyst',{"irons_spellbooks:mana_regen":0.15})