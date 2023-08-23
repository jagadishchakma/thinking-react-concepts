import withCounter from "./withCounter";

function hoverCounter({value,countHandler}){
    let style = {
        width: 200,
        padding: 5,
        backgroundColor: 'gray',
        color: 'black',
        fontSize: 30,
        textAlign: 'center'
    }
    return(
        <div>
            <h1 onMouseOver={countHandler} style={style}>Hover {value}</h1>
        </div>
    );
}

export default withCounter(hoverCounter);