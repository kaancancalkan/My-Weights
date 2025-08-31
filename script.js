// Weight lifting data
const workoutData = [
    {
        move: "Incline Dumbell Press",
        muscleGroup: "Chest",
        date: "02/2024",
        weights: "35 kg dumbells",
        reps: "8-10 reps",
        sets: "4 sets"
    },
    {
        move: "Bench Press PR",
        muscleGroup: "Chest", 
        date: "02/2024",
        weights: "80 Kg without bar",
        reps: "1 rep",
        sets: ""
    },
    {
        move: "Incline Dumbell Fly",
        muscleGroup: "Chest",
        date: "02/2024", 
        weights: "17.5 kg dumbells",
        reps: "12 reps",
        sets: "4 sets"
    },
    {
        move: "Incline Bench Press",
        muscleGroup: "Chest",
        date: "02/2024",
        weights: "50 kg without bar",
        reps: "8-10 reps", 
        sets: "4 sets"
    },
    {
        move: "Butterfly",
        muscleGroup: "Chest",
        date: "02/2024",
        weights: "55 kg",
        reps: "8-10 reps",
        sets: "4 sets"
    },
    {
        move: "Chest Press Machine",
        muscleGroup: "Chest",
        date: "02/2024",
        weights: "75 kg",
        reps: "12 reps",
        sets: "4 sets"
    },
    {
        move: "Lat Pulldown Wide",
        muscleGroup: "Back",
        date: "02/2024",
        weights: "65 kg",
        reps: "8-10 reps",
        sets: "4 sets"
    },
    {
        move: "Lat Pulldown Narrow", 
        muscleGroup: "Back",
        date: "02/2024",
        weights: "60 kg",
        reps: "8-10 reps",
        sets: "4 sets"
    },
    {
        move: "Seated Row",
        muscleGroup: "Back",
        date: "02/2024",
        weights: "60 kg",
        reps: "12 reps",
        sets: "4 sets"
    },
    {
        move: "Back Extension",
        muscleGroup: "Back", 
        date: "02/2024",
        weights: "Body weight",
        reps: "15 to 30 reps",
        sets: "4 sets"
    },
    {
        move: "Low Row",
        muscleGroup: "Back",
        date: "02/2024",
        weights: "60 kg",
        reps: "12 reps", 
        sets: "4 sets"
    },
    {
        move: "Military Press",
        muscleGroup: "Shoulder",
        date: "02/2024",
        weights: "40 kg",
        reps: "12 reps",
        sets: "4 sets"
    },
    {
        move: "Shoulder Dumbell Press",
        muscleGroup: "Shoulder",
        date: "02/2024",
        weights: "27.5 kg dumbells", 
        reps: "12 reps",
        sets: "4 sets"
    },
    {
        move: "Lateral Raise",
        muscleGroup: "Shoulder",
        date: "02/2024",
        weights: "10 kg dumbells",
        reps: "15 reps",
        sets: "4 sets"
    },
    {
        move: "Face Pull",
        muscleGroup: "Shoulder",
        date: "02/2024",
        weights: "55 kg",
        reps: "12-15 reps",
        sets: "4 sets"
    },
    {
        move: "Z Bar Curl",
        muscleGroup: "Biceps Arm",
        date: "02/2024",
        weights: "25 kg",
        reps: "12-15 reps",
        sets: "4 sets"
    },
    {
        move: "Dumbell Curl", 
        muscleGroup: "Biceps Arm",
        date: "02/2024",
        weights: "15 kg dumbells",
        reps: "12-15 reps",
        sets: "4 sets"
    },
    {
        move: "Hammer Curl",
        muscleGroup: "Biceps Arm",
        date: "02/2024",
        weights: "15 kg dumbells",
        reps: "12-15 reps",
        sets: "4 sets"
    },
    {
        move: "Rope Pushdown",
        muscleGroup: "Triceps Arm",
        date: "02/2024",
        weights: "55 kg",
        reps: "12-15 reps",
        sets: "4 sets"
    },
    {
        move: "Skull Crusher",
        muscleGroup: "Triceps Arm",
        date: "02/2024",
        weights: "25 kg",
        reps: "12-15 reps", 
        sets: "4 sets"
    },
    {
        move: "Overhead Dumbell Triceps Extension",
        muscleGroup: "Triceps Arm",
        date: "02/2024",
        weights: "20 kg dumbell",
        reps: "12-15 reps",
        sets: "4 sets"
    }
];

function getMuscleGroupClass(muscleGroup) {
    return `muscle-${muscleGroup.toLowerCase().replace(/\s+/g, '-')}`;
}

function renderWorkoutTable() {
    const tableBody = document.getElementById('tableBody');
    
    workoutData.forEach((workout, index) => {
        const row = document.createElement('tr');
        row.style.animationDelay = `${index * 0.05}s`;
        
        row.innerHTML = `
            <td data-label="Exercise" class="exercise-name">${workout.move}</td>
            <td data-label="Muscle Group">
                <span class="muscle-group ${getMuscleGroupClass(workout.muscleGroup)}">
                    ${workout.muscleGroup}
                </span>
            </td>
            <td data-label="Weight" class="weight">${workout.weights}</td>
            <td data-label="Reps" class="reps-sets">${workout.reps}</td>
            <td data-label="Sets" class="reps-sets">${workout.sets}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Initialize the table when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderWorkoutTable();
    
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});