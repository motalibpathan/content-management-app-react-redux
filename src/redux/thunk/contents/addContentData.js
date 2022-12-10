import { addContent } from "../../actions/contentActions";

const addContentData = (content) => {
  console.log("add content data");
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/blog", {
      method: "POST",
      body: JSON.stringify(content),
      headers: { "Content-type": "application/json" },
    });
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(addContent({ _id: data.insertedId, ...content }));
    }
  };
};

export default addContentData;
