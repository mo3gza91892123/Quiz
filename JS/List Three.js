let search = document.getElementById("search");
async function Api(){
    const datares = await fetch("./JS/json/A.json");
    const quation = await datares.json();
    return quation;
}
function getall() {
    let conter =0;
    document.getElementById("quizAns").innerHTML="";
    Api().then(quation => quation.data.forEach(element => {
        conter +=1;
        document.getElementById("quizAns").innerHTML+=`
        <ul class="list-group" id='id-${conter}'onclick="this.style.opacity != '0.5' ? this.style.opacity = '0.5': this.style.opacity = '1';localStorage.setItem('clicker','${conter}')">
            <li class="list-group-item active" id="id-${conter}">السؤال : ${element.q}</li>
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
search.addEventListener("keyup",function(){
    if(search.value.length == 0){
        document.querySelector(".logo").innerHTML="الاسالة";
        getall();
    }
    else if(search.value.length > 2){
        document.getElementById("quizAns").innerHTML="";
        let c = 0;
        Api().then(quation => quation.data.forEach(element => {
            if (element.q.search(search.value) >= 0|| element.o[element.a].search(search.value) >= 0) {   
                c ++;
                document.getElementById("quizAns").innerHTML+=`
                <ul class="list-group" onclick="this.style.opacity != '0.5' ? this.style.opacity = '0.5' : this.style.opacity = '1'">
                    <li class="list-group-item active">السؤال : ${element.q}</li>
                    <div class="row">
                        <div class="col-md">
                    <li class="list-group-item"> ${element.o.length > 2 ? element.o[0] + " - " + element.o[1] +" - "+ element.o[2] +" - "+ element.o[3] : element.o === 1 ? element.o[0]: element.o[0] + " - " + element.o[1]} </li>
                        </div>
                    </div>
                    <li class="list-group-item active">الاجابة : (${element.o[element.a] !=undefined ?element.o[element.a]: element.a})</li>
                </ul>
                `;
            }
            document.querySelector(".logo").innerHTML="يوجد " + c + " سؤال";
            }));
    }
    else{
        document.getElementById("quizAns").innerHTML="";
    }
})
document.querySelector(".counter")
// document.getElementById("q-1").onclick = document.getElementById("q-1").style.display = "none";
getall();
document.getElementById("get").href = "#id-" + localStorage.getItem('clicker');
