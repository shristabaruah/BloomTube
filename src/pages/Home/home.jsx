import { useState, useEffect } from "react";
import { CardContainer, VideoCard } from "../../components";
import { getVideo } from "../../Services/getVideo";
import styles from "./home.module.css";

const Home = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    getVideo(setVideo);
  }, []);

  return (
    <div className={`body_style ${styles.home}`}>
      <CardContainer>
        {video.length > 0
          ? video.map((videos) => (
              <li key={videos._id}>
                <VideoCard {...videos} />
              </li>
            ))
          : null}
      </CardContainer>
    </div>
  );
};
export { Home };
