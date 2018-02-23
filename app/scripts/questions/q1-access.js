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
                    name: 'OnlineOpen',
                    y: 14.89
                }],
                stack: '$2500',
                color: '#032977'
            }, {
                name: '$3000',
                data: [{
                    name: 'OnlineOpen',
                    y: 8.35
                }],
                stack: '$3000',
                color: '#A0C7E5'
            },
            //LIFE SCIENCES
            {
                name: '$3500',
                data: [{
                    name: 'OnlineOpen',
                    y: 6.04
                }],
                stack: '$3500',
                color: '#1D5C56'
            }, {
                name: '$4000',
                data: [{
                    name: 'OnlineOpen',
                    y: 3.64
                }],
                stack: '$4000',
                color: '#C6DE8C'
            },
            //PHYSICAL SCIENCES
            {
                name: '$4500',
                data: [{
                    name: 'OnlineOpen',
                    y: 2.81
                }],
                stack: '$4500',
                color: '#800049'
            }
        ]

    });
});