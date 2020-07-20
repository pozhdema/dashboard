import React from "react";
import './block.css'

const Block = ({styles, icon, title, subtitle, content, blockLast}) => (
    <div className="block" id={blockLast}>
        <img src={icon} alt='icon' id={styles} className='icon'/>
        <div className="content-title">
            <h4 data-sub={subtitle}>{title}</h4>
            <span>{content}</span>
        </div>
    </div>
);

export default Block