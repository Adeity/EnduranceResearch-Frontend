import { useState } from 'react';
import Layout from "../components/layout";

function Userform() {
    const [user, setUser] = useState({
        name: '',
        phoneNumber: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    return (
        <Layout title={"user form"}>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" value={user.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Phone Number:
                    <input type="text" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} />
                </label>
                <br />
            </form>
        </Layout>
    );
}

export default Userform