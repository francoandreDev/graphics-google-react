const tableData = [
    ['Name', 'Salary', 'Full time employee'],
    ['Mike', { v: 10000, f: '$10,000' }, true],
    ['Jim', { v: 8000, f: '$8,000' }, false],
    ['Alice', { v: 12500, f: '$12,500' }, true],
    ['Bob', { v: 7000, f: '$7,000' }, true]
];

const tableOptions = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' },
    pageSize: 1
};

export { tableData, tableOptions };
