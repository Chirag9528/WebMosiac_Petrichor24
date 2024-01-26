function gotopost1(){
    window.location.href="./post1.html";
}
function gotopost2(){
    window.location.href="./post2.html";
}

function gotopost3(){
    window.location.href="./post3.html";
}
function gotopost4(){
    window.location.href="./post4.html";
}
function gotopost5(){
    window.location.href="./post5.html";
}
function gotopost6(){
    window.location.href="./post6.html";
}
function post1(){
    window.scroll(0,0)
}
function post2(){
    window.location.href="#l1"
}
function post3(){
    window.location.href="#l2"
}
function post4(){
    window.location.href="#l3"
}
function post5(){
    window.location.href="#l4"
}
function post6(){
    window.location.href="#l5"
}

fetch("http://webmosaic.petrichor.events:8080/post?id=1")
    .then(res => res.json())
    .then(data => {document.getElementById("p1").innerHTML = data.body.slice(0,1000) +"..." ,
        document.getElementById("a1").innerHTML = data.name,
        document.getElementById("l1").innerHTML = data.likes,
        document.getElementById("d1").innerHTML = data.dislikes
        })

fetch("http://webmosaic.petrichor.events:8080/author?id=1")
    .then(res => res.json())
    .then(data =>document.getElementById("z1").innerHTML = "-by " +data.name
        )


fetch("http://webmosaic.petrichor.events:8080/post?id=2")
    .then(res => res.json())
    .then(data => {document.getElementById("p2").innerHTML = data.body.slice(0,1000) +"..."  ,
        document.getElementById("a2").innerHTML = data.name,
        document.getElementById("l2").innerHTML = data.likes,
        document.getElementById("d2").innerHTML = data.dislikes})
fetch("http://webmosaic.petrichor.events:8080/author?id=1")
    .then(res => res.json())
    .then(data =>document.getElementById("z2").innerHTML =  "-by " +data.name
        )


fetch("http://webmosaic.petrichor.events:8080/post?id=3")
    .then(res => res.json())
    .then(data => {document.getElementById("p3").innerHTML = data.body.slice(0,1000) +"..."  ,
        document.getElementById("a3").innerHTML = data.name,
        document.getElementById("l3").innerHTML = data.likes,
        document.getElementById("d3").innerHTML = data.dislikes})
fetch("http://webmosaic.petrichor.events:8080/author?id=1")
    .then(res => res.json())
    .then(data =>document.getElementById("z3").innerHTML = "-by " +data.name
        )


fetch("http://webmosaic.petrichor.events:8080/post?id=4")
    .then(res => res.json())
    .then(data => {document.getElementById("p4").innerHTML = data.body.slice(0,1000) +"..."  ,
        document.getElementById("a4").innerHTML = data.name,
        document.getElementById("l4").innerHTML = data.likes,
        document.getElementById("d4").innerHTML = data.dislikes
        })
fetch("http://webmosaic.petrichor.events:8080/author?id=1")
    .then(res => res.json())
    .then(data =>document.getElementById("z4").innerHTML = "-by " +data.name
            )


fetch("http://webmosaic.petrichor.events:8080/post?id=5")
    .then(res => res.json())
    .then(data => {document.getElementById("p5").innerHTML = data.body.slice(0,1000) +"..."  ,
        document.getElementById("a5").innerHTML = data.name,
        document.getElementById("l5").innerHTML = data.likes,
        document.getElementById("d5").innerHTML = data.dislikes})
fetch("http://webmosaic.petrichor.events:8080/author?id=2")
    .then(res => res.json())
    .then(data =>document.getElementById("z5").innerHTML = "-by " +data.name
            )


fetch("http://webmosaic.petrichor.events:8080/post?id=6")
    .then(res => res.json())
    .then(data => {document.getElementById("p6").innerHTML = data.body.slice(0,1000) +"..."  ,
        document.getElementById("a6").innerHTML = data.name,
                document.getElementById("l6").innerHTML = data.likes,
                document.getElementById("d6").innerHTML = data.dislikes})
fetch("http://webmosaic.petrichor.events:8080/author?id=3")
    .then(res => res.json())
    .then(data =>document.getElementById("z6").innerHTML = "-by " +data.name
                    )


fetch("http://webmosaic.petrichor.events:8080/post?id=1")
    .then(res => res.json())
    .then(data => {document.getElementById("ph1").innerHTML = data.name
        })
fetch("http://webmosaic.petrichor.events:8080/post?id=2")
    .then(res => res.json())
    .then(data => {document.getElementById("ph2").innerHTML = data.name
            })
fetch("http://webmosaic.petrichor.events:8080/post?id=3")
    .then(res => res.json())
    .then(data => {document.getElementById("ph3").innerHTML = data.name
        })
fetch("http://webmosaic.petrichor.events:8080/post?id=4")
    .then(res => res.json())
    .then(data => {document.getElementById("ph4").innerHTML = data.name
        })
fetch("http://webmosaic.petrichor.events:8080/post?id=5")
    .then(res => res.json())
    .then(data => {document.getElementById("ph5").innerHTML = data.name
        })
fetch("http://webmosaic.petrichor.events:8080/post?id=6")
    .then(res => res.json())
    .then(data => {document.getElementById("ph6").innerHTML = data.name
        })




