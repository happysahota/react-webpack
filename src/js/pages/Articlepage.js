import React  from "react";

import ArticleDesc from "../components/page/ArticleDesc"

export default class Articlepage extends React.Component {
    render () {
        const {articleid} = this.props.params;
        const articledesc = [
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
        ].filter((article)=> {
                            return articleid==article.id;
                        });
        return (
            <ArticleDesc title={articledesc[0].title} desc={articledesc[0].desc}/>
        );
    }
}