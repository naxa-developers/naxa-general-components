import React, { Component } from "react";

class LabIcon extends Component {
    constructor(props) {
      super(props);
      this.state = {
          setting: {
            style: {padding:2},
            fill: "#ff0000",
            width: "100%",
            className: "dot",
            viewBox: "0 0 47.8787 48"
          }
      }
    }
    componentDidMount() {}
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" 
                width={this.state.setting.width}
                style={this.state.setting.style}
                className={this.state.setting.className}
                viewBox={this.state.setting.viewBox}>
                <title>Testing Lab</title>
                <path class="cls-1" d="M45.87573,48H16.12427a2,2,0,0,1-1.73206-3L27,23.1626V22h3a1,1,0,0,0,0-2H27V17h3a1,1,0,0,0,0-2H27V12h3a1,1,0,0,0,0-2H27V8L25.14648,6.14648A.50048.50048,0,0,1,25,5.793V4.5a.49987.49987,0,0,1,.5-.5h11a.49987.49987,0,0,1,.5.5V5.793a.50048.50048,0,0,1-.14648.35351L35,8V23.1626L47.60779,45A2,2,0,0,1,45.87573,48ZM11.5,0H.5A.49987.49987,0,0,0,0,.5V1.793a.50048.50048,0,0,0,.14648.35351L2,4V6H5A1,1,0,0,1,5,8H2v3H5a1,1,0,0,1,0,2H2v3H5a1,1,0,0,1,0,2H2v3H5a1,1,0,0,1,0,2H2v3H5a1,1,0,0,1,0,2H2v3H5a1,1,0,0,1,0,2H2v3a4,4,0,0,0,8,0V4l1.85352-1.85352A.50048.50048,0,0,0,12,1.793V.5A.49987.49987,0,0,0,11.5,0Z"
                       fill={this.props.color!=undefined?this.props.color:this.state.setting.fill}
                />
            </svg>
        )
    }
}

export default LabIcon;