import React from "react";
import './dashboard.css'
import '../../modules/content/content.css'
import Controls from "../../modules/controls/controls";
import Block from "../../modules/block/block";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Mark from "../../modules/mark/mark";
import Studying from "../../modules/studying/studying";
import Constants from './constants'

export default function Dashboard() {
    return (
        <div className="pages">
            <>
                <Controls/>
                <div className="section">
                    <Block
                        icon='/img/person.png'
                        title="62"
                        content="Students"
                    />
                    <Block
                        icon='/img/mark.png'
                        title="6.8"
                        content="Average mark"
                    />
                    <Block
                        icon='/img/underperform.png'
                        styles="ellipse-rose"
                        title="9"
                        subtitle="(14%)"
                        content="Underperforming students"
                    />
                    <Block
                        icon='/img/book.png'
                        title="83%"
                        content="Finished homeworks"
                    />
                    <div className="section-chart">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={Constants}
                        />
                        <Block
                            icon='/img/cup.png'
                            styles="ellipse-yellow"
                            title="25"
                            content="Lections left"
                        />
                        <Block
                            icon='/img/clock.png'
                            title="139"
                            content="Hours spent on lections"
                        />
                    </div>
                    <Mark/>
                    <Studying/>
                </div>
            </>
        </div>
    )
}