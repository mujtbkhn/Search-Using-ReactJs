import { ShoeCard } from "../cards/ShoeCard"
import { ShoesList } from "../../constants"
import { useState } from "react"


const Body = () => {

    const [searchText, setSearchText] = useState("") //react useState variable

    const [completeShoeLists, setCompleteShoeLists] = useState(ShoesList)

    const [shoeLists, setShoeLists] = useState(ShoesList)

    const handleSearch = (e) => {
        const newText = e.target.value
        setSearchText(newText)

        const filteredData = completeShoeLists.filter((shoes) => shoes.title.toLowerCase().includes(newText.toLowerCase()))

        setShoeLists(filteredData)
    }



    return (
        <>
            <input type="text" placeholder="Search" value={searchText} className="search" onChange={handleSearch} />


            <div className="shoecard">
                {
                    shoeLists.map((shoe) => {
                        return <ShoeCard {...shoe} key={shoe.id} />
                    })
                }

            </div>

        </>

    )

}


export default Body