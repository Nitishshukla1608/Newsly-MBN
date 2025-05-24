import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class New extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      nextPage: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=63bfa758bc754de2ae35bf92983b9655&page=1&size=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: Array.isArray(parsedData.articles) ? parsedData.articles : [],
      totalResults: parsedData.totalResults || 0,
    });
  }

  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=63bfa758bc754de2ae35bf92983b9655&page=${
      this.state.page - 1
    }&size=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: Array.isArray(parsedData.articles) ? parsedData.articles : [],
    });
  };

  handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      // Do nothing or you can disable next button here
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=63bfa758bc754de2ae35bf92983b9655&page=${
        this.state.page + 1
      }&size=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: Array.isArray(parsedData.articles) ? parsedData.articles : [],
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="my-3" style={{ color: "rgb(72, 91, 107)" }}>
          Newsly - Top Headlines
        </h1>

        <div className="row">
          {(this.state.articles || []).map((element) => {
            const { title, description, urlToImage, url } = element;
            return (
              <div className="col-md-3" key={url}>
                <NewsItem
                  title={(title || "No Title").slice(0, 45)}
                  description={(description || "No Description").slice(0, 88)}
                  imageURL={
                    urlToImage ||
                    "https://thumbs.dreamstime.com/b/no-image-available-icon-vector-illustration-flat-design-140476186.jpg"
                  }
                  newsURL={url}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between my-3">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>

          <h6>{this.state.page}</h6>

          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={
              this.state.page >= Math.ceil(this.state.totalResults / 16)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default New;
