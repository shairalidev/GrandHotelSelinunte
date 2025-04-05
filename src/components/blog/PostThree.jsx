import React from 'react'
import { Link } from 'react-router-dom';

function PostThree(props) {
    const { blogID, blogImage, blogTitle, blogCategory, blogAuthor, authorImg, blogPublishedDate } = props;
    return (
        <>
            <div className="blog__item is__has__radius">
                <div className="blog__item__thumb">
                    <Link to={`/blog/${blogID}`}>
                        <img
                            height={250}
                            width={360}
                            src={`/assets/images/index-4/blog/${blogImage}`}
                            alt=""
                        />
                    </Link>
                </div>
                <div className="blog__item__meta">
                    <Link to="#" className="blog__item__meta__cat">
                        {blogCategory ? blogCategory : "Vita Urbana di Lusso"}
                    </Link>
                    <Link to={`/blog/${blogID}`} className="blog__item__meta__title">
                        <h6>{blogTitle ? blogTitle : 'Vivi con Eleganza nella Nostra Suite Contemporanea'}</h6>
                    </Link>
                    <div className="blog__item__meta__list">
                        <span className="blog__item__meta__list__item">
                            <img src="/assets/images/icon/calendar.svg" alt="" />
                            {blogPublishedDate ? blogPublishedDate : '26 Marzo 2024'}
                        </span>
                        <span className="blog__item__meta__list__item">
                            <Link to="#">
                                <img src={`/assets/images/icon/${authorImg}`} alt="" />
                                {blogAuthor ? blogAuthor : 'Amin'}
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostThree
