import {EventEmitter} from "events";

import dispatcher from "../Dispatcher";

class articles extends EventEmitter {
    constructor (){
        super();
        this.articles = [
                {
                    id:0,
                    title:'First Title',
                    desc:'First Desc'
                },{
                    id:1,
                    title:'Second Title',
                    desc:'Second Desc'
                },{
                    id:2,
                    title:'Teesra Title',
                    desc:'Teesra Desc'
                },
            ];
    }

    createArticle (title, desc){
        const id = this.articles.length;
        this.articles.push({
            id,
            title,
            desc
        });
        this.emit("articleAdded");
    }

    getArticles() {
        return this.articles;
    }

    handleDispatcher(action) {
        switch(action.type) {
            case "CREATE_ARTICLE": {
                this.createArticle(action.title, action.desc);
            }
        }
    }
}

const ArticlesStore = new articles;
// window.articleadd = ArticlesStore;

dispatcher.register(ArticlesStore.handleDispatcher.bind(ArticlesStore));
window.dispatcher = dispatcher;

export default ArticlesStore;