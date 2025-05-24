import React, { Component } from "react";

export class NewsItem extends Component {
   
  render() {
    let  {title,description,imageURL,newsURL} = this.props;
    
    return (
        
      <div>
        
       <div className="my-3"> <div className="card" style={{width: "16rem",backgroundColor:"#3b3b4e",color:"white"}}>
<img 
  src={!imageURL ? "https://thumbs.dreamstime.com/b/no-image-available-icon-vector-illustration-flat-design-140476186.jpg":imageURL} 
  className="card-img-top" 
  alt="news" 
/>

          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
             {description}...
            </p>
            <a href={newsURL} target="_blank" className="btn btn-sm btn-secondary">
             Read more
            </a>
          </div>
        </div>
      </div></div>
    );
  }
}

export default NewsItem;
