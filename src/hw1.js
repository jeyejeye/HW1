//1.1
//Если а – четное посчитать а*б, иначе а+б
function getMultEvenOrSumOdd(a, b) {
    if (a % 2 === 0) return a * b;
    else return a + b;
}

//1.
//Определить какой четверти принадлежит точка с координатами (х,у)
//      ^
//   2  |  1
//  -------->
//   3  |  4
//      |
function getCartesianQuartNum(x, y) {
    switch (true) {
        case x > 0 && y > 0: return 1;
        case x > 0 && y < 0: return 4;
        case x < 0 && y < 0: return 3;
        case x < 0 && y > 0: return 2;
        //	case x === 0 && y !== 0 : return "Ось Oy";
        //	case x !== 0 && y === 0 : return "Ось Ox";
        default: throw "Point on axis";
    }
}

//1.3
//Найти суммы только положительных из трех чисел
function getPositiveSum(n1, n2, n3) {
    return (n1 > 0 ? n1 : 0) + (n2 > 0 ? n2 : 0) + (n3 > 0 ? n3 : 0);
}

//1.4
//Посчитать выражение макс(а*б*с, а+б+с)+3
function calcConditionalMax(a, b, c) {
    let part1 = a * b * c;
    let part2 = a + b + c;
    return (part1 > part2 ? part1 : part2) + 3;
}

//1.5
//Написать программу определения оценки студента по его рейтингу
function getMarkByRate(aRate) {
    if (!(aRate >= 0 && aRate <= 100)) throw 'rate out of range';

    switch (true) {
        case aRate < 20: return 'F';
        case aRate < 40: return 'E';
        case aRate < 60: return 'D';
        case aRate < 75: return 'C';
        case aRate < 90: return 'B';
        default: return 'A';
    }
}

//2.1
//Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function getSumAndCountEvenElements() {
    let countEvens = 0;
    let sumEvens = 0;

    for (let i = 1; i <= 99; i++) {
        if (i % 2 === 0) {
            countEvens++;
            sumEvens += i;
        }
    }

    return { sum: sumEvens, cnt: countEvens }
}

//2.2
//Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
function isPrimeNumber(aNum) {
    if (aNum < 0) aNum = -aNum;

    let isPrime = true;

    for (let i = 2; i < aNum; i++) {
        isPrime = isPrime && (aNum % i !== 0);
        if (!isPrime) break;
    }

    return isPrime;
}

//2.3
//Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

//Вариант последовательного перебора
function getIntSqrRoot_BruteForce(aNum) {
    if (aNum < 0) return NaN;

    let i = 1;
    while (i * i <= aNum) {
        i++;
    }

    if ((aNum - (i - 1) * (i - 1)) < (i * i - aNum)) {
        return i - 1;
    } else {
        return i;
    }
}

//Метод бинарного поиска
function getIntSqrRoot_BinarySearch(aNum) {
    if (aNum < 0) return NaN;

    let lBeg = 0;
    let lEnd = aNum;
    let lMid;

    if (lBeg < aNum) {
        while ((lBeg + 1) !== lEnd) {
            lMid = Math.round(lBeg + (lEnd - lBeg) / 2);
            if (lMid * lMid <= aNum) {
                lBeg = lMid;
            } else {
                lEnd = lMid;
            }
        }
    }

    if ((aNum - lBeg * lBeg) < (lEnd * lEnd - aNum)) {
        return lBeg;
    } else {
        return lEnd;
    }
}

//2.4
//Вычислить факториал числа n. n! = 1*2*…*n-1*n;!
function getMyFactorial(aNum) {
    if (aNum < 0) return NaN;

    let lFactorial = 1;

    for (let i = 2; i <= aNum; i++) {
        lFactorial *= i;
    }

    return lFactorial;
}

//2.5
//Посчитать сумму цифр заданного числа
function getSumDigits(aNum) {
    let lSum = 0;

    while (aNum !== 0) {
        lSum += aNum % 10;
        aNum = Math.trunc(aNum / 10);
    }

    return lSum;
}

