import * as _ from 'lodash';

export const fetchUser = (userId) => {
    return function(dispatch) {
        _fetchUser(userId, dispatch);
    }
}

const _fetchUser = _.memoize(async (userId, dispatch) => {
    let user = await (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json();
    dispatch ({
        type : 'FETCH_USER',
        payload : user
    });
});
