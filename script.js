let faqQuestion = document.querySelectorAll(".faqQuestion");

faqQuestion.forEach((v, index)=>{
    v.addEventListener("click", ()=>{
        v.nextElementSibling.classList.toggle("scale-y-100");
        v.nextElementSibling.classList.toggle("h-auto");
        v.nextElementSibling.classList.toggle("p-[20px]");
        v.children[1].classList.toggle("rotate-45");

        faqQuestion.forEach((e, i)=>{
            if(index !== i) {
                e.nextElementSibling.classList.remove("scale-y-100", "h-auto", "p-[20px]");
                e.children[1].classList.remove("rotate-45");
            }
        })
    })
})