import axios from "axios";

const getCategories = async (setCategories) => {
  try {
    const response = await axios.get("/api/categories");
    if (response.status === 200) {
      setCategories(response.data.categories);
    }
  } catch (error) {
    console.error("error", error);
  }
};
export { getCategories };
