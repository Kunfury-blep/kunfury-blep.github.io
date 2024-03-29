var availAreas = [];

$(document).ready(function () {
    updateAvailAreas();

    //Populate Fish
    CreateFishEle("Bluegill", "Does it call me Pink Lung?", 5, 15, 1, 10, "Temperate", false, 0, 0);
    CreateFishEle("Brown Trout", "Looks more beige to me", 15, 39, 2, 10, "Temperate", true, 0, 0);
    CreateFishEle("Carp", "This is a load of Carp", 16, 31, 3, 10, "Temperate", false, 0, 0);
    CreateFishEle("Catfish", "I prefer a Dogfish", 45, 65, 4, 10, "Temperate", false, 0, 0);
    CreateFishEle("Gar", "Would make some great Gar-B-Q", 5, 15, 5, 10, "Temperate", false, 0, 0);
    CreateFishEle("Minnow", "Can you let Minnow where I am?", 1, 8, 6, 10, "Temperate", false, 0, 0);
    CreateFishEle("Muskeullunge", "Don’t listen to them, I think you’re fin-tastic!", 28, 48, 7, 10, "Temperate", false, 0, 0);
    CreateFishEle("Perch", "Perch-ance, would you let me go?", 8, 20, 8, 10, "Temperate", false, 0, 0);
    CreateFishEle("Smallmouth Bass", "Never the Guitar", 12, 28, 9, 10, "Temperate", false, 0, 0);
    CreateFishEle("Knifefish", "Looking Sharp!", 8, 24, 10, 10, "Cold", false, 0, 0);
    CreateFishEle("Cod", "Cod you pass me the salt?", 24, 36, 11, 10, "Cold", false, 0, 0);
    CreateFishEle("Halibut", "Do it for the Halibut!", 36, 96, 12, 10, "Cold", false, 0, 0);
    CreateFishEle("Herring", "Now to find a red one...", 8, 15, 13, 10, "Cold", false, 0, 0);
    CreateFishEle("Pink Salmon", "Always Against the Current", 19, 26, 14, 10, "Cold", false, 0, 0);
    CreateFishEle("Pollock", "What a load of Pollocks", 10, 21, 15, 10, "Cold", false, 0, 0);
    CreateFishEle("Rainbow Trout", "Sharing is Caring", 23, 45, 16, 10, "Cold", false, 0, 0);
    CreateFishEle("Red Grouper", "I'm green with envy", 26, 50, 17, 10, "Ocean", false, 0, 0);
    CreateFishEle("Tuna", "Hmm... Tastes like chicken!", 72, 168, 18, 10, "Ocean", false, 0, 0);
    CreateFishEle("Bayad", "I'm hooked!", 30, 44, 19, 10, "Dry", false, 0, 0);
    CreateFishEle("Boulti", "Boulti Different", 7, 24, 20, 10, "Dry", false, 0, 0);
    CreateFishEle("Lungfish", "Not quite up to scale", 38, 64, 21, 10, "Dry", false, 0, 0);
    CreateFishEle("Synodontis", "A bunch of Fischious Rumors", 4, 12, 22, 10, "Dry", false, 0, 0);
    CreateFishEle("Anglerfish", "Go with the Glow!", 9, 39, 23, 10, "Ocean", false, -256, 15);
    CreateFishEle("Arapaima", "Large and In Charge", 60, 130, 24, 10, "Jungle", false, 0, 0);
    CreateFishEle("Tambaqui", "A Breath of Fresh Air", 20, 44, 25, 10, "Jungle", false, 0, 0);
    CreateFishEle("Armored Catfish", "Quite the tough attacker", 3, 38, 26, 10, "Jungle", false, 0, 0);
    CreateFishEle("Red-bellied Piranha", "It's got a nice smile", 7, 13, 27, 10, "Jungle", false, 0, 0);
    CreateFishEle("Electric Eel ", "A Shocking Discovery", 72, 130, 28, 10, "Jungle", false, 0, 0);

    //Populate Rarities
    CreateRarityEle("Legendary", 5, 6, 10);
    CreateRarityEle("Epic", 30, 'd', 5);
    CreateRarityEle("Rare", 60, 'b', 2.5);
    CreateRarityEle("Common", 100, 'a', 1);

    //Populate Worlds
    CreateWorldEle("WORLD");
    CreateWorldEle("WORLD_THE_END");
    CreateWorldEle("WORLD_NETHER");

    //Populate Areas
    CreateAreaEle("Cold", true, "The pieces feel cold to the touch.", ["frozen_river", "frozen_ocean", "frozen_peaks", "grove", "ice_spikes", "jagged_peaks", "mountain_edge", "mountains", "snowy_beach", "snowy_mountains", "snowy_plains",
                    "snowy_slopes", "snowy_taiga", "snowy_taiga_hills", "snowy_taiga_mountains", "snowy_tundra"]);
    
    CreateAreaEle("Temperate", true, "You can faintly hear leaves rustling and a howling wolf.", ["birch_forest", "birch_forest_hills", "dark_forest", "dark_forest_hills", "flower_forest", "forest", "giant_spruce_taiga", "giant_spruce_taiga_hills", "giant_tree_taiga", "giant_tree_taiga_hills",
                    "gravelly_mountains", "meadow", "modified_gravelly_mountains", "old_growth_birch_forest", "old_growth_pine_taiga", "old_growth_spruce_taiga", "plains", "river", "sunflower_plains", "taiga", "taiga_hills", 
                    "taiga_mountains", "tall_birch_forest", "tall_birch_hills", "windswept_forest", "windswept_hills", "wooded_hills", "wooded_mountains", "windswept_gravelly_hills", "stony_peaks"]);

    CreateAreaEle("Jungle", true, "You hear distant sounds of breaking vines and singing birds.", ["bamboo_jungle", "bamboo_jungle_hills", "jungle", "jungle_edge", "jungle_hills", "modified_jungle", "modified_jungle_edge", "sparse_jungle", "mangrove_swamp", "swamp",
                    "swamp_hills", "mushroom_field_shore", "mushroom_fields"]);
    
    CreateAreaEle("Ocean", true, "You hear the sounds of dolphins and feel a cool ocean breeze.", ["beach", "cold_ocean", "deep_cold_ocean", "deep_frozen_ocean", "deep_lukewarm_ocean", "deep_ocean", "deep_warm_ocean", 
                    "lukewarm_ocean", "ocean", "warm_ocean", "stone_shore", "stony_shore"]);
    
    CreateAreaEle("Dry", true, "The piece feels strangely warm and seems to almost dry out your hands just touching it.", ["badlands", "badlands_plateau", "desert", "desert_hills", "desert_lakes", "eroded_badlands", "modified_badlands_plateau",
                    "modified_wooded_badlands_plateau", "savanna", "savanna_plateau", "shattered_savanna", "shattered_savanna_plateau", "windswept_savanna", "wooded_badlands", "wooded_badlands_plateau"]);

    CreateAreaEle("End", false, "", ["end_barrens", "end_highlands", "end_midlands", "small_end_islands", "the_end", "the_void"]);

    CreateAreaEle("Nether", false, "", ["basalt_deltas", "crimson_forest", "nether_wastes", "soul_sand_valley", "warped_forest"]);
    
    //Populate Caskets
    CreateCasketEle("Legendary Casket", 5, 6, 1, ["CASH: 1000", "ITEM: DIAMOND 4", "ITEM: DIAMOND 8", "ITEM: ANCIENT_DEBRIS 1", "ITEM: HEART_OF_THE_SEA 1"]);
    CreateCasketEle("Epic Casket", 30, 'd', 2, ["CASH: 1000","ITEM: SEA_LANTERN 1", "ITEM: TURTLE_EGG 1", 'ITEM: DIAMOND 1','ITEM: DIAMOND 1']);
    CreateCasketEle("Rare Casket", 60, 'b', 3, ['CASH: 250', 'ITEM: SADDLE 1', 'ITEM: SPYGLASS 1', 'ITEM: SCUTE 1']);
    CreateCasketEle("Common Casket", 100, 'a', 4, ['CASH: 10','ITEM: NAUTILUS_SHELL 1', 'ITEM: DRIED_KELP 8', 'ITEM: KELP 8', 'ITEM: SEA_PICKLE 1','ITEM: IRON_INGOT 2', 'ITEM: GOLD_NUGGET 7' ,'ITEM: INK_SAC 8']);

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $("#inputEndgameArea").val("Ocean");
    var test = $('[data-category!=""]'); 

    $('[data-category!=""]').each(function( i ) {

        ToggleEleClass($(this).data("category"), $(this).is(":checked"))
      });
});



