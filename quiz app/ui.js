function UI() {
    this.btn_start = document.querySelector(".btn_start"),
    this.btn_next = document.querySelector(".next_btn"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.score_box = document.querySelector(".score_box"),
    this.option_list = document.querySelector(".option_list"),
    this.correctIcon = ' <div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'
}

function soruGoster(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let option = '';

    for(let cevap in soru.cevapSecenekleri) {
        option += 
        `
        <div class="option">
        <span><b>${cevap}</b>:${soru.cevapSecenekleri[cevap]}</span>
        </div>
        `;
    }
    document.querySelector(".question_text").innerHTML = question;
    document.querySelector(".option_list").innerHTML = option;

    const options = ui.option_list.querySelectorAll(".option");
    
    for(let opt of options) {
        opt.setAttribute("onclick","optionsSelected(this)")
    }
}

UI.prototype.skoruGoster = function(toplamSoru, dogruCevap) {
    let tag = `Toplam ${toplamSoru} sorudan ${dogruCevap} doğru cevap verdiniz. `;
    document.querySelector(".score_box .score_text").innerHTML = tag;

}