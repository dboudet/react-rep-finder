import { useContext } from "react"
import { UserContext } from "../App"

export default function RepresentativeSearchResults(props) {

    const { offices, officials } = props
    const {userProfile} = useContext(UserContext)

    return(
        <div id="rep-search-results">
            {userProfile && <h4>Here are your results, {userProfile?.firstName}:</h4>}
            {offices.map( office => {
                const official = officials[office.officialIndices[0]] // just setting a variable for reuse

                return(
                    <>
                        <h4 className="rep-name-office"><strong>{official?.name}</strong><br/>
                            {office.name}</h4>
                        <div className="rep-info">
                            {official?.address && // optional chaining - checking to see if address exists
                                <p>{official?.address[0]?.line1}
                                <br/>{official?.address[0]?.city},
                                &nbsp;{official?.address[0]?.state}
                                &nbsp;{official?.address[0]?.zip}
                                </p>}
                            <p><a href={`tel:${official?.phones[0]}`}>{official?.phones[0]}</a></p>
                            <p><a href={official?.urls[0]} target="_blank" rel="noreferrer">{official?.urls[0]}</a></p>
                            {official?.emails &&<p><a href={`mailto:${official?.emails[0]}`}>{official?.emails[0]}</a></p>}

                        </div>
                    </>
                )}
            )}
        </div>
    )
}