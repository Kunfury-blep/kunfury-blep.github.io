$(document).ready(function () {
    $("#messageTemplate").val("Language Templates");

    $('#messageTemplate').change(function() {
        selectTemplate(this.value)
    });
});

 	


$( "#messageTemplate" ).change(function() {
    alert( this.value );
  });

function loadTemplates(){

}

function selectTemplate(template){
    if(template == "Contribute New"){
        var body = 'Have you translated the plugin into a language that isn\'t available on this page? <br> Please message Kunfury in the <a href="https://discord.com/invite/vuBCHngkFH">Community Discord</a> ' 
        + 'and I would be happy to add it as an option! You\'ll also get a unique reward added to the plugin for you as a thank you for the wonderful work you\'ve done!';
        showImportantMessage("Contribute a New Translation", body);
        return;
    }

    $.get("/scripts/js/messages/templates/" + template + ".yml", function (data) {

        //TODO: Add in version checker and alert the user if the translation is not fully up to date

        var oldVersion = false;

        if(oldVersion){
            var title = "Out of Date Translation";
            var body = 'This translation is outdated. It will still work but some messages will show as the default English unless changed. If you\'d like to help fix this please let us know in the <a href="https://discord.com/invite/vuBCHngkFH">Community Discord</a>!';
        
            showImportantMessage(title, body);
        }

        parseImport(data);

        var msgTitle = "Successfully loaded the " + template + " translation!";
        var msgBody = "Successfully loaded the " + template + " translation!";
        showMessage(msgTitle, "");
        // data contains your html
    });

}