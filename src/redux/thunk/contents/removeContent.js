import { deleteContent } from "../../actions/contentActions";

const removeContent = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/blog/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    if (data.deletedCount) {
      dispatch(deleteContent(id));
    }
  };
};

export default removeContent;
