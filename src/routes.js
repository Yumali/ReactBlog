import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';

export default (
//EX: google.com/ => renders App
<Route path="/" component={App}>
    <IndexRoute components={PostsIndex} />
</Route>
);
