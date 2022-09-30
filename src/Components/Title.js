
const Title = ({type, name})=>{
    const fontWeight = type ==="bold"? "bold":"normal";
    return (
        <div>
            <h1 className={fontWeight}>{name}</h1>
        </div>
    )
}

export default Title