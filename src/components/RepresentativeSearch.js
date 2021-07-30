import {useState} from 'react'
import {APIKEY} from '../config'
import RepresentativeSearchResults from './RepresentativeSearchResults'


export default function RepresentativeSearch({user}) {
    const [address, setAddress] = useState('')
    const [offices, setOffices] = useState([])
    const [officials, setOfficials] = useState([])

    console.log('USER ===> ', user)
    
    const searchRepresentatives = () => {
        console.log("Searching...")
        fetch(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${address}&key=${APIKEY}`)
            .then(res => res.json())
            .then(json => {
                setOffices(json.offices)
                setOfficials(json.officials)
                return
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="search-container">
            <input 
                name="representativeSearch"
                placeholder="Enter your address"
                type="text" 
                className="search-bar"
                value={address}
                onChange={event=> setAddress(event.target.value)}
            />
            <div>
                <button className="main-button-green" onClick={() => searchRepresentatives()}>Submit</button>
            </div>
            <RepresentativeSearchResults offices = {offices} officials = {officials} />
        </div>
    )
}