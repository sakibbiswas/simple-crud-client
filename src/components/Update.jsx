import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loaduser = useLoaderData()
    const handelupdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const email = form.email.value

        console.log(name, email);
        const updateuser = { name, email }
        fetch(`http://localhost:4000/users/${loaduser._id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateuser),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('deleted successfully');

                }
            })
    }
    return (
        <div>
            <h3>update information of : {loaduser.name}</h3>
            <form onSubmit={handelupdate} >
                <input type="text" name='name' defaultValue={loaduser?.name} />
                <br />
                <input type="email" name="email" defaultValue={loaduser?.email} />
                <br />
                <input type="submit" value="Add user" />
            </form>
        </div>
    );
};

export default Update;