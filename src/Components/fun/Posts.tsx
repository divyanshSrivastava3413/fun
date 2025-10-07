import {
  ChevronDown,
  ChevronUp,
  Edit2,
  MessageSquare,
  PlusCircle,
  Trash,
} from "lucide-react";
import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "React Tips",
    comments: [
      { id: 1, text: "Great post!" },
      { id: 2, text: "Very helpful." },
      { id: 3, text: "Thanks for sharing." },
    ],
  },
  {
    id: 2,
    title: "JavaScript Tricks",
    comments: [
      { id: 4, text: "Awesome!" },
      { id: 5, text: "Could use more examples." },
    ],
  },
  {
    id: 3,
    title: "CSS Grid Guide",
    comments: [
      { id: 6, text: "Finally understand grids." },
      { id: 7, text: "Saved me so much time!" },
      { id: 8, text: "Nice visuals." },
      { id: 9, text: "Can you do Flexbox next?" },
    ],
  },
  {
    id: 4,
    title: "TypeScript Basics",
    comments: [
      { id: 10, text: "Clear and concise." },
      { id: 11, text: "More examples would help." },
    ],
  },
  {
    id: 5,
    title: "Advanced React Patterns",
    comments: [
      { id: 12, text: "Mind blown 🤯" },
      { id: 13, text: "Very useful patterns." },
      { id: 14, text: "Hooks are life!" },
    ],
  },
  {
    id: 6,
    title: "Node.js Performance Tips",
    comments: [
      { id: 15, text: "Great tips, thanks!" },
      { id: 16, text: "This is gold." },
      { id: 17, text: "Could use more benchmarks." },
    ],
  },
];

interface PostElem {
  id: number;
  title: string;
  comments: any[];
}

