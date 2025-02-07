function setCookie(name, value, days){
    let cookieExpire = "";
    if (days){
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        cookieExpire = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + "; path=/" + cookieExpire; 
}

function getCookie(name){
    let cookieName = name + "=";
    let cookieAtt = document.cookie.split(';');
    for (let i = 0; i < cookieAtt.length; i++) {
      let c = cookieAtt[i].trim();
      if (c.indexOf(cookieName) === 0)
        return c.substring(cookieName.length, c.length);
    }
}

function checkLogin(){
    let username = getCookie("admin");
    if(username){
        consolelog("cookie found.");
        console.log(username);
    }else
        console.log("Cookie not found.");
        
}
