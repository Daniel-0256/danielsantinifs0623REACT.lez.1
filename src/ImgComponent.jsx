import { Component } from "react";

class ImgClass extends Component {
    render() {
        return (
                <img src={this.props.Img} alt="" style={{width: "250px", margin: `${this.props.margin}`}}/>
        )
    }
}
export default ImgClass;