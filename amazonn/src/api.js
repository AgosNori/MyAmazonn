const fetchBook = () => {
    return fetch('/books/list')
    .then((res) => res.json)
    .then((res) => res);
};
const wrapPromise = (promise) => {
    let status = 'pending';
    let result;
    let suspender = promise.then(
        (res) => {
            status = 'success';
            result = res;
        },
        (err) => {
            status = 'error';
            result = err;

        }
    );
    return {
        read(){
            if (status === 'pending') throw suspender;
            else if ( status === 'error') throw result;
            else if (status === 'sucess') throw result;
        },
    };
};
export const fetchBookData = () => {
    return{
        book : wrapPromise(fetchBook()),
    };
};