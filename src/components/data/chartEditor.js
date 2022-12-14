const chartEditorData = [
    ['Age', 'Weight'],
    [8, 12],
    [4, 5.5],
    [11, 14],
    [4, 5],
    [3, 3.5],
    [6.5, 7]
];

const chartEditorOptions = {
    title: 'Age vs. Weight comparison',
    hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
    vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
    legend: 'none'
};

export { chartEditorData, chartEditorOptions };
