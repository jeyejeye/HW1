//1.1
describe('getMultEvenOrSumOdd', function () {
  it('should return a + b', function () {
    const a = 1;
    const b = 2;
    const expected = 3;

    const actual = getMultEvenOrSumOdd(a, b);

    assert.equal(actual, expected);
  });

  it('should return a * b', function () {
    const a = 2;
    const b = 3;
    const expected = 6;

    const actual = getMultEvenOrSumOdd(a, b);

    assert.equal(actual, expected);
  })
});

//1.2
describe('getCartesianQuartNum', function () {
  it('should return quarter by conditionates', function () {
    const testData = [
      { x: 1, y: 2, expected: 1 },
      { x: -1, y: 2, expected: 2 },
      { x: -1, y: -2, expected: 3 },
      { x: 1, y: -2, expected: 4 }
    ];

    testData.forEach(function (data) {
      const { x, y, expected } = data;

      const actual = getCartesianQuartNum(x, y);

      assert.equal(actual, expected);
    })
  });

  it('should rise exception', function () {
    const testData = [
      { x: 1, y: 0 },
      { x: 0, y: 2 },
      { x: 0, y: 0 }
    ];

    testData.forEach(function (data) {
      const { x, y } = data;

      assert.throws(() => getCartesianQuartNum(x, y), "Point on axis");
      //	  assert.throw(getCartesianQuartNum(x, y), "Point on axis");
    })
  })
});

//1.3
describe('getPositiveSum', function () {
  describe('return sum of positive numbers', function () {
    const testData = [
      { a: 1, b: -1, c: 0, expected: 1 },
      { a: -1, b: -1, c: -10, expected: 0 },
      { a: 12, b: 21, c: 10, expected: 43 }
    ];

    testData.forEach(function (data) {
      const { a, b, c, expected } = data;

      it(`should return ${expected} when a  = ${a}, b = ${b} and c = ${c}`, function () {
        const actual = getPositiveSum(a, b, c);
        assert.equal(actual, expected);
      })
    })
  })
})  /**/

//1.4
describe('calcConditionalMax', function () {
  it('should return a*b*c + 3', function () {
    const a = 5;
    const b = 2;
    const c = 8;
    const expected = 83;

    const actual = calcConditionalMax(a, b, c);

    assert.equal(actual, expected);
  });

  it('should return a+b+c + 3', function () {
    const a = 2;
    const b = 1;
    const c = 2;
    const expected = 8;

    const actual = calcConditionalMax(a, b, c);

    assert.equal(actual, expected);
  })
})

//1.5
describe('getMarkByRate', function () {
  describe('return a mark by student for rating in range 0..100', function () {
    const testData = [
      { rate: 0, expected: 'F' },
      { rate: 1, expected: 'F' },
      { rate: 10, expected: 'F' },
      { rate: 18, expected: 'F' },
      { rate: 19, expected: 'F' },

      { rate: 20, expected: 'E' },
      { rate: 21, expected: 'E' },
      { rate: 31, expected: 'E' },
      { rate: 38, expected: 'E' },
      { rate: 39, expected: 'E' },

      { rate: 40, expected: 'D' },
      { rate: 41, expected: 'D' },
      { rate: 49, expected: 'D' },
      { rate: 58, expected: 'D' },
      { rate: 59, expected: 'D' },

      { rate: 60, expected: 'C' },
      { rate: 61, expected: 'C' },
      { rate: 67, expected: 'C' },
      { rate: 73, expected: 'C' },
      { rate: 74, expected: 'C' },

      { rate: 75, expected: 'B' },
      { rate: 77, expected: 'B' },
      { rate: 81, expected: 'B' },
      { rate: 88, expected: 'B' },
      { rate: 89, expected: 'B' },

      { rate: 90, expected: 'A' },
      { rate: 91, expected: 'A' },
      { rate: 96, expected: 'A' },
      { rate: 99, expected: 'A' },
      { rate: 100, expected: 'A' }
    ];

    testData.forEach(function (data) {
      const { rate, expected } = data

      const actual = getMarkByRate(rate);

      it(`for rate = ${rate} mark must be ${expected}`, function () {
        const actual = getMarkByRate(rate);
        assert.equal(actual, expected);
      })
    })
  });

  describe('rise exception in other cases', function () {
    const belowRange = -1;
    it('should rise exception for rate below range', function () {
      assert.throws(() => getMarkByRate(belowRange), "rate out of range");
    })

    const aboveRange = 101;
    it('should rise exception for rate above range', function () {
      assert.throws(() => getMarkByRate(aboveRange), "rate out of range");
    }) /**/
  })
})  /**/

