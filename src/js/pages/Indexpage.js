import React from "react";
const Link = require("react-router-dom").Link;

import ArticlesStore from "../store/ArticlesStore";
import * as articlesAction from "../actions/articleActions";

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

    showBack() {
        this.props.backHandler()
    }

    createClickHandler() {
        articlesAction.createArticle(Date.now(), Date.now().toLocaleString());
    }

    render () {
        const {articles} = this.state;

        const articlesComp = articles.map((article)=><div key={article.id}><Link to={"/article/"+article.id} onClick={this.showBack.bind(this)}>{article.title}</Link></div>)

        return (
            <div class="main">
                <button onClick={this.createClickHandler.bind(this)}>Create New Article</button>
                {articlesComp}
            </div>
        );
    }
}