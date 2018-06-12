import React from 'react';
import {render} from 'react-dom';
import {UsersListContainer} from './bundles/Users/components/UsersList';

render( <UsersListContainer />,
    document.getElementById('root')
)

//fix reload page
module.hot.accept()