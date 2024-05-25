import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    setLoading(true); // Start the loading indicator
    try {
      let res = await axios({
        method: "get",
        url: `https://jsonplaceholder.typicode.com/posts`, // Example API for fetching posts
      });

      setPosts(res.data); // Update posts state with fetched data
      setLoading(false); // Stop the loading indicator
    } catch (error) {
      setError(true); // Set error state to true if an error occurs
      setLoading(false); // Stop the loading indicator
    }
  }

  useEffect(() => {
    fetchAndUpdateData(); // Fetch data as soon as the component mounts
  }, []);

  if (loading) {
    return <LoadingIndicator />; // Show loading indicator while data is being fetched
  }

  if (error) {
    return <ErrorIndicator />; // Show error indicator if an error occurs
  }

  return (
    <div>
      <h1>List of Posts</h1>
      {posts.map((post) => (
        <Post {...post} key={post.id} /> // Render each post using the Post component
      ))}
    </div>
  );
}

export default Posts;
