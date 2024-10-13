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

window.onscroll = function() {
    const button = document.getElementById('back-top-button');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
};

document.getElementById('back-top-button').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
