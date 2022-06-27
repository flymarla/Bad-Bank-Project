const Spa = () => {
    return(    
    <HashRouter>
        <Navbar/>
        <UserContext.Provider value={{users:[{name:'Account Holder Name',email:'username@example.com',password:'secret',balance:0.00}]}} >
            <Route path="/" exact           component={Home}></Route>
            <Route path="/createaccount/"   component={CreateAccount}></Route>
            <Route path="/login/"           component={Login}></Route>
            <Route path="/deposit/"         component={Deposit}></Route>
            <Route path="/withdraw/"        component={Withdraw}></Route>
            <Route path="/balance/"         component={Balance}></Route>
            <Route path="/alldata/"         component={AllData}></Route>
        </UserContext.Provider>
    </HashRouter>
    );
};

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
);