// Selectors
const allFaqs = document.querySelectorAll(".faq-question");


// Event Listeners
allFaqs.forEach(faq => {
    faq.addEventListener("click", e => {
        const parent = e.target.parentElement;
        resetAllFaqs(parent);
        parent.classList.toggle("closed");
        parent.classList.toggle("opened");
    })
})

// Functions
function resetAllFaqs(current) {
    document.querySelectorAll(".faq-box").forEach(itm => {
        if (current !== itm) {
            itm.classList.add("closed");
            itm.classList.remove("opened");
        }
    })
}