import { toast } from "react-toastify";
import {
  addToLikeService,
  getLikeService,
  removeFromLikeService,
} from "../Services";

const addToLikeHandler = async (video, token, likeDispatch) => {
  try {
    const response = await addToLikeService(video, token);

    if (response.status === 201) {
      likeDispatch({ type: "ADD_TO_LIKES", payload: response.data.likes });

      toast.info("Video added to Likes");
    } else {
      throw new Error("Sorry !! Something went wrong ...Try Again Later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

const removeFromLikesHandler = async (id, token, likeDispatch) => {
  try {
    const response = await removeFromLikeService(id, token);
    if (response.status === 200) {
      likeDispatch({ type: "REMOVE_FROM_LIKES", payload: response.data.likes });
      toast.info("Video Removed From Likes");
    } else {
      throw new Error("Sorry !! Something went wrong ...Try Again Later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

const getLikesHandler = async (token, likeDispatch) => {
  try {
    const response = await getLikeService(token);
    if (response.status === 200) {
      likeDispatch({ type: "GET_LIKES", payload: response.data.likes });
    } else {
      throw new Error("Sorry !! Something went wrong ...Try Again Later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { addToLikeHandler, removeFromLikesHandler, getLikesHandler };
