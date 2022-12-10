const getRandomNumber = () => Math.random() * 100;

const gaugeData = [
    ['Label', 'Value'],
    ['Memory', getRandomNumber()],
    ['CPU', getRandomNumber()],
    ['Network', getRandomNumber()]
];
const gaugeOptions = {
    width: 400,
    height: 120,
    redFrom: 90,
    redTo: 100,
    yellowFrom: 75,
    yellowTo: 90,
    minorTicks: 5
};

export { gaugeData, gaugeOptions };
