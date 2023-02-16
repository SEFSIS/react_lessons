const UserPost = ({userPost}) => {
    const {id, userId, title, body} = userPost;

    return (
        <div>
            <div>id:{id}</div>
            <div>userId:{userId}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>
    );
};
export {UserPost};

