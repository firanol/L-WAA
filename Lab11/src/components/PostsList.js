import React from 'react';
import { Link } from 'react-router-dom';

const PostsList = () => {
    // Simulated data
    const posts = [
        { id: 1, title: 'First Post' },
        { id: 2, title: 'Second Post' },
    ];

    return (
        <div>
            <h1>Posts List</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsList;