function updateAvailAreas(){
    var areaList = $("#AreaParent").children();
    $("#inputFishArea").empty();
    $("#inputEndgameArea").empty();
    for(var i = 0; i< areaList.length; i++){
        availAreas.push(areaList[i])
        var area = areaList[i].textContent;
        if(area != "Add New"){
            var option = document.createElement("option");
            option.text = area;
            $("#inputEndgameArea").append($(option).clone());
            $("#inputFishArea").append($(option).clone());
        }
    }
}

function CreateFishEle(name, lore, minSize, maxSize, modelData, price, fishArea, raining, minHeight, maxHeight, time){
    var fish = document.createElement("a");
    fish.text = name;

    var raining = (raining === undefined) ? false : raining;
    var minSize = (minSize === undefined) ? 0 : minSize;
    var maxSize = (maxSize === undefined) ? 0 : maxSize;
    var modelData = (modelData === undefined) ? 0 : modelData;
    var price = (price === undefined) ? 0 : price;
    var minHeight = (minHeight === undefined) ? 0 : minHeight;
    var maxHeight = (maxHeight === undefined) ? 0 : maxHeight;
    var time = (time === undefined) ? "ALL" : time;

    $(fish).data("name", name);
    $(fish).data("lore", lore);
    $(fish).data("min", minSize);
    $(fish).data("max", maxSize);
    $(fish).data("model", modelData);
    $(fish).data("price", price);
    $(fish).data("area", fishArea);
    $(fish).data("raining", raining);

    $(fish).data("minHeight", minHeight);
    $(fish).data("maxHeight", maxHeight);
    $(fish).data("time", time);

    $(fish).addClass( ["list-group-item", "fishButton"] );

    $("#FishParent").append(fish);
}

