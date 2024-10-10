function filterQuestions() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const tagFilter = document.getElementById('tagFilter').value;
    const questions = document.querySelectorAll('#questionList li');

    questions.forEach((question) => {
        const title = question.querySelector('.question-title').textContent.toLowerCase();
        const tags = question.getAttribute('data-tags');

        const matchesSearch = title.includes(searchInput);
        const matchesTag = tagFilter === "" || tags.includes(tagFilter);

        if (matchesSearch && matchesTag) {
            question.style.display = "";
        } else {
            question.style.display = "none";
        }
    });
}