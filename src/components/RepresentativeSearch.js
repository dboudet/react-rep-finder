import {useState} from 'react'

function RepresentativeSearch() {
    const [address, setAddress] = useState('')
    
    const searchRepresentatives = () => {
        console.log("Searching...")
    }

    return(
        <div className="search-container">
            <input 
                name="representativeSearch"
                type="text" 
                className="search-bar"
                value={address}
                onChange={event=> setAddress(event.target.value)}
            />
            <div>
                <button onClick={() => searchRepresentatives()}>Submit</button>
            </div>
        </div>
    )
}

export default RepresentativeSearch