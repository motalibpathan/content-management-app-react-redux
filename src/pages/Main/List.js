import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const List = () => {
  const list = useSelector((state) => state.content.list);
  let content = <p>Nothing to show</p>;

  if (list.length) {
    content = list.map((content) => (
      <Card key={content._id} content={content} thumbnails={true} />
    ));
  }

  return (
    <div className="max-w-[1024px] mx-auto w-full lg:p-0 p-5">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-5 mb-10">
        {content}
      </div>
    </div>
  );
};

export default List;
