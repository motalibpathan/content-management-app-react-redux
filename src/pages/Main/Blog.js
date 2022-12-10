import moment from "moment/moment";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card, { tagIcon } from "./Card";

const Blog = () => {
  const { id } = useParams();

  const contents = useSelector((state) => state.content.contents);

  if (contents.length === 0) {
    return (
      <div className="max-w-[1024px] mx-auto w-full lg:p-0 p-5 ">
        <p>Nothing to show!</p>
      </div>
    );
  }

  const { title, image, description, tags, _id, createdAt, updatedAt } =
    contents?.find((c) => c._id === id);

  return (
    <div className="max-w-[1024px] mx-auto w-full lg:p-0 p-5 ">
      <div className="w-[100%] mt-5 mb-10">
        <img className="w-full" src={image} alt="" />
        <h1 className="text-3xl font-bold my-3">{title}</h1>
        <div className="flex gap-5 mb-5 text-sm">
          <div className="flex gap-2 items-center border rounded-full p-2">
            {clock}{" "}
            <span>{moment(new Date(+createdAt)).format("Do MMM YY")}</span>
          </div>
          <div className="flex gap-2 items-center border rounded-full p-2">
            {clockRotateLeft}{" "}
            <span>{moment(new Date(+updatedAt)).fromNow()}</span>
          </div>
        </div>
        <p className="my-3">{description}</p>
        <div className=" flex flex-wrap items-center gap-2 mt-5">
          {tagIcon}
          {tags.map((tag) => (
            <span
              key={id + tag}
              class={` bg-gray-100 text-black
             text-sm font-medium px-2.5 py-0.5 rounded `}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <p className="text-2xl font-bold mb-3">You may also like</p>
      <div className="w-[100%] flex gap-5 mb-10">
        {contents.slice(0, 3).map((content) => (
          <Card key={content._id} content={content} thumbnails={true} />
        ))}
      </div>
    </div>
  );
};

export default Blog;

export const clockRotateLeft = (
  <svg
    className="w-4 h-4"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z" />
  </svg>
);

export const clock = (
  <svg
    className="w-4 h-4"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z" />
  </svg>
);
