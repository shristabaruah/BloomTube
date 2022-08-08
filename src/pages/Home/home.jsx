import { useState, useEffect } from "react";
import {
  CardContainer,
  Filter,
  Loader,
  Navbar,
  VideoCard,
} from "../../components";
import { getVideo } from "../../Services/getVideo";
import styles from "./home.module.css";

const Home = () => {
  const [videos, setVideo] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVideo(setVideo, setLoading);
  }, []);

  const searchHandler = (videos, searchInput) => {
    if (searchInput) {
      const searchItems = videos.filter((video) =>
        video.title.toLowerCase().includes(searchInput.toLowerCase().trim())
      );
      return searchItems;
    }
    return videos;
  };

  const filterHandler = (videos, filterCategory) => {
    if (filterCategory) {
      const categories = videos.filter(
        (video) => video.category === filterCategory
      );
      return categories;
    }
    return videos;
  };

  const filteredCategories = filterHandler(videos, filterCategory);
  const searchVideos = searchHandler(filteredCategories, searchInput);

  return (
    <>
      <Navbar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchHandler={searchHandler}
      />
      <div className={`${styles.home}`}>
        <Filter
          setFilterCategory={setFilterCategory}
          filterCategory={filterCategory}
        />

        <CardContainer>
          {loading ? (
            <Loader />
          ) : searchVideos.length > 0 ? (
            searchVideos.map((video) => (
              <li key={video._id}>
                <VideoCard {...video} videos={videos} />
              </li>
            ))
          ) : (
            <h1>No Videos</h1>
          )}
        </CardContainer>
      </div>
    </>
  );
};
export { Home };
