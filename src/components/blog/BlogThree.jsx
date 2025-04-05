import React, { useState } from 'react'
import PostFour from './PostFour'
import { Link } from 'react-router-dom';
import posts from '../data/data-post.json'

function BlogThree() {
    const [visiblePosts, setVisiblePosts] = useState(4); // Mostra inizialmente 4 post
    const postsPerLoad = 1; // Numero di post da caricare ogni volta

    const handleLoadMore = () => {
        setVisiblePosts((prev) => prev + postsPerLoad);
    };
    return (
        <>
            {/* blog */}
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row g-30 sticky-wrap">
                        <div className="col-lg-7 col-xl-8">
                            <div className="blog__list__item ">
                                {posts.slice(0, visiblePosts).map((data, index) => (
                                    <div key={index}>
                                        <PostFour
                                            blogCategory={data.category}
                                            blogID={data.id}
                                            blogImage={`${data.image}`}
                                            authorImg={`${data.authorImg}`}
                                            blogTitle={data.title}
                                            blogAuthor={data.author}
                                            blogPublishedDate={data.publishedDate}
                                        />
                                    </div>
                                ))}
                                {visiblePosts < posts.length && (
                                    <div className="load__more__link">
                                        <Link to="#" onClick={handleLoadMore}>Carica di più</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 sticky-item">
                            <div className="blog__sidebar__section sticky-item">
                                <h6 className="mb-3">Cerca</h6>
                                <form action="#" className="search__form">
                                    <input type="text" name="search" placeholder="Cerca" />
                                    <i className="flaticon-search-1" />
                                </form>
                                <h6 className="mb-4">Categorie</h6>
                                <div className="search__item__list">
                                    <div className="d-flex align-items-center justify-content-between list">
                                        <div className="d-flex gap-2 align-items-center checkbox is__small">
                                            <input type="checkbox" name="web" id="web" />
                                            <label htmlFor="web">Soggiorni Avventura</label>
                                        </div>
                                        <span>(130)</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between list">
                                        <div className="d-flex gap-2 align-items-center checkbox  is__small">
                                            <input type="checkbox" name="design" id="design" />
                                            <label htmlFor="design">Benessere &amp; Relax</label>
                                        </div>
                                        <span>(80)</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between list">
                                        <div className="d-flex gap-2 align-items-center checkbox is__small">
                                            <input type="checkbox" name="ux" id="ux" />
                                            <label htmlFor="ux">Soggiorni Culturali</label>
                                        </div>
                                        <span>(45)</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between list">
                                        <div className="d-flex gap-2 align-items-center checkbox is__small">
                                            <input type="checkbox" name="dev" id="dev" />
                                            <label htmlFor="dev">Hotel Storici</label>
                                        </div>
                                        <span>(100)</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between list">
                                        <div className="d-flex gap-2 align-items-center checkbox is__small">
                                            <input type="checkbox" name="business" id="business" />
                                            <label htmlFor="business">Hotel Pet-Friendly</label>
                                        </div>
                                        <span>(80)</span>
                                    </div>
                                </div>
                                <h6 className="mb-4">Ultimi Post</h6>
                                <div className="latest__post mb-30">
                                    <div className="single__post">
                                        <div className="single__post__thumb">
                                            <Link to="/blog/1">
                                                <img
                                                    src="assets/images/pages/blog/r-1.webp"
                                                    height={106}
                                                    width={110}
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="single__post__meta">
                                            <Link to="#" className="font-sm">
                                                Le 10 Ragioni per cui gli Ospiti Amano il Grand Hotel Selinunte
                                            </Link>
                                            <span>
                                                <img src="assets/images/icon/clock.svg" alt="" /> 10 Minuti di Lettura
                                            </span>
                                        </div>
                                    </div>
                                    <div className="single__post">
                                        <div className="single__post__thumb">
                                            <Link to="/blog/1">
                                                <img
                                                    src="assets/images/pages/blog/r-2.webp"
                                                    height={106}
                                                    width={110}
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="single__post__meta">
                                            <Link to="#" className="font-sm">
                                                10 Motivi per Scegliere il Grand Hotel Selinunte
                                            </Link>
                                            <span>
                                                <img src="assets/images/icon/clock.svg" alt="" /> 10 Minuti di Lettura
                                            </span>
                                        </div>
                                    </div>
                                    <div className="single__post">
                                        <div className="single__post__thumb">
                                            <Link to="/blog/1">
                                                <img
                                                    src="assets/images/pages/blog/r-3.webp"
                                                    height={106}
                                                    width={110}
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="single__post__meta">
                                            <Link to="#" className="font-sm">
                                                Perché gli Ospiti Scelgono il Grand Hotel Selinunte
                                            </Link>
                                            <span>
                                                <img src="assets/images/icon/clock.svg" alt="" /> 10 Minuti di Lettura
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <h6 className="mb-4">Tag</h6>
                                <div className="tag__list">
                                    <div className="tags__list">
                                        <Link to="#">Soggiorno in Hotel</Link>
                                        <Link to="#">Blog di Viaggio</Link>
                                        <Link to="#">Esperienza dell’Ospite</Link>
                                        <Link to="#">Guida Hotel</Link>
                                        <Link to="#">Recensione Hotel</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* fine blog */}
        </>
    )
}

export default BlogThree
