import axios from "axios";

const getVideo = async (setVideos) => {
  try {
    const response = await axios.get("/api/videos");
    if (response.status === 200) {
      setVideos(response.data.videos);
    } else {
      console.error("error", response);
    }
  } catch (error) {
    console.error(error);
  }
};



export { getVideo };
