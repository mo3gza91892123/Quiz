async function Api() {
    const datares = await fetch("./JS/json/B.json");
    const quation = await datares.json();
    return quation;
}
function randomnum(data,c) {
    let randbum = Math.floor(Math.random() * data.data.length)
    let array = [randbum];
    let q = [data.data[randbum]];
    for (let i = 0; i < c-1; i++) {
        for (let j = 0; j < array.length; ) {
            randbum = Math.floor(Math.random() * data.data.length)
            if (randbum === array[j]) {
                j = 0;
            }else{
                j++;
            }
        }
        array.push(randbum);
        q.push(data.data[randbum]);
    }
    return q;
}
document.getElementById("sqoure").value = 0.000001;
Api().then(q => init (randomnum(q,30)));
let now = 0; // current question
let score = 0; // current score

let hWrap = document.getElementById("quizWrap");
let hQn = document.createElement("div");
let hAns = document.createElement("div");
function init (data){
    hQn.id = "quizQn";
    hWrap.appendChild(hQn);
    
    hAns.id = "quizAns";
    hWrap.appendChild(hAns);
    draw(data);
}

function draw(data){
    hQn.innerHTML = data[now].q;
    
    hAns.innerHTML = "";
    for (let i in data[now].o) {
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz";
        radio.id = "quizo" + i;
        hAns.appendChild(radio);
        let label = document.createElement("label");
        label.innerHTML = data[now].o[i];
        label.setAttribute("for", "quizo" + i);
        label.dataset.idx = i;
        label.addEventListener("click", () => {select(label,data);});
        hAns.appendChild(label);
    }
}

function select(option,data){
    let all = hAns.getElementsByTagName("label");
    // let data = data;
    for (let label of all) {
        label.removeEventListener("click", select);
    }
    
    let correct = option.dataset.idx == data[now].a;
    document.getElementById("sqoure").value = now+1;
    if (correct) {
        score++;
        option.classList.add("correct");
    } else {
        option.classList.add("wrong");
    }
    now++;
    let a = data;
    setTimeout(()=>{
        if (now < a.length) 
        {
            draw(a);
            document.getElementById("sqoure").max = a.length;
            document.getElementById("sqoure").value = now;
        }
        else {
            hQn.innerHTML=(a.length / 2) <= score ?
            "(: "+`لقد حصلت علي ${score} من ${a.length}` 
            :
            "): " + `لقد حصلت علي ${score} من ${a.length}`;
            hAns.innerHTML="" ;
            document.getElementById("quizAns").innerHTML += `<a href="index.html">رجوع</a>`
        }
    }, 500);
    return a;
}
function reset(a){
    now = 0;
    score = 0;
    draw(a);
}
// window.addEventListener("load", init());