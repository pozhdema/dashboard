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
                        height='22'
                        width='24'
                        href='data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAEcklEQVRIiY1UXWgcVRQ+d/52ZnaTbNYNCWSjm7KIRtpaVynig2urxGgbApKAfbJIzItgEcUXxX2pKIS0pYJQbLSCQUgJTUujFaqhklSD6Q800ditxk1C0vx0x5CdmZ25M1fO7Cw0Mdk4cODOPed+3/knsM13pC0Xdjl4iwB7DYDFPWtCbjAgX3IOnDl+rlorh1CW4M2DC428KP4AAPEtTKYVmX/i475wbisMbisFY4wIkvAhgjNws2vmbMuJgQdCKHph/kUAN4s63aDHyjm6qQLBu17K7FCUSMZzc/nyrsErHXO+PYrburcv1ljffBP1uX8y0a8u772HT/9PBIQQwhFJ2oM/rmOPDF7pWFRVVQYAlADK+V8OLVC3MIo2oVD9c6lUikfHtiVgzHOC5xhrxIPt6JMAIOq6zvv2nKIoAgBIDjUnPI8YaxweHubQs+0IPO/xnjAS8Qhcfc0HdQGAohiG4SiKQnwdMOaibckBUo6gdMczcEnxhwNVVRHUBoBCVVWVCQA2IcTh/OdoW1NTwyeTye0j8IWzaH7Wy5Wg1Ou6TsPhsIUEqqoWAMDSdd0WxYpH0Ua3lieXlpa48fHx8hGk02lIJBIkEomQ2cURr4CSUNEMAI4oipgee35+3qqtrcWzw3OBx9Amr0/PbZaeTQkymQzBbrg03jVHXfMqAVLVeeD2G4FAwMH2xIyIouh2HrjdxRG+wWV09uxP7RMbslC2Bl4bBYNBWNSu9eBZkarfe6Hp3K4SwPM7B3erUuQj/FnNZ3s29P+6WfhPBGiQy+VYPp9n/cMHr+qFe6cxispQ43elNFQqD33j5d5c6Dnz/VP9Pqi77aCl0+mSARq77amhpxWpsrnolruK3RWLxQTGvDPIgWjHof0/ot6NRqPMJ1hHsrEo+M93vvzb/oBU/QFPxGc8NubM3Ll7sXVo9PCfCNDy5OeJhxtaB4HwDUU9vUVp/uRnF3Z84c8K25TgSFvucZc4xwkhz0JxgFZ1c7535NbR03+vXFjRdd3yH0sor7fcfFuV617hiBDzIaYd3t73aX/dX+sIsGve7bgbtx3xGgCEcXuahZVTv/5xdGBypt8wTZwtwEGz/DeCLMuSaZpEURT6amqsrUKpeweAexAANJea+06er7/u1QB3D+4HyxEwvLDrFL7+eeKT1KmLj/ROzvTnEUSWZZzm++vDTNNkeG8YBun9dufZEwM1exyn0IcYRAgcK9WX83cPT6CYljtLl7rHproNvPM9dwghNk4uRhEOh6kfjW2apiPLshcRpmzs9573i2khu0uLkWtvbyf3d9PQ6OFFf1viPQ6XZRgGrgdvRWiahmlCQXYLSbxZURRxbKrb8wijQFLERhAsmIhdp6pqwF/LnuehUMgWBMHWNM1OJBI0k8lgekrtjW+EUCgkrq2t4Rk3LqbMcwodampqsvh4PC5qmoYGkiAIAqWUBYNBatu2ZVlWIRqN2rFYjE5NTeFDFK/Xk8mky/M8W15eLpESSjF7xcaJRCJONpt1/gVHnwMEl1pgWgAAAABJRU5ErkJggg=='
                        title="62"
                        content="Students"
                    />
                    <Block
                        x='2'
                        y='7'
                        height='10'
                        width='20'
                        href='data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAAtklEQVQoka2QwQ2CQBBF/2wFlICxCOPRk7EKa7AD6IAWrMJ48mgswkgJNOB+MwhkgF3Wg//45+XNZAR/SH655yK4qSkoXF8fR493BUrjxBXP/eYcW2tkOYDahSBPX4CSKeTB6lcZid1MqFAHfENmXZeU1Yft+EL7CxvtrDQmG/0wBKGTpbpeNgiXNk5mNjNZK1ySTa5/2Y7EasppXEqmaTthY6sQ1wp7ICYbLvJyUk7FJMogBOAD8k2AYc+i8akAAAAASUVORK5CYII='
                        title="6.8"
                        content="Average mark"
                    />
                    <Block
                        x='1'
                        y='5'
                        height='13'
                        width='21'
                        href='data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAANCAYAAABGkiVgAAAArklEQVQ4ja3TzQ3CMAwF4Peg7NFVuDEGozEGt45C9kAlyE5SERyHotZSe2n8xT8qJOLlOsqDnYKKnTgp94xn3m9hK33Q90vKheK9itd2xHIYR04gRhChVfE/HbFKcuAFlG5SVvNig3qwfihgRMhZbkcGbcLI8xZwzpf8GJVBDZxQBatxdOAmWiVKzM7ivkc18NFFl0Q55CzEwHmRXXRNmFEBGLaipeXPSH/UngHgDdsie7x8WBYXAAAAAElFTkSuQmCC'
                        styles="ellipse-rose"
                        title="9"
                        subtitle="(14%)"
                        content="Underperforming students"
                    />
                    <Block
                        x='4'
                        y='2'
                        height='20'
                        width='16'
                        href='data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAAAqklEQVQ4je2UsQ0CMRAE5ywniIQSKAE6IASJADqhBDr4EhAdkPGhO6AFSiBBcgAcupcsfQT2OyFgE29ws5Kl2xOA5VmnXjggzFAmFEg62HEpBZO8FxqDVTneI7uwlVsOuG5V7XXAxswT9rlwXy75diXXIV9wGTP/gJ8PkLRRQBjSBd/zC/TD5LeAmi50qu5CjBTDKSCYGY9o7DaUBlQfFGc1fryYI5yKaeANyTE8ZEW+8roAAAAASUVORK5CYII='
                        title="83%"
                        content="Finished homeworks"
                    />
                    <div className="section-chart">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={Constants}
                        />
                        <Block
                            x='1'
                            y='1'
                            height='21'
                            width='22'
                            href='data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAABXUlEQVQ4jbWVzV3CQBDF/xM94A07gAoMHXAMN61AS4AKwAqgA7AC8GLgRgfQASmBmzmx/nZYFZKNgQjvtjszb97M7IeQgZmzARrZ/RIkEtE8dAk8/ueSemNuizwlIleND2aO8e0rsYlpIIwRQr/byQlmGHrSIRElDVhhqF9EsbBlRytAGCqp4Y1P7qvptRloKocVKIzt8B6daSBPbKvy2vJJ6TrVYaDSLdLqpD+ouXYa6gGGtS7uGGq/K8JMtQV9R/x+veFpb3a0EGZHAdPjRKXYt3RpuZTTo2BjVZiYdqnamLb6LlhlbfkrbY/MvqT+CSqfXcy6nDhl5Mpqm0UxubO9qK/hNZ/TFxRrwNgtJ7YK6bDUvtcIXTXfrepJxOgkYiX/oMsN/expOYi007fvwsRv/gPuXA8QHoDQeSY6h5TRf27qbwV2+gVPpA++h/4i8A/vvO8p9y1ZXEcx8AUm7oRm1FnarwAAAABJRU5ErkJggg=='
                            styles="ellipse-yellow"
                            title="25"
                            content="Lections left"
                        />
                        <Block
                            x='1'
                            y='1'
                            height='22'
                            width='22'
                            href='data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAACJklEQVQ4jaWVUVITQRCGvx7AMopVuYHJCVxOYPJkQKoIXEA9gdwAuIGeQDwBoSoYtMrKcgJyA3OEPBCXApO2ejIDScgmUfollZ2Zb3v+/rtXyInKiRafF3gv8FohESjZToWuQHeofB1Cer4p3VmEB2ADrj/jI7CPUsx78RjhsPlGjuaCay0trQltDdkBqWX2BNJGyGzrhyYMSJxjB6UeIN1bpTqevcyC+usqH5qbksb17XNV+23WZOLMitA2mabhLm4ag3b6GRvj0LwwyFrGBtCxs8YwKe/A29/1IGbaz6imu9JbqG2Ixq70VjOqdtYY60/Z91LYdVaFX/bnj1LOq/IsKSbWW1pBaCP0rn5Tdg4qtqDKaR50mQjSpeYks6lzwjsPhsb/QmOYgxjBKu7OWkM6jwZbxlY44ZWLHfXtrSwFtprkrUUpLVmXt2k6rOoEW86Dx3DxwN5PfTlv40DvLZUH3zrThNCJJoWX4PqG6jywXXMh3OHBGsAX/llwx2PgTtghuMOtZBybqW2weZP/A3w49jy8wA8lc4ezlmTIZ6+N8CX2+jLwQRg6dsayZ6TDkT3z7Vk/0eJtgUu5H0JLzws/vwsemtgtzmpSJg4hyzpeTyB5UeByGUuZdLY3Qo0R1x4M+jhfw6PGUDm1rowNVG9p6QYqodijOROgMwf9VCaHCAcLdRB8fa6u+TQtXe7H1LK3yWeZmbUmPqZCR5WLfsbxzFoAfwF8VyoiS0VuOwAAAABJRU5ErkJggg=='
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