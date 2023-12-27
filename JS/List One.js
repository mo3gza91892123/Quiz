let search = document.getElementById("search");
async function Api(){
    const datares = await fetch("./JS/json/B.json");
    const quation = await datares.json();
    return quation;
}
function getall() {
    let conter =0;
    document.getElementById("quizAns").innerHTML="";
    Api().then(quation => quation.data.forEach(element => {
        conter +=1;
        document.getElementById("quizAns").innerHTML+=`
        <label style="background-color:#1D77C3" id="q-${conter}" for="quizo0">السؤال<br> ${element.q}</label>
        <label style="background-color:#268BED" id="o-${conter}" for="quizo0">الاختيارات<br> ${element.o}</label>
        <label style="background-color:#268BED" id="a-${conter}" for="quizo0">الاجابة<br> ${element.o[element.a]}</label>
    `;
    }))
}
search.addEventListener("keyup",function(){
    if(search.value.length == 0){
        document.querySelector(".logo").innerHTML="الاسالة";
        getall();
    }
    else if(search.value.length > 0){
        document.getElementById("quizAns").innerHTML="";
        let c = 0;
        Api().then(quation => quation.data.forEach(element => {
            if (element.q.search(search.value) >= 0|| element.o[element.a].search(search.value) >= 0) {   
                c ++;
                document.getElementById("quizAns").innerHTML+=`
                <label style="background-color:#1D77C3" for="quizo0">السؤال<br> ${element.q}</label>
                <label style="background-color:#268BED" for="quizo0">الاختيارات<br> ${element.o}</label>
                <label style="background-color:#268BED" for="quizo0">الاجابة<br> ${element.o[element.a]}</label>
                `;
            }
            document.querySelector(".logo").innerHTML="يوجد " + c + " سؤال";
            }));
    }
    else{
        document.getElementById("quizAns").innerHTML="";
    }
})
// document.getElementById("q-1").onclick = document.getElementById("q-1").style.display = "none";
getall();