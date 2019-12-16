import React from 'react';
import data from '../ArticlesListe/ArticlesListe';

const getItemsExcept = (id)=>{
    const articles = data.filter((item)=>item.id!=id);
    return articles;
};
const Suggest = (props)=> {
    console.log(props);
    
    const articles = getItemsExcept(props.id)
    console.log(articles);
   
   let list =  articles.map((val)=>{
        return(
           
           
        <div className="col-sm-12">
            <div className="column is-half is-one-fifth">
            <div class="card">
                <div class="card-image">
                    <figure class="image">
                    <img src={val.picture} alt="Placeholder image"/>
                    </figure>
                </div>
            <div class="card-content">
                <div class="content"> {val.title} <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                 </div>
            </div>
        </div>
            </div>
        </div>
    
   
        );
    });
    return(
        <div style= {{display:"inline"}}>
            {list}
        </div>
    );
    
            
}

export default Suggest;