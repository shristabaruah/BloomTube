import { toast } from "react-toastify";
import {
  addToWatchLaterService,
  getWatchLaterService,
  removeFromWatchLaterService,
} from "../Services";

const getWatchLaterHandler = async (token, watchLaterDispatch) => {
  try {
    const response = await getWatchLaterService(token);
    if (response.status === 200) {
      watchLaterDispatch({
        type: "GET_WATCHLATER",
        payload: response.data.watchlater,
      });
    } else {
      throw new Error("Something went wrong ...Try Again Later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

const addTotWatchLater = async (video, token, watchLaterDispatch) => {
  try {
    const response = await addToWatchLaterService(video, token);

    if (response.status === 201) {
      watchLaterDispatch({
        type: "ADD_TO_WATCHLATER",
        payload: response.data.watchlater,
      });
      toast.info("Video added to Watch Later");
    } else {
      throw new Error("Something went wrong ...Try Again Later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

const removeFromWatchLater = async (id, token, watchLaterDispatch) => {
  try {
    const response = await removeFromWatchLaterService(id, token);
    if (response.status === 200) {
      watchLaterDispatch({
        type: "REMOVE_FROM_WATCHLATER",
        payload: response.data.watchlater,
      });
      toast.info("Video Removed From Watch Later");
    } else {
      throw new Error("Something went wrong ...Try Again Later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { getWatchLaterHandler, addTotWatchLater, removeFromWatchLater };
