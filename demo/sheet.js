window.onload = () => {
    const data = [
        ['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
        ['2017', 10, 11, '2017-01-01', 13],
        ['2018', 20, 11, '2018-12-12', 13],
        ['2019', 30, 15, '2019-30-30', 13]
    ];

    const container = document.getElementById('sheet');
    const hot = new Handsontable(container, {
        data: data,
        rowHeaders: true,
        colHeaders: true,
        filters: true,
        dropdownMenu: true,
        licenseKey: 'non-commercial-and-evaluation'
    });
    window.Handsontable = Handsontable;
    window.hot = hot;
};

columns = {
    'A': 0,
    'B': 1,
    'C': 2,
    'D': 3,
    'E': 4
};

typeConfigs = {
    'date': {
        correctFormat: true,
        dateFormat: 'MM/DD/YYYY'
    }
};

window.hotFormat = (columnLabel, type) => {
    for (let i = 1; i < 4; i++) {
        window.hot.setCellMetaObject(i, columns[columnLabel], {
            ...typeConfigs[type],
            validator: type,
            renderer: type,
            editor: type
        });
    }
    window.hot.validateCells();
};
