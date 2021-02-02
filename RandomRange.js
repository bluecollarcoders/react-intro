const RandomRange = ({min = 40, max = 100 }) => {
  const rand = Math.floor(Math.random() * (max - min)) + min;
  return <h1>Rand Is: {rand}</h1>
}