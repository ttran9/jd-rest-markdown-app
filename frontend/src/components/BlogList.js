import React, { useEffect, useState } from "react";

// function based components for simplicity and using hooks is more simple.
const BlogList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/blog/posts/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ margin: 10, padding: 10 }}>
      <h1>Blog List</h1>
      {error && (
        <h4 style={{ padding: 5, color: "red" }}>An error occured: {error}</h4>
      )}
      {loading ? (
        <div>Loading....</div>
      ) : (
        <div>
          {data &&
            data.map((post) => {
              return (
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default BlogList;
