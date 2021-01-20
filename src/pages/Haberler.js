import React, { Component } from 'react';
import axios from 'axios';
import '../styles/pages/_haberler.scss';

class Haberler extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      articles: []
    };
  }

  // Lifecycle method
  componentWillMount() {
    this.getArticles(this.props.default);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ url: `http://newsapi.org/v2/top-headlines?q=korona&country=tr&category=health&apiKey=b1dc1ca162624212bae1a4411dae3b4a` });

      this.getArticles(nextProps.default);
    }
  }

  formatDate(date) {
    var time = new Date(date);
    var year = time.getFullYear();
    var day = time.getDate();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var month = time.getMonth() + 1;
    var composedTime = day + '/' + month + '/' + year + ' | ' + hour + ':' + (minute < 10 ? '0' + minute : minute);
    return composedTime;
  }

  getArticles(url) {
    // Make HTTP reques with Axios
    axios
      .get(`http://newsapi.org/v2/top-headlines?q=korona&country=tr&category=health&apiKey=b1dc1ca162624212bae1a4411dae3b4a`)
      .then(res => {
        const articles = res.data.articles;
        // Set state with result
        console.log(articles);
        this.setState({ articles: articles });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="cardsContainer">
        {this.state.articles.map((news, i) => {
          return (
            <div className="card" key={i}>
              <div className="content">
                <h3>
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a>
                </h3>
                <p>{news.description}</p> 
                <div className="author">
                  <p>
                    By <i>{news.author ? news.author : this.props.default}</i>
                  </p>
                  <p>{this.formatDate(news.publishedAt)}</p>
                </div>
              </div>
              <div className="image">
                <img src={news.urlToImage} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Haberler;