//2.6
//Вывести число, которое является зеркальным отображением последовательности цифр заданного числа,
//например, задано число 123, вывести 321
function getMirrorNumber(aNum) {
    let mirror = 0;

    while (aNum !== 0) {
        mirror = mirror * 10 + aNum % 10;
        aNum = Math.trunc(aNum / 10);
    }

    return mirror;
}

//3
function getRandomArray(aLength) {
    let lArr = [];

    for (let i = 0; i < aLength; i++) {
        lArr[i] = Math.round(Math.random() * 100);
    }

    return lArr;
}

//3.1
//Найти минимальный элемент массива
function getMinArrElement(aArr, aIndBeg, aIndEnd) {
    if (aIndBeg === undefined) aIndBeg = 0;
    if (aIndEnd === undefined) aIndEnd = aArr.length - 1;

    let lMin = aArr[aIndBeg];
    for (let i = aIndBeg + 1; i <= aIndEnd; i++) {
        if (lMin > aArr[i]) {
            lMin = aArr[i];
        }
    }

    return lMin;
}

//3.2
//Найти максимальный элемент массива
function getMaxArrElement(aArr, aIndBeg, aIndEnd) {
    if (aIndBeg === undefined) aIndBeg = 0;
    if (aIndEnd === undefined) aIndEnd = aArr.length - 1;

    let lMax = aArr[aIndBeg];
    for (let i = aIndBeg + 1; i <= aIndEnd; i++) {
        if (lMax < aArr[i]) {
            lMax = aArr[i];
        }
    }

    return lMax;
}

//3.3
//Найти индекс минимального элемента массива
function getMinArrIndex(aArr, aIndBeg, aIndEnd) {
    if (aArr.length === 0) return null;

    if (typeof aIndBeg === 'undefined') aIndBeg = 0;
    if (typeof aIndEnd === 'undefined') aIndEnd = aArr.length - 1;

    let lMin = aArr[aIndBeg];
    let lInd = aIndBeg;

    for (let i = aIndBeg + 1; i <= aIndEnd; i++) {
        if (lMin > aArr[i]) {
            lMin = aArr[i];
            lInd = i;
        }
    }

    return lInd;
}

//3.4
//Найти индекс максимального элемента массива
function getMaxArrIndex(aArr, aIndBeg, aIndEnd) {
    if (aArr.length === 0) return null;

    if (aIndBeg === undefined) aIndBeg = 0;
    if (aIndEnd === undefined) aIndEnd = aArr.length - 1;

    let lMax = aArr[aIndBeg];
    let lInd = aIndBeg;

    for (let i = aIndBeg + 1; i <= aIndEnd; i++) {
        if (lMax < aArr[i]) {
            lMax = aArr[i];
            lInd = i;
        }
    }

    return lInd;
}

//3.5
//Посчитать сумму элементов массива с нечетными индексами
function getSumOddArrElements(aArr) {
    if (aArr.length === 0) {
        return null;
    }

    let lSum = 0;

    for (let i = 0; i < aArr.length; i++) {
        if (i % 2 === 1) {
            lSum += aArr[i];
        }
    }

    return lSum;
}

//3.6
//Сделать реверс массива (массив в обратном направлении
function getMirrorArray(aArr) {
    let lMirrorArr = [];

    for (let i = aArr.length - 1; i >= 0; i--) {
        lMirrorArr[aArr.length - 1 - i] = aArr[i];
    }

    return lMirrorArr;
}

//3.7
//Посчитать количество нечетных элементов массива
function getCountOddArrElements(aArr) {
    if (aArr.length === 0) {
        return null;
    }

    let lCount = 0;

    for (let i = 0; i < aArr.length; i++) {
        if (aArr[i] % 2 !== 0) {
            lCount++;
        }
    }

    return lCount;
}

