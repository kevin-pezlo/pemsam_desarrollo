// Verificar si la melodía coincide
for (let i = 0; i < userMelody.length; i++) {
    if (userMelody[i] !== currentMelody[i]) {
        // Error en la melodía
        userMelody = [];
        alert('¡Melodía incorrecta! Intenta de nuevo.');
        return;
    }
}

// Si la melodía está completa
if (userMelody.length === currentMelody.length) {
    correctNotes++;
    correctElement.textContent = correctNotes;
    userMelody = [];
    generateMelody();

    if (correctNotes >= 3) {
        alert('¡Felicidades! Has completado 3 melodías correctamente.');
    }
}
}

// Generar primera melodía
generateMelody();
}

/* Juego 7: Identificación de Animales */
function initAnimalsGame() {
const animalsGame = document.getElementById('animals-game');
const animalImage = document.getElementById('animal-image');
const animalInput = document.getElementById('animal-input');
const animalSubmit = document.getElementById('animal-submit');
const animalOptions = document.getElementById('animal-options');
const scoreElement = document.getElementById('animals-score');
const correctElement = document.getElementById('animals-correct');

const animals = [
{ name: 'perro', image: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_640.jpg' },
{ name: 'gato', image: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg' },
{ name: 'elefante', image: 'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_640.jpg' },
{ name: 'leon', image: 'https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519_640.jpg' },
{ name: 'tigre', image: 'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_640.jpg' },
{ name: 'jirafa', image: 'https://cdn.pixabay.com/photo/2017/04/11/21/34/giraffe-2222908_640.jpg' },
{ name: 'cebra', image: 'https://cdn.pixabay.com/photo/2017/01/14/12/59/zebra-1979305_640.jpg' },
{ name: 'mono', image: 'https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_640.jpg' },
{ name: 'oso', image: 'https://cdn.pixabay.com/photo/2017/07/18/18/24/bear-2516599_640.jpg' },
{ name: 'pinguino', image: 'https://cdn.pixabay.com/photo/2016/11/22/21/36/animal-1850455_640.jpg' }
];

let score = 0;
let correctAnswers = 0;
let currentAnimal = null;
let incorrectOptions = [];

// Mostrar un nuevo animal
function showNewAnimal() {
// Limpiar opciones anteriores
animalOptions.innerHTML = '';
animalInput.value = '';

// Seleccionar animal aleatorio
currentAnimal = animals[Math.floor(Math.random() * animals.length)];
animalImage.src = currentAnimal.image;
animalImage.alt = currentAnimal.name;

// Generar opciones incorrectas
incorrectOptions = [];
while (incorrectOptions.length < 3) {
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    if (randomAnimal.name !== currentAnimal.name && !incorrectOptions.includes(randomAnimal.name)) {
        incorrectOptions.push(randomAnimal.name);
    }
}

// Mezclar opciones
const allOptions = [currentAnimal.name, ...incorrectOptions].sort(() => Math.random() - 0.5);

// Crear botones de opciones
allOptions.forEach(option => {
    const button = document.createElement('button');
    button.className = 'animal-option';
    button.textContent = option;
    button.addEventListener('click', function() {
        checkAnswer(option);
    });
    animalOptions.appendChild(button);
});
}

// Verificar respuesta
function checkAnswer(answer) {
if (answer.toLowerCase() === currentAnimal.name) {
    // Respuesta correcta
    score += 10;
    correctAnswers++;
    scoreElement.textContent = score;
    correctElement.textContent = correctAnswers;

    if (correctAnswers >= 10) {
        alert(`¡Felicidades! Has identificado 10 animales correctamente. Puntuación final: ${score}`);
        gameModals.animals.style.display = 'none';
        resetAllGames();
    } else {
        showNewAnimal();
    }
} else {
    // Respuesta incorrecta
    alert(`Incorrecto. El animal es un ${currentAnimal.name}. Intenta con el próximo.`);
    showNewAnimal();
}
}

// Enviar respuesta con input
animalSubmit.addEventListener('click', function() {
if (animalInput.value.trim() !== '') {
    checkAnswer(animalInput.value.trim());
}
});

animalInput.addEventListener('keypress', function(e) {
if (e.key === 'Enter' && animalInput.value.trim() !== '') {
    checkAnswer(animalInput.value.trim());
}
});

// Mostrar primer animal
showNewAnimal();
}

// Efecto de ripple para botones
document.addEventListener('click', function(e) {
if (e.target.classList.contains('play-game-btn') || 
e.target.classList.contains('newsletter-button') ||
e.target.classList.contains('animal-option')) {
const btn = e.target;
const x = e.pageX - btn.getBoundingClientRect().left;
const y = e.pageY - btn.getBoundingClientRect().top;

const ripple = document.createElement('span');
ripple.style.left = `${x}px`;
ripple.style.top = `${y}px`;
ripple.classList.add('ripple-effect');

btn.appendChild(ripple);

setTimeout(() => {
    ripple.remove();
}, 1000);
}
});

// Animación de suscripción al newsletter
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', function(e) {
e.preventDefault();
const input = this.querySelector('.newsletter-input');
const button = this.querySelector('.newsletter-button');

input.style.display = 'none';
button.textContent = '¡Gracias por suscribirte!';
button.style.backgroundColor = '#2f2152';

setTimeout(() => {
input.style.display = 'block';
input.value = '';
button.textContent = 'Suscribirse';
button.style.backgroundColor = '#f7e259';
}, 3000);
});
});
