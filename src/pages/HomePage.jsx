import { useSelector } from 'react-redux'
import Heading from '../component/Heading'
import ListCard from '../component/ListCard'

const HomePage = () => {
    const selector = useSelector((state) => state)

    return (
        <>
            <Heading />
            <ListCard />
        </>
    )
}

export default HomePage
