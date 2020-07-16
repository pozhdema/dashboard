import React from "react";
import './block.css'

const Block = ({styles ,x, y, width, height, href, title, subtitle, content}) => (
    <div className="content">
        <div className="ellipse" id={styles}>
            <svg xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
                <image id="Шар_1" data-name="Шар 1" x={x} y={y} width={width} height={height} href={href}/>
            </svg>
        </div>
        <div className="content-title">
            <h4>{title}<span>{subtitle}</span></h4>
            <span>{content}</span>
        </div>
    </div>
);

export default Block