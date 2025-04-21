import React, { useState, useEffect } from 'react';
import { FaRegThumbsUp, FaRegComment, FaRegShareSquare } from "react-icons/fa";
import { formatDistanceToNow } from 'date-fns';
import assets from '../assets/assets';

const Posts = () => {
  const [adminPosts, setAdminPosts] = useState([]);
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [commentInputs, setCommentInputs] = useState({});
  const [visibleComments, setVisibleComments] = useState({}); // NEW

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = Array(8).fill(null).map(() => {
        const uniqueId = Date.now() + Math.random();
        
        return {
          id: uniqueId,
          user: "Admin",
          time: formatDistanceToNow(new Date(), { addSuffix: true }),
          content: "Just a simple text post.",
          likes: 0,
          comments: [],
        };
      });

      setAdminPosts(fetchedPosts);

      const initialLikes = {};
      const initialComments = {};
      const initialInputs = {};
      const initialVisibility = {};

      fetchedPosts.forEach(post => {
        initialLikes[post.id] = post.likes;
        initialComments[post.id] = post.comments;
        initialInputs[post.id] = "";
        initialVisibility[post.id] = false; // hide comments initially
      });

      setLikes(initialLikes);
      setComments(initialComments);
      setCommentInputs(initialInputs);
      setVisibleComments(initialVisibility);
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
      
      // 👇 Immediately hide the comment section after submitting
      setVisibleComments((prev) => ({ ...prev, [postId]: false }));
    }
  };
  

  const toggleCommentsVisibility = (postId) => {
    setVisibleComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <div className="relative w-full h-auto bg-gray-100 overflow-x-hidden">

      {/* Navbar */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg p-15 rounded-lg shadow-xl z-50"
        style={{
          backgroundImage: `url(${assets.himalaya})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
      </div>

      {/* Posts Section */}
      <div className="min-h-full flex flex-col items-center h-auto pt-34 px-2">
        <div className="h-auto w-full max-w-lg space-y-4">
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
                <button
                  className="flex items-center space-x-1 hover:text-blue-500"
                  onClick={() => toggleCommentsVisibility(post.id)}
                >
                  <FaRegComment /> <span>{comments[post.id]?.length || 0} Comments</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-500">
                  <FaRegShareSquare /> <span>Share</span>
                </button>
              </div>

              {/* Comment Section - Only if visible */}
              {visibleComments[post.id] && (
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

                  {/* Display Comments */}
                  {comments[post.id]?.length > 0 && (
                    <div className="mt-3">
                      {comments[post.id].map((comment, index) => (
                        <p key={index} className="bg-gray-200 p-2 rounded mt-1">{comment}</p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
