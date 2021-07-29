import {useState} from 'react'

function UserProfile({user}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [loading, setLoading] = useState(false)

    const createUser = (event) => {
        event.preventDefault()
        setLoading(true)
        
        const formValues = {
            firstName: firstName,
            lastName: lastName,
            address: address,
            email: user.email
        }

        fetch('https://react-rep-finder-api.web.app/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formValues)
        })
            .then(response => {
                setLoading(false)
                return response.json()
            })
            .then(json => {
                setLoading(false)
                console.log('json ---->' , json)
            })
            .catch(err => {
                setLoading(false)
                alert(err)
            })
    }

    return(
        <div className="user-form">
            <h2>User Profile</h2>
            <form onSubmit={(event) => createUser(event)}>
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
                    {loading ? 'Loading...' : 'Submit'}
                </button>
            </form>

        </div>
    )
}

export default UserProfile