import {useState,useEffect} from 'react'
import { usingEndpoint } from '../constants/endpoint'

function UserProfile({user,userProfile,setUserProfile}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(userProfile !== undefined) {
            setFirstName(userProfile.firstName)
            setLastName(userProfile.lastName)
            setAddress(userProfile.address)
        }
    },[userProfile])

    const getUser = () => {
      fetch(`${usingEndpoint}/users/${user?.email}`)
        .then(res => res.json())
        .then(json => { 
          console.log('user -->' , json)
          setUserProfile(json.data)
          localStorage.setItem('user', JSON.stringify(json.data))
        })
        .catch(err => alert(err))
    }

    const updateUser = (event) => {
        event.preventDefault()
        setLoading(true)
        
        const formValues = {
            firstName: firstName,
            lastName: lastName,
            address: address,
        }

        fetch(`${usingEndpoint}/users/${userProfile.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formValues)
        })
            .then(response => {
                setLoading(false)
                return response.json()
            })
            .then(json => {
                setLoading(false)
                console.log('User updated. \n json ---->' , json)
                getUser()
            })
            .catch(err => {
                setLoading(false)
                alert(err)
            })
    }

    return(
        <div className="user-form">
            <h2>User Profile</h2>
            <form onSubmit={(event) => updateUser(event)}>
                <label>First Name:&nbsp;
                    <input 
                        name="firstName"
                        type="text"
                        size="40"
                        value={firstName}
                        onChange={event => setFirstName(event.target.value)}
                    />
                </label>
                <label>Last Name:&nbsp;
                    <input 
                        name="lastName"
                        type="text"
                        size="40"
                        value={lastName}
                        onChange={event => setLastName(event.target.value)}
                    />
                </label>
                <label>Address:&nbsp;
                    <input 
                        name="address"
                        type="text"
                        size="40"
                        value={address}
                        onChange={event => setAddress(event.target.value)}
                    />
                </label>
                <button 
                    className="main-button-green"
                    type="submit"
                >
                    {loading ? 'Loading...' : 'Update Profile'}
                </button>
            </form>

        </div>
    )
}

export default UserProfile