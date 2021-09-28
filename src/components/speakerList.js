import Speaker  from "./speaker";
import {data} from "../../SpeakerData";
import {useState} from "react";

function SpeakerList({ showSession}) {

    const [speakersData, setSpeakersData] = useState(data);

    function onFavoriteToggle (id) {
        const speakerRecPrevious = speakersData.find( rec => rec.id === id);
        const speakerRecNew = { ...speakerRecPrevious }
        speakerRecNew.favorite = !speakerRecPrevious.favorite;

        const speakersDataNew = speakersData.map( function(rec){
            return rec.id === id ? speakerRecNew : rec;
        })

        setSpeakersData(speakersDataNew);
    }

    return(
        <div className="container speakers-list">
            <div className="row">
                {speakersData.map(function (speaker) {
                    return (
                        <Speaker 
                        key = {speaker.id} 
                        speaker = {speaker} 
                        showSession = {showSession} 
                        onFavoriteToggle = { () => onFavoriteToggle(speaker.id) } />
                    );
                })}
            </div>
        </div>
    );
}

export default SpeakerList;