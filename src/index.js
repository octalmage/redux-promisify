const promisify = () => next => action => new Promise(resolve => resolve(next(action)));

export default promisify;
