const Home = () => {

    return (
        <Card
        current = "home"
        txtcolor = "black"
        hbgcolor = "warning"
        width = "18rem"
        header = "BadBank Landing Page"
        title = "Welcome to the bank"
        text = "You can use this bank"
        body = {(<img src="bank.png" className="img-fluid" alt="bank graphic"/>)}
        />       
    );
};