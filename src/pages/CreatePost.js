import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function Createpost({ isAuth }) {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title,
            postText,
            author: {
                author: auth.currentUser.displayName,
                id: auth.currentUser.uid,
            },
        });
        navigate("/");
    };

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, []);

    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Lägga Ut Ett Inlägg</h1>
                <div className="inputGp">
                    <label>Titel:</label>
                    <input
                        placeholder="Titel..."
                        /* Uppdatera title staten i useState */
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                        type="text"
                    />
                </div>
                <div className="inputGp">
                    <label> Inlägg: </label>
                    <textarea
                        placeholder="Inlägg..."
                        onChange={(event) => {
                            setPostText(event.target.value);
                        }}
                    >
                        {" "}
                    </textarea>
                </div>
                <button onClick={createPost}> Skicka In </button>
            </div>
        </div>
    );
}

export default Createpost;
