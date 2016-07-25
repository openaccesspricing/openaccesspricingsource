$(function() {
    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'column',
            style: {
                fontFamily: '"Open Sans", sans-serif',
                fontSize: '16px'
            }
        },
        title: {
            text: null
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Average Charge in USD'
            },
            labels: {
                format: '${value}'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                borderRadius: 3,
                dataLabels: {
                    enabled: true,
                    format: '${point.y:.0f}'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>${point.y:.2f}</b><br/>'
        },

        series: [{
            name: 'Region',
            data: [{
                name: 'Africa & Middle East <br><b>Too Cheap</b>',
                y: 305.68,
                color: '#A0C7E5',
            }, {
                name: 'Africa & Middle East <br><b>Acceptable</b>',
                y: 447.54,
                color: '#648FD8',
            }, {
                name: 'Africa & Middle East <br><b>Too Expensive</b>',
                y: 917.54,
                color: '#032977',
            }, {
                name: 'Asia <br><b>Too Cheap</b>',
                y: 436.90,
                color: '#C6DE8C',
            }, {
                name: 'Asia <br><b>Acceptable</b>',
                y: 636.26,
                color: '#92CB9C',
            }, {
                name: 'Asia <br><b>Too Expensive</b>',
                y: 1377.23,
                color: '#1D5C56',
            }, {
                name: 'Australasia <br><b>Too Cheap</b>',
                y: 351.86,
                color: '#D22938',
            }, {
                name: 'Australasia <br><b>Acceptable</b>',
                y: 489.54,
                color: '#B40043',
            }, {
                name: 'Australasia <br><b>Too Expensive</b>',
                y: 1950.21,
                color: '#800049',
            }, {
                name: 'Central & South America <br><b>Too Cheap</b>',
                y: 276.82,
                color: '#F2BA49',
            }, {
                name: 'Central & South America <br><b>Acceptable</b>',
                y: 460.51,
                color: '#E87700',
            }, {
                name: 'Central & South America <br><b>Too Expensive</b>',
                y: 1061.89,
                color: '#E55800',
            }, {
                name: 'Europe <br><b>Too Cheap</b>',
                y: 395.16,
                color: '#B1D8CF',
            }, {
                name: 'Europe <br><b>Acceptable</b>',
                y: 604.14,
                color: '#00A3B2',
            }, {
                name: 'Europe <br><b>Too Expensive</b>',
                y: 1257.69,
                color: '#075B81',
            }, {
                name: 'North America <br><b>Too Cheap</b>',
                y: 360.75,
                color: '#BCADE2',
            }, {
                name: 'North America <br><b>Acceptable</b>',
                y: 603.09,
                color: '#855199',
            }, {
                name: 'North America <br><b>Too Expensive</b>',
                y: 1633.93,
                color: '#522464',
            }]
        }],
    });
});