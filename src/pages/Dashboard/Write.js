import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import addContentData from "../../redux/thunk/contents/addContentData";
import updateContentData from "../../redux/thunk/contents/updateContentData";
import TagItem from "./TagItem";

const Write = ({ name }) => {
  const state = useLocation().state;

  const [title, setTitle] = useState(state?.title || "");
  const [image, setImage] = useState(state?.image || "");
  const [description, setDescription] = useState(state?.description || "");
  const [tags, setTags] = useState(state?.tags || []);

  const tagInputRef = useRef("");

  const dispatch = useDispatch();

  const handleAddTag = () => {
    const tag = tagInputRef.current.value;
    if (tags.includes(tag)) return;
    setTags([...tags, tag]);
    tagInputRef.current.value = "";
  };

  const handleRemove = (name) => {
    const filtered = tags.filter((t) => t !== name);
    setTags([...filtered]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const content = {
      title,
      image,
      description,
      tags,
      updatedAt: Date.now(),
    };
    if (state) {
      dispatch(updateContentData(state._id, content));
      toast.success("Post update successfully!");
    } else {
      dispatch(addContentData({ ...content, createdAt: Date.now() }));
      setTitle("");
      setImage("");
      setDescription("");
      setTags([]);
      toast.success("Post added successfully!");
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold pl-6 my-5">{name} contents</h1>
      <div className="lg:w-[50%] w-full mx-5 bg-white p-5">
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col gap-5"
          action=""
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Title"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Image
            </label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Image url"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Content here..."
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Add Tag
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                ref={tagInputRef}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddTag();
                    e.preventDefault();
                  }
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Tag"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="px-3 bg-blue-500 text-white rounded-md"
              >
                Add
              </button>
            </div>
            <div className="flex mt-2 flex-wrap">
              {tags.map((tag) => (
                <TagItem key={tag} handleRemove={handleRemove} tag={tag} />
              ))}
            </div>
            <button className="px-3 py-2 bg-blue-500 text-white rounded-md mt-3 ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Write;
