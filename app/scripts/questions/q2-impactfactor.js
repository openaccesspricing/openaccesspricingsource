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
            name: 'Impact Factor',
            data: [{
                name: 'High impact',
                y: 1792.44,
                color: '#648FD8',
            }, {
                name: 'Medium impact',
                y: 1504.19,
                color: '#92CB9C',
            }, {
                name: 'Low impact',
                y: 1231.39,
                color: '#B40043',
            }, {
                name: 'No impact',
                y: 1626.91,
                color: '#E87700',
            }, {
                name: 'New journal',
                y: 1229.99,
                color: '#00A3B2',
            }]
        }],
    });
});