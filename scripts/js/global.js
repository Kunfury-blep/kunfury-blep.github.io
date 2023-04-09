$(document).ready(function() { 
    $('#navbar').load('_global.html');
});

function showMessage(title, message){
    $('#msgPopupHeader').text(title);
    $('#msgPopupBody').html(message);

    $('#messagePopup').fadeIn();

    $('#messagePopup').fadeOut(4000);
}

function showImportantMessage(title, message){
    $('#impMsgHeader').text(title);
    $('#impMsgBody').html(message);
    $('#importantMessageModal').modal('show');
}

function help(){
    var title = "Need Help or Have a Suggestion?";
    var message = 'Have a question about the Web Panel or a suggestion on how it could be improved? Please feel free to ask in the <a href="https://discord.com/invite/vuBCHngkFH">Community Discord</a>!';
    showImportantMessage(title, message);
}
