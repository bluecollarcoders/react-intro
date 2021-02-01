const App = () => {
    return (
        <div>
            <RandomChoice choices={['red', 'green', 'yellow']}/>
            <Animal name="Pearl" species="dog" emoji="🐶" isCute={true}/>
            <Animal name="Chauncy" species="cat" emoji="🐱" isCute={false}/>
            <RandomNum />
            <RandomNum />
            <RandomNum />
            <Bouncer age={19} />
            <Bouncer age={11} />
            <Bouncer age={89} />
            <Bouncer age={29} />
            <TodoLList todos={['walk dog', 'clean kitchen', 'make bed']} />
        </div>
    )
    
    }


ReactDOM.render(<App />, document.getElementById("root"))