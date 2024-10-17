import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const EditPost = () => {
    const { id } = useParams();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated Post:', { id, title, content });
        history.push(`/posts/${id}`);
    };

    return (
        <div>
            <h1>Edit Post {id}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditPost;
