// This page is not used.
const Balance = () => {
    const ctx = React.useContext(UserContext);

    return (
        <>
        <h1>Welcome to Balance Page</h1>
        <h3>{JSON.stringify(ctx)}</h3>
        </>
    );
};