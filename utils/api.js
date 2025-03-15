import axios from "axios";

export const postData = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error("POST request error:", error);
    return { error: "Request failed" };
  }
};

export const getData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response || error.message);
    throw error;
  }
};
