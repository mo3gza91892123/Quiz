const Trues = document.getElementById("Trues");
const Falses = document.getElementById("Falses");
const Choos = document.getElementById("Choos");
const abc = document.getElementById("abc");

let conter =0;
let search = document.getElementById("search");
let searchclick = document.getElementById("searchclick");
async function Api(){
    const datares = await fetch("./JS/json/D.json");
    const quation = await datares.json();
    return quation;
}
const array = Api();
function getall() {
    document.getElementById("quizAns").innerHTML="";
    array.then(quation => quation.data.forEach(element => {
        conter +=1;
        document.getElementById("quizAns").innerHTML+=`
        <ul class="list-group" id='id-${conter}'onclick="this.style.opacity != '0.5' ? this.style.opacity = '0.5': this.style.opacity = '1';localStorage.setItem('clicker','${conter}')">
            <li class="list-group-item active">السؤال : ${element.q}</li>
            <div class="row">
                <div class="col-md">
                    <li class="list-group-item"> ${element.o.length > 2 ? element.o[0] + " - " + element.o[1] +" - "+ element.o[2] +" - "+ element.o[3] : element.o.length === 1 ? '': element.o[0] + " - " + element.o[1]} </li>
                </div>
            </div>
            <li class="list-group-item active">الاجابة : (${element.o[element.a] !=undefined ?element.o[element.a]: element.a})</li>
        </ul>
    `;
    }))
}
abc.addEventListener("click",function(){
    document.getElementById("quizAns").innerHTML="";
        let c = 0;
        const dat = array.then(a=>a.data.sort((a,b)=>{if (a.q < b.q){return -1}}));
        dat.then(quation => quation.forEach(element => {
            c ++;
            document.getElementById("quizAns").innerHTML+=`
            <ul class="list-group" onclick="this.style.opacity != '0.5' ? this.style.opacity = '0.5' : this.style.opacity = '1'">
                <li class="list-group-item active">السؤال : ${element.q}</li>
                <div class="row">
                    <div class="col-md">
                        <li class="list-group-item"> ${element.o.length > 2 ? element.o[0] + " - " + element.o[1] +" - "+ element.o[2] +" - "+ element.o[3] : element.o.length === 1 ? '': element.o[0] + " - " + element.o[1]} </li>
                    </div>
                </div>
                <li class="list-group-item active">الاجابة : (${element.o[element.a] !=undefined ?element.o[element.a]: element.a})</li>
            </ul>
        `;
            document.querySelector(".logo").innerHTML="يوجد " + c + " سؤال";
            }));
});
Choos.addEventListener("click",function(){
    document.getElementById("quizAns").innerHTML="";
        let c = 0;
        array.then(quation => quation.data.forEach(element => {
            if (element.o.length > 1) {
                if (element.o.length == 4) {   
                    c ++;
                    document.getElementById("quizAns").innerHTML+=`
                    <ul class="list-group" onclick="this.style.opacity != '0.5' ? this.style.opacity = '0.5' : this.style.opacity = '1'">
                        <li class="list-group-item active">السؤال : ${element.q}</li>
                        <div class="row">
                            <div class="col-md">
                                <li class="list-group-item"> ${element.o.length > 2 ? element.o[0] + " - " + element.o[1] +" - "+ element.o[2] +" - "+ element.o[3] : element.o.length === 1 ? '': element.o[0] + " - " + element.o[1]} </li>
                            </div>
                        </div>
                        <li class="list-group-item active">الاجابة : (${element.o[element.a] !=undefined ?element.o[element.a]: element.a})</li>
                    </ul>
                `;
                }
            }
            document.querySelector(".logo").innerHTML="يوجد " + c + " سؤال";
            }));
});
Trues.addEventListener("click",function(){
    document.getElementById("quizAns").innerHTML="";
        let c = 0;
        array.then(quation => quation.data.forEach(element => {
            if (element.o.length > 1) {
                if (element.o.length == 2 && element.a == 1) {   
                    c ++;
                    document.getElementById("quizAns").innerHTML+=`
                    <ul class="list-group" onclick="this.style.opacity != '0.5' ? this.style.opacity = '0.5' : this.style.opacity = '1'">
                        <li class="list-group-item active">السؤال : ${element.q}</li>
                        <div class="row">
                            <div class="col-md">
                                <li class="list-group-item"> ${element.o.length > 2 ? element.o[0] + " - " + element.o[1] +" - "+ element.o[2] +" - "+ element.o[3] : element.o.length === 1 ? '': element.o[0] + " - " + element.o[1]} </li>
                            </div>
                        </div>
                        <li class="list-group-item active">الاجابة : (${element.o[element.a] !=undefined ?element.o[element.a]: element.a})</li>
                    </ul>
                `;
                }
            }
            document.querySelector(".logo").innerHTML="يوجد " + c + " سؤال";
            }));
});

Falses.addEventListener("click",function(){
    document.getElementById("quizAns").innerHTML="";
        let c = 0;
        array.then(quation => quation.data.forEach(element => {
            if (element.o.length > 1) {
                if (element.o.length == 2 && element.a == 0) {
                    c ++;
                    document.getElementById("quizAns").innerHTML+=`
                    <ul class="list-group" onclick="this.style.opacity != '0.5' ? this.style.opacity = '0.5' : this.style.opacity = '1'">
                        <li class="list-group-item active">السؤال : ${element.q}</li>
                        <div class="row">
                            <div class="col-md">
                                <li class="list-group-item"> ${element.o.length > 2 ? element.o[0] + " - " + element.o[1] +" - "+ element.o[2] +" - "+ element.o[3] : element.o.length === 1 ? '': element.o[0] + " - " + element.o[1]} </li>
                            </div>
                        </div>
                        <li class="list-group-item active">الاجابة : (${element.o[element.a] !=undefined ?element.o[element.a]: element.a})</li>
                    </ul>
                `;
                }
            }
            document.querySelector(".logo").innerHTML="يوجد " + c + " سؤال";
            }));
});
searchclick.addEventListener("click",function(){
    if(search.value.length == 0){
        document.querySelector(".logo").innerHTML="الاسالة";
        getall();
    }
    else if(search.value.length > 0){
        document.getElementById("quizAns").innerHTML="";
        let c = 0;
        array.then(quation => quation.data.forEach(element => {
            if (element.o.length > 1) {
                if (element.q.search(search.value) >= 0 || element.o[element.a].search(search.value) >= 0) {   
                    c ++;
                    document.getElementById("quizAns").innerHTML+=`
                    <ul class="list-group" onclick="this.style.opacity != '0.5' ? this.style.opacity = '0.5' : this.style.opacity = '1'">
                        <li class="list-group-item active">السؤال : ${element.q}</li>
                        <div class="row">
                            <div class="col-md">
                                <li class="list-group-item"> ${element.o.length > 2 ? element.o[0] + " - " + element.o[1] +" - "+ element.o[2] +" - "+ element.o[3] : element.o.length === 1 ? '': element.o[0] + " - " + element.o[1]} </li>
                            </div>
                        </div>
                        <li class="list-group-item active">الاجابة : (${element.o[element.a] !=undefined ?element.o[element.a]: element.a})</li>
                    </ul>
                `;
                }
            }
            document.querySelector(".logo").innerHTML="يوجد " + c + " سؤال";
            }));
    }
})
// document.getElementById("q-1").onclick = document.getElementById("q-1").style.display = "none";
getall();
