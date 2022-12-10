const lineChartData = [
    ['Year', 'Sales', 'Expenses'],
    ['2004', 1000, 400],
    ['2005', 1170, 460],
    ['2006', 660, 1120],
    ['2007', 1030, 540]
];

const lineChartOptions = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
};

export { lineChartData, lineChartOptions };
