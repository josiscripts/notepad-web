// Elementos
const noteArea = document.getElementById('noteArea');
const darkModeBtn = document.getElementById('darkModeBtn');

// Cargar nota desde localStorage
window.addEventListener('load', () => {
    const savedNote = localStorage.getItem('note');
    if (savedNote) {
        noteArea.value = savedNote;
    }

    // cargar modo oscuro si estaba activado
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        document.body.classList.add('dark-mode');
    }
});

// Guardar nota automáticamente
noteArea.addEventListener('input', () => {
    localStorage.setItem('note', noteArea.value);
});

// Modo oscuro
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
});
