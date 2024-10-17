import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PostDetails = () => {
    const { id } = useParams();

    // Simulated post data (replace with actual data fetching logic later)
    const post = { title: `Post ${id}`, content: `Content for post ${id}` };

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link to={`/posts/${id}/edit`}>Edit</Link>
        </div>
    );
};

export default PostDetails;
