const steppedAreaChartData = [
    ['Director (Year)', 'Rotten Tomatoes', 'IMDB'],
    ['Alfred Hitchcock (1935)', 8.4, 7.9],
    ['Ralph Thomas (1959)', 6.9, 6.5],
    ['Don Sharp (1978)', 6.5, 6.4],
    ['James Hawes (2008)', 4.4, 6.2]
];

const steppedAreaChartOptions = {
    title: "The decline of 'The 39 Steps'",
    vAxis: { title: 'Accumulated Rating' },
    isStacked: true
};

export { steppedAreaChartData, steppedAreaChartOptions };
