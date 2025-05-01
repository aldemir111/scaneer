// app.js - Código JavaScript mejorado

// Variables globales
let videoStream;
let answerKeyStream;
let examData = [];
let studentsList = [];
let answerKey = [];
let examConfig = {
    name: '',
    date: '',
    totalQuestions: 20,
    pointsPerQuestion: 1
};
let setupCompleted = false;
let answerKeyDefined = false;
let cvReady = false;

// Patrones de validación
const studentIdPattern = /^[0-9]{6,10}$/;
const namePattern = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

// Función que se ejecuta cuando OpenCV.js está listo
function onOpenCvReady() {
    cvReady = true;
    console.log('OpenCV.js está listo');
    updateStatus('OpenCV cargado correctamente', 'success', 'status');
}

// Función para inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    // Inicialización de la fecha
    const today = new Date();
    document.getElementById('examDate').value = today.toISOString().substr(0, 10);
    
    // Generar la matriz de respuestas inicial
    generateAnswerKeyGrid();
    
    // Configurar event listeners
    setupEventListeners();
});

// Función para configurar todos los event listeners
function setupEventListeners() {
    // Configuración del examen
    document.getElementById('saveSetup').addEventListener('click', saveExamConfig);
    
    // Cámara para la clave de respuestas
    document.getElementById('startKeyCamera').addEventListener('click', startAnswerKeyCamera);
    document.getElementById('captureKeyBtn').addEventListener('click', captureAnswerKey);
    
    // Cámara para escanear exámenes
    document.getElementById('startBtn').addEventListener('click', startExamCamera);
    document.getElementById('captureBtn').addEventListener('click', captureExam);
    
    // Gestión de resultados
    document.getElementById('addBtn').addEventListener('click', addExamToResults);
    document.getElementById('cancelBtn').addEventListener('click', cancelExamProcessing);
    document.getElementById('exportBtn').addEventListener('click', exportResults);
    document.getElementById('clearBtn').addEventListener('click', clearResults);
    
    // Lista de estudiantes
    document.getElementById('uploadStudentList').addEventListener('click', uploadStudentList);
    
    // Guardar clave de respuestas
    document.getElementById('saveAnswerKey').addEventListener('click', saveAnswerKeyConfig);
}

// [Aquí irían todas las demás funciones que te proporcioné anteriormente...]
// processCapturedExam(), detectMatrixCells(), processStudentAnswers(), etc.
