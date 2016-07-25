$(function() {

    var colors = ["#522464", "#424240", "#9E9D99"],
        categories = ['Yes', 'No', 'I do not know'],
        data = [{
            y: 2236,
            color: colors[0],
            drilldown: {
                name: 'Yes',
                categories: ['Yes', 'No'],
                data: [{
                    y: 694,
                    color: '#855199'
                }, {
                    y: 1542,
                    color: '#BCADE2'
                }]
            }
        }, {
            y: 606,
            color: colors[1],
            drilldown: {
                name: 'No',
                categories: ['No'],
                data: [{
                    y: 606,
                    color: '#424240'
                }],
            }
        }, {
            y: 695,
            color: colors[2],
            drilldown: {
                name: 'I do not know',
                categories: ['I do not know'],
                data: [{
                    y: 695,
                    color: '#9E9D99'
                }],
            }
        }],
        openAccess = [],
        openAccessType = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;

    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {

        // add browser data
        openAccess.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });

        // add version data
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2 - (j / drillDataLen) / 5;
            openAccessType.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j].y,
                color: data[i].drilldown.data[j].color
            });
        }
    }

    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'pie',
            style: {
                fontFamily: '"Open Sans", sans-serif',
                fontSize: '16px'
            }
        },
        title: {
            text: null
        },
        yAxis: {
            title: {
                text: 'Total percent'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
            valueSuffix: '%',
            formatter: function() {
                return this.series.name + "<br>" + this.point.name + ": <strong>" + Highcharts.numberFormat(this.point.percentage, 1) + "%</strong>" + "<br>" + "Responses: " + this.y
            }
        },
        series: [{
            name: 'Was Open Access offered?',
            data: openAccess,
            size: '60%',
            innerSize: '30%',
            dataLabels: {
                formatter: function() {
                    return this.percentage > 1 ? this.point.name : null;
                },
                color: '#ffffff',
                distance: -50
            }
        }, {
            name: 'Did you use Open Access for your last article?',
            data: openAccessType,
            size: '80%',
            innerSize: '60%',
            dataLabels: {
                formatter: function() {
                    // display only if larger than 1
                    return this.percentage > 1 ? '<b>' + this.point.name + ':</b> ' + Highcharts.numberFormat(this.point.percentage, 1) + '%' : null;
                }
            }
        }]
    });

    // update the chart

    var dataAll = [
            [2236, 606, 695],
            [694, 1542, 606, 695]
        ],
        dataHI = [
            [789, 186, 262],
            [190, 599, 186, 262]
        ],
        dataMI = [
            [1118, 311, 333],
            [342, 776, 311, 333]
        ],
        dataLI = [
            [229, 78, 88],
            [89, 140, 78, 88]
        ],
        dataNI = [
            [54, 26, 6],
            [38, 16, 26, 6]
        ],
        dataNJ = [
            [46, 5, 6],
            [35, 11, 5, 6]
        ];
    

    var button = document.getElementsByClassName('update');

    for (i = 0; i < button.length; i++) {
        button[i].onclick = function() {
            for (j = 0; j < button.length; j++) {
                button[j].classList.remove("active");
            };
            this.classList.add("active");
            var dataset = eval(this.getAttribute('value'));
            var chart = $('#container').highcharts();
            chart.series[0].setData(dataset[0]);
            chart.series[1].setData(dataset[1]);
        }

    }

});