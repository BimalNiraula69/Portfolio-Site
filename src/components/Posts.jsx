import React, { useState, useEffect } from 'react'; 
import { FaFilePdf, FaFileVideo, FaRegThumbsUp, FaRegComment, FaRegShareSquare } from "react-icons/fa";

const Posts = () => {
  const [adminPosts, setAdminPosts] = useState([]);
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [commentInputs, setCommentInputs] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = [
        {
          id: 1,
          user: "Admin",
          time: "3 days ago",
          content: "Just a simple text post with no attachments.",
          likes: 10,
          comments: [],
        }
      ];
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
    <div className='relative w-screen h-auto bg-gray-100'>
      <h2 className="ml-4 text-2xl font-semibold text-center pt-6 mb-6"><span className="underline-custom">Pos</span>ts</h2>

      <div className="min-h-screen flex flex-col items-center p-4">
        <div className="h-auto w-full max-w-lg mt-4 space-y-4">
          {adminPosts.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-3">
                <span className="font-semibold">{post.user}</span>
                <span className="text-sm text-gray-500">{post.time}</span>
              </div>
              <p className="mt-3">{post.content}</p>

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
    </div>
  );
};

export default Posts;
