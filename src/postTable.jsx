import { useState } from 'react';
import reactLogo from './assets/react.svg';
import React, { useEffect, useState } from "react";

function PostTable() {
  const [posts, setPosts] = useState([]);

  // Fetch API data once when component loads
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts Data</h2>
      <table style={tableStyle}>
        <thead style={theadStyle}>
          <tr>
            <th style={cellStyle}>User ID</th>
            <th style={cellStyle}>ID</th>
            <th style={cellStyle}>Title</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} style={rowStyle}>
              <td style={cellStyle}>{post.userId}</td>
              <td style={cellStyle}>{post.id}</td>
              <td style={cellStyle}>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Inline CSS (same as your HTML <style>)
const tableStyle = {
  width: "100%",
  border: "2px solid",
  borderCollapse: "collapse",
};

const theadStyle = {
  border: "2px solid",
  backgroundColor: "#f2f2f2",
};

const rowStyle = {
  border: "2px solid",
};

const cellStyle = {
  borderLeft: "2px solid",
  borderRight: "2px solid",
  padding: "8px",
};

export default PostTable;
