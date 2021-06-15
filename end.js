const scoreDiv = document.getElementById('finalScore');

const finalScore = localStorage.getItem('finalScore');

scoreDiv.innerHTML = `Your Score: ${finalScore}`;