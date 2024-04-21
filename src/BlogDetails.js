import { useParams } from "react-router-dom";

const BlogDetails = () => {
  let { id } = useParams();
  
  return (
    <div className="blog-details">
      <h2>Hell</h2>
      <h2>{id}</h2>
    </div>
  );
}
 
export default BlogDetails;