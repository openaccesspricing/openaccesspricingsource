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
            //Africa & Middle East
            {
                name: 'Africa & Middle East<br><b>Open Access</b>',
                id: 'AME',
                data: [{
                    name: '2013',
                    y: 288,
                }, {
                    name: '2014',
                    y: 364,
                }, {
                    name: '2015',
                    y: 556,
                }, {
                    name: '2016',
                    y: 481,
                }],
                stack: 'Africa & Middle East',
                color: '#032977'
            }, {
                name: 'Africa & Middle East<br><b>Not Open</b>',
                linkedTo: 'AME',
                data: [{
                    name: '2013',
                    y: 964,
                }, {
                    name: '2014',
                    y: 1142,
                }, {
                    name: '2015',
                    y: 1449,
                }, {
                    name: '2016',
                    y: 1442,
                }],
                stack: 'Africa & Middle East',
                color: '#A0C7E5'
            },
            //Asia
            {
                name: 'Asia<br><b>Open Access</b>',
                id: 'AS',
                data: [{
                    name: '2013',
                    y: 530,
                }, {
                    name: '2014',
                    y: 631,
                }, {
                    name: '2015',
                    y: 810,
                }, {
                    name: '2016',
                    y: 881,
                }],
                stack: 'Asia',
                color: '#1D5C56'
            }, {
                name: 'Asia<br><b>Not Open</b>',
                linkedTo: 'AS',
                data: [{
                    name: '2013',
                    y: 1917,
                }, {
                    name: '2014',
                    y: 2296,
                }, {
                    name: '2015',
                    y: 2754,
                }, {
                    name: '2016',
                    y: 2649,
                }],
                stack: 'Asia',
                color: '#C6DE8C'
            },
            //Australasia
            {
                name: 'Australasia<br><b>Open Access</b>',
                id: 'AU',
                data: [{
                    name: '2013',
                    y: 118,
                }, {
                    name: '2014',
                    y: 143,
                }, {
                    name: '2015',
                    y: 189,
                }, {
                    name: '2016',
                    y: 185,
                }],
                stack: 'Australasia',
                color: '#800049'
            }, {
                name: 'Australasia<br><b>Not Open</b>',
                linkedTo: 'AU',
                data: [{
                    name: '2013',
                    y: 448,
                }, {
                    name: '2014',
                    y: 561,
                }, {
                    name: '2015',
                    y: 607,
                }, {
                    name: '2016',
                    y: 695,
                }],
                stack: 'Australasia',
                color: '#D22938'
            },
            //Central & South America
            {
                name: 'Central & South America<br><b>Open Access</b>',
                id: 'CSA',
                data: [{
                    name: '2013',
                    y: 193,
                }, {
                    name: '2014',
                    y: 203,
                }, {
                    name: '2015',
                    y: 238,
                }, {
                    name: '2016',
                    y: 241,
                }],
                stack: 'Central & South America',
                color: '#E55800'
            }, {
                name: 'Central & South America<br><b>Not Open</b>',
                linkedTo: 'CSA',
                data: [{
                    name: '2013',
                    y: 576,
                }, {
                    name: '2014',
                    y: 611,
                }, {
                    name: '2015',
                    y: 706,
                }, {
                    name: '2016',
                    y: 787,
                }],
                stack: 'Central & South America',
                color: '#F2BA49'
            },
            //Asia
            {
                name: 'Europe<br><b>Open Access</b>',
                id: 'EU',
                data: [{
                    name: '2013',
                    y: 727,
                }, {
                    name: '2014',
                    y: 932,
                }, {
                    name: '2015',
                    y: 1171,
                }, {
                    name: '2016',
                    y: 1261,
                }],
                stack: 'Europe',
                color: '#075B81'
            }, {
                name: 'Europe<br><b>Not Open</b>',
                linkedTo: 'EU',
                data: [{
                    name: '2013',
                    y: 3246,
                }, {
                    name: '2014',
                    y: 3626,
                }, {
                    name: '2015',
                    y: 4223,
                }, {
                    name: '2016',
                    y: 4228,
                }],
                stack: 'Europe',
                color: '#B1D8CF'
            },
            //Asia
            {
                name: 'North America<br><b>Open Access</b>',
                id: 'NA',
                data: [{
                    name: '2013',
                    y: 181,
                }, {
                    name: '2014',
                    y: 224,
                }, {
                    name: '2015',
                    y: 276,
                }, {
                    name: '2016',
                    y: 317,
                }],
                stack: 'North America',
                color: '#522464'
            }, {
                name: 'North America<br><b>Not Open</b>',
                linkedTo: 'NA',
                data: [{
                    name: '2013',
                    y: 989,
                }, {
                    name: '2014',
                    y: 1071,
                }, {
                    name: '2015',
                    y: 1314,
                }, {
                    name: '2016',
                    y: 1369,
                }],
                stack: 'North America',
                color: '#BCADE2'
            }
        ]
    });

});