import React, {useState} from "react";
import './header.css'

function Header() {
    const [search, setSearch] = useState('');

    return (
        <div className="filter">
            <div className="search">
                <i className="font-search">
                    <svg xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" width="18" height="18"
                         viewBox="0 0 18 18">
                        <image id="Шар_1" data-name="Шар 1" width="18" height="18"
                               href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABhUlEQVQ4jZ2ST07CQBTGvzc0oUtuYFlCMLEawcaFcBL0BOARPIFwA7wBNwAXpv6J1EQiO8MRupMamGfe2DRApkT8Ngwzr7/3zTePsKbw5b2pnEIHjCaAEoAYhLFervrB6eEYO5SBnqKPWzC6uaWEXsOvXucdqy1IrJlvdJKUG8dV0kRl+W+cMbqmLq+PuU6hMJLi5VK3zuu1t+2ih+fpkeMoqSnp1aplu6YymQDQzH0bRCT7cm46F5T1+ioNFvhWgzzbaUtzTqALO+j3dRAElfkuTuBn56U8UCyLyeTzYBcojCIvXcZ2EMEEl/DX1S6QA7ctvwy+t4Jk2MyCqCOvYyuSfc1sQuaV7tlqzEA+vk57REpeL1ZEveVicRcE/jwMI89x3XYKKRHRoO5XrM6zyV6DWSUQZr4EMNdJ0pJGmxmlOjupdWXYwBiuBSoTPZT91Il87KlicSRurY7+ojCaeYpZJtzbdrYXSJQH2xuUB8sy2kcy5ZqolWYGwP0PZtNZGM48APgB4I7Bsoa+g98AAAAASUVORK5CYII="/>
                    </svg>
                </i>
                <input
                    type="text"
                    onChange={(event) => setSearch(event.target.value)}
                    name="search"
                    value={search}
                    className="input-search"
                    placeholder="Search..."
                />
            </div>
            <div className="lecturer">
                <div className="lecturer-over">
                    <div className="lecturer-block">
                        <p>Cody Simmmons</p>
                        <span>Lecturer</span>
                    </div>
                    <div className="lecturer-img"></div>
                </div>
                <a className="lecturer-font" href="someValidPath">
                    <svg xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" width="14" height="8"
                         viewBox="0 0 14 8">
                        <image id="Шар_1" data-name="Шар 1" width="14" height="8"
                               href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAICAYAAADJEc7MAAAAeklEQVQYlX3PrRKAIBAE4L0r+BhUo5HIkxsZizSN8hoUcPB/8HTr7jdzR8M4LQCQYrTGdAE/cd5rzqovCz5mmpXqnfP6iz3QtuFEZAGEP1yhkCJZ2otZc86P4j5bQsa0YYNfGA0gobK/oITP/2v0ggIueSERVhgSAoAV8YpjQUMOiqsAAAAASUVORK5CYII="/>
                    </svg>
                </a>
            </div>
            <div className="notifications">
                <span className="notifications-line"></span>
                <ul className="notifications-nav">
                    <li>
                        <a className="notifications-font" href="someValidPath">
                            <svg xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" width="24"
                                 height="24" viewBox="0 0 24 24">
                                <image id="Шар_1" data-name="Шар 1" x="2" y="1" width="20" height="22"
                                       href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAB2klEQVQ4jdWUsW4TQRCG/1lDbEVCSRTor06EhIkQpEueIIgXcN7A4QnI1RTx8QLYFZ1JTZXOOOCsA5GBhoQHQHE6O/HNoFmvLNl3Pk4RDSOdZnU3882/s7dDmGPW2uURSlUGdiESaBQRuoB048F1+O51UCHwns+uR83Vly4mDffZfqvEIjUAy2nfOx/u4cfx4tQ7AYdvmg/2zWzwsf1ejUXqCiPgiON4e4GGK08fr5GuGWj8/FJKFCGYakJhy9rASNEqjEXCzY31/TSF1Re/L1PU96Pm6sqUQsLCK6eMqD4P5rcXJRSKNNRPA4UeqY9Ho8Y8mJr2SkSiuyWGPgQOa+/v7yW23D7piXrtVxYQ/i+4luLlbHziUPJauVzup4VOgFrxFtz+bO4EeHODwC+7eWlCY6DI0lICKKYwvg2+ah4jX3zAg3ISSGZLPQtOcytk/uUghK0EkMjsjIPiw/xAORznYmcK2Oqc7QKuhxebTx4e5QX6WG1R0Pr01ak07rqR0RsCFg7zwiYqfY4pFN7qaVP7pHfu1f0Lu7j1j/3/WuYQaNveAQTPeTjcRgnQWSmC8NnGmk7zVLuTBWSWK0MUmGLxHG4OOcs8wL+OqY+dsxqRqbgCIlHW4AWAP6TgvqHIIibJAAAAAElFTkSuQmCC"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a className="notifications-font" href="someValidPath">
                            <svg xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink"
                                 width="24" height="24" viewBox="0 0 24 24">
                                <image id="Шар_1" data-name="Шар 1" x="2" y="2" width="20" height="20"
                                       href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAA50lEQVQ4ja2UMQ6CMBSG/zYkrB4BRnRCB9ORm3gEbwA3MJ6IkRCjncRRjuDK0po2kIhSI69+UwnJl//n9cEA4CRvudJ6D2CBMe12vYwxg6CWzaGX/YUAGjsjUh2LhUhaXykfav5DBpuQQH1p7rCtukyIdBSEe4SJeBiWVSUjb6FiLDM3YEpKEoo0aV1ScmWX1DmU/sNHrvcWrV+frNRnKJM4E/6ycpWUEddh2TdpVccycsIpmVkOktAlA3XKLhlZ2PMhA3WXvw3MJHyYw/tOUmHV+VpwxnJXrbl/bC42q0JrdRySegHgCRY8bmk2DObCAAAAAElFTkSuQmCC"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Header