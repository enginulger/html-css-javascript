const toggles = document.querySelectorAll(".faq-toggle");

console.log(toggles)

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active");
    });
});


/*
querySelectorAll() :belge yöntemi, belirtilen seçici grubuyla eşleşen belge öğelerinin listesini temsil eden statik (canlı olmayan) bir NodeList döndürür.
NodeList(2) [button.faq-toggle, button.faq-toggle]
*/