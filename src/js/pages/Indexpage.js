import React from "react";
const Link = require("react-router-dom").Link;

// import Article from "../components/page/Article";
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

    showBack() {
        this.props.backHandler()
    }

    render () {
        const {articles} = this.state;

        const articlesComp = articles.map((article)=><div key={article.id}><Link to={"/article/"+article.id} onClick={this.showBack.bind(this)}>{article.title}</Link></div>)

        return (
            <div class="main">
                {articlesComp}
            </div>
        );
    }
}