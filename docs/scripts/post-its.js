// script.js

let highestZIndex = 1000; // Starting z-index
const gridSize = 120; // Size of the grid cells (adjust as needed)
const margin = 20; // Margin from the top and sides
let noteCount = 0;
let activeNote = null; // To track the currently active note being edited
let isDragging = false;
let touchStartTime = 0;
let touchStartX = 0;
let touchStartY = 0;
let touchTimeout;
let doubleTapTimeout;
let lastTap = 0;
let isEditing = false;

// Initialize the board with predefined notes
const initialNotes = [
    'Welcome to Sticky Notes!',
    'Type your note above and hit enter or click "add note."',
    'Notes are editable, moveable, and fun!'
];

// Function to detect if the user is on a mobile device
function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Function to play a sound
function playSound(id) {
    const sound = document.getElementById(id);
    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }
}

// Function to add a sticky note to the canvas
function addStickyNote(text, position = null) {
    const canvas = document.querySelector('.canvas');
    const note = document.createElement('div');
    note.className = 'sticky-note';
    
    // Create a span to contain the text and prevent overflow
    const noteText = document.createElement('span');
    noteText.textContent = text;
    noteText.contentEditable = false; // Make the text non-editable initially
    
    if (isMobile()) {
        note.addEventListener('touchstart', handleTouchStart);
        note.addEventListener('touchmove', handleTouchMove);
        note.addEventListener('touchend', handleTouchEnd);
    } else {
        noteText.addEventListener('click', (e) => {
            playSound('clickSound'); // Play click sound
            if (activeNote) {
                activeNote.contentEditable = false;
            }
            activeNote = noteText;
            noteText.contentEditable = true;
            noteText.focus();
            e.stopPropagation(); // Prevent event from propagating to the document

            // Bring note to top on click
            highestZIndex++;
            note.style.zIndex = highestZIndex;
        });

        note.addEventListener('mousedown', (e) => {
            startDrag(note, e);
        });
    }

    noteText.addEventListener('input', () => {
        adjustFontSize(noteText); // Adjust font size as user types
        saveNotesToLocalStorage(); // Save to local storage on input
    });
    
    note.appendChild(noteText);
    canvas.appendChild(note);
    
    // Calculate the position for the new note
    let { left, top } = position || calculateNotePosition(noteCount);
    
    note.style.left = `${left}px`;
    note.style.top = `${top}px`;
    note.style.zIndex = noteCount + 1; // Initial z-index based on order
    noteCount++;
    
    // Adjust font size to fit text within the sticky note
    adjustFontSize(noteText);

    // Play hover sound on mouseover
    note.addEventListener('mouseover', () => {
        playSound('hoverSound');
    });
}

// Calculate position to make notes appear in a grid pattern
function calculateNotePosition(index) {
    const canvas = document.querySelector('.canvas');
    const canvasWidth = canvas.clientWidth;
    
    const cols = Math.floor((canvasWidth - margin * 2) / gridSize);
    const row = Math.floor(index / cols);
    const col = index % cols;

    const left = margin + col * gridSize;
    const top = margin + 70 + row * gridSize; // 70px offset for navbar height

    return { left, top };
}

function startDrag(note, e) {
    isDragging = true;
    let startX = e.clientX;
    let startY = e.clientY;
    let initialX = note.offsetLeft;
    let initialY = note.offsetTop;

    if (activeNote && activeNote!== note) {
        activeNote.contentEditable = false;
        activeNote = null;
    }

    document.querySelectorAll('.sticky-note').forEach(n => {
        n.classList.remove('dragging');
    });

    note.classList.add('dragging');



    const moveHandler = (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        note.style.left = `${initialX + dx}px`;
        note.style.top = `${initialY + dy}px`;

        // Check if the note is over the trash can
        checkIfOverTrash(note, e.clientX, e.clientY);
    };

    const upHandler = (e) => {
        if (!isDragging) return;
        isDragging = false;
        note.style.cursor = 'grab';
        note.style.opacity = '1'; // Reset opacity when dragging stops
        checkIfOverTrash(note, e.clientX, e.clientY, true); // Final check if note is dropped over the trash can
        saveNotesToLocalStorage(); // Save the current state of notes
        window.removeEventListener('mousemove', moveHandler);
        window.removeEventListener('mouseup', upHandler);
    };

    note.style.cursor = 'grabbing';
    
    // Update z-index to bring the note to the top
    highestZIndex++;
    note.style.zIndex = highestZIndex;

    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('mouseup', upHandler);
}

// Mobile touch event handlers
function handleTouchStart(e) {
    const note = e.currentTarget;
    if (e.touches.length === 1) {
        playSound('clickSound'); // Play click sound
        note.style.zIndex = ++highestZIndex;
        touchStartTime = Date.now();
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        note.startX = touchStartX;
        note.startY = touchStartY;
        note.initialX = note.offsetLeft;
        note.initialY = note.offsetTop;

        const currentTime = Date.now();
        const tapLength = currentTime - lastTap;
        clearTimeout(doubleTapTimeout);

        if (tapLength < 300 && tapLength > 0) {
            // Double-tap detected, make the note editable
            if (activeNote) {
                activeNote.contentEditable = false;
            }
            const noteText = note.querySelector('span');
            activeNote = noteText;
            noteText.contentEditable = true;
            noteText.focus();
            isEditing = true;
            setTimeout(() => { isEditing = false; }, 300); // Allow for fast double-tap to select all text
        } else {
            touchTimeout = setTimeout(() => {
                if (!isEditing) {
                    isDragging = true;
                    note.style.cursor = 'grabbing';
                }
            }, 200);
        }
        lastTap = currentTime;
    }
}