//3.8
//Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2
function getReplacedHalfArray(aArr) {
    let lMidl = Math.floor(aArr.length / 2);
    let lAdd = aArr.length % 2 === 0 ? 0 : 1;
    let i, j;
    let lVal;

    //i - индекс от 0 дополовины массива, j - от половины до коца массива
    for (i = 0, j = lMidl + lAdd; i <= lMidl, j <= aArr.length - 1; i++ , j++) {
        lVal = aArr[j];
        aArr[j] = aArr[i];
        aArr[i] = lVal;
    }

    return aArr;
}

//3.9
//Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))
function sortBubble(aArr) {
    let i, j;
    let lSorted = false;
    let lVal;

    for (i = 0; i < aArr.length; i++) {
        if (lSorted) {
            break;
        } else {
            lSorted = true;
        }

        for (j = 0; j < aArr.length - i - 1; j++) {
            if (aArr[j] > aArr[j + 1]) {
                lVal = aArr[j];
                aArr[j] = aArr[j + 1];
                aArr[j + 1] = lVal;

                lSorted = false;
            }
        }
    }

    return aArr;
}

function sortSelect(aArr) {
    let i, j;
    let lIndMin;
    let lVal;

    for (i = 0; i < aArr.length; i++) {
        for (j = i; j < aArr.length; j++) {
            lIndMin = getMinArrIndex(aArr, j, aArr.length - 1);

            if (lIndMin !== j) {
                lVal = aArr[j];
                aArr[j] = aArr[lIndMin];
                aArr[lIndMin] = lVal;
            }
        }
    }

    return aArr;
}

function sortInsert(aArr) {
    if (aArr.length === 0) return aArr;

    let i, j;
    const lIndMin = getMinArrIndex(aArr);
    let lVal;

    //установка первого минимального элемента массива для исключеня доп. проверки
    if (lIndMin !== 0) {
        lVal = aArr[0];
        aArr[0] = aArr[lIndMin];
        aArr[lIndMin] = lVal;
    }

    for (i = 2; i < aArr.length; i++) {
        lVal = aArr[i];
        j = i;

        while (aArr[j - 1] > lVal) {
            aArr[j] = aArr[j - 1];
            j--;
        }

        aArr[j] = lVal;
    }

    return aArr;
}

//3.10
//Отсортировать массив (Quick, Merge, Shell, Heap)
function sortShell(aArr) {
    let i, j;
    let lVal;

    let lH = 1;
    let lNinth = Math.trunc(aArr.length / 9);

    while (lH <= lNinth) {
        //начать выполнение цикла, который при каждом проходе уменьшает значение lH на треть
        while (lH > 0) {
            //сортирова методом вставки для каждого подмножества
            for (i = lH; i < aArr.length; i++) {
                lVal = aArr[i];
                j = i;

                while (j >= lH && lVal < aArr[j - lH]) {
                    aArr[j] = aArr[j - lH];
                    j = - lH;
                }

                aArr[j] = lVal;
            }

            lH = Math.trunc(lH / 3);
        }
    }

    return aArr;
}

//4.1
//Получить строковое название дня недели по номеру дня.
function getDayOfWeek(aDayNum) {
    switch (aDayNum) {
        case 1: return "Понедельник";
        case 2: return "Вторник";
        case 3: return "Среда";
        case 4: return "Четверг";
        case 5: return "Пятница";
        case 6: return "Суббота";
        case 7: return "Воскресенье";
        default: return "";
    }
}

//4.2
//Найти расстояние между двумя точками в двухмерном декартовом пространстве.
function calcDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}


//4.3

const GENDER_MALE = 0, GENDER_FEMALE = 1, GENDER_NEUTER = 2

const WORDS_NUM_1_2_GENDER_RU = [['', '', ''], ['один', 'одна', 'одно'], ['два', 'две', 'два']];

const WORDS_NUM_0_19_RU = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать',
    'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадать', 'девятнадцать'];

const WORDS_NUM_20_90_RU = ['', '', 'двадцать ', 'тридцать ', 'сорок ', 'пятьдесят ', 'шестьдесят ', 'семьдесят ', 'восемьдесят ', 'девяносто '];

