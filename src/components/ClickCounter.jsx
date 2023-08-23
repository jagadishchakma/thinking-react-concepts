import withCounter from "./withCounter";

function clickCounter({value,countHandler}){
    let style = {
        width: 200,
        padding: 5,
        backgroundColor: 'gray',
        color: 'black',
        fontSize: 30
    }
    return(
        <div>
            <input type="button" value={value} onClick={countHandler} style={style}/>
        </div>
    );
}

export default withCounter(clickCounter);