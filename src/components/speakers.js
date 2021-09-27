import SpeakersToolbar from "./speakersToolbar";
import SpeakerList from "./speakerList";
import {useState} from "react";

function Speakers ({data, theme, setTheme}) {
    
    const [showSession, setShowSession] = useState(true);

    return(
        <>
            <SpeakersToolbar 
                theme={theme} 
                setTheme={setTheme}
                showSession = {showSession}
                setShowSession = {setShowSession} 
            />
            <SpeakerList data={data} showSession = {showSession} />
        </>
    );
}

export default Speakers;