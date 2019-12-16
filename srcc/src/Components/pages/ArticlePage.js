import React, { Component } from 'react';
import {useParams} from 'react-router-dom'
import Data from '../ArticlesListe/ArticlesListe';
import Suggest from '../suggestions/suggest'
const getItem = (id)=>{
    const article = Data.find((item)=>{
        return item.id ==id;
    });
    return article;
}
const ArticlePage = ()=>{
    let  { id } = useParams();
    console.log(id);
    
    const item = getItem(id);
    if(item){
        return(
    <div className='container'>
    <div className="card-image" >
            <figure className="image is-3by1">
                <img src={item.picture} alt="Placeholder image" />
            </figure>
        </div>
        <div className="card-content" style={{marginTop : "40px"}}>
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">{item.title}</p>
                    <p className="subtitle is-6">@{item.author}</p>
                </div>
            </div>

            <div className="content">
                {item.body}
                <br />
                <time dateTime="2019-1-1">{item.registered}</time>
            </div>

        </div>
        <Suggest id = {id}/>
</div>
    

);

    }else{
        return <div><h1>ERROR 404</h1> </div>;
    }
         
}



export default ArticlePage;