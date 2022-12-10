const animationsData = [
    ['Age', 'Weight'],
    [8, 12],
    [4, 5.5],
    [11, 14],
    [4, 5],
    [3, 3.5],
    [6.5, 7]
];

const animationsOptions = {
    title: 'Age vs. Weight comparison',
    hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
    vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
    legend: 'none',
    animation: {
        startup: true,
        easing: 'linear',
        duration: 1500
    },
    enableInteractivity: false
};

export { animationsData, animationsOptions };
