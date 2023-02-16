const Post = ({post, setPostDetails}) => {
    const {id, title} = post;

    return (
        <div>

            <div>id:{id}</div>
            <div>title:{title}</div>
            <button onClick={() => setPostDetails(post)}> Get Info</button>
        </div>
    );
};
export {Post};