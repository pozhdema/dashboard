import React, {Component} from "react";
import '../style/component/studying.css'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default class Studying extends  Component{
    render() {
        const options = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false,
                height: '400px',
            },
            title: {
                text: '',
                align: 'center',
            },
            legend: {
                layout: 'vertical',
                backgroundColor: '#FFFFFF',
                floating: true,
                itemStyle: {
                    color: '#A6ACBE',
                    fontWeight: 500,
                    fontFamily: 'Gilroy',
                    fontStyle: 'normal',
                    fontSize: 14,
                    lineHeight: 16
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
            series: [{
                type: 'pie',
                name: 'Students by type of studying',
                innerSize: '80%',
                colorByPoint: true,
                data: [{
                    name: 'Groups of 20 students',
                    y: 20,
                    color: '#6F52ED'
                }, {
                    name: 'Groups of 10 students',
                    y: 20,
                    color: '#FFB800'
                }, {
                    name: 'Groups of 5 students',
                    y: 15,
                    color: '#FF4C61'
                }, {
                    name: 'Individual sessions',
                    y: 7,
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
                    />
                </div>
            </div>
        )
    }
}