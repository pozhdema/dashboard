import React, {Component} from "react";
import './studying.css'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Options from "./constants";

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
        return(
            <div className="mark studying">
                <div className="mark-nav studying-header">
                    <p className="mark-nav-caption">Students by type of studying</p>
                </div>
                <div className="studying-content">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={Options}
                        callback={this.mortarboard}
                    />
                </div>
            </div>
        )
    }
}