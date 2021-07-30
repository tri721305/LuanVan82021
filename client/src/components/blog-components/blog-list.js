import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

class BlogList extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    return (
      <div className="blog-area pd-top-120 viaje-go-top">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-8">
		        <div className="row justify-content-center">
		          <div className="col-lg-6 col-md-6">
		            <div className="single-blog">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/blog/1.png"} alt="blog" />
		                <Link className="tag" to="/blog-v2">Minh Tri</Link>
		              </div>
		              <div className="single-blog-details">
		                <p className="date">19 Nov 2020</p>
		                <h4 className="title"><Link to="/blog-details">Why You Shouldn Elephants VietNam.</Link></h4>
		                <p className="content">Content " viết gì đi "</p>
		                <Link className="btn-read-more" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-6 col-md-6">
		            <div className="single-blog">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/blog/2.png"} alt="blog" />
		                <Link className="tag" to="/blog-v2">Thanh Huyen</Link>
		              </div>
		              <div className="single-blog-details">
		                <p className="date">19 Nov 2020</p>
		                <h4 className="title"><Link to="/blog-details">Đà Lạt lạnh rồi </Link></h4>
		                <p className="content">Content " viết gì đi "</p>
		                <Link className="btn-read-more" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-6 col-md-6">
		            <div className="single-blog">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/blog/3.png"} alt="blog" />
		                <Link className="tag" to="/blog-v2">Minh Tri</Link>
		              </div>
		              <div className="single-blog-details">
		                <p className="date">19 Nov 2020</p>
		                <h4 className="title"><a to="/blog-details">Why You Shouldn Elephants VietNam</a></h4>
		                <p className="content">Content " viết gì đi "</p>
		                <Link className="btn-read-more" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-6 col-md-6">
		            <div className="single-blog">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/blog/4.png"} alt="blog" />
		                <Link className="tag" to="/blog-v2">Minh Trí</Link>
		              </div>
		              <div className="single-blog-details">
		                <p className="date">19 Nov 2020</p>
		                <h4 className="title"><Link to="/blog-details">Hội An nè</Link></h4>
		                <p className="content">Content " viết gì đi "</p>
		                <Link className="btn-read-more" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-6 col-md-6">
		            <div className="single-blog">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/blog/5.png"} alt="blog" />
		                <Link className="tag" to="/blog-v2">Minh Tri</Link>
		              </div>
		              <div className="single-blog-details">
		                <p className="date">19 Nov 2020</p>
		                <h4 className="title"><Link to="/blog-details">Sài Gòn</Link></h4>
		                <p className="content">Content " viết gì đi "</p>
		                <Link className="btn-read-more" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-6 col-md-6">
		            <div className="single-blog">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/blog/6.png" }alt="blog" />
		                <Link className="tag" to="/blog-v2">Minh Tri</Link>
		              </div>
		              <div className="single-blog-details">
		                <p className="date">19 Nov 2020</p>
		                <h4 className="title"><Link to="/blog-details">Hạ Long bay</Link></h4>
		                <p className="content">Content " viết gì đi "</p>
		                <Link className="btn-read-more" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-6 col-md-6">
		            <div className="single-blog">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/blog/7.png"} alt="blog" />
		                <Link className="tag" to="/blog-v2">Minh Trí</Link>
		              </div>
		              <div className="single-blog-details">
		                <p className="date">19 Nov 2020</p>
		                <h4 className="title"><a to="/blog-details">Quảng Ninh</a></h4>
		                <p className="content">Content " viết gì đi "</p>
		                <Link className="btn-read-more" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-6 col-md-6">
		            <div className="single-blog">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/blog/8.png"} alt="blog" />
		                <Link className="tag" to="/blog-v2">Minh Tri</Link>
		              </div>
		              <div className="single-blog-details">
		                <p className="date">19 Nov 2020</p>
		                <h4 className="title"><a to="/blog-details">Đà Lạt</a></h4>
		                <p className="content">Content " viết gì đi "</p>
		                <Link className="btn-read-more" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-12  text-md-center text-left">
		            <div className="tp-pagination text-md-center text-left d-inline-block mt-4">
		              <ul>
		                <li><a className="prev page-numbers" href="#"><i className="la la-long-arrow-left" /></a></li>
		                <li><span className="page-numbers">1</span></li>
		                <li><span className="page-numbers current">2</span></li>
		                <li><a className="page-numbers" href="#">3</a></li>
		                <li><a className="page-numbers" href="#">4</a></li>
		                <li><a className="next page-numbers" href="#"><i className="la la-long-arrow-right" /></a></li>
		              </ul>                          
		            </div>
		          </div>
		        </div>
		      </div>
		      <Sidebar />
		    </div>
		  </div>
		</div>
    )
  }
}

export default BlogList;
