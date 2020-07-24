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
import block from './const'

const Dashboard = () => {

    let blockSize = block.map((block, index) => {
        return (
            <Block
                key={index}
                icon={block.icon}
                styles={block.styles}
                title={block.title}
                subtitle={block.subtitle}
                content={block.content}
            />
        )
    });

    return (
        <div className="content">
            <>
                <Controls/>
                <div className='section-row'>
                    {blockSize}
                </div>
                <div className="section-row">
                    <div className='section-block'>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={Constants}
                        />
                        <Block
                            blockLast='block-last'
                            icon='/img/cup.png'
                            styles="ellipse-yellow"
                            title="25"
                            content="Lections left"
                        />
                        <Block
                            blockLast='block-last'
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
};

export default Dashboard;