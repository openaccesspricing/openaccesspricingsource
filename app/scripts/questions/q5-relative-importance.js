$(function() {
    // Create the chart
    $('#relative-importance').highcharts({
        chart: {
            type: 'bar',
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
                text: 'Importance (Larger = More important)'
            },
            labels: {
                format: '{value}%'
            },
            tickInterval: 10
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.0f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
        },

        series: [{
            name: 'Subject Area',
            data: [{
                name: 'Impact Factor',
                y: 43,
                color: '#855199',
            }, {
                name: 'APC',
                y: 30,
                color: '#92CB9C',
            }, {
                name: 'Submission to publication speed',
                y: 15,
                color: '#B40043',
            }, {
                name: 'Peer review quality',
                y: 12,
                color: '#00A3B2',
            }]
        }],
    });
});