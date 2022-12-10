import { deleteContent } from "../../actions/contentActions";

const removeContent = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://content-management-app-server.vercel.app/blog/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    if (data.deletedCount) {
      dispatch(deleteContent(id));
    }
  };
};

export default removeContent;
