const RandomNum = () => {
    const rand = Math.floor(Math.random() * 10) + 1;
    // return <h3>{rand}</h3>
    return React.createElement("h1", null, rand);
}