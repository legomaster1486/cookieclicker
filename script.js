let limit_upgrade_click = 50;
let limit_upgrade_pasive = 100;
let upgrade_grandma = 150
let passivenumclick = 0;
let cookies = 0;
let upgrade = 1;
let limit_upgrade_grandma = 0;
let intervalPointer = undefined;

function addingnum() {
    cookies += upgrade;
    document.getElementById("displaycookie").innerHTML = cookies;

}

function upgradeclick() {
    if (cookies >= limit_upgrade_click) {
        upgrade = upgrade * 2;
        cookies -= limit_upgrade_click;
        limit_upgrade_click = limit_upgrade_click * 2;
        document.getElementById("displaycookie").innerHTML = cookies;
    }
}

function passiveclick() {
    if (cookies >= limit_upgrade_pasive) {
        cookies -= limit_upgrade_pasive;
        limit_upgrade_pasive = limit_upgrade_pasive * 2;
        ++passivenumclick;
        document.getElementById("displaycookie").innerHTML = cookies;
        if (intervalPointer !== undefined) {
            clearInterval(intervalPointer)
        }
        intervalPointer = setInterval(
            addingnum,
            60_000 / passivenumclick
        )
    }

}
function grandma() {
    if (cookies >= limit_upgrade_grandma) {
        upgrade_grandma = upgrade_grandma * 2;
        cookies -= limit_upgrade_grandmak;
        limit_upgrade_grandma = limit_upgrade_grandma * 2;
        document.getElementById("displaycookie").innerHTML = cookies;
    }
}
