import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch.js";

const BlogDetails = () => {
    const {id} = useParams();
    const {data, isPending, err} = useFetch(`http://localhost:8000/blogs/${id}`);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(navigate('/'))
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {err && <div>{err}</div>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>Written by {data.author}</p>
                    <div>{data.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;