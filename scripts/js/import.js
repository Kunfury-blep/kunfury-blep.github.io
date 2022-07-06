// $('#importUpload').on("change", function(){ importConfig(); });

// //Brings up the upload dialoge from the Import Button
// $("#importBtn").click(function () {
    
// });


$(document).ready(function () {
    $('#importUpload').on("change", function(){ importConfig(); });

    //Brings up the upload dialoge from the Import Button
    $("#importBtn").click(function () {
        $("#importUpload").trigger('click');
    });
});

function importConfig(){
    var fr = new FileReader();
    fr.onload = function(){ parseImport(fr.result); }
    fr.readAsText(document.getElementById('importUpload').files[0]);
}

function parseImport(result){
    const yaml = require('js-yaml'); //Needs to be moved to document load so it's only defined once
    var config = (yaml.load(result, {encoding: 'utf-8'}));

    $('#ShowScoreboardCheck').prop('checked', config['Show ScoreBoard']);
    $('#ShowChatCheck').prop('checked', config['Show Chat']);
    $('#PriorityCheck').prop('checked', config['High Priority']);
    $('#TournamentCheck').prop('checked', config['Tournament Only']);
    $('#AreaCheck').prop('checked', config['Area Permissions']);
    $('#LegendCheck').prop('checked', config['Announce Legendary']);
    $('#WorldCheck').prop('checked', config['World Whitelist']);

    $('#WanderingTraderCheck').prop('checked', config['Allow Wandering Traders']);
    $('#traderModifierValue').val(config['Wandering Traders Modifier']);

    $('#chatPrefixInput').val(config['Chat Prefix']);
    $('#currencySymbol').val(config['Currency Symbol']);

    $("#EconomyCheck").prop('checked', config['Use Economy']);
    $("#FishBagsCheck").prop('checked', config['Enable Fish Bags']);
    $("#AllBlueCheck").prop('checked', config['Enable All Blue']);
    $("#PermanentBlueCheck").prop('checked', config['Permanent All Blue']);
    $('#allBlueNameInput').val(config['All Blue Name']);
    $('#allBlueFishInput').val(config['All Blue Fish']);





    //Sets the dropdownt to the appropriate value
    var langSymb = config['Language Symbol'];
    $('#languageSymbol').children().each(function () {
        if($(this).data("symbol") == langSymb){
            $('#languageSymbol').val(this.value);
        }
    });

    //Allowed Worlds
    $(WorldsParent).empty();
    var worlds = config['Allowed Worlds'];
    $(worlds).each(function () {
        CreateWorldEle(this);
    });

    //Available Fish
    $(FishParent).empty();
    var fishList = config['fish'];

    for(var name in fishList){
        var f = fishList[name];
        CreateFishEle(name, f['Lore'], f['Min Size'], f['Max Size'],
                        f['ModelData'], f['Base Price'], f['Area'], 
                        f['Raining'], f['Min Height'], f['Max Height']);
    }

    //Fishing Areas
    $(AreaParent).empty();
    var areaList = config['areas'];

    for(var name in areaList){
        var f = areaList[name];
        var biomes = (f['Biomes']).join(' ');
        CreateAreaEle(name, f['Has Compass'], f['Compass Hint'], biomes);
    }

    //Fish Rarities
    $(RarityParent).empty();
    var rarityList = config['rarities'];

    for(var name in rarityList){
        var f = rarityList[name];
        CreateRarityEle(name, f['Weight'], f['Color Code'], f['Price Mod']);
    }
}