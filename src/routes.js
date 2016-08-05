import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

export default (
//EX: google.com/ => renders App
<Route path="/" component={App}>
    <IndexRoute components={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
</Route>
);
