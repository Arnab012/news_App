import React, { Component } from 'react'
export class NewsItem extends Component {
   
  render() {
    let {title , description , imageUrl , newsUrl , author , publishedAt , source} = this.props;
    return (
    <div className='my-3'>
        <div className="card" >
        
        <img src={!imageUrl ? "https://media.cnn.com/api/v1/images/stellar/prod/220620112651-beyonce-file-2018.jpg?c=16x9&q=w_800,c_fill" : imageUrl } className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{title}<br></br><span className="badge rounded-pill bg-danger">{source}</span></h5>
          <p className="card-text">{description} </p>
          <p className='card-text' > <small className='text-muted' style={{color : "#0cff96b0"}}> By {!author?"Unknown" : author} on {new Date(publishedAt).toGMTString()}</small></p>
          <a rel="noreferrer"  href={newsUrl} target = "_blank" className="btn btn-primary">Read Full</a>
        </div>
      </div>
    </div>
    )
  }
}

export default NewsItem