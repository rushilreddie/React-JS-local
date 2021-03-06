import React from "react";

function Note(props) {
    function handleClick() {
      props.onDelete(props.id);
    }
    return (
    <div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button>DELETE</button>
    </div>
    );
}

app.get("3000")

export default Note;