import React from "react";
const Link = require("react-router-dom").Link;

import ArticlesStore from "../store/ArticlesStore";
import * as articlesAction from "../actions/articleActions";

export default class Indexpage extends React.Component {
    constructor () {
        super();
        this.getArticles  = this.getArticles.bind(this);
        this.state = {
            articles: ArticlesStore.getArticles()
        }
    }

    componentWillMount(){
        ArticlesStore.on('articleAdded', this.getArticles);
        ArticlesStore.on('articlereloaded', this.getArticles);
    }

    componentWillUnmount() {
        ArticlesStore.removeListener('articleAdded', this.getArticles);
        ArticlesStore.removeListener('articlereloaded', this.getArticles);
    }

    getArticles() {
        this.setState({
            articles: ArticlesStore.getArticles()
        });
    }

    showBack() {
        this.props.backHandler()
    }

    createClickHandler() {
        articlesAction.createArticle(Date.now(), Date.now().toLocaleString());
    }

    reloadClickHandler() {
        articlesAction.reloadArticles();
    }

    render () {
        const {articles} = this.state;
        const articlesComp = articles.map((article)=><div key={article.id}><Link to={"/article/"+article.id} onClick={this.showBack.bind(this)}>{article.title}</Link></div>)

        return (
            <div class="main">
                <button onClick={this.createClickHandler.bind(this)}>Create New Article</button>
                <button onClick={this.reloadClickHandler.bind(this)}>Reload Articles</button>
                {articlesComp}
            </div>
        );
    }
}