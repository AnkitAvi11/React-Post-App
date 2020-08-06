
export const fetchPostAction = () => {
    return async (dispatch) => {
        let data = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
        dispatch({
            type:'FETCH_POST', 
            payload : data
        })
    }
}