//2.1
describe('getSumAndCountEvenElements', function () {
  it('should return sum even element in range 0..99 as 2450, and count as 49', function () {
    const expected = { sum: 2450, cnt: 49 };

    const actual = getSumAndCountEvenElements();

    assert.deepEqual(actual, expected);
    //	expect(actual).to.eql(expected);
  });
});

//2.2
describe('isPrimeNumber', function () {
  const testData = [
    { num: 1, expected: true },
    { num: -1, expected: true },
    { num: 0, expected: true },
    { num: 2, expected: true },
    { num: 3, expected: true },
    { num: 4, expected: false },
    { num: 124, expected: false },
    { num: 79, expected: true },
    { num: -81, expected: false },
  ];

  testData.forEach(function (data) {
    const { num, expected } = data;

    it(`should return ${expected} for number ${num}`, function () {
      const actual = isPrimeNumber(num);
      assert.equal(actual, expected);
    })
  })
});

//2.3
describe('getIntSqrRoot_BruteForce and getIntSqrRoot_BinarySearch', function () {
  const testData = [
    { num: 0, expected: 0 },
    { num: 1, expected: 1 },
    { num: 4, expected: 2 },
    { num: 10000, expected: 100 },
    { num: 5, expected: 2 },
    { num: 15, expected: 4 },
    { num: 17, expected: 4 },
    { num: 10017, expected: 100 }
  ];

  describe('Nearest square root obtained by brute force method', function () {
    testData.forEach(function (data) {
      const { num, expected } = data;

      it(`should return ${expected} for number = ${num}`, function () {
        const actual = getIntSqrRoot_BruteForce(num);
        assert.equal(actual, expected);
      })
    })
  });

  describe('Nearest square root obtained by binary search method', function () {
    testData.forEach(function (data) {
      const { num, expected } = data;

      it(`should return ${expected} for number = ${num}`, function () {
        const actual = getIntSqrRoot_BinarySearch(num);
        assert.equal(actual, expected);
      })
    })
  });

  let negativeNum = -1;

  describe('should return NaN for values less then zero', function () {
    it('brute force method', function () {
      assert.deepEqual(getIntSqrRoot_BruteForce(negativeNum), NaN);
      //      assert.isNaN(getIntSqrRoot_BruteForce(negativeNum));
    });
    it('binary search method', function () {
      assert.deepEqual(getIntSqrRoot_BinarySearch(negativeNum), NaN);
      //      assert.isNaN(getIntSqrRoot_BinarySearch(negativeNum));
    });
  })
});

//2.4
describe('getMyFactorial', function () {
  describe('check factorial function for above zero number', function () {
    const testData = [
      { num: 0, expected: 1 },
      { num: 1, expected: 1 },
      { num: 2, expected: 2 },
      { num: 3, expected: 6 },
      { num: 10, expected: 3628800 }
    ];

    testData.forEach(function (data) {
      const { num, expected } = data;

      it(`should return ${expected} for number = ${num}`, function () {
        const actual = getMyFactorial(num);
        assert.equal(actual, expected);
      })
    })
  })

  describe('check factorial for negativ number', function () {
    it('factorial for negativ number must be NaN', function () {
      let negativeNum = -1;
      assert.deepEqual(getMyFactorial(negativeNum), NaN);
      //      assert.isNaN(getMyFactorial(negativeNum));
    });
  })
});

//2.5
describe('getSumDigits', function () {
  describe('get sum of digits', function () {
    const testData = [
      { num: 0, expected: 0 },
      { num: 1, expected: 1 },
      { num: 18, expected: 9 },
      { num: 153, expected: 9 },
      { num: 3628800, expected: 27 }
    ];

    testData.forEach(function (data) {
      const { num, expected } = data;

      it(`should return ${expected} for number = ${num}`, function () {
        const actual = getSumDigits(num);
        assert.equal(actual, expected);
      })
    })
  })
});

//2.6
describe('getMirrorNumber', function () {
  describe('get reverse number', function () {
    const testData = [
      { num: 0, expected: 0 },
      { num: 1, expected: 1 },
      { num: 9, expected: 9 },
      { num: 153, expected: 351 },
      { num: 3628800, expected: 88263 }
    ];

    testData.forEach(function (data) {
      const { num, expected } = data;

      it(`should return ${expected} for number = ${num}`, function () {
        const actual = getMirrorNumber(num);
        assert.equal(actual, expected);
      })
    })
  })
});

//3.1
describe('getMinArrElement', function () {
  describe('get minimal array element', function () {
    const testData = [
      { arr: [], expected: null },
      { arr: [1], expected: 1 },
      { arr: [9, 2], expected: 2 },
      { arr: [-2, 2, 0], expected: -2 },
      { arr: [9, 2, 1890, 7564, 5428, -6544, 0, 0], expected: -6544 }
    ];

    testData.forEach(function (data) {
      const { arr, expected } = data;

      it(`should return ${expected} when arr is \[${arr}\]`, function () {
        const actual = getMinArrElement(arr);
        assert.equal(actual, expected);
      })
    })
  });
});

