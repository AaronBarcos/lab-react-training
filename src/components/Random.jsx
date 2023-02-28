
function Random(props) {
    console.log(props)
    const randomNumber = () => {
        let randomNumber = Math.random() * props.max
        return Math.floor(randomNumber);
    }
  return (
    <div>
        <h3>Random value between {props.min} and {props.max} = {randomNumber()}</h3>
    </div>
  );
}

export default Random;