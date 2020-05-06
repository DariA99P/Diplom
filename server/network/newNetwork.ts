const getImgSInput = img =>
  img.reduce((acc, row) => {
    return [...acc, ...row];
  }, []);

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.abs(Math.round(rand));
}

// чи є фігура овалом
const proceed = (input, weights) => {
  // поріг функції активації
  const bias = 70;
  const sum = input.reduce((acc, value, index) => {
    return acc + value * weights[index];
  }, 0);
  return sum >= bias;
};

// Зменшення значень ваг, якщо мережа помилилася і видала 1
const decrease = (input, weights) => {
  return input.map((value, index) =>
    value === 1 ? weights[index] - 1 : weights[index],
  );
};

// Збільшення значень ваг, якщо мережа помилилася і видала 0
const increase = (input, weights) => {
  return input.map((value, index) =>
    value === 1 ? weights[index] + 1 : weights[index],
  );
};

const train = (matrixTestInput, indexForm, numIteration, weights) => {
  // навчальни ваги
  let initialWeights = weights;

  for (let j = 0; j < 5; j++) {
    const inputTypeOptions = matrixTestInput[j];

    for (let i = 0; i < numIteration; i++) {
      const optionType = randomInteger(0, 2);
      // проверяем является ли тип формы тем индексом, который мы задали
      if (optionType !== indexForm) {
        if (proceed(inputTypeOptions[optionType], initialWeights)) {
          initialWeights = decrease(
            inputTypeOptions[optionType],
            initialWeights,
          );
        }
      } else {
        if (!proceed(inputTypeOptions[optionType], initialWeights)) {
          initialWeights = increase(
            inputTypeOptions[optionType],
            initialWeights,
          );
        }
      }
    }
  }
  return initialWeights;
};

const objectValue = require('../repository/testData.json');
// навчальна вибірка
const matrixTestInput = [
  [
    getImgSInput(objectValue.testImgOval[0]),
    getImgSInput(objectValue.testImgSquare[0]),
    getImgSInput(objectValue.testImgTriangle[0]),
  ],
  [
    getImgSInput(objectValue.testImgOval[1]),
    getImgSInput(objectValue.testImgSquare[1]),
    getImgSInput(objectValue.testImgTriangle[1]),
  ],
  [
    getImgSInput(objectValue.testImgOval[2]),
    getImgSInput(objectValue.testImgSquare[2]),
    getImgSInput(objectValue.testImgTriangle[2]),
  ],
  [
    getImgSInput(objectValue.testImgOval[3]),
    getImgSInput(objectValue.testImgSquare[3]),
    getImgSInput(objectValue.testImgTriangle[3]),
  ],
  [
    getImgSInput(objectValue.testImgOval[4]),
    getImgSInput(objectValue.testImgSquare[4]),
    getImgSInput(objectValue.testImgTriangle[4]),
  ],
  [
    getImgSInput(objectValue.testImgOval[5]),
    getImgSInput(objectValue.testImgSquare[5]),
    getImgSInput(objectValue.testImgTriangle[5]),
  ],
];
// тестова вибірка
const img1OvalInput = getImgSInput(objectValue.ovalFigureTest[0]);
const img2OvalInput = getImgSInput(objectValue.ovalFigureTest[1]);
const img3OvalInput = getImgSInput(objectValue.ovalFigureTest[2]);
const img4OvalInput = getImgSInput(objectValue.ovalFigureTest[3]);
const arrayOvalInput = [img1OvalInput, img2OvalInput, img3OvalInput];

const im1SquareInput = getImgSInput(objectValue.squareFigureTest[0]);
const im2SquareInput = getImgSInput(objectValue.squareFigureTest[1]);
const im3SquareInput = getImgSInput(objectValue.squareFigureTest[2]);

const arraySquareInput = [im1SquareInput, im2SquareInput, im3SquareInput];

const im1TriangleInput = getImgSInput(objectValue.triangleFigureTest[0]);
const im2TriangleInput = getImgSInput(objectValue.triangleFigureTest[1]);

let weights = [];

for (let i = 0; i < 96; i++) {
  weights[i] = 0;
}
weights = train(matrixTestInput, 0, 50000, weights);
// квадрат

console.log('Тренеровка сети для распознавания овалов');
// Проверим на тестовой выборке для овалов
for (let i = 0; i < arrayOvalInput.length; i++) {
  console.log(`Изображение овала ${i + 1}`);
  while (!proceed(arrayOvalInput[i], weights)) {
    weights = increase(arrayOvalInput[i], weights);
  }
  console.log(true);
}
const weightsOval = weights;

console.log('Изображение овала 4');
console.log(proceed(img4OvalInput, weightsOval));

// треугольник
console.log('Изображение треугольника 1');
console.log(proceed(im1TriangleInput, weightsOval));
console.log('Изображение треугольника 2');
console.log(proceed(im2TriangleInput, weightsOval));

// Проверим на тестовой выборке для квадратов
console.log('Изображение квадрата 1');
console.log(proceed(im1SquareInput, weightsOval));
console.log('Изображение квадрата 2');
console.log(proceed(im2SquareInput, weightsOval));
console.log('Изображение квадрата 3');
console.log(proceed(im3SquareInput, weightsOval));

weights = train(matrixTestInput, 1, 50000, weights);

console.log('Тренеровка сети для распознавания квадратов');
// Проверим на тестовой выборке для квадрата
for (let i = 0; i < arraySquareInput.length; i++) {
  console.log(`Изображение квадрата ${i + 1}`);
  while (!proceed(arraySquareInput[i], weights)) {
    weights = increase(arraySquareInput[i], weights);
  }
  console.log(true);
}

const weightsSquare = weights;
// треугольник
console.log('Изображение треугольника 1');
console.log(proceed(im1TriangleInput, weightsSquare));
console.log('Изображение треугольника 2');
console.log(proceed(im2TriangleInput, weightsSquare));

// треугольник
console.log('Изображение овала 4');
console.log(proceed(img4OvalInput, weightsSquare));
console.log('Изображение овала 3');
console.log(proceed(img3OvalInput, weightsSquare));
