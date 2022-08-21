function download(filename) {

    var fileText = "\# \n\#This config was created using the Config Web Panel. Use /BF Config in game to generate your own!\n\#\n"

    //Boolean Creation
    fileText += (
`Show ScoreBoard: ${$("#ShowScoreboardCheck").is(":checked")}
Show Chat: ${$("#ShowChatCheck").is(":checked")}
High Priority: ${$("#PriorityCheck").is(":checked")}
Enable Tournaments: ${$("#TournamentsCheck").is(":checked")}
Tournament Only: ${$("#TournamentCheck").is(":checked")}
Area Permissions: ${$("#AreaCheck").is(":checked")}
Announce Legendary: ${$("#LegendCheck").is(":checked")}
Use Economy: ${$("#EconomyCheck").is(":checked")}
Enable Fish Bags: ${$("#FishBagsCheck").is(":checked")}
Enable Teasers: ${$("#TeasersCheck").is(":checked")}
`);
    
    //Text Creation
    fileText += (`
Currency Symbol: ${$("#currencySymbol").val()}

Enable All Blue: ${$("#AllBlueCheck").is(":checked")}
Permanent All Blue: ${$("#PermanentBlueCheck").is(":checked")} #If disabled, a zone with limited fish will spawn for each compass crafted
All Blue Fish: ${$("#allBlueFishInput").val()} #The amount of fish available in the Endgame Zone. Not needed if permanent
Endgame Radius: ${$("#endgameRadiusInput").val()} #The size of the endgame zone. Larger sizes may make it more difficult to find an appropriate location
Endgame Area: ${$("#inputEndgameArea").val()} #The area for the endgame zone to generate in
Endgame Mob Chance: ${$("#inputMobChance").val()} #The chance of fishing up monsters in the endgame zone
`);

    //Wandering Traders
    fileText += (`
Allow Wandering Traders: ${$("#WanderingTraderCheck").is(":checked")}
Wandering Traders Modifier: ${$("#traderModifierValue").val()}
`);

    //Treasure
    fileText += (`
Enable Treasure: ${$("#treasureCheck").is(":checked")}
Treasure Chance: ${$("#treasureChance").val()}
Parrot Treasure Bonus: ${$("#parrotBonus").val()}
Boat Treasure Bonus: ${$("#boatBonus").val()}
`);

    //World Whitelist
    var worldsList = $("#WorldsParent").children();

    fileText += (`
World Whitelist: ${$("#WorldCheck").is(":checked")}
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

    //alert("Config File successfully downloaded. \nPlease replace the previous one in your BlepFishing folder for your server.");
}