function CreateAreaEle(name, compassBool, compassHint, biomes){
    var area = document.createElement("a");
    area.text = name;

    $(area).data("name", name);
    $(area).data("biomes", biomes);
    $(area).data("compassBool", compassBool);
    $(area).data("compassHint", compassHint);

    $(area).addClass( ["list-group-item", "areaButton"] );

    $("#AreaParent").append(area);
    updateAvailAreas();
}

function CreateWorldEle(name){
    var world = document.createElement("a");
    world.text = name;

    $(world).addClass( ["list-group-item", "worldButton"] );

    $("#WorldsParent").append(world);
}

function CreateRarityEle(name, weight, prefix, price){
    var rarity = document.createElement("a");
    rarity.text = name;

    $(rarity).data("weight", weight);
    $(rarity).data("prefix", prefix);
    $(rarity).data("price", price);

    $(rarity).addClass( ["list-group-item", "rarityButton"] );

    $("#RarityParent").append(rarity);
}

function CreateCasketEle(name, weight, prefix, modelData, dropTable){
    var casket = document.createElement("a");
    casket.text = name;

    $(casket).data("weight", weight);
    $(casket).data("prefix", prefix);
    $(casket).data("modelData", modelData);
    $(casket).data("dropTable", dropTable);

    $(casket).addClass( ["list-group-item", "casketButton"] );

    $("#CasketParent").append(casket);
}


$(function () {

    $("input").click(function (){
        var cat = $(this).data("category");

        if(typeof cat !== 'undefined'){
            ToggleEleClass(cat, $(this).is(":checked"));
        }

        
    })
});

function ToggleEleClass(className, show){

    if(show){
        $( "." + className ).each(function( index ) {
            if($(this).hasClass("accordion-item") || $(this).hasClass("section")){
                $(this).slideDown();
            }else{
                $(this).visible();
            }
          });

        
    }else{
        $( "." + className ).each(function( index ) {
            if($(this).hasClass("accordion-item") || $(this).hasClass("section")){
                $(this).slideUp();
            }else{
                $(this).invisible();
            }
          });
    }

}

(function($) {
    $.fn.invisible = function() {
        return this.each(function() {
            $(this).css("visibility", "hidden");
        });
    };
    $.fn.visible = function() {
        return this.each(function() {
            $(this).css("visibility", "visible");
        });
    };
}(jQuery));

function AddCasketDrop(){
    var dropHolder = $( "#casketDropsHolder" )

    var casketDrop = $('<div>', {
        class: 'casketDrop',
    }).appendTo(dropHolder);

    var dropSelect = $('<select>', {
        class: 'casketDropSelect',
    }).appendTo(casketDrop);

    $('<option>', {
        html: 'CASH',
    }).appendTo(dropSelect);

    $('<option>', {
        html: 'ITEM',
    }).appendTo(dropSelect);

    $('<option>', {
        html: 'BYTE',
    }).appendTo(dropSelect);

    $('<input>', {
        class: 'casketDropInput',
        type: 'text',
        placeholder: 'Empty'
    }).appendTo(casketDrop);
}

function CasketHelp(){
    showImportantMessage("Casket Help Placeholder");
}