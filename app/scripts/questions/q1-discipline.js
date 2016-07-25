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
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>${point.y:.0f}</b><br/>'
        },

        series: [{
            name: 'Subject Area',
            data: [{
                name: 'Health Sciences <br><b>Too Cheap</b>',
                y: 498.16,
                // drilldown: 'hslow',
                color: '#A0C7E5',
            }, {
                name: 'Health Sciences <br><b>Acceptable</b>',
                y: 627.19,
                // drilldown: 'hsmid',
                color: '#648FD8',
            }, {
                name: 'Health Sciences <br><b>Too Expensive</b>',
                y: 1298.62,
                // drilldown: 'hshigh',
                color: '#032977',
            }, {
                name: 'Life Sciences <br><b>Too Cheap</b>',
                y: 375.42,
                // drilldown: 'lslow',
                color: '#C6DE8C',
            }, {
                name: 'Life Sciences <br><b>Acceptable</b>',
                y: 653.72,
                // drilldown: 'lsmid',
                color: '#92CB9C',
            }, {
                name: 'Life Sciences <br><b>Too Expensive</b>',
                y: 1498.36,
                // drilldown: 'lshigh',
                color: '#1D5C56',
            }, {
                name: 'Physical Sciences <br><b>Too Cheap</b>',
                y: 342.54,
                // drilldown: 'pslow',
                color: '#D22938',
            }, {
                name: 'Physical Sciences <br><b>Acceptable</b>',
                y: 580.48,
                // drilldown: 'psmid',
                color: '#B40043',
            }, {
                name: 'Physical Sciences <br><b>Too Expensive</b>',
                y: 1445.01,
                // drilldown: 'pshigh',
                color: '#800049',
            }, {
                name: 'Social Sciences & Humanities <br><b>Too Cheap</b>',
                y: 325.01,
                // drilldown: 'sshlow',
                color: '#F2BA49',
            }, {
                name: 'Social Sciences & Humanities <br><b>Acceptable</b>',
                y: 467.36,
                // drilldown: 'sshmid',
                color: '#E87700',
            }, {
                name: 'Social Sciences & Humanities <br><b>Too Expensive</b>',
                y: 1158.50,
                // drilldown: 'sshhigh',
                color: '#E55800',
            }]
        }],
        drilldown: {
            activeAxisLabelStyle: {
                cursor: 'default',
                fontWeight: 'noraml',
                textDecoration: 'none'
            },
            series: [{
                name: 'Health Sciences <br><b>Too Cheap</b>',
                id: 'hslow',
                data: [
                    [
                        'Medicine, Dentistry and related subjects',
                        24.13
                    ]
                ]
            }, {
                name: 'Health Sciences <br><b>Acceptable</b>',
                id: 'hsmid',
                data: [
                    [
                        'Medicine, Dentistry and related subjects',
                        5
                    ]
                ]
            }, {
                name: 'Health Sciences <br><b>Too Expensive</b>',
                id: 'hshigh',
                data: [
                    [
                        'Medicine, Dentistry and related subjects',
                        2.76
                    ]
                ]
            }, {
                name: 'Life Sciences <br><b>Too Cheap</b>',
                id: 'lslow',
                data: [
                    [
                        'Biological Sciences',
                        2.56
                    ]
                ]
            }, {
                name: 'Life Sciences <br><b>Acceptable</b>',
                id: 'lsmid',
                data: [
                    [
                        'Biological Sciences',
                        45
                    ]
                ]
            }, {
                name: 'Life Sciences <br><b>Too Expensive</b>',
                id: 'lshigh',
                data: [
                    [
                        'Biological Sciences',
                        900
                    ]
                ]
            }, {
                name: 'Physical Sciences <br><b>Too Cheap</b>',
                id: 'pslow',
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
                name: 'Physical Sciences <br><b>Acceptable</b>',
                id: 'psmid',
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
                name: 'Physical Sciences <br><b>Too Expensive</b>',
                id: 'pshigh',
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
                name: 'Social Sciences & Humanities <br><b>Too Cheap</b>',
                id: 'sshlow',
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
            }, {
                name: 'Social Sciences & Humanities <br><b>Acceptable</b>',
                id: 'sshmid',
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
            }, {
                name: 'Social Sciences & Humanities <br><b>Too Expensive</b>',
                id: 'sshhigh',
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