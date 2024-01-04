let QAnsers =[];
let AAnsers =[];
let UAnsers =[];
let TF = false;
async function Api() {
    const datares = await fetch("./JS/json/D.json");
    const quation = await datares.json();
    const data =  await quation.data.slice(0,75);
    return data;
}
function randomnum(data,c) {
    const array = [];
    const number = [];
    while (array.length < c) {
        const randbum = Math.floor(Math.random() * data.length)
        if (number.indexOf(randbum) === -1) {
            number.push(randbum);
            array.push(data[randbum]);
        }
    }
    console.log(number);
    return array;
}
document.getElementById("sqoure").style.width = 0;
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
    QAnsers.push(data[now].q);
    AAnsers.push(data[now].o[data[now].a]);
    UAnsers.push(data[now].o[option.dataset.idx]);
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
            document.getElementById("sqoure").style.width = (now/a.length * 100) +"%";
        }
        else {
            document.getElementById("exit").style.display = "none"
            if ((a.length / 2) <= score) {
                start();
                hQn.innerHTML="&#128516; "+`لقد حصلت علي ${score} من ${a.length}`;
                // document.getElementById("canvas").style.display = "block";
                // initConfetti();
                // render();
            }else{
                hQn.innerHTML="☹️ "+`لقد حصلت علي ${score} من ${a.length}`;
            }
            hAns.innerHTML="" ;
            hWrap.innerHTML +=`
            <table class="table table-bordered table-dark" dir="rtl">
                <thead>
                    <tr>
                    <th scope="col">السؤال</th>
                    <th scope="col text-success">الاجابة الصحيحة</th>
                    <th scope="col">الاجابة المختارة</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            `;
            for (let i = 0; i < QAnsers.length; i++) {
                document.querySelector("tbody").innerHTML += `
                <tr>
                    <th scope="row">${QAnsers[i]}</th>
                    <td><p class="text-success">${AAnsers[i]}</p></td>
                    <td>${AAnsers[i] === UAnsers[i] ?"<p class='text-success'>" + UAnsers[i] + "</p>":"<p class='text-danger'>" + UAnsers[i] + "</p>"}</td>
                </tr>`
            }
            document.getElementById("quizAns").innerHTML += `<a href="index.html">الرئسية</a>`
            document.getElementById("quizAns").innerHTML += `<a href="javascript:location.reload();">اعادة الامتحان</a>`
            
        }
        
    }, 500);
    
    return a;
}

function reset(a){
    now = 0;
    score = 0;
    draw(a);
    
}
