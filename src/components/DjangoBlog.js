// import React, { useState, useEffect } from "react";

// const DjangoBlog = () => {
//   const [posts, setPost] = useState([]);
//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/", {
//       method: "GET",
//       headers: {
//         "Content-type": "application/json",
//       },
//     })
//       .then((resp) => resp.json())
//       .then((resp) => setPost(resp))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div>
//       {posts.map((post.title) => {
//         return <h2>post.title</h2>;
//       })}
//     </div>
//   );
// };

// export default DjangoBlog;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IconBanner from "../images/blog-long.png";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import HomeTwo from "../images/img84.jpg";

const Section = styled.div`
  min-height: 100vh;
  ${"" /* padding-left: 1rem; */}
  margin-bottom: 0;
  padding-bottom: 0;
  ${"" /* padding-top: 4rem; */}

  @media screen and (min-width: 1401px) {
    padding-top: 18rem;
  }

  @media screen and (min-width: 769px) and (max-width: 1400px) {
    padding-top: 13rem;
  }

  @media screen and (max-width: 768px) {
    padding-top: 12rem;
  }

  ${
    "" /* @media screen and (min-width: 769px) and (max-width: 1023px) {
    margin-top: 5rem;
  } */
  }
  @media screen and (max-width: 540px) {
    padding-top: 8.5rem;
  }

  @media screen and (max-width: 360px) {
    padding-top: 7rem;
  }

  ${
    "" /* padding-top: 0rem;
  margin-bottom: 0rem;
  padding-bottom: 0rem; */
  }
  ${"" /* padding-top: 10rem; */}
  ${"" /* margin-bottom: 10rem; */}
`;
const Banner = styled.div`
  ${
    "" /* height: 25vh;
  width: 100vw;
  margin-bottom: 0rem; */
  }
  ${"" /* max-height: 7rem; */}
  min-width: 20rem;
  ${"" /* margin-top: 0rem; */}
  padding-top: 2rem;
  margin-bottom: 0rem;

  ${
    "" /* @media screen and (max-width: 768px) {
    padding-bottom: 0rem;
  } */
  }

  @media screen and (max-width: 375px) {
    margin-bottom: 0rem;
  }

  @media screen and (max-width: 360px) {
    margin-bottom: 0rem;
    padding-bottom: 0rem;
  }

  img {
    position: absolute;
    height: 34.5vh;
    width: 100vw;
    object-fit: cover;

    @media screen and (min-width: 1024px) {
      height: 32.5vh;
    }

    @media screen and (max-width: 768px) {
      height: 28.5vh;
    }

    @media screen and (min-width: 361px) (max-width: 540px) {
      height: 20.5vh;
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc{100% - 100px};
  color: #fff;
;

img{
  ${"" /* margin-top: 6.75rem; */}
  ${"" /* max-height: 7rem; */}
  z-index: 100000;
  height: 55vh;
    width: 100vw;
    object-fit: contain;
    padding-top: 3rem;

    @media screen and (min-width: 1024px) {
      padding-top: 5rem;
      ${"" /* padding-bottom: 4.5rem; */}

  }

    @media screen and (max-width: 768px) {
      padding-top: 0rem;

      
  }

}

h1{
   font-size: clamp(3rem, 8vw, 2rem);
  font-weight: 400;
  text-transform: uppercase;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  
  @media screen and (max-width: 375px) {
      ${
        "" /* padding-left: 4rem;
      padding-right: 4rem; */
      }
    }
  ${"" /* margin-bottom: 0.8rem; */}
  ${
    "" /* dislay: flex;
  align-items: center; */
  }
}`;
// const Category = styled.div`
//   padding-top: 5rem;
// `;

// const Content = styled.div`
//   margin-left: 0;
//   margin-right: 0;
// `;

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blog/featured`
        );
        setFeaturedBlog(res.data[0]);
        console.log(res.data);
      } catch (err) {}
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blog/`
        );
        setBlogs(res.data);
      } catch (err) {}
    };

    fetchBlogs();
  }, []);

  const capitalizeFirstLetter = (word) => {
    if (word) return word.charAt(0).toUpperCase() + word.slice(1);
    return "";
  };

  const getBlogs = () => {
    let list = [];
    let result = [];

    blogs.map((blogPost) => {
      return list.push(
        <div className="bg-dark row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-white">
              {capitalizeFirstLetter(blogPost.category)}
            </strong>
            <h3 className="mb-0 text-white">{blogPost.title}</h3>
            <div className="mb-1 text-white">
              {blogPost.month} {blogPost.day}
            </div>
            <p className="card-text mb-auto text-white">{blogPost.excerpt}</p>
            <Link to={`/blog/${blogPost.slug}`} className="stretched-link">
              Continue reading
            </Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img
              width="200"
              height="250"
              src={blogPost.thumbnail}
              alt="thumbnail"
            />
          </div>
        </div>
      );
    });

    for (let i = 0; i < list.length; i += 2) {
      result.push(
        <div key={i} className="row mb-2">
          <div className="col-md-6">{list[i]}</div>
          <div className="col-md-6">{list[i + 1] ? list[i + 1] : null}</div>
        </div>
      );
    }

    return result;
  };

  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useTranslation();
  return (
    <div
      style={{
        backgroundColor: "#212121",
      }}
    >
      <Banner>
        <img src={HomeTwo} />
        <HeroContent>
          <h1>{t("blog")}</h1>
          <img src={IconBanner} />
        </HeroContent>
      </Banner>
      <Section>
        {/* <div className="search">
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div> */}

        <div className="container mt-0">
          <div className="p-4 p-md-5 text-white rounded bg-dark">
            <div className="col-md-6 px-0">
              <h1 className="display-4 font-italic">{featuredBlog.title}</h1>
              <p className="lead my-3">{featuredBlog.excerpt}</p>
              <p className="lead mb-0">
                <Link
                  to={`/blog/${featuredBlog.slug}`}
                  className="text-white font-weight-bold"
                >
                  Continue reading...
                </Link>
              </p>
            </div>
          </div>
          {getBlogs()}
          {/* .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div className="article" key={key}>
                <p>{val.title}</p>
              </div>
            );
          })} */}
        </div>
        {/* <Category> */}
        <div className="nav-scroller py-1 mb-0 text-white bg-dark">
          <nav className="nav d-flex justify-content-between">
            <Link className="p-2 text-muted" to="/category/world">
              World
            </Link>
            <Link className="p-2 text-muted" to="/category/environment">
              Environment
            </Link>
            <Link className="p-2 text-muted" to="/category/technology">
              Technology
            </Link>
            <Link className="p-2 text-muted" to="/category/design">
              Design
            </Link>
            <Link className="p-2 text-muted" to="/category/culture">
              Culture
            </Link>
            <Link className="p-2 text-muted" to="/category/business">
              Business
            </Link>
            <Link className="p-2 text-muted" to="/category/politics">
              Politics
            </Link>
            <Link className="p-2 text-muted" to="/category/opinion">
              Opinion
            </Link>
            <Link className="p-2 text-muted" to="/category/science">
              Science
            </Link>
            <Link className="p-2 text-muted" to="/category/health">
              Health
            </Link>
            <Link className="p-2 text-muted" to="/category/style">
              Style
            </Link>
            <Link className="p-2 text-muted" to="/category/travel">
              Travel
            </Link>
          </nav>
        </div>
        {/* </Category> */}
      </Section>
    </div>
  );
};

export default Blog;
