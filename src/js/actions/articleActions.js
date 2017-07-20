import dispatcher from "../Dispatcher";

export function createArticle (text, desc){
    dispatcher.dispatch({
        type:'CREATE_ARTICLE',
        title:text,
        desc: desc
    });
}

export function deleteArticle (id){
    dispatcher.dispatch({
        type:'DELETE_ARTICLE',
        id: id
    });
}

export function reloadArticles (){
    // dispatcher.dispatch({
    //     type:'FETCH_ARTICLE'
    // });
    setTimeout(()=>{
        dispatcher.dispatch({
            type: 'RELOAD_ARTICLE',
            records: [
                {
                    id:10,
                    title:'Pehla Title',
                    desc:'First Desc'
                },{
                    id:11,
                    title:'Dusra Title',
                    desc:'Second Desc'
                },{
                    id:12,
                    title:'Third Title',
                    desc:'Teesra Desc'
                }
            ]
        });
    }, 1500);
}