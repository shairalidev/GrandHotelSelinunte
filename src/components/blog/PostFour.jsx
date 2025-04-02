import React from 'react'
import { Link } from 'react-router-dom';

function PostFour(props) {
    const { blogID, blogImage, blogTitle, blogCategory, blogAuthor, authorImg } = props;
    return (
        <>
            <div className="single__blog">
                <div className="single__blog__thumb">
                    <Link to={`/blog/${blogID}`}>
                        <img
                            src={`/assets/images/pages/blog/${blogImage}`}
                            height={490}
                            width={760}
                            alt=""
                        />
                    </Link>
                </div>
                <div className="single__blog__meta">
                    <Link to="#" className="category">
                        {blogCategory ? blogCategory : "Urban Oasis Living"}
                    </Link>
                    <Link to={`/blog/${blogID}`} className="h5">
                        {blogTitle ? blogTitle : 'Live Elegantly in Our Contemporary Suite for Apartment'}
                    </Link>
                    <p>
                        In today's ever-evolving business landscape, staying ahead of
                        the curve is essential for success. Whether you're a seasoned
                        entrepreneur or just starting out, the key to thriving in this
                        dynamic environment lies in adaptability and innovation.
                    </p>
                    <div className="single__blog__meta__main">
                        <div className="author__meta">
                            <Link to="#">
                                <img
                                    src={`/assets/images/icon/${authorImg}`}
                                    height={40}
                                    width={40}
                                    alt=""
                                />
                                {blogAuthor ? blogAuthor : 'Amin'}
                            </Link>
                            <span>
                                <img src="assets/images/icon/clock.svg" alt="" /> 10 Min
                                Read
                            </span>
                        </div>
                        <div className="readmore">
                            <Link to={`/blog/${blogID}`}>Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostFour