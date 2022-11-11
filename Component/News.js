import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spaning from './Spaning'
export default class News extends Component {


  static defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super();
    console.log('heelo i am a constor from news component');
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    console.log("cdn");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fcc4d003b528407ca74ead89e5bc4e5c&pageSize=3`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles,loading:false })
  }


  handlePrevClick = async () => {
    console.log("PREVIUOUS");
    let url = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apiKey=fcc4d003b528407ca74ead89e5bc4e5c&page=${this.state.page - 1}&pageSize=3`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false
    })
  }
  handleNextClick = async () => {
    console.log('next');
    let url = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apiKey=fcc4d003b528407ca74ead89e5bc4e5c&page=${this.state.page + 2}&pageSize=3`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    console.log(this.state.page)

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading:false
    })


  }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>NewsAdda - Top HeadLine</h2>
        {this.state.loading && <Spaning/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}


        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1} className="btn btn-danger" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
        </div>

      </div>
    )
  }
}
