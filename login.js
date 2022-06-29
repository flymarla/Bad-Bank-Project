// this page is not used at this time
const Login = () => {
    const ctx = React.useContext(UserContext);

    return (
        <Card
        bgcolor = "primary"
        txtcolor = "white"
        hbgcolor = "secondary"
        width = "18rem"
        header = "Login Page"
        title = "This is the login page?"
        text = "Form coming soon!"
        body = {(<img src="bank.png" className="img-fluid" alt="bank graphic"/>)}
        />    
    );
};