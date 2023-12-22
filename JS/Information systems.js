let search = document.getElementById("search");
async function Api(){
    const datares = await fetch("./JS/json/Information systems.json");
    const quation = await datares.json();
    return quation;
}
function getall() {
    document.getElementById("quizAns").innerHTML="";
    Api().then(quation => quation.data.forEach(element => {
        document.getElementById("quizAns").innerHTML+=`
        <label style="background-color:#1D77C3" for="quizo0">السؤال<br> ${element.q}</label>
        <label style="background-color:#268BED" for="quizo0">الاجابة<br> ${element.a}</label>
    `;
    }))
}
search.addEventListener("keyup",function(){
    if(search.value.length == 0){
        getall();
    }
    else if(search.value.length > 0){
        document.getElementById("quizAns").innerHTML="";
            Api().then(quation => quation.data.forEach(element => {
                if (element.q.search(search.value) >= 0|| element.a.search(search.value) >= 0) {   
                    document.getElementById("quizAns").innerHTML+=`
                    <label style="background-color:#1D77C3" for="quizo0">السؤال<br> ${element.q}</label>
                    <label style="background-color:#268BED" for="quizo0">الاجابة<br> ${element.a}</label>
                    `;
                }
            }));
    }
    else{
        document.getElementById("quizAns").innerHTML="";
    }
})
getall();