import { updateContent } from "../../actions/contentActions";

const updateContentData = (id, content) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://content-management-app-server.vercel.app/blog/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(content),
        headers: { "Content-type": "application/json" },
      }
    );
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(updateContent({ _id: id, ...content }));
    }
  };
};

export default updateContentData;
