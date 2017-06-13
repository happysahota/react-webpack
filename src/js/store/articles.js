import {EventEmitter} from "events";

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
}

const ArticlesStore = new articles;
// window.articleadd = ArticlesStore;
export default ArticlesStore;