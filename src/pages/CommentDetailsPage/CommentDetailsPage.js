import {Details} from "../../components";
import {useParams} from "react-router-dom";

const CommentDetailsPage = () => {
    const {postId}=useParams();
    console.log(postId);

    return (
        <div>
          <Details/>
        </div>
    );
};
export {CommentDetailsPage};

