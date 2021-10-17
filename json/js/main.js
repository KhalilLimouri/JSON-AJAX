var page = 1;
var div = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {

    var RequestFromRequestTool =  new XMLHttpRequest();
    RequestFromRequestTool.open('GET', 'https://learnwebcode.github.io/json-example/animals-' +page+'.json');
    RequestFromRequestTool.onload =function() {
        if( RequestFromRequestTool.status >= 200 && RequestFromRequestTool.status <= 400)   console.log("server fail");
        if( RequestFromRequestTool.status < 200)   console.log("overall success");
        if( RequestFromRequestTool.status > 400)   console.log("client fail");
        var DataFromRequest = JSON.parse(RequestFromRequestTool.responseText)
        HTML(DataFromRequest);
    }

    RequestFromRequestTool.onerror = function() {
        console.log("err");
    }
    
    RequestFromRequestTool.send();
    page++;
    if(page>3)
        btn.classList.add("hide-me");
});

function HTML(data) {
    for (i = 0; i < data.length; i++) {
        var html = "";
        html += "<p>" + data[i].name + " : " + data[i].species + " + : ";
        for (j = 0; j < data[i].foods.likes.length; j++)
        {
            if(j == 0){
                html += data[i].foods.likes[j];
            }
            else {
                html += " and " + data[i].foods.likes[j];
            }
        }
            html += " - :" ;
        for (k = 0; k < data[i].foods.dislikes.length; k++)
        {
            if(k == 0){
                html += data[i].foods.dislikes[k];
            }
            else {
                html += " and " + data[i].foods.dislikes[k];
            }
        }
        html += ".</p>" ;
        div.insertAdjacentHTML('beforeend', html);
    }
}
            
