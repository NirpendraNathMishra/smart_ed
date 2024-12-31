import {useUser} from "@clerk/clerk-react";

const ProtectedPage = () => {
    const { isSignedIn, user, isLoaded } = useUser();

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    if (!isSignedIn) {
        return <div>You must be logged in to view this page.</div>;
    }

    console.log(user);

    return (
        <div id="Carddiv">
            <h2>Protected Page</h2>
            <p>This page is only accessible after logging in.</p>
            <img
                src={`https://robohash.org/${user.id}.png?size=150x150`}
                alt="User Robot"
            />
            <div>
                <h3>{user.fullName}</h3>
                <p>{user.primaryEmailAddress.emailAddress}</p>
            </div>
        </div>
    );
};

export default ProtectedPage;