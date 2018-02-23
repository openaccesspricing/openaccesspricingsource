$(function() {

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
            allowDecimals: true,
            min: 0,
            title: {
                text: 'Percentage of responses'
            },
            reversedStacks: false,
            labels: {
                formatter: function() {
                    return this.value + '%';
                }
            }
        },

        tooltip: {
            formatter: function() {
                return this.point.name + '<br><b>' +
                    this.series.name + '</b>' + '<br>' + this.y + '%';
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
            },
            verticalAlign: "top"
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            },
            series: {
                borderWidth: 3,
                borderRadius: 3,
                dataLabels: {
                    enabled: true,
                    inside: false,
                    formatter: function() {
                        return Highcharts.numberFormat(this.y, 0) + '%';
                    },
                    color: 'black'
                }
            }
        },

        series: [{
                name: '$2500',
                data: [{
                    name: 'Health Sciences',
                    y: 21.54,
                    // drilldown: 'hs2013open'
                }, {
                    name: 'Life Sciences',
                    y: 28.26,
                    // drilldown: 'hs2014open'
                }, {
                    name: 'Physical Sciences',
                    y: 25.23,
                    // drilldown: 'hs2015open'
                }, {
                    name: 'Social Sciences & Humanities',
                    y: 19.72,
                    // drilldown: 'hs2016open'
                }],
                stack: '$2500',
                color: '#032977'
            }, {
                name: '$3000',
                data: [{
                    name: 'Health Sciences',
                    y: 15.38,
                    // drilldown: 'hs2013other',
                }, {
                    name: 'Life Sciences',
                    y: 26.09,
                    // drilldown: 'hs2014other',
                }, {
                    name: 'Physical Sciences',
                    y: 19.63,
                    // drilldown: 'hs2015other',
                }, {
                    name: 'Social Sciences & Humanities',
                    y: 15.49,
                    // drilldown: 'hs2016other',
                }],
                stack: '$3000',
                color: '#A0C7E5'
            },
            //LIFE SCIENCES
            {
                name: '$3500',
                data: [{
                    name: 'Health Sciences',
                    y: 9.23,
                    // drilldown: 'ls2013open',
                }, {
                    name: 'Life Sciences',
                    y: 8.70,
                    // drilldown: 'ls2014open',
                }, {
                    name: 'Physical Sciences',
                    y: 11.21,
                    // drilldown: 'ls2015open',
                }, {
                    name: 'Social Sciences & Humanities',
                    y: 5.63,
                    // drilldown: 'ls2016open',
                }],
                stack: '$3500',
                color: '#1D5C56'
            }, {
                name: '$4000',
                data: [{
                    name: 'Health Sciences',
                    y: 7.96,
                    // drilldown: 'ls2013other',
                }, {
                    name: 'Life Sciences',
                    y: 6.52,
                    // drilldown: 'ls2014other',
                }, {
                    name: 'Physical Sciences',
                    y: 8.41,
                    // drilldown: 'ls2015other',
                }, {
                    name: 'Social Sciences & Humanities',
                    y: 2.82,
                    // drilldown: 'ls2016other',
                }],
                stack: '$4000',
                color: '#C6DE8C'
            },
            //PHYSICAL SCIENCES
            {
                name: '$4500',
                data: [{
                    name: 'Health Sciences',
                    y: 3.08,
                    // drilldown: 'ps2013open',
                }, {
                    name: 'Life Sciences',
                    y: 4.35,
                    // drilldown: 'ps2014open',
                }, {
                    name: 'Physical Sciences',
                    y: 4.67,
                    // drilldown: 'ps2015open',
                }, {
                    name: 'Social Sciences & Humanities',
                    y: 2.82,
                    // drilldown: 'ps2016open',
                }],
                stack: '$4500',
                color: '#800049'
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