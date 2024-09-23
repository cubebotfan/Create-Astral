///// REGISTER CUSTOM BLOCKS /////
onEvent("block.registry", (event) => {
    event
        .create("createastral:sturdy_sheet_block")
        .material("lantern")
        .hardness(9)
        .displayName("Sturdy Sheet Block")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:shimmering_stone")
        .material("stone")
        .hardness(20)
        .displayName("Shimmering Stone")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:ancient_stone")
        .material("stone")
        .hardness(22)
        .displayName("Ancient Stone")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:mercurian_stone")
        .material("stone")
        .hardness(24)
        .displayName("Mercurian Stone")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:copper_plating")
        .material("lantern")
        .hardness(3)
        .displayName("Copper Plating")
        .tagBlock("minecraft:mineable/pickaxe");
    event
        .create("createastral:refined_radiance_block")
        .material("lantern")
        .hardness(4)
        .displayName("Radiant Block")
        .tagBlock("minecraft:mineable/pickaxe")
        .lightLevel(1);

    event
        .create("createastral:bronze_block")
        .material("lantern")
        .hardness(3)
        .displayName("Bronze Block")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:copper_heating_coil")
        .material("lantern")
        .hardness(3)
        .displayName("Copper Coil Block")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:wired_panelling")
        .material("lantern")
        .hardness(3)
        .displayName("Wired Panelling")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:blast-resistant_concrete", "basic")
        .material("stone")
        .hardness(4)
        .resistance(1200)
        .textureAll("createastral:block/blast_side")
        .texture("up", "createastral:block/blast_top")
        .texture("down", "createastral:block/blast_top")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:blast-resistant_concrete_slab", "slab")
        .material("stone")
        .hardness(4)
        .resistance(1200)
        .textureAll("createastral:block/blast_side")
        .texture("up", "createastral:block/blast_top")
        .texture("down", "createastral:block/blast_top")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:blast-resistant_concrete_stairs", "stairs")
        .material("stone")
        .hardness(4)
        .resistance(1200)
        .textureAll("createastral:block/blast_side")
        .texture("up", "createastral:block/blast_top")
        .texture("down", "createastral:block/blast_top")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:electrolyser_dummy", "basic")
        .hardness(4)
        .resistance(1200)
        .textureAll("create:block/copper_casing")
        .texture("down", "createastral:block/electropipe")
        .texture("north", "createastral:block/electropipe")
        .tagBlock("minecraft:mineable/pickaxe");


    event
        .create("createastral:stone_growth_chamber_dummy")
        .tagBlock("minecraft:mineable/pickaxe")
        .material("stone")
        .hardness(3)
        .textureAll("createastral:block/stone_growth_chamber_side")
        .texture("down", "createastral:block/stone_growth_chamber")
        .texture("north", "createastral:block/stone_growth_chamber");

    event
        .create("createastral:andesite_alloy_block", "basic")
        .material("stone")
        .hardness(4)
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:voidtouched_compound", "basic")
        .hardness(4)
        .resistance(1200)
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:charcoal_block", "basic")
        .hardness(4)
        .tagBlock("minecraft:mineable/pickaxe")
        .material("stone");

    event
        .create("createastral:experience_block", "basic")
        .hardness(4)
        .displayName("Ignore this block whilst it's a placeholder")
        .tagBlock("minecraft:mineable/pickaxe")
        .material("stone");

    event
        .create("createastral:compressed_experience_block")
        .tagBlock("minecraft:mineable/pickaxe")
        .material("glass")
        .hardness(2)
        .lightLevel(5);

    event.create("createastral:synthetic_slime_block")
        .material("lantern")
        .hardness(0);

    event
        .create("createastral:swift_andesite", "basic")
        .material("stone")
        .hardness(4)
        .tagBlock("minecraft:mineable/pickaxe");

    event.create("kubejs:fragile_sheet_block", "basic")
        .material("stone")
        .defaultTranslucent()
        .hardness(1);

    event.create("kubejs:broken_fragile_sheet_block", "basic")
        .material("stone")
        .defaultTranslucent()
        .hardness(1)
        .box(0, 0, 0, 16, 8, 16, true)
        .box(2, 8, 2, 14, 12, 14, true)

    event.create("kubejs:fire_resistant_fragile_sheet_block", "basic")
        .material("stone")
        .defaultTranslucent()
        .hardness(1)

    event.create("kubejs:broken_fire_resistant_fragile_sheet_block", "basic")
        .material("stone")
        .defaultTranslucent()
        .hardness(1)
        .box(0, 0, 0, 16, 8, 16, true)
        .box(2, 8, 2, 14, 12, 14, true)

    event.create("createastral:rocket_casing", "basic")
        .material("stone")
        .hardness(4)
        .defaultTranslucent()
        .tagBlock("minecraft:mineable/pickaxe")

    event.create("createastral:slime_furnace_dummy")
        .textureAll("createastral:block/slime_furnace_side")
        .texture("up", "createastral:block/slime_furnace_top")
        .texture("down", "createastral:block/slime_furnace_bottom")

    event.create("createastral:slime_furnace_on_dummy")
        .textureAll("createastral:block/slime_furnace_on_side")
        .texture("up", "createastral:block/slime_furnace_on_top")
        .texture("down", "createastral:block/slime_furnace_on_bottom")


    event.create("createastral:washer_dummy")
        .textureAll("createastral:block/washer")
        .texture("up", "create:block/railway_casing")
        .texture("down", "create:block/railway_casing")
        .texture("north", "createastral:block/washer_shaft")

    event.create("createastral:gas_mixer_dummy")
        .textureAll("createastral:block/gas_mixer")
        .texture("down", "createastral:block/gas_mixer_shaft")

    event.create("createastral:channeling_transformer_dummy")
        .textureAll("createastral:block/channeling_transformer");

    event
        .create("doodads:asphalt_slab", "slab")
        .material("stone")
        .hardness(4)
        .tagBlock("minecraft:mineable/pickaxe")
        .textureAll("doodads:block/asphalt");

    event
        .create("doodads:asphalt_stair", "stairs")
        .material("stone")
        .hardness(4)
        .tagBlock("minecraft:mineable/pickaxe")
        .textureAll("doodads:block/asphalt");

});