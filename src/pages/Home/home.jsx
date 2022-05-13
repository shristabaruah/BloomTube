import { useState, useEffect } from "react";
import { CardContainer, VideoCard } from "../../components";
import { getVideo } from "../../Services/getVideo";
import styles from "./home.module.css";

const Home = () => {
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    getVideo(setVideo);
  }, []);
  return (
    <div className={styles.home}>
      <CardContainer>
        {videos.length > 0
          ? videos.map((video) => (
              <li key={video._id}>
                <VideoCard {...video} videos={videos} />
              </li>
            ))
          : null}
      </CardContainer>
    </div>
  );
};
export { Home };
