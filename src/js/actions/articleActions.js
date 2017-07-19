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