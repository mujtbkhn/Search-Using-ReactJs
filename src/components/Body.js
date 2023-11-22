import { ShoeCard } from "../cards/ShoeCard"
import { ShoesList } from "../../constants"
import { useState } from "react"


const Body = () => {
    // const searchTxt = "Puma" js variable

    const [searchText, setSearchText] = useState("") //react useState variable

    const [completeShoeLists, setCompleteShoeLists] = useState(ShoesList)

    const [shoeLists, setShoeLists] = useState(ShoesList)

    // function filterData(searchText, completeShoeLists) {
    //     const filteredData = completeShoeLists.filter((shoes) => shoes.title.toLowerCase().includes(searchText.toLowerCase()))
    //     return filteredData
    // }

    const handleSearch = (e) => {
        const newText = e.target.value
        setSearchText(newText)

        const filteredData = completeShoeLists.filter((shoes) => shoes.title.toLowerCase().includes(newText.toLowerCase()))

        setShoeLists(filteredData)
    }



    // const [searchClicked, setSearchClicked] = useState(false)

    return (
        <>
            <input type="text" placeholder="Search" value={searchText} className="search" onChange={handleSearch} />
            {/* <h1>{searchClicked.toString()}</h1> */}

            {/* <button onClick={
                () => {
                    const data = filterData(searchText, completeShoeLists)
                    setShoeLists(data)
                }
            } className="search-btn">Search </button> */}
            {/*onClick={() => setSearchClicked(!searchClicked)}*/}

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