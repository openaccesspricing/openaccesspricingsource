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
            stack: '$2500',
            color: '#032977',
            data: [{
                name: 'Africa & Middle East',
                y: 16.67
            }, {
                name: 'Asia',
                y: 27.85
            }, {
                name: 'Australasia',
                y: 11.11
            }, {
                name: 'Central & South America',
                y: 11.11
            }, {
                name: 'Europe',
                y: 22.76
            }, {
                name: 'North America',
                y: 33.33
            }]
        }, {
            name: '$3000',
            stack: '$3000',
            color: '#A0C7E5',
            data: [{
                name: 'Africa & Middle East',
                y: 16.67
            }, {
                name: 'Asia',
                y: 24.05
            }, {
                name: 'Australasia',
                y: 11.11
            }, {
                name: 'Central & South America',
                y: 7.41
            }, {
                name: 'Europe',
                y: 17.07
            }, {
                name: 'North America',
                y: 22.22
            }]
        }, {
            name: '$3500',
            stack: '$3500',
            color: '#1D5C56',
            data: [{
                name: 'Africa & Middle East',
                y: 5.56
            }, {
                name: 'Asia',
                y: 11.39
            }, {
                name: 'Australasia',
                y: 0.00
            }, {
                name: 'Central & South America',
                y: 3.70
            }, {
                name: 'Europe',
                y: 8.94
            }, {
                name: 'North America',
                y: 14.81
            }]
        }, {
            name: '$4000',
            stack: '$4000',
            color: '#C6DE8C',
            data: [{
                name: 'Africa & Middle East',
                y: 0.00
            }, {
                name: 'Asia',
                y: 5.06
            }, {
                name: 'Australasia',
                y: 0.00
            }, {
                name: 'Central & South America',
                y: 3.70
            }, {
                name: 'Europe',
                y: 8.13
            }, {
                name: 'North America',
                y: 14.81
            }]
        }, {
            name: '$4500',
            stack: '$4500',
            color: '#800049',
            data: [{
                name: 'Africa & Middle East',
                y: 0.00
            }, {
                name: 'Asia',
                y: 3.80
            }, {
                name: 'Australasia',
                y: 0.00
            }, {
                name: 'Central & South America',
                y: 0.00
            }, {
                name: 'Europe',
                y: 4.88
            }, {
                name: 'North America',
                y: 7.41
            }]
        }]

    });
});