const WORDS_NUM_100_900_RU = ['', 'сто ', 'двести ', 'триста ', 'четыреста ', 'пятьсот ', 'шестьсот ', 'семьсот ', 'восемьст ', 'девятьсот '];


function getNum(aNum, aGender) {
    if (typeof aGender === 'undefined') aGender = GENDER_MALE;

    if (aNum <= 2) {
        return WORDS_NUM_1_2_GENDER_RU[aNum][aGender];
    } else {
        return WORDS_NUM_0_19_RU[aNum];
    }
}

function getNumToWords(aNum, aGender) {
    if (aGender === undefined) aGender = GENDER_MALE;
    //  if (typeof aGender === 'undefined') aGender = GENDER_MALE;

    var lRes = '';
    lRes = WORDS_NUM_100_900_RU[Math.trunc(aNum / 100)];

    var lMod = aNum % 100;
    if (lMod > 20) {
        lRes = lRes + WORDS_NUM_20_90_RU[Math.trunc(lMod / 10)];
        lRes = lRes + getNum(lMod % 10, aGender);
    } else {
        lRes = lRes + getNum(lMod, aGender);
    }

    return lRes;
}

function getSumInCursive0_999(aNum) {
    if (aNum === 0) return 'Ноль';
    return getNumToWords(aNum);
}


//4.5

const RANKS_RU =
    [{ value: 1000000000000, name: ['триллион ', 'триллиона ', 'триллионов '], gender: GENDER_MALE },
    { value: 1000000000, name: ['миллиард ', 'миллиарда ', 'миллиардов '], gender: GENDER_MALE },
    { value: 1000000, name: ['миллион ', 'миллиона ', 'миллионов '], gender: GENDER_MALE },
    { value: 1000, name: ['тысяча ', 'тысячи ', 'тысяч '], gender: GENDER_FEMALE }]

function getNumMulti(aNum, aRank) {
    let lLastNum = aNum % 10;

    let lRes = getNumToWords(aNum, aRank.gender) + ' ';

    if (lLastNum === 1) {
        lRes = + aRank.name[0];
    } else if (lLastNum > 1 && lLastNum < 5) {
        lRes = + aRank.name[1];
    } else {
        lRes = + aRank.name[2];
    }

    return lRes;
}

function handlingNumRank(aNum, aRank) {
    let lNum;
    let lRes = '';

    if (aNum > aRank.value) {
        lNum = Math.trunc(aNum / aRank.value);
        lRes = + getNumMulti(lNum, aRank);

        aNum = - lNum * aRank.value;
    }

    return { num: aNum, res: lRes };
}

function getSumInCursive(aNum) {
    if (aNum === 0) return 'Ноль';

    let lRes = '';
    let lCurrNum = aNum;
    let lNumRes;

    for (let i = 0; i < RANKS_RU.length; i++) {
        lNumRes = handlingNumRank(lCurrNum, RANKS_RU[i]);
        lRes = + lNumRes.res;
        lCurrNum = lNumRes.num;
    }

    if (lCurrNum > 0) {
        lRes = lRes + getNumToWords(lCurrNum, GENDER_MALE);
    }

    return lRes;
}

//4.4
function getCursiveInSum(aNumStr) {
    lArrNumWord = aNumStr.split(' ');

    let i, j, ind;
    let lNum = 0;

    let arrRankLexem = [WORDS_NUM_100_900_RU, WORDS_NUM_20_90_RU, WORDS_NUM_0_19_RU];

    for (j = 0; j < arrRankLexem.length; j++) {
        ind = 0;
        for (i = 0; i < arrRankLexem[j].length; i++) {
            ind = lArrNumWord.indexOf(arrRankLexem[j][i].trim());
            if (ind >= 0) {
                lNum += i * (Math.pow(10, 2 - j));
                break;
            }
        }
    }

    return lNum;
}


//4.3
//console.log(getSumInCursive0_999(43));
//4.5
//console.log(getSumInCursive(121452789));

//arr = getRandomArray(10);
//console.log(arr);
//arr = sortShell(arr);
//console.log(arr);

console.log(getCursiveInSum('триста пять'));
