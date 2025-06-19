import styles from "./PostDataApi.module.scss";

export default async function PostDataApi() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>API</h1>
      {data.map((post) => (
        <div key={post.id} className={styles.container}>
          <h2>{post.id}</h2>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
}



// second
// 'use client';
// import { useState, useEffect } from 'react';
// import { Card, Typography } from 'antd';
// import styles from './PostDataApi.module.scss';

// const { Title, Paragraph } = Typography;

// export default function PostDataApi() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     async function fetchPosts() {
//       const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const data = await res.json();
//       setPosts(data);
//     }
//     fetchPosts();
//   }, []);

//   return (
//     <div className={styles.wrapper}>
//       <Title level={2} className={styles.heading}>
//         API Posts
//       </Title>
//       {posts.map((post) => (
//         <Card key={post.id} className={styles.card} hoverable>
//           <Title level={4}>{post.id}. {post.title}</Title>
//           <Paragraph>{post.body}</Paragraph>
//         </Card>
//       ))}
//     </div>
//   );
// }
