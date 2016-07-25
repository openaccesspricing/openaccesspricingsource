$(function() {

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
            data: [{
                name: "yes",
                y: 2942,
                color: '#855199'
            }, {
                name: "no",
                y: 1185,
                color: '#BDBBB7'
            }],
            size: '80%',
            innerSize: '50%',
            dataLabels: {
                formatter: function() {
                    return this.percentage > 1 ? this.point.name + '<br>' + Highcharts.numberFormat(this.point.percentage, 1) + '%' : null;
                },
                distance: 20
            }
        }]
    });

    // update the chart

    var dataAll = [2942, 1185],
        dataHS = [850, 249],
        dataLS = [603, 171],
        dataPS = [745, 467],
        dataSSH = [744, 298];

    var button = document.getElementsByClassName('update');

    for (i = 0; i < button.length; i++) {
        button[i].onclick = function() {
            for (j = 0; j < button.length; j++) {
                button[j].classList.remove("active");
            };
            this.classList.add("active");
            var dataset = eval(this.getAttribute('value'));
            var chart = $('#container').highcharts();

            chart.series[0].update({
                name: 'new title'
            });
            chart.series[0].setData(dataset);
        }

    }

});