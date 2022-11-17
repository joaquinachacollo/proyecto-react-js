
const ItemDetail = ({item}) => {
    return(
        <>
            <div>
                <div>{item.name}</div>
                <img src={item.img}></img>
                <div>{item.descripcion}</div>
            </div>
        </>
    )
}

export default ItemDetail