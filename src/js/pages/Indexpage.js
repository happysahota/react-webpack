import React from "react";

import Article from "../components/page/Article";
import ArticlesStore from "../store/articles";
export default class Indexpage extends React.Component {
    constructor () {
        super();
        this.state = {
            articles: ArticlesStore.getArticles()
        }
    }

    componentWillMount(){
        ArticlesStore.on('articleAdded', ()=> {
            this.setState({
                articledesc: ArticlesStore.getArticles()
            });
        })
    }

    render () {
        const {articles} = this.state;

        const articlesComp = articles.map((article)=><Article key={article.id} linkId={article.id} title={article.title}/>)
        return (
            <div class="main">
                Here goes the main Index
                {articlesComp}
            </div>
        );
    }
}