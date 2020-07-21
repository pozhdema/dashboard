const Options = {
        chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        marginTop: -200,
        height: '500px',
    },
        title: {
        text: ''
    },
    legend: {
        layout: 'vertical',
            width: 220,
            symbolPadding: 30,
            labelFormatter: function () {
            return this.name +' ('+ this.y+'%)';
        },
        itemMarginBottom: 30,
            backgroundColor: '#FFFFFF',
            floating: true,
            itemStyle: {
            color: '#A6ACBE',
                fontWeight: 500,
                fontFamily: 'Gilroy',
                fontStyle: 'normal',
                fontSize: 14,
                lineHeight: 16,
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                enabled: false
            },
            size: 200,
                showInLegend: true,
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    series: [{
        type: 'pie',
        name: 'Students by type of studying',
        innerSize: '80%',
        colorByPoint: true,
        data: [{
            name: 'Groups of 20 students <b>20</b>',
            y: 32,
            color: '#6F52ED'
        }, {
            name: 'Groups of 10 students <b>20</b>',
            y: 32,
            color: '#FFB800'
        }, {
            name: 'Groups of 5 students <b>15</b>',
            y: 24,
            color: '#FF4C61'
        }, {
            name: 'Individual sessions <b>7</b>',
            y: 12,
            color: '#33D69F'
        }]
    }]
};

export default Options;