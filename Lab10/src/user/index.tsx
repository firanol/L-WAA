import "./index.css"
import "./bootstrap.css";
import axios from "axios";
import {useState, KeyboardEvent} from "react";

export default function User() {
    const [keyword, setKeyword] = useState('');
    const [users, setUsers] = useState<any[]>([]);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        if (!keyword) return;

        setError(''); // Reset error message
        try {
            const response = await axios.get(`https://api.github.com/search/users?q=${keyword}`);
            setUsers(response.data.items);
        } catch (err) {
            setError('Error fetching users');
        }
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div id="app">
            <div className="container">
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter the name you search"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        &nbsp;
                        <button onClick={handleSearch}>Search</button>
                    </div>
                </section>
                {error && <p className="text-danger">{error}</p>}
                <div className="row">
                    {users.map((user: any) => (
                        <div className="card" key={user.id}>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                                <img src={user.avatar_url} alt={user.login} style={{width: '100px'}}/>
                            </a>
                            <p className="card-text">{user.login}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}