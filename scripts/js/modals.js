var activeFish;
var activeArea;
var activeWorld;
var activeRarity;
var activeCasket;

$(document).on('click', '.fishButton', function () {
    var fish = $(event.target);
    displayFishModal(fish);
});

$(document).on('click', '.areaButton', function () {
    var area = $(event.target);
    displayAreaModal(area);
});

$(document).on('click', '.worldButton', function () {
    var world = $(event.target);
    displayWorldModal(world);
});

$(document).on('click', '.rarityButton', function () {
    var rarity = $(event.target);
    displayRarityModal(rarity);
});

$(document).on('click', '.casketButton', function () {
    var casket = $(event.target);
    displayCasketModal(casket);
});



function displayFishModal(fish){
    activeFish = fish;
    if(activeFish != null){
        $('#inputFishName').val(fish.data("name"));
        $('#inputFishLore').val(fish.data("lore"));
        $('#inputMinSize').val(fish.data("min"));
        $('#inputMaxSize').val(fish.data("max"));
        $('#inputMinHeight').val(fish.data("minHeight"));
        $('#inputMaxHeight').val(fish.data("maxHeight"));
        $('#inputModelData').val(fish.data("model"));
        $('#inputPrice').val(fish.data("price"));
        $('#inputFishArea').val(fish.data("area"));
        $('#inputFishRaining').prop('checked', fish.data("raining"));
        $('#SaveFishBtn').html('Update');
        $('#fishDeleteBtn').show();
    }else{
        $('#inputFishName').val("");
        $('#inputFishLore').val("");
        $('#inputMinSize').val("");
        $('#inputMaxSize').val("");
        $('#inputMinHeight').val("");
        $('#inputMaxHeight').val("");
        $('#inputModelData').val("");
        $('#inputPrice').val("");
        $('#inputFishArea').val("");
        $('#inputFishRaining').prop('checked', false);
        $('#fishDeleteBtn').hide();
    }
    //Fill the modal with the clicked fish
    $('#fishModal').modal('show');
}

function displayAreaModal(area){
    activeArea = area;
    if(activeArea != null){
        $('#inputAreaName').val(area.data("name"));
        $('#inputAreaBiomes').val(area.data("biomes"));
        $('#inputHasCompass').prop('checked', area.data("compassBool"));
        $('#inputCompassHint').val(area.data("compassHint"));
        $('#SaveAreaBtn').html('Update');
        $('#areaDeleteBtn').show();
    }else{
        $('#inputAreaName').val("");
        $('#inputAreaBiomes').val("");
        $('#inputHasCompass').prop('checked', false);
        $('#inputCompassHint').val("");
        $('#SaveAreaBtn').html('Create');
        $('#areaDeleteBtn').hide();
    }
    $('#areaModal').modal('show');
}

function displayWorldModal(world){
    activeWorld = world;
    if(activeWorld != null){
        $('#inputWorldName').val(world.text());
        $('#SaveWorldBtn').html('Update');
        $('#worldDeleteBtn').show();
    }else{
        $('#inputWorldName').val("");
        $('#SaveWorldBtn').html('Create');
        $('#worldDeleteBtn').hide();
    }
    $('#worldModal').modal('show');
}

function displayRarityModal(rarity){
    activeRarity = rarity;
    if(activeRarity != null){
        $('#inputRarityName').val(rarity.text());
        $('#inputRarityWeight').val(rarity.data("weight"));
        $('#inputRarityPrefix').val(rarity.data("color"));
        $('#inputRarityPrice').val(rarity.data("price"));

        $('#SaveRarityBtn').html('Update');
        $('#rarityDeleteBtn').show();
    }else{
        $('#inputRarityName').val("");
        $('#inputRarityWeight').val("");
        $('#inputRarityPrefix').val("");
        $('#inputRarityPrice').val("");
        $('#SaveRarityBtn').html('Create');
        $('#rarityDeleteBtn').hide();
        
    }
    $('#rarityModal').modal('show');
}

