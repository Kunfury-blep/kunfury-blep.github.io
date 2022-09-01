function displayTourneyModal(tourney){
    // if(activeCasket != null){
    //     $('#inputCasketName').val(casket.text());
    //     $('#inputCasketWeight').val(casket.data("weight"));
    //     $('#inputCasketPrefix').val(casket.data("prefix"));
    //     $('#inputCasketPrefix').val(casket.data("prefix"));
    //     $('#inputCasketModelData').val(casket.data("modelData"));

    //     const dropTableObj = $(casket).data("dropTable").toString().split(',');


    //     var dropTable = "";

    //     for(const e of dropTableObj){
    //         dropTable += e + "\n";
    //     }

    //     $('#inputCasketDropTable').val(dropTable);

    //     $('#SaveCasketBtn').html('Update');
    //     $('#casketDeleteBtn').show();
    // }else{
    //     $('#inputCasketName').val("");
    //     $('#inputCasketWeight').val("");
    //     $('#inputCasketPrefix').val("");
    //     $('#inputCasketModelData').val("");
    //     $('#inputCasketDropTable').val("");
    //     $('#SaveCasketBtn').html('Create');
    //     $('#casketDeleteBtn').hide();
        
    // }
    $('#tourneyModal').modal('show');
}

function chooseMode(ele, mode){
    $( ".mode-btn" ).each(function( index ) {
        $(this).removeClass('active-btn');
      });
      

    $(ele).addClass('active-btn');

    if(mode == "DAY"){
        $("#dayInputs").show();
    }else{
        $("#dayInputs").hide();
    }

}

function chooseType(ele, type){
    $( ".type-btn" ).each(function( index ) {
        $(this).removeClass('active-btn');
      });
      

    $(ele).addClass('active-btn');
}

function chooseDay(ele, day){
    $(ele).toggleClass('active-btn');
}

function toggleBossbars(ele){
    if($(ele).is(":checked")){
        $("#bossbarInputs").show();
    }else{
        $("#bossbarInputs").hide();
    }
}