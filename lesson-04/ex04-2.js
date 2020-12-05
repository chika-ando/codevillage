// function scoring (score) {
//     if (score >= 90) {
//         console.log('秀');
//     } else if (score >= 60) {
//         console.log('良');
//     } else {
//         console.log('不可');
//     }
// }

function scoring(score) {
    if (score >= 90) {
        return '秀';
    } else if (score >= 60) {
        return '良';
    } else {
        return '不可';
    }
}

console.log(scoring(100));
console.log(scoring(60));
console.log(scoring(13));