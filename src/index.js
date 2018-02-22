module.exports = function solveEquation(equation) {
    var mas = equation.split(' ');
    a = mas[0];
    if (mas[3] == '-') b = -mas[4];
    else
        b = mas[4];
    if (mas[7] == '-') c = -mas[8];
    else
        c = mas[8];
    var d = Math.pow(b, 2) - 4 * a * c
    var x1 = Math.round((-1 * b + Math.sqrt(d)) / (2 * a));
    var x2 = Math.round((-1 * b - Math.sqrt(d)) / (2 * a));
    var solutions = [x1, x2].sort(function compareNumeric(a, b) {
        return a - b;
    });
    return solutions;
}