const AllData = () => {
    const ctx = React.useContext(UserContext);

    let userData = ctx.users;
    console.log(userData);
    let len = userData.length;
    console.log(len);
    
    return (
        <Card
        current = "all-data"
        txtcolor = "black"
        hbgcolor = "warning"
        width = "auto"
        header = "All Data"
        title = "These are all your transactions"
        body = {(
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Transaction #</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Balance</th>
                </tr>
            </thead>
            <tbody>
                {userData.map((transaction, index) => (
                    <tr key={index}>
                    <th scope="col">{index}</th>
                    <th scope="col">{transaction.name}</th>
                    <th scope="col">{transaction.email}</th>
                    <th scope="col">{transaction.password}</th>
                    <th scope="col">${transaction.balance}</th>
                </tr>
                ))}
            </tbody>
        </table>
        )}
        />       
    );
};