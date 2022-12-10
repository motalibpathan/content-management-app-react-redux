import { getContents } from "../../actions/contentActions";

const getContentData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/blogs");
    const data = await res.json();
    console.log(data);
    if (data.data.length) {
      dispatch(getContents(data.data));
    }
  };
};

export default getContentData;
