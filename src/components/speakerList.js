import Speaker  from "./speaker";
import ReactPlaceholder from 'react-placeholder';
import useRequestDelay, {REQUEST_STATUS} from "./hooks/useRequestDelay";
import {data} from "../../SpeakerData";

function SpeakerList({ showSession}) {

    const {
        data: speakersData, requestStatus, 
        updateRecord, error 
    } = useRequestDelay(2000, data);

    if(requestStatus === REQUEST_STATUS.FAILURE) 
        return <div className="text-danger">Error: <b> Loading speaker data failed! {error} </b> </div>;
    
    return(
        <div className="container speakers-list">
            <ReactPlaceholder
                type = "media"
                rows = {15}
                className = "speakerList-Placeholder"
                ready = {requestStatus === REQUEST_STATUS.SUCCESS}
            >
                <div className="row">
                    {speakersData.map(function (speaker) {
                        return (
                            <Speaker 
                            key = {speaker.id} 
                            speaker = {speaker} 
                            showSession = {showSession} 
                            onFavoriteToggle = {() => updateRecord({
                                ...speaker,
                                favorite: !speaker.favorite
                            })}  
                            />
                        );
                    })}
                </div>
            </ReactPlaceholder>
        </div>
    );
}

export default SpeakerList;