//3.2
describe('getMaxArrElement', function () {
  describe('get maximal array element', function () {
    const testData = [
      { arr: [], expected: null },
      { arr: [1], expected: 1 },
      { arr: [9, 2], expected: 9 },
      { arr: [-2, 2, 0], expected: 2 },
      { arr: [9, 2, 1890, 7564, 5428, -6544, 0, 0], expected: 7564 }
    ];

    testData.forEach(function (data) {
      const { arr, expected } = data;

      it(`should return ${expected} when arr is \[${arr}\]`, function () {
        const actual = getMaxArrElement(arr);
        assert.equal(actual, expected);
      })
    })
  })
});

//3.3
describe('getMinArrIndex', function () {
  describe('get index of minimal array element', function () {
    const testData = [
      { arr: [], expected: null },
      { arr: [1], expected: 0 },
      { arr: [9, 2], expected: 1 },
      { arr: [-2, 2, 0], expected: 0 },
      { arr: [9, 2, 1890, 7564, 5428, -6544, 0, 0], expected: 5 }
    ];

    testData.forEach(function (data) {
      const { arr, expected } = data;

      it(`should return ${expected} when arr is \[${arr}\]`, function () {
        const actual = getMinArrIndex(arr);
        assert.equal(actual, expected);
      })
    })
  })
});

//3.4
describe('getMaxArrIndex', function () {
  describe('get index of maximal array element', function () {
    const testData = [
      { arr: [], expected: null },
      { arr: [1], expected: 0 },
      { arr: [9, 2], expected: 0 },
      { arr: [-2, 2, 0], expected: 1 },
      { arr: [9, 2, 1890, 7564, 5428, -6544, 0, 0], expected: 3 }
    ];

    testData.forEach(function (data) {
      const { arr, expected } = data;

      it(`should return ${expected} when arr is \[${arr}\]`, function () {
        const actual = getMaxArrIndex(arr);
        assert.equal(actual, expected);
      })
    })
  })
});

//3.5
describe('getSumOddArrElements', function () {
  describe('get sum elemnts of array with odd index', function () {
    const testData = [
      { arr: [], expected: null },
      { arr: [1], expected: 0 },
      { arr: [9, 2], expected: 2 },
      { arr: [-2, 2, 0], expected: 2 },
      { arr: [9, 2, 1890, 7564, 5428, -6544, 0, 0], expected: 1022 }
    ];

    testData.forEach(function (data) {
      const { arr, expected } = data;

      it(`should return ${expected} when arr is \[${arr}\]`, function () {
        const actual = getSumOddArrElements(arr);
        assert.equal(actual, expected);
      })
    })
  })
})

//3.6
describe('getMirrorArray', function () {
  describe('get reverse array', function () {
    const testData = [
      { arr: [], expected: [] },
      { arr: [1], expected: [1] },
      { arr: [9, 2], expected: [2, 9] },
      { arr: [-2, 2, 0], expected: [0, 2, -2] },
      { arr: [9, 2, 1890, 7564, 5428, -6544, 0, 0], expected: [0, 0, -6544, 5428, 7564, 1890, 2, 9] }
    ];

    testData.forEach(function (data) {
      const { arr, expected } = data;

      it(`should return \[${expected}\] when arr is \[${arr}\]`, function () {
        const actual = getMirrorArray(arr);
        assert.deepEqual(actual, expected);
      })
    })
  })
})

//3.7
describe('getCountOddArrElements', function () {
  describe('get count odd elemnts of array', function () {
    const testData = [
      { arr: [], expected: null },
      { arr: [1], expected: 1 },
      { arr: [0], expected: 0 },
      { arr: [-17], expected: 1 },
      { arr: [-8], expected: 0 },
      { arr: [9, 2], expected: 1 },
      { arr: [8, 6], expected: 0 },
      { arr: [9, 7], expected: 2 },
      { arr: [14, 2, 1890, 7564, 5428, -6544, 0, 0], expected: 0 },
      { arr: [9, 57, 1893, -75641, 54283, -6547, 3, 1], expected: 8 },
      { arr: [9, 2, 1890, 7561, 5428, -6543, 0, 9], expected: 4 }
    ];

    testData.forEach(function (data) {
      const { arr, expected } = data;

      it(`should return ${expected} when arr is \[${arr}\]`, function () {
        const actual = getCountOddArrElements(arr);
        assert.equal(actual, expected);
      })
    })
  })
})

