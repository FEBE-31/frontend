import Card from "./Card"

const ListCard = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row w-full flex-wrap">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </div>
        </>
    )
}

export default ListCard