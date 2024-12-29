let scores = [35, 92, 45, 76, 58, 89, 30, 99, 60, 85];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] < 40) {
        scores[i] += 20;
    }
    if (scores[i] > 90) {
        scores[i] = 90;
    }
}

let passedCount = scores.filter(score => score >= 50).length;

console.log(passedCount);
console.log(scores);
