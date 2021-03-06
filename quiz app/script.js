//OOP= NESNE TABANLI PROGRAMLAMA
const quiz = new Quiz(sorular);
const ui = new UI();


ui.btn_start.addEventListener("click", function() {    
        ui.quiz_box.classList.add("active");
        soruGoster(quiz.soruGetir());
        soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.btn_next.classList.remove("show")
})
ui.btn_next.addEventListener("click", function(){
    if(quiz.sorular.length != quiz.soruIndex +1) {
        quiz.soruIndex += 1;
        soruGoster(quiz.soruGetir())
        soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.btn_next.classList.remove("show")
    }else {
        console.log("Quiz sona erdi.");
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
    }
});

ui.btn_quit.addEventListener("click", function() {
    window.location.reload();
})
ui.btn_replay.addEventListener("click", function() {
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
})

function optionsSelected(option) {
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();
    
    if(soru.cevabıKontrolEt(cevap)) {
        quiz.dogruCevapSayisi += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    for(let i=0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    }

   ui.btn_next.classList.add("show")
}

function soruSayisiniGoster(soruSirasi, ToplamSoru) {
    let tag = `<span class="badge bg-warning"> ${soruSirasi} / ${ToplamSoru} </span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}





