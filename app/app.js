function route(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#/","");
    //pageID holds page name

    if(!pageID){
        MODEL.changePage("home");

    }else{
        MODEL.changePage(pageID);

    }

}

function initlistener(){
    $(window).on("hashchange",route);
    route();

}

function underlineActivePage(){
    $(".nav-buttons a").click(function(){
        $("a.active").removeClass("active");
        $(this).addClass("active");
    });
    
}

$(document).ready(function(){
    initlistener();
    underlineActivePage();
    
})