import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostsList from './components/PostsList';
import PostDetails from './components/PostDetails';
import EditPost from './components/EditPost';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={PostsList} />
                    <Route path="/posts/:id" component={PostDetails} />
                    <Route path="/posts/:id/edit" component={EditPost} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
