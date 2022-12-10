import { addContent } from "../../actions/contentActions";

const addContentData = (content) => {
  console.log("add content data");
  return async (dispatch, getState) => {
    const res = await fetch(
      "https://content-management-app-server.vercel.app/blog",
      {
        method: "POST",
        body: JSON.stringify(content),
        headers: { "Content-type": "application/json" },
      }
    );
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(addContent({ _id: data.insertedId, ...content }));
    }
  };
};

export default addContentData;
