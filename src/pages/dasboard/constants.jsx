import React from "react";

const Constants = {
    chart: {
        type: 'column',
    },
    title: {
        text: 'Students number change per month',
        align: 'left'
    },
    yAxis: [{
        title: {
            text: ''
        }
    }],
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.35,
            borderWidth: 0
        }
    },
    legend: {
        align: "right",
        verticalAlign: 'top',
        itemStyle: {
            color: '#A6ACBE',
            fontWeight: 500,
            fontFamily: 'Gilroy',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 16
        }
    },
    series: [
        {
            name: 'Applied',
            data: [20, 15, 25, 8, 12, 10, 17, 20, 13, 17, 23],
            color: "#6F52ED"
        },
        {
            name: 'Left',
            data: [16, 7, 14, 6, 6, 5, 15, 12, 11, 8, 15],
            color: '#FF7A00'
        }
    ]
};

export default Constants;