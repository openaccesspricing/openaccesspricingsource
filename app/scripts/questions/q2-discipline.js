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
            name: 'Discipline',
            data: [{
                name: 'Health Sciences',
                y: 1493.47,
                // drilldown: 'hs',
                color: '#648FD8',
            }, {
                name: 'Life Sciences',
                y: 1820.64,
                // drilldown: 'ls',
                color: '#92CB9C',
            }, {
                name: 'Physical Sciences',
                y: 1552.87,
                // drilldown: 'ps',
                color: '#B40043',
            }, {
                name: 'Social Sciences & Humanities',
                y: 1507.10,
                // drilldown: 'ssh',
                color: '#E87700',
            }]
        }],
        drilldown: {
            activeAxisLabelStyle: {
                cursor: 'default',
                fontWeight: 'noraml',
                textDecoration: 'none'
            },
            series: [{
                name: 'Health Sciences',
                id: 'hs',
                data: [
                    [
                        'Medicine, Dentistry and related subjects',
                        5
                    ]
                ]
            }, {
                name: 'Life Sciences',
                id: 'ls',
                data: [
                    [
                        'Biological Sciences',
                        45
                    ]
                ]
            }, {
                name: 'Physical Sciences',
                id: 'ps',
                data: [
                    [
                        'Chemistry',
                        64
                    ],
                    [
                        'Physics and Related Sciences',
                        12
                    ],
                    [
                        'Astronomy and Space Science',
                        33
                    ],
                    [
                        'Earth Sciences',
                        75
                    ],
                    [
                        'Engineering and Technology',
                        64
                    ],
                    [
                        'Mathematics and Computer Sciences',
                        22
                    ]
                ]
            }, {
                name: 'Social Sciences & Humanities',
                id: 'ssh',
                data: [
                    [
                        'Psychology',
                        64
                    ],
                    [
                        'Social Sciences',
                        12
                    ],
                    [
                        'Law',
                        33
                    ],
                    [
                        'Language and Literature studies',
                        75
                    ],
                    [
                        'Historical and Philosophical studies',
                        64
                    ],
                    [
                        'Creative Arts and Design',
                        22
                    ],
                    [
                        'Education',
                        87
                    ],
                    [
                        'Business and Administrative Sciences',
                        65
                    ],
                    [
                        'Architecture, Building and Planning',
                        11
                    ],
                    [
                        'Agriculture and Related Sciences',
                        55
                    ]
                ]
            }]
        }
    });
});