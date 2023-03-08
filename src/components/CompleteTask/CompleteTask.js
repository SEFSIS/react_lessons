const CompleteTask = ({task}) => {
    const {id, userId, title,completed} = task;

    return (
        <div>
            <div>id:{id}</div>
            <div>userId:{userId}</div>
            <div> title:{title}</div>
            <div> completed:{completed.toString()}</div>
        </div>
    );
};
export {CompleteTask};

