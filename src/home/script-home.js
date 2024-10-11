function filterQuestions() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const tagFilter = document.getElementById('tagFilter').value;
    const difficultyFilter = document.getElementById('difficultyFilter').value;
    const questions = document.querySelectorAll('#questionList li');

    questions.forEach((question) => {
        const title = question.querySelector('.question-title').textContent.toLowerCase();
        const tags = question.getAttribute('data-tags');
        const difficulty = question.getAttribute('data-difficulty'); 

        const matchesSearch = title.includes(searchInput);
        const matchesTag = tagFilter === "" || tags.includes(tagFilter);
        const matchesDifficulty = difficultyFilter === "" || (difficulty && difficulty === difficultyFilter);

        if (matchesSearch && matchesTag && matchesDifficulty) {
            question.style.display = "";
        } else {
            question.style.display = "none";
        }
    });
}
