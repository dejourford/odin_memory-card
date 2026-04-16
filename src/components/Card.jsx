export function Card({name, imgSource}) {
    return (
        <div className="card">
            <img src={imgSource} alt={name} />
            <p>{name}</p>
        </div>
    )
}
