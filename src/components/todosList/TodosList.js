const TodosList = ({todosList = []}) => {
    return (
        <div style ={{
            display:'flex',
            flexDirection:'column',
            gap:10,

        }}>
            {todosList.map(item => (
                <div key={item.id}
                     style={{
                         background: "yellowgreen"
                }}
                >

                        <div>Id:{item.id}</div>
                        <div>UserId:{item.userId}</div>
                        <div>Title:{item.title}</div>
                        <div>Status:{item.completed ? 'Completed' : 'Not done yet'}</div>

                </div>
            ))}
        </div>
    );
};
export {TodosList};

