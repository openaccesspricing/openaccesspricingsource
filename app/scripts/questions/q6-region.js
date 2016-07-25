$(function() {

    var colors = ["#522464", "#424240", "#9E9D99"],
        categories = ['Yes', 'No', 'I do not know'],
        data = [{
            y: 2365,
            color: colors[0],
            drilldown: {
                name: 'Yes',
                categories: ['Yes', 'No'],
                data: [{
                    y: 763,
                    color: '#855199'
                }, {
                    y: 1602,
                    color: '#BCADE2'
                }]
            }
        }, {
            y: 639,
            color: colors[1],
            drilldown: {
                name: 'No',
                categories: ['No'],
                data: [{
                    y: 639,
                    color: '#424240'
                }],
            }
        }, {
            y: 785,
            color: colors[2],
            drilldown: {
                name: 'I do not know',
                categories: ['I do not know'],
                data: [{
                    y: 785,
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
            [2365, 639, 785],
            [763, 1602, 639, 785]
        ],
        dataAME = [
            [269, 92, 97],
            [94, 175, 92, 97]
        ],
        dataAS = [
            [595, 212, 140],
            [213, 382, 212, 140]
        ],
        dataAU = [
            [108, 41, 57],
            [24, 84, 41, 57]
        ],
        dataCSA = [
            [182, 34, 42],
            [58, 124, 34, 42]
        ],
        dataEU = [
            [926, 173, 314],
            [291, 635, 173, 314]
        ],
        dataNA = [
            [285, 87, 135],
            [83, 202, 87, 135]
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