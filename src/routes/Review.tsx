import Post from "../components/Content/Post";

import { useParams } from "react-router-dom";

const Review = () => {
    const { id } = useParams();

    return (
        <>
            <Post />
        </>
    );
}

export default Review;