function handleTouchMove(e) {
    if (isDragging && e.touches.length === 1) {
        const note = e.currentTarget;
        const touch = e.touches[0];
        const dx = touch.clientX - note.startX;
        const dy = touch.clientY - note.startY;
        note.style.left = `${note.initialX + dx}px`;
        note.style.top = `${note.initialY + dy}px`;

        // Check if the note is over the trash can
        checkIfOverTrash(note, touch.clientX, touch.clientY);
        e.preventDefault();
    } else if (!isDragging && e.touches.length === 1) {
        clearTimeout(touchTimeout);
    }
}

function handleTouchEnd(e) {
    const note = e.currentTarget;
    const touchEndTime = Date.now();
    const touchDuration = touchEndTime - touchStartTime;

    if (touchDuration >= 200) {
        if (isDragging) {
            isDragging = false;
            note.style.cursor = 'grab';
            note.style.opacity = '1'; // Reset opacity when dragging stops
            checkIfOverTrash(note, e.changedTouches[0].clientX, e.changedTouches[0].clientY, true); // Check final drop position
            saveNotesToLocalStorage(); // Save the current state of notes
        }
    }
    clearTimeout(touchTimeout);
}

function makeNoteDraggable(note) {
    if (!isMobile()) {
        note.addEventListener('mousedown', (e) => {
            startDrag(note, e);
        });
    }
}

// Check if the note is over the trash can
function checkIfOverTrash(note, mouseX, mouseY, isDrop = false) {
    const trashCan = document.getElementById('trashCan');
    const trashRect = trashCan.getBoundingClientRect();
    if (mouseX >= trashRect.left && mouseX <= trashRect.right && mouseY >= trashRect.top && mouseY <= trashRect.bottom) {
        note.style.opacity = '0.3';
        if (isDrop) {
            playSound('trashSound'); // Play trash sound
            note.remove();
            saveNotesToLocalStorage();
        }
    } else {
        note.style.opacity = '1';
    }
}

// Adjust the font size of the text to fit within the sticky note
function adjustFontSize(noteText) {
    let fontSize = 16; // Start with a base font size
    noteText.style.fontSize = `${fontSize}px`;
    while (noteText.scrollHeight > noteText.offsetHeight || noteText.scrollWidth > noteText.offsetWidth) {
        fontSize--;
        noteText.style.fontSize = `${fontSize}px`;
        if (fontSize < 10) {
            noteText.style.overflow = 'hidden';
            noteText.style.whiteSpace = 'pre-wrap';
            break;
        }
    }
}

// Save the current state of notes to local storage
function saveNotesToLocalStorage() {
    const notes = [];
    const canvas = document.querySelector('.canvas');
    const stickyNotes = canvas.querySelectorAll('.sticky-note');
    stickyNotes.forEach(note => {
        notes.push({
            text: note.querySelector('span').textContent,
            left: note.offsetLeft,
            top: note.offsetTop,
            zIndex: note.style.zIndex // Save the z-index
        });
    });
    localStorage.setItem('stickyNotes', JSON.stringify(notes));
}

// Load notes from local storage
function loadNotesFromLocalStorage() {
    const storedNotes = JSON.parse(localStorage.getItem('stickyNotes')) || [];
    storedNotes.forEach(note => {
        addStickyNote(note.text, { left: note.left, top: note.top });
    });
}

// Add note button functionality
const addNoteButton = document.getElementById('addNoteButton');
const noteInput = document.getElementById('noteInput');

function handleAddNote() {
    playSound('clickSound'); // Play click sound on button
    const noteText = noteInput.value.trim();
    if (noteText !== "") {
        addStickyNote(noteText);
        noteInput.value = "";
        saveNotesToLocalStorage();
    }
}

addNoteButton.addEventListener('click', handleAddNote);

noteInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        handleAddNote();
    }
});

// Clear all notes
const clearAllButton = document.getElementById('clearAllButton');

clearAllButton.addEventListener('click', () => {
    playSound('clickSound'); // Play click sound on button
    const canvas = document.querySelector('.canvas');
    canvas.innerHTML = '';
    localStorage.removeItem('stickyNotes');
    noteCount = 0;
});

// Load initial notes and notes from local storage
document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('stickyNotes')) {
        initialNotes.forEach(text => addStickyNote(text));
    }
    loadNotesFromLocalStorage();
});

// Stop editing when clicking outside a note
document.addEventListener('click', (e) => {
    if (activeNote) {
        activeNote.contentEditable = false;
        activeNote = null;
    }
});

// Add sound to button hover
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', () => {
        playSound('buttonHoverSound');
    });
});
