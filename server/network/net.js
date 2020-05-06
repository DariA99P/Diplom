const random = require('random');
const shuffle = require('shuffle-array');

// функция получения сдвигов
const getBiases = count => {
  const biases = [];
  const normal = random.normal();
  for (let i = 0; i < count; i++) {
    biases[i] = normal();
  }
  return biases;
};

// функция получения весов
const getWeight = (rows, columns) => {
  const weights = [];
  const normal = random.normal();
  for (let i = 0; i < rows; i++) {
    weights[i] = [];
    for (let j = 0; j < columns; j++) {
      weights[i][j] = normal();
    }
  }
  return weights;
};

const getZeros = matrix =>
  matrix.map(item => item.map(i => (i.length ? i.map(() => 0) : 0)));

const numLayers = 3; // количество уровней
const sizes = [2, 3, 1];
const biases = [getBiases(sizes[1]), getBiases(sizes[2])];
const weights = [getWeight(sizes[1], sizes[0]), getWeight(sizes[2], sizes[1])];

// функция активации
const sigmoid = x => 1 / (1 + Math.exp(-x));
// производная от функции активации
const sigmoidPrime = x => sigmoid(x) * (1 - sigmoid(x));

// перемножение матриц и вычисление суммы
const dot = (input, w) => {
  let array = [];
  for (let i = 0; i < w.length; i++) {
    array = [
      ...array,
      w[i].reduce((acc, value, index) => {
        return acc + value * input[index];
      }, 0),
    ];
  }
};

// функция обучения
const think = inputs => {
  let values = [...inputs];
  for (let i = 0; i < weights.length; i++) {
    const array = dot(weights[i], values).map((item, j) => item + biases[i][j]);
    values = array.map(item => sigmoid(item));
  }
  return values;
};

const returnValues = (x, y) => {
  const newBiases = getZeros(biases);
  const newWeights = getZeros(weights);
  let activation = x;
  let arrayActivation = [];
  let arrayValues = [];
  for (let i = 0; i < weights.length; i++) {
    const value = dot(weights[i], activation).map(
      (item, j) => item + biases[i][j],
    );
    arrayValues = [...arrayValues, value];
    activation = x.map(item => sigmoid(item));
    arrayActivation = [...arrayActivation, activation];
  }
};

// функция для обновления весов и смещения сети c использованием обратного распространения к одному мини-пакету
const updateMiniBatch = (miniBatch, eta) => {
  console.log(biases);
  const newBiases = getZeros(biases);
  const newWeights = getZeros(weights);

  console.log(newBiases);
  console.log(weights);
  console.log(newWeights);
};

updateMiniBatch([], 1);
// функция градиентного спуска
const SGD = (trainingData, epochs, miniBatchSize, eta, testData) => {
  const lengthTestData = testData.length;
  const lengthTrainData = trainingData.length;
  for (let i = 0; i < epochs; i++) {
    // перемешиваем обучающие данные
    shuffle(trainingData);
    let miniBatches = [];
    for (let j = 0; j < lengthTrainData; j += miniBatchSize) {
      const saveData = [...trainingData];
      miniBatches = [...miniBatches, saveData.splice(j, miniBatchSize)];
    }
    for (let j = 0; j < miniBatches.length; j++) {
      updateMiniBatch(miniBatches[j], eta);
    }
  }
};
