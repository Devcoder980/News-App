
import React, { Component } from 'react'

export default class NewsItem extends Component {
    constructor(){
       super();
        console.log('heelo world')
    }

    render() {
        let { title, description, imgUrl,newsUrl} = this.props;

        return (
            <div className="my-3">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={!imgUrl ?"https://images.mid-day.com/images/images/2022/aug/Cold-a_d.jpg":imgUrl} className="card-img-top " style={{width:'286px',height:'196px'}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
