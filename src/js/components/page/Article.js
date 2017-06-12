import React from "react";
import {Link} from "react-router"

export default class Article extends React.Component {
    
    render () {
        const {linkId} = this.props;
        const link = "article/"+linkId;
        const {title} = this.props;
        return (
            <div>
                <Link to={link}>{title}</Link>
            </div>
        );
    }
}