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
                text: 'Charge for Open Access in USD'
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
                name: 'Africa & Middle East',
                y: 1394.92,
                color: '#648FD8',
            }, {
                name: 'Asia',
                y: 1506.82,
                color: '#92CB9C',
            }, {
                name: 'Australasia',
                y: 1722.05,
                color: '#B40043',
            }, {
                name: 'Central & South America',
                y: 1432.96,
                color: '#E87700',
            }, {
                name: 'Europe',
                y: 1717.75,
                color: '#00A3B2',
            }, {
                name: 'North America',
                y: 1528.87,
                color: '#855199',
            }]
        }],
    });
});