import moment from "moment";
import React, { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToRead } from "../../redux/actions/contentActions";
import { tagFilter } from "../../redux/actions/filterActions";
import { clock, clockRotateLeft } from "./Blog";

const Card = ({ content, thumbnails }) => {
  const { title, image, description, tags, _id, createdAt, updatedAt } =
    content;
  const id = useId();
  const dispatch = useDispatch();
  const { tag: filterTag } = useSelector((state) => state.filter.filters);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md relative pb-14">
      <Link onClick={() => dispatch(addToRead(content))} to={`/blog/${_id}`}>
        <img
          className="rounded-t-lg w-full h-[200px] object-cover"
          src={image}
          alt=""
        />
      </Link>
      <div className="p-5">
        <Link onClick={() => dispatch(addToRead(content))} to={`/blog/${_id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:underline">
            {title.slice(0, 42)}...
          </h5>
        </Link>
        <div className="flex gap-5 mb-3 text-xs">
          <div className="flex gap-2 items-center border rounded-full p-2">
            {clock}{" "}
            <span>{moment(new Date(+createdAt)).format("Do MMM YY")}</span>
          </div>
          <div className="flex gap-2 items-center border rounded-full p-2">
            {clockRotateLeft}{" "}
            <span>{moment(new Date(+updatedAt)).fromNow()}</span>
          </div>
        </div>
        {!thumbnails && (
          <p className="mb-3 font-normal text-gray-700">
            {description.slice(0, 120)}...
          </p>
        )}
        {!thumbnails && (
          <div className=" flex flex-wrap items-center gap-2">
            {tagIcon}
            {tags.map((tag) => (
              <span
                onClick={() => dispatch(tagFilter(tag))}
                key={id + tag}
                class={`${
                  tag === filterTag
                    ? " bg-blue-100 text-blue-800 "
                    : " bg-gray-100 text-black "
                } text-sm font-medium px-2.5 py-0.5 rounded cursor-pointer`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <Link
          onClick={() => dispatch(addToRead(content))}
          to={`/blog/${_id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 absolute lef-10 bottom-5"
        >
          Read more
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;

export const tagIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 6h.008v.008H6V6z"
    />
  </svg>
);
