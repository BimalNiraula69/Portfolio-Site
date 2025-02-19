import React, { useState, useEffect } from 'react';
import { FaRegThumbsUp, FaRegComment, FaRegShareSquare } from "react-icons/fa";
import assets from '../assets/assets';

const Posts = () => {
  const [adminPosts, setAdminPosts] = useState([]);
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [commentInputs, setCommentInputs] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = Array(8).fill({
        id: Math.random(), // Ensure unique ID for each post
        user: "Admin",
        time: "3 days ago",
        content: "Just a simple text post with no attachments.",
        likes: 10,
        comments: [],
      });

      setAdminPosts(fetchedPosts);
      setLikes(fetchedPosts.reduce((acc, post) => ({ ...acc, [post.id]: post.likes }), {}));
      setComments(fetchedPosts.reduce((acc, post) => ({ ...acc, [post.id]: post.comments }), {}));
    };

    fetchPosts();
  }, []);

  const handleLike = (postId) => {
    setLikes((prev) => ({ ...prev, [postId]: prev[postId] + 1 }));
  };

  const handleComment = (postId) => {
    if (commentInputs[postId]) {
      setComments((prev) => ({
        ...prev,
        [postId]: [...prev[postId], commentInputs[postId]],
      }));
      setCommentInputs((prev) => ({ ...prev, [postId]: "" }));
    }
  };

  return (
    <div className="relative w-full h-auto bg-gray-100 overflow-x-hidden">
      
      {/* Navbar */}
      <div
        className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg text-white p-4 rounded-lg shadow-xl z-50"
        style={{
          backgroundImage: `url(${assets.himalaya})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className="ml-4 text-2xl font-semibold text-center">
          <span className="underline-custom">Pos</span>ts
        </h2>
      </div>

      {/* Posts Section */}
      <div className="min-h-full flex flex-col items-center h-full pt-19 px-2">
        <div className="w-full max-w-lg space-y-4">
          {adminPosts.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-3">
                <span className="font-semibold">{post.user}</span>
                <span className="text-sm text-gray-500">{post.time}</span>
              </div>
              <p className="mt-3">{post.content}</p>

              {/* Buttons */}
              <div className="flex justify-between mt-3 text-gray-600">
                <button className="flex items-center space-x-1 hover:text-blue-500" onClick={() => handleLike(post.id)}>
                  <FaRegThumbsUp /> <span>{likes[post.id]} Likes</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-500">
                  <FaRegComment /> <span>{comments[post.id].length} Comments</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-500">
                  <FaRegShareSquare /> <span>Share</span>
                </button>
              </div>

              {/* Comment Section */}
              <div className="mt-3">
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Write a comment..."
                  value={commentInputs[post.id] || ""}
                  onChange={(e) => setCommentInputs((prev) => ({ ...prev, [post.id]: e.target.value }))}
                />
                <button
                  className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => handleComment(post.id)}
                >
                  Comment
                </button>
              </div>

              {/* Display Comments */}
              {comments[post.id].length > 0 && (
                <div className="mt-3">
                  {comments[post.id].map((comment, index) => (
                    <p key={index} className="bg-gray-200 p-2 rounded mt-1">{comment}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Custom Underline Style */}
      <style jsx>{`
        .underline-custom {
          position: relative;
          display: inline-block;
        }
        .underline-custom::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 100%;
          height: 3px;
          background-color: #149ddd;
        }
      `}</style>
    </div>
  );
};

export default Posts;
