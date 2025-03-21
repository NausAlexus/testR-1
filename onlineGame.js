document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".rummyVortex-online-button");
    const additionalParagraphs = document.querySelector(".additionalVortex-paragraphs");

    // Изначально скрываем дополнительные параграфы
    additionalParagraphs.classList.add("hiddenVortex");

    button.addEventListener("click", function () {
        additionalParagraphs.classList.toggle("hiddenVortex");
        button.textContent = additionalParagraphs.classList.contains("hiddenVortex") ? "Read more" : "Hide";
    });
});