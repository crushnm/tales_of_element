priority: 0

LootJS.modifiers((event) => {
    event
        .addLootTypeModifier([LootType.ENTITY])
        .entityPredicate(entity => {
        return entity.nbt.ForgeData.SuperBoss == 1
        })
        .modifyLoot(Ingredient.all, (itemStack) => {
            itemStack.setCount(itemStack.getCount() * 4);
            return itemStack;
        })

});

LootJS.modifiers((event) => {
    event
        .addLootTypeModifier([LootType.ENTITY])
        .entityPredicate(entity => {
        return entity.nbt.ForgeData.SuperDuperBoss == 1
        })
        .modifyLoot(Ingredient.all, (itemStack) => {
            itemStack.setCount(itemStack.getCount() * 8);
            return itemStack;
        });

});

LootJS.modifiers((event) => {
    event
        .addLootTypeModifier([LootType.ENTITY])
        .entityPredicate(entity => {
        return entity.nbt.ForgeData.MegaBoss == 1
        })
        .modifyLoot(Ingredient.all, (itemStack) => {
            itemStack.setCount(itemStack.getCount() * 22);
            return itemStack;
        });

});

LootJS.modifiers((event) => {
    event
        .addLootTypeModifier([LootType.ENTITY])
        .entityPredicate(entity => {
        return entity.nbt.ForgeData.UltraMegaBoss == 1
        })
        .modifyLoot(Ingredient.all, (itemStack) => {
            itemStack.setCount(itemStack.getCount() * 55);
            return itemStack;
        });

});