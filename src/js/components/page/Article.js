import React from "react";
import {Link} from "react-router-dom"

export default class Article extends React.Component {

    constructor() {
        super();
        this.state = {
                        showBack: false
                    };
    }
    
    render () {
        const {linkId} = this.props;
        const link = "/article/"+linkId;
        const {title} = this.props;
        return (
            <div>
                <Link to={link} onClick={()=>this.clickHandler()}>{title}</Link>
            </div>
        );
    }

    clickHandler() {
        // console.log(this.state);
        this.setState({showBack: true});
        // console.log(this.state.showBack);
    }
}