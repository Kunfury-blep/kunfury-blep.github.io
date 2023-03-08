function download(filename) {

    var fileText = "\# \n\#This Message File was created using the Config Web Panel. Use /BF Config in game to generate your own!\n\#\n"

    //Text Creation
    fileText += (`
version: 1.4

Fish Object: 
    value: "${$("#fishVal").val()}"
    length: "${$("#fishLength").val()}"
    caught: "${$("#fishCaught").val()}"
    announce: "${$("#fishAnnounce").val()}"
    Scoreboard: 
        rank: "${$("#fishScoreboardRank").val()}"
        value: "${$("#fishScoreboardValue").val()}"
        size: "${$("#fishScoreboardSize").val()}"

Treasure: 
    open: "${$("#treasureOpen").val()}"
    result: "${$("#treasureResult").val()}"
    noEcon: "${$("#treasureNoEcon").val()}"
    bottle: "${$("#treasureBottle").val()}"
    letter: "${$("#treasureLetter").val()}"

Tournament:
    Type:
        description: "${$("#tourneyTypeDescription").val()}"
        largest: "${$("#tourneyTypeLargest").val()}"
        smallest: "${$("#tourneyTypeSmallest").val()}"
        expensive: "${$("#tourneyTypeExpensive").val()}"
        cheapest: "${$("#tourneyTypeCheapest").val()}"
        score: "${$("#tourneyTypeScore").val()}"
        amount: "${$("#tourneyTypeAmount").val()}"
    noneCaughtItem: "${$("#tourneyNoneCaught").val()}"
    newBest: "${$("#tourneyBest").val()}"
    allFish: "${$("#toruneyFishName").val()}"
    noneCaught: "${$("#tourneyNoneCaughtFinal").val()}"
    start: "${$("#tourneyStart").val()}"
    leaderboard: "${$("#tourneyLeaderboard").val()}"
    noRewards: "${$("#tourneyNoRewards").val()}"
    claimRewards: "${$("#tourneyClaimRewards1").val()}"
    claimRewards2: "${$("#tourneyClaimRewards2").val()}"
    panelName: "${$("#tourneyPanelName").val()}"
    empty: "${$("#tourneyEmpty").val()}"
    inactive: "${$("#tourneyInactive").val()}"
    starting: "${$("#tourneyStarting").val()}"
    noTournament: "${$("#tourneyNoTourney").val()}"
    noAction: "${$("#tourneyNoAction").val()}"
    noName: "${$("#tourneyNoName").val()}"
    cancel: "${$("#tourneyCancel").val()}"
    notRunning: "${$("#tourneyNotRunning").val()}"

Player Panel:
    title: "${$("#playerPanelTitle").val()}"
    noTournaments: "${$("#playerTourneyNone").val()}"
    singleTournament: "${$("#playerTourneySingle").val()}"
    multiTournaments: "${$("#playerTourneyMulti").val()}"
    quests: "${$("#playerQuests").val()}"
    collection: "${$("#playerCollection").val()}"
    comingSoon: "${$("#playerComingSoon").val()}"

    Help: 
        title: "${$("#helpTitle").val()}"
        lb: "${$("#helpLeaderboard").val()}"
        reload: "${$("#helpReload").val()}"
        claim: "${$("#helpClaim").val()}"
        admin: "${$("#helpAdmin").val()}"
        tourney: "${$("#helpTourney").val()}"
        getData: "${$("#helpGetData").val()}"
        config: "${$("#helpConfig").val()}"

Signs: 
    fish: "${$("#signsMarketLine1").val()}"
    market: "${$("#signsMarketLine2").val()}"
    marketTitle: "${$("#signsMarketTitle").val()}"
    noRank: "${$("#signsNoRank").val()}"
    noFish: "${$("#signsNoFish").val()}"

System: 
    announceCatch: "${$("#systemCatchAnnounce").val()}"
    adminReq: "${$("#systemAdminReq").val()}"
    inventoryFull: "${$("#systemFullInv").val()}"
    prefix: "${$("#systemPrefix").val()}"
    noPerm: "${$("#systemNoPerm").val()}"
    noComm: "${$("#systemNoComm").val()}"
    reload: "${$("#systemReload").val()}"
    itemReceive: "${$("#systemItemRec").val()}"
    debugFish: "${$("#systemDebugFish").val()}"
    debugEnabled: "${$("#systemDebugEnable").val()}"
    debugDisabled: "${$("#systemDebugDisable").val()}"

Admin: 
    panelTitle: "${$("#adminTitle").val()}"
    getDataClick: "${$("#adminGetData").val()}"
    Spawn:
        noName: "${$("#adminSpawnNoName").val()}"
        success: "${$("#adminSpawnSuccess").val()}"
        limit: "${$("#adminSpawnLimit").val()}"
        validAmount: "${$("#adminSpawnNoAmt").val()}"
        validFish: "${$("#adminSpawnNoFish").val()}"
        validTreasure: "${$("#adminSpawnNoTreasure").val()}"
        endgame: "${$("#adminSpawnEndgame").val()}"

Equipment:
    Fish Bag:
        baseName: "${$("#equipmentFBName").val()}"
        autoPickup: "${$("#equipmentFBPickupMsg").val()}"
        pickupEnabled: "${$("#equipmentFBPickupEnable").val()}"
        pickupDisabled: "${$("#equipmentFBPickupDisable").val()}"
        depositAll: "${$("#equipmentFBDeposit").val()}"
        upgradeReady: "${$("#equipmentFBUpgradeReady").val()}"
        upgradeHint: "${$("#equipmentFBUpgradeHint").val()}"
        descSmall: "${$("#equipmentFBSmallDesc").val()}"
        noSpace: "${$("#equipmentFBNoSpace").val()}"
        noFish: "${$("#equipmentFBNoFish").val()}"
        addFish: "${$("#equipmentFBAddFish").val()}"
        oldVersion: "${$("#equipmentFBInvFish").val()}"
        stored: "${$("#equipmentFBStored").val()}"
        largest: "${$("#equipmentFBLargest").val()}"
        withdrawSmall: "${$("#equipmentFBWithdrawSmall").val()}"
        withdrawLarge: "${$("#equipmentFBWithdrawLarge").val()}"
        shift: "${$("#equipmentFBWithdrawAll").val()}"
        smallBag: "${$("#equipmentFBSmall").val()}"
        medBag: "${$("#equipmentFBMedium").val()}"
        largeBag: "${$("#equipmentFBLarge").val()}"
        giantBag: "${$("#equipmentFBGiant").val()}"

Economy: 
    noValue: "${$("#economyNoVal").val()}"
    confirmSellAll: "${$("#economySellAllConfirm").val()}"
    sellBagHint: "${$("#economySellBagHint").val()}"
    sellBagConfirm: "${$("#economySellBagConfirm").val()}"
    finishSale: "${$("#economySaleFinish").val()}"
    singleSale: "${$("#economySingleSale").val()}"
    noEconomy: "${$("#economyNoEcon").val()}"
    noPlayer: "${$("#economyNoPlayer").val()}"
    received: "${$("#economyReceived").val()}"

Endgame: 
    areaName: "${$("#endgameAreaName").val()}"
    Compass: 
        name: "${$("#endgameCompassName").val()}"
        lore: "${$("#endgameCompassLore").val()}"
        hint: "${$("#endgameCompassHint").val()}"
        announce: "${$("#endgameCompassAnnounce").val()}"

PAPI: 
    Tournament: 
        default: "${$("#papiTourneyDefault").val()}"
        notRunning: "${$("#papiTourneyNotRun").val()}"
        noneCaught: "${$("#papiTourneyNoneCaught").val()}"
    Fish: 
        notFound: "${$("#papiFishNone").val()}"

Quests:
    progress: "${$("#questsProgress").val()}"
    completed: "${$("#questsCompleted").val()}"
    disabled: "${$("#questsDisabled").val()}"
    noneActive: "${$("#questsNoneActive").val()}"
    noAction: "${$("#questsNoAction").val()}"
    description: "${$("#questsDescription").val()}"
    minDesc: "${$("#questMinDesc").val()}"
    maxDesc: "${$("#questMaxDesc").val()}"
    expired: "${$("#questsExpired").val()}"
    cancel: "${$("#questsCancel").val()}"
    `);



    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileText));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

    //alert("Config File successfully downloaded. \nPlease replace the previous one in your BlepFishing folder for your server.");
}