import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
// import "../../../static/css/image-gallery.css";
import {config} from '../../../helper/get_config';

const data = {
    ipad: [
        {
            original: config.CDN_URL + '/apps/screenshots/ipad/1.png',
            description: "Slider 1",
        },
        {
            original: config.CDN_URL + '/apps/screenshots/ipad/2.png',
            description: "Slider 2"
        },
        {
            original: config.CDN_URL + '/apps/screenshots/ipad/3.png',
            description: "Slider 3"
        },
        {
            original: config.CDN_URL + '/apps/screenshots/ipad/4.png',
            description: "Slider 4"
        },
        {
            original: config.CDN_URL + '/apps/screenshots/ipad/5.png',
            description: "Slider 5"
        },
        {
            original: config.CDN_URL + '/apps/screenshots/ipad/6.png',
            description: "Slider 6"
        },
        {
            original: config.CDN_URL + '/apps/screenshots/ipad/7.png',
            description: "Slider 7"
        },
        {
            original: config.CDN_URL + '/apps/screenshots/ipad/8.png',
            description: "Slider 8"
        },
        {
            original: config.CDN_URL + '/apps/screenshots/ipad/9.png',
            description: "Slider 9"
        },
        {
            original: config.CDN_URL + '/apps/screenshots/ipad/10.png',
            description: "Slider 10"
        },
        {
            original: config.CDN_URL + '/apps/screenshots/ipad/11.png',
            description: "Slider 11"
        }
    ],
    mobile: [
        {
            original: config.CDN_URL + '/apps/screenshots/mobile/1.png',
            description: "Slider 1",
        },
        {
            original: config.CDN_URL + '/apps/screenshots/mobile/2.png',
            description: "Slider 2"
        },
        {
            original: config.CDN_URL + '/apps/screenshots/mobile/3.png',
            description: "Slider 3"
        },
        {
            original: config.CDN_URL + '/apps/screenshots/mobile/4.png',
            description: "Slider 4"
        },
        {
            original: config.CDN_URL + '/apps/screenshots/mobile/5.png',
            description: "Slider 5"
        },
        {
            original: config.CDN_URL + '/apps/screenshots/mobile/6.png',
            description: "Slider 6"
        }
    ]
}
var index = 0
var indexLeft = 0

class Slider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            innerWidth: 0
        }
    }

    componentDidMount() {
        this.setState({
            innerWidth: window.innerWidth
        })
    }

    renderRightNav(onClick, disabled, device) {
        index += 1;
        if (device === 'ipad') {
            return (
                <div className={`${device}_rightArrow`}>
                    <button
                        className="image-gallery-right-nav"
                        style={{ fontSize: parseInt(this.state.innerWidth) < 768 ? 25 : 40 }}
                        disabled={disabled}
                        onClick={onClick} />
                </div>
            )
        } else if (index === 4) {
            this.setState({ onClickRight: onClick, disabled: disabled })
            index = 0;
        }
    }
    renderLeftNav(onClick, disabled, device) {
        indexLeft += 1;
        if (device === 'ipad') {
            return (
                <div className={`${device}_leftArrow`}>
                    <button
                        className="image-gallery-left-nav"
                        disabled={disabled}
                        style={{ fontSize: parseInt(this.state.innerWidth) < 768 ? 25 : 40 }}
                        onClick={onClick} />
                </div>
            )
        } else if (indexLeft === 4) {
            this.setState({ onClickLeft: onClick, disabled: disabled })
            indexLeft = 0;
        }
    }

    render() {
        return (
            <center>
                <div className={`${this.props.device}_`}>
                    <div className={`${this.props.device}_slider`}>
                        <div className={`${this.props.device}_sliderSize`}>
                            <ImageGallery
                                items={data[this.props.device]}
                                showPlayButton={false}
                                autoPlay={false}
                                showBullets={true}
                                showThumbnails={false}
                                showFullscreenButton={false}
                                renderRightNav={(onClick, disabled) => { return this.renderRightNav(onClick, disabled, this.props.device) }}
                                renderLeftNav={(onClick, disabled) => { return this.renderLeftNav(onClick, disabled, this.props.device) }}
                            />
                        </div>
                    </div>
                </div>
                {
                    this.props.device === "mobile" ?
                        <div>
                            <div className={`${this.props.device}_leftArrow`}>
                                <button
                                    className="image-gallery-left-nav"
                                    style={{ fontSize: parseInt(this.state.innerWidth) < 768 ? 40 : 65 }}
                                    disabled={this.state.disabled}
                                    onClick={this.state.onClickLeft} />
                            </div>
                            <div className={`${this.props.device}_rightArrow`}>
                                <button
                                    className="image-gallery-right-nav"
                                    style={{ fontSize: parseInt(this.state.innerWidth) < 768 ? 40 : 65 }}
                                    disabled={this.state.disabled}
                                    onClick={this.state.onClickRight} />
                            </div>
                        </div>
                        : null
                }
            </center>

        );
    }
}

export default Slider