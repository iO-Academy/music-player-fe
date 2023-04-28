import {useEffect, useState} from "react";

function Error({msg}) {

    const [show, setShowing] = useState(false);

    useEffect(() => {
        if (msg !== false) {
            setShowing(true)
            setTimeout(() => {
                setShowing(false)
            }, 3000)
        }
    }, [msg])

    return (
        <div className={"position-fixed alert alert-danger " + (show ? "show" : "hide")} role="alert">
            {msg}
            <button type="button" className="btn-close float-end" onClick={() => {setShowing(false)}} aria-label="Close"></button>
        </div>
    );
}

export default Error;