$(function() {

    var colors = ["#424240", "#9E9D99"],
        categories = ['Yes', 'No'],
        data = [{
            y: 983,
            color: colors[0],
            drilldown: {
                name: 'Yes',
                categories: ['Gold Open Access', 'Green Open Access', 'Gold or Green Open Access'],
                data: [{
                    y: 367,
                    color: '#F2BA49'
                }, {
                    y: 260,
                    color: '#92CB9C'
                }, {
                    y: 356,
                    color: '#855199'
                }]
            }
        }, {
            y: 3258,
            color: colors[1],
            drilldown: {
                name: 'No',
                categories: ['No'],
                data: [{
                    y: 3258,
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
            formatter: function() {
                return this.percentage > 1 ? '<b>' + this.point.name + '</b>' + '<br>' + Highcharts.numberFormat(this.point.percentage, 1) + '%' + '<br>' + '<b>' + this.point.y + '</b>' + ' responses' : null;
            }
        },
        series: [{
            name: 'Open Access',
            data: openAccess,
            size: '60%',
            innerSize: '40%',
            dataLabels: {
                formatter: function() {
                    return this.percentage > 1 ? this.point.name : null;
                },
                color: '#ffffff',
                distance: -50
            }
        }, {
            name: 'Type of Open Access',
            data: openAccessType,
            size: '80%',
            innerSize: '75%',
            dataLabels: {
                formatter: function() {
                    // display only if larger than 1
                    return this.percentage > 1 ? '<b>' + this.point.name + ':</b> ' + Highcharts.numberFormat(this.point.percentage, 1) + '%' : null;
                }
            }
        }]
    });

    // update the chart
    // yes, no | Yes - Gold, Yes - Green, Yes - Gold or Green, no
    var dataAll = [[983,3258],[367,260,356,3258]],
        dataHS = [[235,856],[84,61,90,856]],
        dataLS = [[177,594],[74,41,62,594]],
        dataPS = [[314,891],[122,87,105,891]],
        dataSSH = [[227,800],[75,65,87,800]];
    
    var button = document.getElementsByClassName('update');
    
    for (i = 0; i < button.length; i++) {
        button[i].onclick = function () {
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