function displayCasketModal(casket){
    activeCasket = casket;
    if(activeCasket != null){
        $('#inputCasketName').val(casket.text());
        $('#inputCasketWeight').val(casket.data("weight"));
        $('#inputCasketPrefix').val(casket.data("prefix"));
        $('#inputCasketPrefix').val(casket.data("prefix"));
        $('#inputCasketModelData').val(casket.data("modelData"));

        const dropTableObj = $(casket).data("dropTable").toString().split(',');


        var dropTable = "";

        for(const e of dropTableObj){
            dropTable += e + "\n";
        }

        $('#inputCasketDropTable').val(dropTable);

        $('#SaveCasketBtn').html('Update');
        $('#casketDeleteBtn').show();
    }else{
        $('#inputCasketName').val("");
        $('#inputCasketWeight').val("");
        $('#inputCasketPrefix').val("");
        $('#inputCasketModelData').val("");
        $('#inputCasketDropTable').val("");
        $('#SaveCasketBtn').html('Create');
        $('#casketDeleteBtn').hide();
        
    }
    $('#casketModal').modal('show');
}

function saveFish(){
    var fishName = $('#inputFishName').val();
    if(activeFish != null){ //Checks if we are updating a fish or creating an entirely new one
        activeFish.remove();
    }
    if(fishName == ""){
        alert("A name for the fish is required");
        return;
    }
    CreateFishEle($('#inputFishName').val(),
    $('#inputFishLore').val(),
    $('#inputMinSize').val(),
  $('#inputMaxSize').val(),
    $('#inputModelData').val(),  
    $('#inputPrice').val(),
    $('#inputFishArea').val(),
    $('#inputFishRaining').val());

    $('#fishModal').modal('hide');
}

function saveArea(){
    var areaName = $('#inputAreaName').val();
    if(activeArea != null){ //Checks if we are updating a fish or creating an entirely new one
        activeArea.remove();
    }
    if(areaName == ""){
        alert("A name for the area is required");
        return;
    }
    CreateAreaEle($('#inputAreaName').val(), $('#inputAreaBiomes').val());

    $('#areaModal').modal('hide');
}

function saveWorld(){
    var worldName = $('#inputWorldName').val();
    if(activeWorld != null){ //Checks if we are updating a fish or creating an entirely new one
        activeWorld.remove();
    }
    if(worldName == ""){
        alert("A name for the world is required");
        return;
    }
    CreateWorldEle(worldName);

    $('#worldModal').modal('hide');
}

function saveRarity(){
    var rarityName = $('#inputRarityName').val();
    if(activeRarity != null){ //Checks if we are updating a fish or creating an entirely new one
        activeRarity.remove();
    }
    if(rarityName == ""){
        alert("A name for the rarity is required");
        return;
    }
    CreateRarityEle($('#inputRarityName').val(), $('#inputRarityWeight').val(), $('#inputRarityPrefix').val(), $('#inputRarityPrice').val());

    $('#rarityModal').modal('hide');
}

function saveCasket(){
    var casketName = $('#inputCasketName').val();
    if(activeCasket != null){ //Checks if we are updating a fish or creating an entirely new one
        activeCasket.remove();
    }
    if(casketName == ""){
        alert("A name for the casket is required");
        return;
    }
    CreateCasketEle($('#inputCasketName').val(), $('#inputRarityWeight').val(), $('#inputRarityColor').val(), $('#inputRarityPrice').val());

    $('#casketModal').modal('hide');
}

function Delete(item){
    switch(item){
        case "fish":
            if(activeFish != null && confirm('You are about to delete ' + $(activeFish).text() + "." )){
                activeFish.remove();
                $('#fishModal').modal('hide');
            }
            break;
        case "area":
            if(activeArea != null && confirm('You are about to delete ' + $(activeArea).text() + "." )){
                activeArea.remove();
                $('#areaModal').modal('hide');
            }
            break;
        case "world":
            if(activeWorld != null && confirm('You are about to delete ' + $(activeWorld).text() + "." )){
                activeWorld.remove();
                $('#worldModal').modal('hide');
            }
            break;
        case "rarity":
            if(activeRarity != null && confirm('You are about to delete ' + $(activeRarity).text() + "." )){
                activeRarity.remove();
                $('#rarityModal').modal('hide');
            }
            break;
        case "casket":
            if(activeCasket != null && confirm('You are about to delete ' + $(activeCasket).text() + "." )){
                activeCasket.remove();
                $('#casketModal').modal('hide');
            }
            break;
        default:
            alert("Default");
    }
}