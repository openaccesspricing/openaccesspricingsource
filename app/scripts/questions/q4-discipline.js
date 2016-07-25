$(function() {

    var button = document.getElementsByClassName('optionbutton');

    for (i = 0; i < button.length; i++) {
        button[i].onclick = function() {
            for (j = 0; j < button.length; j++) {
                button[j].classList.remove("active");
            };
            this.classList.add("active");
        }

    }

    $('#percent').click(function() {
        var chart = $('#container').highcharts(),
            s = chart.series,
            sLen = s.length;

        for (var k = 0; k < sLen; k++) {
            s[k].update({
                stacking: 'percent'
            }, false);
        }
        chart.redraw();
    });

    $('#normal').click(function() {
        var chart = $('#container').highcharts(),
            s = chart.series,
            sLen = s.length;

        for (var i = 0; i < sLen; i++) {
            s[i].update({
                stacking: 'normal'
            }, false);
        }
        chart.redraw();
    });

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
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Number of Articles'
            },
            reversedStacks: false
        },

        tooltip: {
            formatter: function() {
                return '<b>' + this.point.name + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            itemStyle: {
                fontWeight: 'normal'
            },
            labelFormatter: function() {
                return this.name;
            },
            title: {
                style: {
                    "fontWeight": "light",
                    "fontSize": "10px"
                },
                text: "click to hide"
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            },
            series: {
                borderWidth: 3,
                borderRadius: 3,
            }
        },

        series: [
            //HEALTH SCIENCES
            {
                name: 'Health Sciences<br><b>Open Access</b>',
                data: [{
                    name: '2013',
                    y: 674,
                    // drilldown: 'hs2013open',
                }, {
                    name: '2014',
                    y: 838,
                    // drilldown: 'hs2014open',
                }, {
                    name: '2015',
                    y: 1069,
                    // drilldown: 'hs2015open',
                }, {
                    name: '2016',
                    y: 1035,
                    // drilldown: 'hs2016open',
                }],
                stack: 'Health Sciences',
                color: '#032977'
            }, {
                name: 'Health Sciences<br><b>Not Open</b>',
                data: [{
                    name: '2013',
                    y: 2339,
                    // drilldown: 'hs2013other',
                }, {
                    name: '2014',
                    y: 2638,
                    // drilldown: 'hs2014other',
                }, {
                    name: '2015',
                    y: 3254,
                    // drilldown: 'hs2015other',
                }, {
                    name: '2016',
                    y: 3017,
                    // drilldown: 'hs2016other',
                }],
                stack: 'Health Sciences',
                color: '#A0C7E5'
            },
            //LIFE SCIENCES
            {
                name: 'Life Sciences<br><b>Open Access</b>',
                data: [{
                    name: '2013',
                    y: 458,
                    // drilldown: 'ls2013open',
                }, {
                    name: '2014',
                    y: 542,
                    // drilldown: 'ls2014open',
                }, {
                    name: '2015',
                    y: 700,
                    // drilldown: 'ls2015open',
                }, {
                    name: '2016',
                    y: 779,
                    // drilldown: 'ls2016open',
                }],
                stack: 'Life Sciences',
                color: '#1D5C56'
            }, {
                name: 'Life Sciences<br><b>Not Open</b>',
                data: [{
                    name: '2013',
                    y: 1401,
                    // drilldown: 'ls2013other',
                }, {
                    name: '2014',
                    y: 1534,
                    // drilldown: 'ls2014other',
                }, {
                    name: '2015',
                    y: 1715,
                    // drilldown: 'ls2015other',
                }, {
                    name: '2016',
                    y: 1868,
                    // drilldown: 'ls2016other',
                }],
                stack: 'Life Sciences',
                color: '#C6DE8C'
            },
            //PHYSICAL SCIENCES
            {
                name: 'Physical Sciences<br><b>Open Access</b>',
                data: [{
                    name: '2013',
                    y: 446,
                    // drilldown: 'ps2013open',
                }, {
                    name: '2014',
                    y: 590,
                    // drilldown: 'ps2014open',
                }, {
                    name: '2015',
                    y: 744,
                    // drilldown: 'ps2015open',
                }, {
                    name: '2016',
                    y: 802,
                    // drilldown: 'ps2016open',
                }],
                stack: 'Physical Sciences',
                color: '#800049'
            }, {
                name: 'Physical Sciences<br><b>Not Open</b>',
                data: [{
                    name: '2013',
                    y: 2635,
                    // drilldown: 'ps2013other',
                }, {
                    name: '2014',
                    y: 3008,
                    // drilldown: 'ps2014other',
                }, {
                    name: '2015',
                    y: 3537,
                    // drilldown: 'ps2015other',
                }, {
                    name: '2016',
                    y: 3580,
                    // drilldown: 'ps2016other',
                }],
                stack: 'Physical Sciences',
                color: '#D22938'
            },
            //SOCIAL SCIENCE & HUMANITIES
            {
                name: 'Social Sciences & Humanities<br><b>Open Access</b>',
                data: [{
                    name: '2013',
                    y: 422,
                    // drilldown: 'ssh2013open',
                }, {
                    name: '2014',
                    y: 479,
                    // drilldown: 'ssh2014open',
                }, {
                    name: '2015',
                    y: 659,
                    // drilldown: 'ssh2015open',
                }, {
                    name: '2016',
                    y: 673,
                    // drilldown: 'ssh2016open',
                }],
                stack: 'Social Sciences & Humanities',
                color: '#E55800'
            }, {
                name: 'Social Sciences & Humanities<br><b>Not Open</b>',
                data: [{
                    name: '2013',
                    y: 1581,
                    // drilldown: 'ssh2013other',
                }, {
                    name: '2014',
                    y: 1903,
                    // drilldown: 'ssh2014other',
                }, {
                    name: '2015',
                    y: 2248,
                    // drilldown: 'ssh2015other',
                }, {
                    name: '2016',
                    y: 2386,
                    // drilldown: 'ssh2016other',
                }],
                stack: 'Social Sciences & Humanities',
                color: '#F2BA49'
            }
        ],

        //drill downs!
        drilldown: {
            activeAxisLabelStyle: {
                cursor: 'default',
                fontWeight: 'noraml',
                textDecoration: 'none'
            },
            series: [
                //HEALTH SCIENCES OPEN ACCESS
                {
                    name: '2013<br>Health Sciences<br>Open Access Articles',
                    id: 'hs2013open',
                    data: [
                        [
                            'Medicine, Dentistry and related subjects',
                            3
                        ]
                    ]
                }, {
                    name: '2014<br>Health Sciences<br>Open Access Articles',
                    id: 'hs2014open',
                    data: [
                        [
                            'Medicine, Dentistry and related subjects',
                            5
                        ]
                    ]
                }, {
                    name: '2015<br>Health Sciences<br>Open Access Articles',
                    id: 'hs2015open',
                    data: [
                        [
                            'Medicine, Dentistry and related subjects',
                            5
                        ]
                    ]
                }, {
                    name: '2016<br>Health Sciences<br>Open Access Articles',
                    id: 'hs2016open',
                    data: [
                        [
                            'Medicine, Dentistry and related subjects',
                            2
                        ]
                    ]
                },
                //HEALTH SCIENCES OTHER
                {
                    name: '2013<br>Health Sciences<br>Not Open Articles',
                    id: 'hs2013other',
                    data: [
                        [
                            'Medicine, Dentistry and related subjects',
                            3
                        ]
                    ]
                }, {
                    name: '2014<br>Health Sciences<br>Not Open Articles',
                    id: 'hs2014other',
                    data: [
                        [
                            'Medicine, Dentistry and related subjects',
                            5
                        ]
                    ]
                }, {
                    name: '2015<br>Health Sciences<br>Not Open Articles',
                    id: 'hs2015other',
                    data: [
                        [
                            'Medicine, Dentistry and related subjects',
                            5
                        ]
                    ]
                }, {
                    name: '2016<br>Health Sciences<br>Not Open Articles',
                    id: 'hs2016other',
                    data: [
                        [
                            'Medicine, Dentistry and related subjects',
                            2
                        ]
                    ]
                },
                //LIFE SCIENCES OPEN ACCESS
                {
                    name: '2013<br>Life Sciences<br>Open Access Articles',
                    id: 'ls2013open',
                    data: [
                        [
                            'Biological Sciences',
                            3
                        ]
                    ]
                }, {
                    name: '2014<br>Life Sciences<br>Open Access Articles',
                    id: 'ls2014open',
                    data: [
                        [
                            'Biological Sciences',
                            5
                        ]
                    ]
                }, {
                    name: '2015<br>Life Sciences<br>Open Access Articles',
                    id: 'ls2015open',
                    data: [
                        [
                            'Biological Sciences',
                            5
                        ]
                    ]
                }, {
                    name: '2016<br>Life Sciences<br>Open Access Articles',
                    id: 'ls2016open',
                    data: [
                        [
                            'Biological Sciences',
                            2
                        ]
                    ]
                },
                //LIFE SCIENCES OTHER
                {
                    name: '2013<br>Life Sciences<br>Not Open Articles',
                    id: 'ls2013other',
                    data: [
                        [
                            'Biological Sciences',
                            3
                        ]
                    ]
                }, {
                    name: '2014<br>Life Sciences<br>Not Open Articles',
                    id: 'ls2014other',
                    data: [
                        [
                            'Biological Sciences',
                            5
                        ]
                    ]
                }, {
                    name: '2015<br>Life Sciences<br>Not Open Articles',
                    id: 'ls2015other',
                    data: [
                        [
                            'Biological Sciences',
                            5
                        ]
                    ]
                }, {
                    name: '2016<br>Life Sciences<br>Not Open Articles',
                    id: 'ls2016other',
                    data: [
                        [
                            'Biological Sciences',
                            2
                        ]
                    ]
                },
                //PHYSICAL SCIENCES OPEN ACCESS
                {
                    name: '2013<br>Physical Sciences<br>Open Access Articles',
                    id: 'ps2013open',
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
                    name: '2014<br>Physical Sciences<br>Open Access Articles',
                    id: 'ps2014open',
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
                    name: '2015<br>Physical Sciences<br>Open Access Articles',
                    id: 'ps2015open',
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
                    name: '2016<br>Physical Sciences<br>Open Access Articles',
                    id: 'ps2016open',
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
                },
                //PHYSICAL SCIENCES OTHER
                {
                    name: '2013<br>Physical Sciences<br>Not Open Articles',
                    id: 'ps2013other',
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
                    name: '2014<br>Physical Sciences<br>Not Open Articles',
                    id: 'ps2014other',
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
                    name: '2015<br>Physical Sciences<br>Not Open Articles',
                    id: 'ps2015other',
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
                    name: '2016<br>Physical Sciences<br>Not Open Articles',
                    id: 'ps2016other',
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
                },
                //SOCIAL SCIENCES & HUMANITIES OPEN ACCESS
                {
                    name: '2013<br>Social Sciences & Humanities<br>Open Access Articles',
                    id: 'ssh2013open',
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
                    name: '2014<br>Social Sciences & Humanities<br>Open Access Articles',
                    id: 'ssh2014open',
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
                    name: '2015<br>Social Sciences & Humanities<br>Open Access Articles',
                    id: 'ssh2015open',
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
                    name: '2016<br>Social Sciences & Humanities<br>Open Access Articles',
                    id: 'ssh2016open',
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
                },
                //SOCIAL SCIENCES & HUMANITIES OTHER
                {
                    name: '2013<br>Social Sciences & Humanities<br>Not Open Articles',
                    id: 'ssh2013other',
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
                    name: '2014<br>Social Sciences & Humanities<br>Not Open Articles',
                    id: 'ssh2014other',
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
                    name: '2015<br>Social Sciences & Humanities<br>Not Open Articles',
                    id: 'ssh2015other',
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
                    name: '2016<br>Social Sciences & Humanities<br>Not Open Articles',
                    id: 'ssh2016other',
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
                }
            ]
        }

    });
});