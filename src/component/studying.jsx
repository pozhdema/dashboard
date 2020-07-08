import React, {Component} from "react";
import '../style/component/studying.css'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default class Studying extends  Component{
    mortarboard = (chart) => {
        let textX = chart.plotLeft + (chart.series[0].center[0]);
        let textY = chart.plotTop + (chart.series[0].center[1]);

        chart.renderer.image(
            '/img/mortarboard.png',
            textX - 15,
            textY - 15,
            30,
            30
        ).add();
    };
    render() {
        const options = {
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
                width: 300,
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
                    name: 'Groups of 20 students '+'<b>20</b>',
                    y: 32,
                    color: '#6F52ED'
                }, {
                    name: 'Groups of 10 students '+'<b>20</b>',
                    y: 32,
                    color: '#FFB800'
                }, {
                    name: 'Groups of 5 students '+'<b>15</b>',
                    y: 24,
                    color: '#FF4C61'
                }, {
                    name: 'Individual sessions '+'<b>7</b>',
                    y: 12,
                    color: '#33D69F'
                }]
            }]
        };


        return(
            <div className="mark studying">
                <div className="mark-nav studying-header">
                    <p className="mark-nav-caption">Students by type of studying</p>
                </div>
                <div className="studying-content">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                        callback={this.mortarboard}
                    />
                </div>
            </div>
        )
    }
}