import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSort } from "../../redux/actions/filterActions";
import getContentData from "../../redux/thunk/contents/getContentData";
import Card from "./Card";

const Home = () => {
  const contents = useSelector((state) => state.content.contents);
  const { sortBy, tag } = useSelector((state) => state.filter.filters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContentData());
  }, []);

  const activeClass = "text-white bg-[#003580] border-white";
  let content;

  if (contents.length) {
    content = contents
      .filter((c) => {
        if (tag !== "") {
          return c.tags.includes(tag);
        }
        return c;
      })
      .sort((a, b) => {
        if (sortBy === "lastUpdate") {
          return b.updatedAt - a.updatedAt;
        }
        if (sortBy === "firstUpload") {
          return a.createdAt - b.createdAt;
        }
        return b.createdAt - a.createdAt;
      })
      .map((content) => <Card key={content._id} content={content} />);
  }

  return (
    <div className="max-w-[1024px] mx-auto w-full lg:p-0 p-5">
      <div className="mb-10 mt-5 flex justify-end items-center gap-5">
        <span> Sort by : </span>{" "}
        <button
          onClick={() => dispatch(toggleSort("lastUpdate"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            sortBy === "lastUpdate" ? activeClass : null
          } `}
        >
          Last update
        </button>
        <button
          onClick={() => dispatch(toggleSort("firstUpload"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            sortBy === "firstUpload" ? activeClass : null
          }  `}
        >
          First Upload
        </button>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-5 mb-10">
        {content}
      </div>
    </div>
  );
};

export default Home;
