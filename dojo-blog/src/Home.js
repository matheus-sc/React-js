/* const Home = () => {
    const handleClick = () => console.log('Clicked!');

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home ; */

import useFetch from './useFetch.js';
import BlogList from './BlogList';

const Home = () => {
    const {data, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {data && <BlogList blogs={data} title='All Blogs'/>}
        </div>
    );
};

export default Home;