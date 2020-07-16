import React, {Component} from "react";
import './nav.css'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    state = {
        activeLinkId: "1"
    };

    select = (event) => {
        this.setState({
            activeLinkId: event
        })
    };

    render() {
        const elem = [
            {
                Link: '/folder',
                id: '0',
                x: '1',
                y: '3',
                width: '22',
                height: '18',
                href: 'data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAYAAABfJS4tAAAA+ElEQVQ4je2UvU4CURCFzxmWSCImtFBZYW3iA9BamEBpB4WlicQH4BFWGioTpTCUFHZUPICNb7CdrQ0FIfcec9eQaORnN9sZvmqSufPNuc0wfprWjnx1IKFLqIa/JMvS4rzf63xu6G3FKu44hnS3RRo4DYvzSAMcPc6UFmZXcu7jZ1NEw2Avgk5APQh83yXz3iW3N5fzX2JIF5sey3hN4T5H2ER+1Yn2fslrQiMkNDNIzwA0zcrxXnFAXpNMWdMkfBPQsswDOTmID+J/IRaQnkMK9aIyOddY1xHBOaC2jK9FxYy+LwSJZ1uWoh6k8Tp5EYJD8MOKLfpfAkhU07PFPKAAAAAASUVORK5CYII=',
            },
            {
                Link: '/',
                id: '1',
                x: '1',
                y: '2',
                width: '22',
                height: '20',
                href: 'data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAAgklEQVQ4jWNkIAAKre7cZ2D8r4CqivFB/1EVRXw6mQgZjGkoCGATI9VgmEJGRhMQJlo9sQpJBSyUGoArDih3MY44oFpQoMcBzcKYdpFHbgYgBJjIzQCEDYYxSMwARBtMbTBq8BA2GF66/fv//ww+haTKMzH8//8AUxmSGDnyDP8fAAD3fzIxFm+LwQAAAABJRU5ErkJggg==',
            },
            {
                Link: '/envelope',
                id: '2',
                x: '1',
                y: '3',
                width: '22',
                height: '18',
                href: 'data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAYAAABfJS4tAAABg0lEQVQ4jdWUPU5bQRSFvzN+rSVaWIA3wAbcRKmgNw1IKEaCIkSht+mNEheAQCAlBfYCoMKNN0CWEbeW3PLeQfOeZdmJrTh2xWnez8z95tw7c0cA1/e9RmZOhTdYQ0ZDiR/Hhx++6Oq+9w37dB3gn7J9ntg+yG3bR8DLOkDhqhVakj4HQZG+dEMI9ZWhQbUIHX9uhJlRuw7qyGwuC3SabkVTNl+n/0/AcnaGPUBUHELHsLOMy5CUHoDtPLYo5yzYqG8RBx7BZUkNpMY893rNykit6NKoDPRF2Jveo5lSyPzGPpfUFBoBOxa3xtWpadtOQgeoCo9sLrDPTDaaZiVz65ZlTxa/hFpIlfiU6WYhX7xWTPILpVJTaTqYx5gLnrjHMb06Ut2iJo8XNheCrtN0UfhsKRYolmJ3vDkDB/aEu/8KWuj4b/fFKVHqZUKWcryS3iHYMIwv/9PGi5S3d6Fhgt2OHeagx3XBSoqzYLKf+Y15eff8Hdif3HSrOo7Z2+2TTx+bb1YBopNVIvqLAAAAAElFTkSuQmCC',
            },
            {
                Link: '/file',
                id: '3',
                x: '3',
                y: '1',
                width: '18',
                height: '22',
                href: 'data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAWCAYAAADNX8xBAAAA50lEQVQ4je3UMQ4BQRQG4P+tFe22VHsVlSicQSUiGk7ADVAsDYUzKCS7hQs4xFaUtCKzv8wuQmLWTqL0F5NXzHzzZpIZAYDFKholxEBAD+bEl6uqD3vN+NMMma+iCchBDvAaIybBMjwJ4InjtKjU8eNykf03zNGILozIa0g9x6+US7vJYuu/QQWPlIaCrgmzgoQ4mDArKA9z7ZTs0uU5pEmxYh1lu+elcEctkLldWt+RKX/oD/0EInDWhRBV28VUqnYvzy7IGURGdGRjC4mbvTAiWadvOFiGUwDtx29ZuCN9GnLW7zTGN7oTZ7Q9i25mAAAAAElFTkSuQmCC',
            },
        ];
        let nav = elem.map((event, index) => {
            return (
                <Link key={index} to={event.Link} onClick={() => this.select(event.id)}>
                    <li id={event.id}
                        className={event.id === this.state.activeLinkId ? "link active" : "link"}>
                        <svg xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" width="24"
                             height="24" viewBox="0 0 24 24">
                            <image id="Шар_1" data-name="Шар 1" x={event.x} y={event.y} width={event.width}
                                   height={event.height} href={event.href}/>
                        </svg>
                    </li>
                </Link>
            )
        });
        return (
            <nav>
                <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" width="54" height="54"
                         viewBox="0 0 54 54">
                        <image id="Шар_1" data-name="Шар 1" width="46" height="54"
                               href="data:img/png;base64,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"/>
                    </svg>
                </div>
                <ul className="navigations">
                    {nav}
                </ul>
                <div className="settings">
                    <a className="settings-font" href="someValidPath">
                        <svg xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" width="24"
                             height="24" viewBox="0 0 24 24">
                            <image id="Шар_1" data-name="Шар 1" width="24" height="24"
                                   href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAD2UlEQVRIiY1WTUhcVxg9576XRmgGpnSlK7uZrEoDdtGlLtrEolCXkYIdglojJU7NXt0nGClGkhi0i1jootJEkJqFdp+A27ppVhG66YC11DrvnvLd995knmOjF4Z5fO/e7++c79xHnHMtPX4+44Up201i9eaNT2vnOXmuAPcfP5+HNNVqkzQ3OXp19qyz8UnD/Mp6OW50XGk08Ko20f8qc/aVZULnBr1PSPApyVsAQoDvHm32RnTlo2O/m585tYLF5a1bAGcJldO3vAf5XwGuZ2l/nJrdtqCSPKp0GAHQ+6Y0X7s5eu1eW4D5pc3uixei39NN2CPZGZwAdQIW8BmkufS1pkl3/Y0THQh8mQWqH0WHH9SqQ/VCi+IL7kq6mTuCv+2hLoozBEqAfiTcD4Iyh7xL8jd5DRLYQxStIUn2Qa4BqFiLAewUMZCvg5G56KHQCeA1oPHma/gCVvJ+A8BGCJkkUJJ0uTjqFIi4gSYOLn/4ZrR/hyGqSiCH30KMUxfjeEZgSfALEy1Au9bNDWghZEdUCtkmSRfIByS2Qb4g3Z2sytYV8PLgTqsxgGxDZFQUWDYGGcdpoGbOXRw9seyK/nhA74dF7GeGMZBjaTtZz4cxypwbn8sEOowtBB42S4wiK/1ysItfi/qJ4CUAH4LBvhFggN9zdO8DuJz5+eTzwS/JxeWtPwMNpXHC7Qn+oJgoXyAbMhlTUmeliNG2VQH5vpOYiOiyYTTKNjGg8LrNeUrJ1HZ0/FezqkRZu1Q6uT8FM2k+Oko/h62OzwCuwbmxQjbQXviP3bQBy4YvMY5Hs+AFQOU4bURgHD9Nz/rv46P4namLjX+tFSMw9kgVOAd4/zALMOfgnogYsB9clFWmAzh3F1mydG4A0nWbA2MTpIXJ0WuzTalYWVkv/+3f/YLCPIQ/ADVnIevptyYFQRZMSqJoNsckw+oBgB75pDo51r/abFH+UK0O1Ql+ZGwCUcDC8IF028ROgoE6XnAedNCHVjoXjRQxzFYudmnp0fBJB2ctqzK0EiolSvpMGQoVxDG600y4b85twAhOW+kCBtv8BzJwLUy4ga+gXS8zQMpNv/lDI+7YdcmxTWCFcHcYo0dBSa297IHUk18wYWqlMZF1QhU5twZpX0glJj72u20Y1Kp9dcrnet+bScNOAg0FVpADRtEM0N4MnJqAhVQgUUnZ42utYtd2Jy8tbXY37G6Qr+d9vL+8ZRdRt027tS/n+VF0+J5dLOFMjO5L8T+7RpZTQX7bWnz0yyzJmcJBYnXixmfVs84W5Pr/ln09mMJaC8IVSqx2uMOzP1sA/AdMnNDMxGtzzwAAAABJRU5ErkJggg=="/>
                        </svg>
                    </a>
                </div>
            </nav>
        )
    }
}