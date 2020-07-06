import React, {Component} from "react";
import '../style/pages/dashboard.css'
import Filter from "../component/filter";
import Controls from "../component/controls";
import Content from "../component/content";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Mark from "../component/mark";
import Studying from "../component/studying";

export default class Dashboard extends Component {
    render() {
        const options = {
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
        return (
            <div className="pages">
                <Filter/>
                <div>
                    <Controls/>
                    <div className="section">
                        <Content
                            icon='/img/person.png'
                            title="62"
                            content="Students"
                        />
                        <Content
                            icon='/img/mark.png'
                            title="6.8"
                            content="Average mark"
                        />
                        <Content
                            icon='/img/underperform.png'
                            style="ellipse-rose"
                            title="9"
                            subtitle="(14%)"
                            content="Underperforming students"
                        />
                        <Content
                            icon='/img/book.png'
                            title="83%"
                            content="Finished homeworks"
                        />
                        <div className="section-chart">
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={options}
                            />
                            <Content
                                icon='/img/cup.png'
                                title="25"
                                content="Lections left"
                            />
                            <Content
                                icon='/img/clock.png'
                                title="139"
                                content="Hours spent on lections"
                            />
                        </div>
                        <Mark/>
                        <Studying/>
                    </div>
                </div>
            </div>
        )
    }
}