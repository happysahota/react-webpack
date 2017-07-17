import React  from "react";

import ArticleDesc from "../components/page/ArticleDesc"
import ArticlesStore from "../store/articles";

export default class Articlepage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            articledesc: ArticlesStore.getArticles()
        }
    };
    
    render () {
        const {articleid} = this.props.match.params;
        const {articledesc} = this.state;
        const articledescComm = articledesc.filter((article)=> {
                            return articleid==article.id;
                        });
        return (
            <ArticleDesc title={articledescComm[0].title} desc={articledescComm[0].desc}/>
        );
    }
}