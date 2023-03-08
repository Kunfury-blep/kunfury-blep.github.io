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

    if(config['Fish Object']['value'])
        $('#fishVal').val(config['Fish Object']['value']);
    if(config['Fish Object']['length'])
        $('#fishLength').val(config['Fish Object']['length']);
    if(config['Fish Object']['caught'])
        $('#fishCaught').val(config['Fish Object']['caught']);
    if(config['Fish Object']['announce'])
        $('#fishAnnounce').val(config['Fish Object']['announce']);
    if(config['Fish Object']['Scoreboard']['rank'])
        $('#fishScoreboardRank').val(config['Fish Object']['Scoreboard']['rank']);
    if(config['Fish Object']['Scoreboard']['value'])
        $('#fishScoreboardValue').val(config['Fish Object']['Scoreboard']['value']);
    if(config['Fish Object']['Scoreboard']['size'])
        $('#fishScoreboardSize').val(config['Fish Object']['Scoreboard']['size']);


    
    if(config['Treasure']['open'])
        $('#treasureOpen').val(config['Treasure']['open']);
    if(config['Treasure']['result'])
        $('#treasureResult').val(config['Treasure']['result']);
    if(config['Treasure']['noEcon'])
        $('#treasureNoEcon').val(config['Treasure']['noEcon']);
    if(config['Treasure']['bottle'])
        $('#treasureBottle').val(config['Treasure']['bottle']);
    if(config['Treasure']['letter'])
        $('#treasureLetter').val(config['Treasure']['letter']);


    if(config['Tournament']['Type']['description'])
        $('#tourneyTypeDescription').val(config['Tournament']['Type']['description']);
    if(config['Tournament']['Type']['largest'])
        $('#tourneyTypeLargest').val(config['Tournament']['Type']['largest']);
    if(config['Tournament']['Type']['smallest'])
        $('#tourneyTypeSmallest').val(config['Tournament']['Type']['smallest']);
    if(config['Tournament']['Type']['expensive'])
        $('#tourneyTypeExpensive').val(config['Tournament']['Type']['expensive']);
    if(config['Tournament']['Type']['cheapest'])
        $('#tourneyTypeCheapest').val(config['Tournament']['Type']['cheapest']);
    if(config['Tournament']['Type']['score'])
        $('#tourneyTypeScore').val(config['Tournament']['Type']['score']);
    if(config['Tournament']['Type']['amount'])
        $('#tourneyTypeAmount').val(config['Tournament']['Type']['amount']);


    if(config['Tournament']['noneCaughtItem'])
        $('#tourneyNoneCaught').val(config['Tournament']['noneCaughtItem']);
    if(config['Tournament']['newBest'])
        $('#tourneyBest').val(config['Tournament']['newBest']);
    if(config['Tournament']['allFish'])
        $('#toruneyFishName').val(config['Tournament']['allFish']);
    if(config['Tournament']['noneCaught'])
        $('#tourneyNoneCaughtFinal').val(config['Tournament']['noneCaught']);
    if(config['Tournament']['start'])
        $('#tourneyStart').val(config['Tournament']['start']);
    if(config['Tournament']['leaderboard'])
        $('#tourneyLeaderboard').val(config['Tournament']['leaderboard']);
    if(config['Tournament']['noRewards'])
        $('#tourneyNoRewards').val(config['Tournament']['noRewards']);
    if(config['Tournament']['claimRewards'])
        $('#tourneyClaimRewards1').val(config['Tournament']['claimRewards']);
    if(config['Tournament']['claimRewards2'])
        $('#tourneyClaimRewards2').val(config['Tournament']['claimRewards2']);
    if(config['Tournament']['panelName'])
        $('#tourneyPanelName').val(config['Tournament']['panelName']);
    if(config['Tournament']['empty'])
        $('#tourneyEmpty').val(config['Tournament']['empty']);
    if(config['Tournament']['inactive'])
        $('#tourneyInactive').val(config['Tournament']['inactive']);

    if(config['Player Panel']['title'])
        $('#playerPanelTitle').val(config['Player Panel']['title']);
    if(config['Player Panel']['noTournaments'])
        $('#playerTourneyNone').val(config['Player Panel']['noTournaments']);
    if(config['Player Panel']['singleTournament'])
        $('#playerTourneySingle').val(config['Player Panel']['singleTournament']);
    if(config['Player Panel']['multiTournaments'])
        $('#playerTourneyMulti').val(config['Player Panel']['multiTournaments']);
    if(config['Player Panel']['quests'])
        $('#playerQuests').val(config['Player Panel']['quests']);
    if(config['Player Panel']['collection'])
        $('#playerCollection').val(config['Player Panel']['collection']);
    if(config['Player Panel']['comingSoon'])
        $('#playerComingSoon').val(config['Player Panel']['comingSoon']);

    if(config['Player Panel']['Help']['title'])
        $('#helpTitle').val(config['Player Panel']['Help']['title']);
    if(config['Player Panel']['Help']['lb'])
        $('#helpLeaderboard').val(config['Player Panel']['Help']['lb']);
    if(config['Player Panel']['Help']['reload'])
        $('#helpReload').val(config['Player Panel']['Help']['reload']);
    if(config['Player Panel']['Help']['claim'])
        $('#helpClaim').val(config['Player Panel']['Help']['claim']);
    if(config['Player Panel']['Help']['admin'])
        $('#helpAdmin').val(config['Player Panel']['Help']['admin']);
    if(config['Player Panel']['Help']['tourney'])
        $('#helpTourney').val(config['Player Panel']['Help']['tourney']);
    if(config['Player Panel']['Help']['getData'])
        $('#helpGetData').val(config['Player Panel']['Help']['getData']);
    if(config['Player Panel']['Help']['config'])
        $('#helpConfig').val(config['Player Panel']['Help']['config']);

    if(config['Signs']['fish'])
        $('#signsMarketLine1').val(config['Signs']['fish']);
    if(config['Signs']['market'])
        $('#signsMarketLine2').val(config['Signs']['market']);
    if(config['Signs']['marketTitle'])
        $('#signsMarketTitle').val(config['Signs']['marketTitle']);
    if(config['Signs']['noRank'])
        $('#signsNoRank').val(config['Signs']['noRank']);
    if(config['Signs']['noFish'])
        $('#signsNoFish').val(config['Signs']['noFish']);

    if(config['System']['announceCatch'])
        $('#systemCatchAnnounce').val(config['System']['announceCatch']);
    if(config['System']['adminReq'])
        $('#systemAdminReq').val(config['System']['adminReq']);
    if(config['System']['inventoryFull'])
        $('#systemFullInv').val(config['System']['inventoryFull']);
    if(config['System']['prefix'])
        $('#systemPrefix').val(config['System']['prefix']);
    if(config['System']['noPerm'])
        $('#systemNoPerm').val(config['System']['noPerm']);
    if(config['System']['noComm'])
        $('#systemNoComm').val(config['System']['noComm']);
    if(config['System']['reload'])
        $('#systemReload').val(config['System']['reload']);
    if(config['System']['itemReceive'])
        $('#systemItemRec').val(config['System']['itemReceive']);

    if(config['Admin']['panelTitle'])
        $('#adminTitle').val(config['Admin']['panelTitle']);


    if(config['Equipment']['Fish Bag']['baseName'])
        $('#equipmentFBName').val(config['Equipment']['Fish Bag']['baseName']);
    if(config['Equipment']['Fish Bag']['autoPickup'])
        $('#equipmentFBPickupMsg').val(config['Equipment']['Fish Bag']['autoPickup']);
    if(config['Equipment']['Fish Bag']['pickupEnabled'])
        $('#equipmentFBPickupEnable').val(config['Equipment']['Fish Bag']['pickupEnabled']);
    if(config['Equipment']['Fish Bag']['pickupDisabled'])
        $('#equipmentFBPickupDisable').val(config['Equipment']['Fish Bag']['pickupDisabled']);
    if(config['Equipment']['Fish Bag']['depositAll'])
        $('#equipmentFBDeposit').val(config['Equipment']['Fish Bag']['depositAll']);
    if(config['Equipment']['Fish Bag']['upgradeReady'])
        $('#equipmentFBUpgradeReady').val(config['Equipment']['Fish Bag']['upgradeReady']);
    if(config['Equipment']['Fish Bag']['upgradeHint'])
        $('#equipmentFBUpgradeHint').val(config['Equipment']['Fish Bag']['upgradeHint']);
    if(config['Equipment']['Fish Bag']['descSmall'])
        $('#equipmentFBSmallDesc').val(config['Equipment']['Fish Bag']['descSmall']);
    if(config['Equipment']['Fish Bag']['noSpace'])
        $('#equipmentFBNoFish').val(config['Equipment']['Fish Bag']['noSpace']);
    if(config['Equipment']['Fish Bag']['noFish'])
        $('#equipmentFBNoSpace').val(config['Equipment']['Fish Bag']['noFish']);
    if(config['Equipment']['Fish Bag']['addFish'])
        $('#equipmentFBAddFish').val(config['Equipment']['Fish Bag']['addFish']);
    if(config['Equipment']['Fish Bag']['oldVersion'])
        $('#equipmentFBInvFish').val(config['Equipment']['Fish Bag']['oldVersion']);
    if(config['Equipment']['Fish Bag']['stored'])
        $('#equipmentFBStored').val(config['Equipment']['Fish Bag']['stored']);
    if(config['Equipment']['Fish Bag']['largest'])
        $('#equipmentFBLargest').val(config['Equipment']['Fish Bag']['largest']);
    if(config['Equipment']['Fish Bag']['withdrawSmall'])
        $('#equipmentFBWithdrawSmall').val(config['Equipment']['Fish Bag']['withdrawSmall']);
    if(config['Equipment']['Fish Bag']['withdrawLarge'])
        $('#equipmentFBWithdrawLarge').val(config['Equipment']['Fish Bag']['withdrawLarge']);
    if(config['Equipment']['Fish Bag']['shift'])
        $('#equipmentFBWithdrawAll').val(config['Equipment']['Fish Bag']['shift']);

    if(config['Economy']['noValue'])
        $('#economyNoVal').val(config['Economy']['noValue']);
    if(config['Economy']['confirmSellAll'])
        $('#economySellAllConfirm').val(config['Economy']['confirmSellAll']);
    if(config['Economy']['sellBagHint'])
        $('#economySellBagHint').val(config['Economy']['sellBagHint']);
    if(config['Economy']['sellBagConfirm'])
        $('#economySellBagConfirm').val(config['Economy']['sellBagConfirm']);
    if(config['Economy']['finishSale'])
        $('#economySaleFinish').val(config['Economy']['finishSale']);
    if(config['Economy']['singleSale'])
        $('#economySingleSale').val(config['Economy']['singleSale']);
        

    if(config['Endgame']['areaName'])
        $('#endgameAreaName').val(config['Endgame']['areaName']);
    if(config['Endgame']['Compass']['name'])
        $('#endgameCompassName').val(config['Endgame']['Compass']['name']);
    if(config['Endgame']['Compass']['lore'])
        $('#endgameCompassLore').val(config['Endgame']['Compass']['lore']);
    if(config['Endgame']['Compass']['hint'])
        $('#endgameCompassHint').val(config['Endgame']['Compass']['hint']);
    if(config['Endgame']['Compass']['announce'])
        $('#endgameCompassAnnounce').val(config['Endgame']['Compass']['announce']);

    if(config['PAPI']['Tournament']['default'])
        $('#papiTourneyDefault').val(config['PAPI']['Tournament']['default']);
    if(config['PAPI']['Tournament']['notRunning'])
        $('#papiTourneyNotRun').val(config['PAPI']['Tournament']['notRunning']);
    if(config['PAPI']['Tournament']['noneCaught'])
        $('#papiTourneyNoneCaught').val(config['PAPI']['Tournament']['noneCaught']);

    if(config['PAPI']['Fish']['notFound'])
        $('#papiFishNone').val(config['PAPI']['Fish']['notFound']);

    
    //Extra messages found by Nibrock - 8/31/22
    if(config['Tournament']['starting'])
        $('#tourneyStarting').val(config['Tournament']['starting']);
    if(config['Tournament']['noTournament'])
        $('#tourneyNoTourney').val(config['Tournament']['noTournament']);
    if(config['Tournament']['noAction'])
        $('#tourneyNoAction').val(config['Tournament']['noAction']);
    if(config['Tournament']['noName'])
        $('#tourneyNoName').val(config['Tournament']['noName']);
    if(config['Tournament']['cancel'])
        $('#tourneyCancel').val(config['Tournament']['cancel']);
    if(config['Tournament']['notRunning'])
        $('#tourneyNotRunning').val(config['Tournament']['notRunning']);

    if(config['Equipment']['Fish Bag']['smallBag'])
        $('#equipmentFBSmall').val(config['Equipment']['Fish Bag']['smallBag']);
    if(config['Equipment']['Fish Bag']['medBag'])
        $('#equipmentFBMedium').val(config['Equipment']['Fish Bag']['medBag']);
    if(config['Equipment']['Fish Bag']['largeBag'])
        $('#equipmentFBLarge').val(config['Equipment']['Fish Bag']['largeBag']);
    if(config['Equipment']['Fish Bag']['giantBag'])
        $('#equipmentFBGiant').val(config['Equipment']['Fish Bag']['giantBag']);

    if(config['Economy']['noEconomy'])
        $('#economyNoEcon').val(config['Economy']['noEconomy']);
    if(config['Economy']['noPlayer'])
        $('#economyNoPlayer').val(config['Economy']['noPlayer']);

    if(config['System']['debugFish'])
        $('#systemDebugFish').val(config['System']['debugFish']);
    if(config['System']['debugEnabled'])
        $('#systemDebugEnable').val(config['System']['debugEnabled']);
    if(config['System']['debugDisabled'])
        $('#systemDebugDisable').val(config['System']['debugDisabled']);

    if(config['Admin']['Spawn']['noName'])
        $('#adminSpawnNoName').val(config['Admin']['Spawn']['noName']);
    if(config['Admin']['Spawn']['success'])
        $('#adminSpawnSuccess').val(config['Admin']['Spawn']['success']);
    if(config['Admin']['Spawn']['limit'])
        $('#adminSpawnLimit').val(config['Admin']['Spawn']['limit']);
    if(config['Admin']['Spawn']['validAmount'])
        $('#adminSpawnNoAmt').val(config['Admin']['Spawn']['validAmount']);
    if(config['Admin']['Spawn']['validFish'])
        $('#adminSpawnNoFish').val(config['Admin']['Spawn']['validFish']);
    if(config['Admin']['Spawn']['validTreasure'])
        $('#adminSpawnNoTreasure').val(config['Admin']['Spawn']['validTreasure']);

    if(config['Admin']['getDataClick'])
        $('#adminGetData').val(config['Admin']['Spawn']['getDataClick']);


    if(config['Admin']['Spawn']['endgame'])
        $('#adminSpawnEndgame').val(config['Admin']['Spawn']['endgame']);

    if(config['Economy']['received'])
        $('#economyReceived').val(config['Economy']['received']);

    if(config['Quests']['progress'])
        $('#questsProgress').val(config['Quests']['progress']);
    if(config['Quests']['completed'])
        $('#questsCompleted').val(config['Quests']['completed']);
    if(config['Quests']['disabled'])
        $('#questsDisabled').val(config['Quests']['disabled']);
    if(config['Quests']['noneActive'])
        $('#questsNoneActive').val(config['Quests']['noneActive']);
    if(config['Quests']['noAction'])
        $('#questsNoAction').val(config['Quests']['noAction']);
    if(config['Quests']['description'])
        $('#questsDescription').val(config['Quests']['description']);
    if(config['Quests']['minDesc'])
        $('#questMinDesc').val(config['Quests']['minDesc']);
    if(config['Quests']['maxDesc'])
        $('#questMaxDesc').val(config['Quests']['maxDesc']);
    if(config['Quests']['expired'])
        $('#questsExpired').val(config['Quests']['expired']);
    if(config['Quests']['cancel'])
        $('#questsCancel').val(config['Quests']['cancel']);

    }