import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const LoadedUsers = useLoaderData();
    const [users, setUsers] = useState(LoadedUsers)
    const handeldelete = _id => {
        console.log('delete', _id);
        fetch(`http://localhost:4000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainig = users.filter(user => user._id !== _id);
                    setUsers(remainig);
                }
            })
    }
    return (
        <div>
            <h2>{LoadedUsers.length}</h2>
            <div>
                {
                    LoadedUsers.map(user => <p key={user._id}>
                        {user.name}:
                        {user.email}
                        {user._id}
                        <Link to={`/update/${user._id}`} >
                            <button>update</button>
                        </Link>
                        <button onClick={() => handeldelete(user._id)}>x</button>
                    </p>
                    )
                }
            </div>
        </div >
    );
};

export default Users;
