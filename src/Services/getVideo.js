import axios from "axios";

const getVideo = async (setVideos , setLoading) => {
  try {
    setLoading(true)
    const response = await axios.get("/api/videos");
    if (response.status === 200) {
      setLoading(false)
      setVideos(response.data.videos);
    } else {
      console.error("error", response);
    }
  } catch (error) {
    console.error(error);
  }
};



export { getVideo };
