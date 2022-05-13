import {
  addToHistoryService,
  deleteHistoryService,
  getHistoryService,
  removeHistoryService,
} from "../Services";

const getHistory = async (token, historyDispatch) => {
  try {
    const response = await getHistoryService(token);
    if (response.status === 200) {
      historyDispatch({
        type: "GET_HISTORY",
        payload: response.data.history,
      });
    } else {
      throw new Error("Sorry! Something Went Wrong....Try Again Later");
    }
  } catch (error) {
    console.error("error", error);
  }
};

const addToHistory = async (video, token, historyDispatch) => {
  try {
    const response = await addToHistoryService(video, token);
    if (response.status === 201) {
      historyDispatch({
        type: "ADD_TO_HISTORY",
        payload: response.data.history,
      });
    } else {
      throw new Error("Sorry! Something Went Wrong....Try Again Later");
    }
  } catch (error) {
    console.error("error", error);
  }
};

const removeHistory = async (id, token, historyDispatch) => {
  try {
    const response = await removeHistoryService(id, token);
    if (response.status === 200) {
      historyDispatch({
        type: "REMOVE_FROM_HISTORY",
        payload: response.data.history,
      });
    } else {
      throw new Error("Sorry! Something Went Wrong....Try Again Later");
    }
  } catch (error) {
    console.error("error", error);
  }
};

const removeAllHistory = async (token, historyDispatch) => {
  try {
    const response = await deleteHistoryService(token);
    if (response.status === 200) {
      historyDispatch({
        type: "CLEAR_HISTORY",
        payload: response.data.history,
      });
    } else {
      throw new Error("Sorry! Something Went Wrong....Try Again Later");
    }
  } catch (error) {
    console.error("error", error);
  }
};

export { getHistory, addToHistory, removeAllHistory, removeHistory };
