import { useState, useEffect } from "react";
import UsersList from "./UsersList";

const UsersListContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = () => {
            fetch("data/users.json")
            .then(response => response.json())
            .then(data => setUsers(data));
        };
        fetchUsers();
    }, []);

    return <UsersList users={users} />;
};

export default UsersListContainer;