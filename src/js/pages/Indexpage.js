import React from "react";

import Article from "../components/page/Article";

export default class Indexpage extends React.Component {
    
    render () {
        const articles = [
            {
                id:1,
                title:'First Title',
                desc:'First Desc'
            },{
                id:2,
                title:'Second Title',
                desc:'Second Desc'
            },{
                id:3,
                title:'Third Title',
                desc:'Third Desc'
            },
        ].map((article)=><Article key={article.id} linkId={article.id} title={article.title}/>)
        return (
            <div class="main">
                Here goes the main Index
                {articles}
            </div>
        );
    }
}