const Posts = () => {
  const [postData, setPostData] = useState(posts);
  const [dropdown, setDropdown] = useState(0);
  const [addCom, setAddCom] = useState(0);
  const [editedCom, setEditedCom] = useState("");
  const [editCom, setEditCom] = useState({ post: 0, com: 0 });
  const [addedComment, setAddedComment] = useState("");

  const handleAddComment = (postId: number) => {
    setPostData((prev: any) =>
      prev.map((post: PostElem) => {
        if (post.id === postId) {
          const maxId = Math.max(0, ...post.comments.map((c) => c.id));

          console.log(maxId);
          return {
            ...post,
            comments: [...post.comments, { id: maxId + 1, text: addedComment }],
          };
        }
        return post;
      })
    );
    setAddCom(0);
    setAddedComment("");
  };

  const handleDeleteCom = (postId: number, comId: number) => {
    setPostData((prev: any) =>
      prev.map((post: PostElem) => {
        if (post.id == postId) {
          return {
            ...post,
            comments: [...post.comments.filter((p) => p.id != comId)],
          };
        }
        return post;
      })
    );
  };

  const handleEditCom = (postId: number, comId: number) => {
    setPostData((prev: any) =>
      prev.map((post: PostElem) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [
              ...post.comments.map((c) => {
                if (c.id === comId) {
                  return {
                    ...c,
                    text: editedCom,
                  };
                }
                return c;
              }),
            ],
          };
        }
        return post;
      })
    );
    setEditCom({ post: 0, com: 0 });
    setEditedCom("");
  };

  return (
    <div className="w-280 p-4 mt-10 mx-auto fun">
      <div className="flex flex-col justify-center items-center w-full gap-1 mb-4">
        <h1 className="fun text-4xl font-semibold">Posts Manager</h1>
        <p className="text-gray-600 text-md">
          You can see, edit and manage your posts here...
        </p>
      </div>
      <div className="w-[90%] mx-auto rounded-md  p-2">
        {postData.map((post) => {
          return (
            <div
              className="flex flex-col justify-start items-center mb-2"
              key={post.id}
            >
              <div className="w-full rounded-t-md bg-violet-600 py-1 font-light text-lg fun px-2 text-white flex justify-between items-center">
                <span className="flex justify-start items-center gap-4">
                  {post.title}{" "}
                  <p className="flex justify-start items-center text-md ">
                    {" "}
                    <MessageSquare size={18} />:{" " + post.comments.length}
                  </p>
                </span>
                {dropdown === post.id ? (
                  <ChevronUp
                    size={32}
                    className="p-2 cursor-pointer"
                    onClick={() => setDropdown(0)}
                  />
                ) : (
                  <ChevronDown
                    size={32}
                    className="p-2 cursor-pointer"
                    onClick={() => setDropdown(post.id)}
                  />
                )}
              </div>
              {dropdown === post.id && (
                <div className="w-full  shadow-gray-500 rounded-b-md  border-gray-400 border-b-2 border-l-2 border-r-2 p-2">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-md flex justify-start items-center gap-1">
                      <MessageSquare size={20} />
                      Comments:
                    </p>
                    <button
                      className="px-2 py-1 cursor-pointer flex justify-center items-center gap-1 text-sm border-2 border-gray-900 rounded-md"
                      onClick={() => setAddCom(post.id)}
                    >
                      <PlusCircle size={22} /> Add Comment
                    </button>
                  </div>
                  {post.comments.length == 0 && !addCom && (
                    <p className="text-center w-full">
                      No comments found for this post.
                    </p>
                  )}
                  {post.comments.map((com) => {
                    return (
                      <div
                        className="w-full border-2 border-teal-600 rounded-md p-2 flex justify-center items-center bg-teal-200 mt-1"
                        key={com.id}
                      >
                        {editCom.com !== com.id && (
                          <p className="fun text-md w-full">{com.text}</p>
                        )}
                        {editCom.com === com.id && (
                          <div className="w-full">
                            <input
                              className="w-max border-2 border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:border-transparent focus:ring-yellow-600 px-2 py-1"
                              type="text"
                              placeholder="Enter comment"
                              value={editedCom}
                              autoFocus
                              onChange={(e) => setEditedCom(e.target.value)}
                            />
                          </div>
                        )}

                        {editCom.com !== com.id && (
                          <span className="flex justify-center items-center gap-2">
                            <Edit2
                              className="p-1 border-2 border-yellow-600 text-yellow-600 bg-yellow-200 cursor-pointer rounded-md hover:bg-yellow-300"
                              size={32}
                              onClick={() =>
                                setEditCom({ post: post.id, com: com.id })
                              }
                            />
                            <Trash
                              className="p-1 border-2 border-red-600 text-red-600 bg-red-200 cursor-pointer rounded-md hover:bg-red-300"
                              onClick={() => handleDeleteCom(post.id, com.id)}
                              size={32}
                            />
                          </span>
                        )}
                        {editCom.com === com.id && (
                          <span className="flex justify-center items-center gap-2">
                            <button
                              onClick={() => setEditCom({ post: 0, com: 0 })}
                              className="px-2 py-1 border-2 border-gray-600 bg-gray-300 text-black cursor-pointer rounded-md hover:bg-gray-50"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => handleEditCom(post.id, com.id)}
                              className="px-2 py-1 border-2 border-green-600 bg-green-300 text-black cursor-pointer rounded-md hover:bg-green-400"
                            >
                              Save
                            </button>
                          </span>
                        )}
                      </div>
                    );
                  })}
                  {addCom === post.id && (
                    <div className="w-full border-2 border-teal-600 rounded-md p-2 flex justify-start items-center bg-teal-200 mt-1">
                      <input
                        className="border-2 border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:border-transparent focus:ring-teal-600 px-2 py-1"
                        type="text"
                        placeholder="Enter comment"
                        value={addedComment}
                        autoFocus
                        onChange={(e) => setAddedComment(e.target.value)}
                      />
                      <span className="flex gap-2 pl-6">
                        <button
                          onClick={() => setAddCom(0)}
                          className="px-2 py-1 border-2 border-gray-600 bg-gray-300 text-black cursor-pointer rounded-md hover:bg-gray-50"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleAddComment(post.id)}
                          className="px-2 py-1 border-2 border-green-600 bg-green-300 text-black cursor-pointer rounded-md hover:bg-green-400"
                        >
                          Save
                        </button>
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
