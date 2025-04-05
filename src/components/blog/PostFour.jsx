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
                        {blogCategory ? blogCategory : "Vita Urbana di Lusso"}
                    </Link>
                    <Link to={`/blog/${blogID}`} className="h5">
                        {blogTitle ? blogTitle : 'Vivi con Eleganza nella Nostra Suite Contemporanea'}
                    </Link>
                    <p>
                        Nell'attuale panorama aziendale in continua evoluzione, restare un passo avanti è essenziale per il successo.
                        Che tu sia un imprenditore esperto o agli inizi, la chiave per prosperare in questo ambiente dinamico
                        risiede nell'adattabilità e nell'innovazione.
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
                                <img src="assets/images/icon/clock.svg" alt="" /> 10 Minuti di Lettura
                            </span>
                        </div>
                        <div className="readmore">
                            <Link to={`/blog/${blogID}`}>Leggi di più</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostFour
