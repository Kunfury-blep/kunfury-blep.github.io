function download(filename) {

    var fileText = "\# \n\#This config was created using the Config Web Panel. Use /BF Config in game to generate your own!\n\#\n"

    //Boolean Creation
    var scoreBool = $("#ShowScoreboardCheck").is(":checked");
    var chatBool = $("#ShowChatCheck").is(":checked");
    var prioBool = $("#PriorityCheck").is(":checked");
    var tourneyBool = $("#TournamentCheck").is(":checked");
    var areaBool = $("#AreaCheck").is(":checked");
    var legendBool = $("#LegendCheck").is(":checked");      
    var economyBool = $("#EconomyCheck").is(":checked");      
    var bagBool = $("#FishBagsCheck").is(":checked");
    var allBlueBool = $("#AllBlueCheck").is(":checked");
    var bluePermaBool = $("#PermanentBlueCheck").is(":checked");

    fileText += (
`Show ScoreBoard: ${scoreBool}
Show Chat: ${chatBool}
High Priority: ${prioBool}
Tournament Only: ${tourneyBool}
Area Permissions: ${areaBool}
Announce Legendary: ${legendBool}
Use Economy: ${economyBool}
Enable Fish Bags: ${bagBool}
`);
    
    //Text Creation
    var chatPfx = $("#chatPrefixInput").val();
    var curSym = $("#currencySymbol").val();
    var lanSymbol = $("#languageSymbol").find(':selected').data("symbol");
    var blueFish = $("#allBlueFishInput").val();
    var blueName = $("#allBlueNameInput").val();
    var endgameRadius = $("#endgameRadiusInput").val();
    var endgameArea = $("#inputEndgameArea").val();
    var mobChance = $("#inputMobChance").val();

    fileText += (`
Chat Prefix: '${chatPfx}'
Currency Symbol: ${curSym}
Language Symbol: ${lanSymbol}

Enable All Blue: ${allBlueBool}
Permanent All Blue: ${bluePermaBool} #If disabled, a zone with limited fish will spawn for each compass crafted
All Blue Name: ${blueName} #The name the endgame zone will be referred to by
All Blue Fish: ${blueFish} #The amount of fish available in the Endgame Zone. Not needed if permanent
Endgame Radius: ${endgameRadius} #The size of the endgame zone. Larger sizes may make it more difficult to find an appropriate location
Endgame Area: ${endgameArea} #The area for the endgame zone to generate in
Endgame Mob Chance: ${mobChance} #The chance of fishing up monsters in the endgame zone
`);

    //Wandering Traders
    var traderBool = $("#WanderingTraderCheck").is(":checked");
    var traderMod = $("#traderModifierValue").val();

    fileText += (`
Allow Wandering Traders: ${traderBool}
Wandering Traders Modifier: ${traderMod}
`);

    //Treasure
    var treasureBool = $("#treasureCheck").is(":checked");
    var treasureChance = $("#treasureChance").val();
    var parrotBonus = $("#parrotBonus").val();
    var boatBonus = $("#boatBonus").val();

    fileText += (`
Enable Treasure: ${treasureBool}
Treasure Chance: ${treasureChance}
Parrot Treasure Bonus: ${parrotBonus}
Boat Treasure Bonus: ${boatBonus}
`);

    //World Whitelist
    var worldBool = $("#WorldCheck").is(":checked");

    var worldsList = $("#WorldsParent").children();

    fileText += (`
World Whitelist: ${worldBool}
Allowed Worlds: 
`);

    for(var i=0; i< worldsList.length; i++){
        if(worldsList[i].textContent != "Add New")
            fileText += "- " + worldsList[i].textContent + "\n";
    }

    
    //Rarities
    fileText += "\nrarities: ";

    var rarityList = $("#RarityParent").children();
    for(var i = 0; i< rarityList.length; i++){
        var rarity = rarityList[i];

        if(rarity.textContent != "Add New"){
            fileText += (`
    ${rarity.textContent}:
        Weight: ${$(rarity).data("weight")}
        Color Code: ${$(rarity).data("prefix")}
        Price Mod: ${$(rarity).data("price")}
`);                
        }}
        

    //Areas
    fileText += "\nareas: ";
    var areaList = $("#AreaParent").children();

    for(var i = 0; i< areaList.length; i++){
        var area = areaList[i];

        if(area.textContent != "Add New"){
            
        fileText += "\n    " + area.textContent + ":";

        fileText += "\n        Has Compass: " + $(area).data("compassBool");
        fileText += "\n        Compass Hint: " + $(area).data("compassHint");



        fileText += "\n        Biomes:";

        var biomes = $(area).data("biomes")?.toString().split(",");
        if(biomes != null){
            for(var t = 0; t < biomes.length; t++){
            fileText += "\n        - " + biomes[t];
        }}
        fileText += "\n";
        }            
    }


    //Fish
    fileText += "\nfish: "
    var fishList = $("#FishParent").children();

    for(var i = 0; i< fishList.length; i++){
        var fish = fishList[i];

        if(fish.textContent != "Add New"){
            fileText += "\n    " + fish.textContent + ":";
            fileText += "\n        Lore: " + $(fish).data("lore");
            fileText += "\n        Min Size: " + $(fish).data("min");
            fileText += "\n        Max Size: " + $(fish).data("max");
            fileText += "\n        ModelData: " + $(fish).data("model");
            fileText += "\n        Base Price: " + $(fish).data("price");
            fileText += "\n        Area: " + $(fish).data("area");
            fileText += "\n        Raining: " + $(fish).data("raining");
            fileText += "\n        Min Height: " + $(fish).data("minHeight");
            fileText += "\n        Max Height: " + $(fish).data("maxHeight");
        }
    }

    fileText += "\n";


        //Caskets
        fileText += "\ntreasure: ";

        var casketList = $("#CasketParent").children();
        for(var i = 0; i< casketList.length; i++){
            var casket = casketList[i];
    
            fileText += (`
    ${casket.textContent}:
        Weight: ${$(casket).data("weight")}
        Prefix: ${$(casket).data("prefix")}
        Model Data: ${$(casket).data("modelData")}`);                

        var drops = $(casket).data("dropTable")?.toString().split(",");

        fileText += "\n        Drop Table:";
        if(drops != null){
            for(var d = 0; d < drops.length; d++){
            fileText += "\n        - \'" + drops[d] + "\'";
        }}
        }


    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileText));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

}