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
            name: 'Subject Area',
            data: [{
                name: 'High impact <br><b>Too Cheap</b>',
                y: 372.74,
                color: '#A0C7E5',
            }, {
                name: 'High impact <br><b>Acceptable</b>',
                y: 631.70,
                color: '#648FD8',
            }, {
                name: 'High impact <br><b>Too Expensive</b>',
                y: 1293.99,
                color: '#032977',
            }, {
                name: 'Medium impact <br><b>Too Cheap</b>',
                y: 393.95,
                color: '#C6DE8C',
            }, {
                name: 'Medium impact <br><b>Acceptable</b>',
                y: 556.21,
                color: '#92CB9C',
            }, {
                name: 'Medium impact <br><b>Too Expensive</b>',
                y: 1238.00,
                color: '#1D5C56',
            }, {
                name: 'Low impact <br><b>Too Cheap</b>',
                y: 348.19,
                color: '#D22938',
            }, {
                name: 'Low impact <br><b>Acceptable</b>',
                y: 546.79,
                color: '#B40043',
            }, {
                name: 'Low impact <br><b>Too Expensive</b>',
                y: 1092.19,
                color: '#800049',
            }, {
                name: 'No impact <br><b>Too Cheap</b>',
                y: 210.69,
                color: '#F2BA49',
            }, {
                name: 'No impact <br><b>Acceptable</b>',
                y: 353.90,
                color: '#E87700',
            }, {
                name: 'No impact <br><b>Too Expensive</b>',
                y: 988.86,
                color: '#E55800',
            }, {
                name: 'New journal <br><b>Too Cheap</b>',
                y: 207.03,
                color: '#B1D8CF',
            }, {
                name: 'New journal <br><b>Acceptable</b>',
                y: 492.27,
                color: '#00A3B2',
            }, {
                name: 'New journal <br><b>Too Expensive</b>',
                y: 863.27,
                color: '#075B81',
            }]
        }],
    });
});