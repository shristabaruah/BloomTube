import axios from "axios";

const getSingleVideo = async (setSingleVideo, videoId) => {
  try {
    const response = await axios.get(`/api/video/${videoId}`);
    if (response.status === 200) {
      setSingleVideo(response.data.video);
    }
  } catch (error) {
    console.error(error);
  }
};
export { getSingleVideo };
