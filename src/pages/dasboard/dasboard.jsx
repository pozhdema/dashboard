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
    const block = [
        {
            icon: '/img/person.png',
            title: '62',
            content: 'Students'
        },
        {
            icon: '/img/mark.png',
            title: '6.8',
            content: 'Average mark'
        },
        {
            icon: '/img/underperform.png',
            styles: 'ellipse-rose',
            title: '9',
            subtitle: '(14%)',
            content: 'Underperforming students'
        },
        {
            icon: '/img/book.png',
            styles: '',
            title: '83%',
            content: 'Finished homeworks'
        }
    ];
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
                <div className="section">
                    <div className='section-row'>
                        {blockSize}
                    </div>
                    <div className="section-row section-chart">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={Constants}
                        />
                        <Mark/>
                        <Studying/>
                        <Block
                            blockLast='block-first'
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
                </div>
            </>
        </div>
    )
}