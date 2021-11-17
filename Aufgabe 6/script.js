var people = [
    {
        "firstname":"Max",
        "lastname":"Mustermann",
        "age": 56,
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a6/2015-09-03_7345_Money_Boy.jpg"
    },
    {
        "firstname":"Max",
        "lastname":"Mustermann",
        "age": 56,
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a6/2015-09-03_7345_Money_Boy.jpg" 
    },
    {
        "firstname":"Max",
        "lastname":"Mustermann",
        "age": 56,
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a6/2015-09-03_7345_Money_Boy.jpg" 
    },
]

var html="";
for(i=0;i<people.length;i++){
    html += "<div class='card'>";
    html += "<div class='first'>";
    html += "<ul>";

    html+="<li>" +people[i].firstname + "</li>";
    html+="<li>" + people[i].lastname + "</li>"; 
    html+="</ul></div>"; 
    html+="<div class='second'><img width='100px' src='" + people[i].image + "'/></div>";
    html+="<div class= 'third'>Alter" + people[i].age + "</div>";
    html+="</div>";
}

document.getElementById("container").innerHTML = html; 