cookies = 0
upgrade = 1
limit_upgrade = 50
while (true) {
    document.getElementById("displaycookies").innerHTML = cookies;
    console.log(cookies);
}
function getcookies() {
    return cookies
    //kim
}

function addingnum() {
    return cookies += upgrade;
    
}

function upgradeclick() {
    if(cookies >= limit_upgrade){
        upgrade = upgrade * 2;
        cookies -= limit_upgrade;
        limit_upgrade = limit_upgrade*4
    }

    else
        i = 1
    //kim
}

