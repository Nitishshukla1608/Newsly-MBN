import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class New extends Component {
 
   constructor(){
    super();
    this.state={
      articles : [],
      loading:false
    }
  } 
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=63bfa758bc754de2ae35bf92983b9655"
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles
    })
  }
  render() {
    return (

      <div className="container ">
        <h1>Newsly - Top Headlines</h1>

        <div className="row">
          {this.state.articles.map((element)=>{
  
            return <div className="col-md-3" key={element.url}>
            <NewsItem  title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageURL={element.urlToImage} newsURL={element.url}/>
          </div>
          })}
           
        </div>
      </div>
    ); 
  }
}

export default New;