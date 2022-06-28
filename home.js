const Home = () => {

    return (
        <Card
        current = "home"
        bgcolor = "warning bg-opacity-50"
        txtcolor = "black"
        hbgcolor = "warning"
        width = "auto"
        header = "Welcome to the Bank"
        body = {(<img src="usBank.jpg" className="img-fluid" alt="bank graphic"/>)}
        />       
    );
};