//3.8
describe('getReplacedHalfArray', function () {
  describe('swap first and second half of array', function () {
    const testData = [
      { arr: [], expected: [] },
      { arr: [1], expected: [1] },
      { arr: [9, 2], expected: [2, 9] },
      { arr: [-2, 2, 0], expected: [0, 2, -2] },
      { arr: [-2, 2, 0, 1], expected: [0, 1, -2, 2] },
      { arr: [9, 2, 1890, 7564, 5428, -6544, 0, 0], expected: [5428, -6544, 0, 0, 9, 2, 1890, 7564] },
      { arr: [9, 2, 1890, 7564, -45, 5428, -6544, 0, 0], expected: [5428, -6544, 0, 0, -45, 9, 2, 1890, 7564] },
    ];

    testData.forEach(function (data) {
      const { arr, expected } = data;

      it(`should return \[${expected}\] when arr is \[${arr}\]`, function () {
        const actual = getReplacedHalfArray(arr);
        assert.deepEqual(actual, expected);
      })
    })
  })
})

//3.9
describe('sortBubble', function () {
  describe('sort array by bubble method', function () {
    const testData = [
      { arr: [], expected: [] },
      { arr: [1], expected: [1] },
      { arr: [9, 2], expected: [2, 9] },
      { arr: [2, 9], expected: [2, 9] },
      { arr: [-2, 2, 0], expected: [-2, 0, 2] },
      { arr: [2, -2, 0], expected: [-2, 0, 2] },
      { arr: [0, 2, -2], expected: [-2, 0, 2] },
      { arr: [-2, 2, 0, 1], expected: [-2, 0, 1, 2] },
      { arr: [9, 2, 1890, 7564, 5428, -6544, 0, 0], expected: [-6544, 0, 0, 2, 9, 1890, 5428, 7564] },
      { arr: [9, 2, 1890, 7564, -45, 5428, -6544, 0, 0], expected: [-6544, -45, 0, 0, 2, 9, 1890, 5428, 7564] },
    ];

    testData.forEach(function (data) {
      const { arr, expected } = data;

      it(`should return \[${expected}\] when arr is \[${arr}\]`, function () {
        const actual = sortBubble(arr);
        assert.deepEqual(actual, expected);
      })
    })
  })
})

describe('sortSelect', function () {
  describe('sort array by select method', function () {
    const testData = [
      { arr: [], expected: [] },
      { arr: [1], expected: [1] },
      { arr: [9, 2], expected: [2, 9] },
      { arr: [2, 9], expected: [2, 9] },
      { arr: [-2, 2, 0], expected: [-2, 0, 2] },
      { arr: [2, -2, 0], expected: [-2, 0, 2] },
      { arr: [0, 2, -2], expected: [-2, 0, 2] },
      { arr: [-2, 2, 0, 1], expected: [-2, 0, 1, 2] },
      { arr: [9, 2, 1890, 7564, 5428, -6544, 0, 0], expected: [-6544, 0, 0, 2, 9, 1890, 5428, 7564] },
      { arr: [9, 2, 1890, 7564, -45, 5428, -6544, 0, 0], expected: [-6544, -45, 0, 0, 2, 9, 1890, 5428, 7564] },
    ];

    testData.forEach(function (data) {
      const { arr, expected } = data;

      it(`should return \[${expected}\] when arr is \[${arr}\]`, function () {
        const actual = sortSelect(arr);
        assert.deepEqual(actual, expected);
      })
    })
  })
})

describe('sortInsert', function () {
  describe('sort array by insert method', function () {
    const testData = [
      { arr: [], expected: [] },
      { arr: [1], expected: [1] },
      { arr: [9, 2], expected: [2, 9] },
      { arr: [2, 9], expected: [2, 9] },
      { arr: [-2, 2, 0], expected: [-2, 0, 2] },
      { arr: [2, -2, 0], expected: [-2, 0, 2] },
      { arr: [0, 2, -2], expected: [-2, 0, 2] },
      { arr: [-2, 2, 0, 1], expected: [-2, 0, 1, 2] },
      { arr: [9, 2, 1890, 7564, 5428, -6544, 0, 0], expected: [-6544, 0, 0, 2, 9, 1890, 5428, 7564] },
      { arr: [9, 2, 1890, 7564, -45, 5428, -6544, 0, 0], expected: [-6544, -45, 0, 0, 2, 9, 1890, 5428, 7564] },
    ];

    testData.forEach(function (data) {
      const { arr, expected } = data;

      it(`should return \[${expected}\] when arr is \[${arr}\]`, function () {
        const actual = sortInsert(arr);
        assert.deepEqual(actual, expected);
      })
    })
  })
})
/**/