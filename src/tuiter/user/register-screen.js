import React, {useState} from "react";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {registerThunk} from "../services/auth-thunks";

function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async () => {
        if (!firstName || !lastName || !username || !password || !image) {
            alert("All fields are mandatory.");
            return;
        }
        try {
            await dispatch(registerThunk({firstName, lastName, username, password, image}));
           
            navigate("/tuiter/home");
        } catch (e) {
            alert(e);
        }
    };
    return (
        <div>
            <h1>Register</h1>
            <div className={"mt-2"}>
                <label>Enter your first name</label>
                <input className={"form-control"} type={"text"} value={firstName}
                       onChange={(event) => setFirstName(event.target.value)}/>
            </div>
            <div className={"mt-2"}>
                <label>Enter your last name</label>
                <input className={"form-control"} type={"text"} value={lastName}
                       onChange={(event) => setLastName(event.target.value)}/>
            </div>
            <div className={"mt-2"}>
                <label>Enter your username</label>
                <input className={"form-control"} type={"text"} value={username}
                       onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div className={"mt-2"}>
                <label>Enter your password</label>
                <input className={"form-control"} type={"password"} value={password}
                       onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div className={"mt-2"}>
                <label>Enter your profile image</label>
                <input type="file" className="form-control" id="file-upload" accept="image/*"
                       onChange={(event) => {
                           const imageFiles = event.target.files;
                           const imageFilesLength = imageFiles.length;
                           if (imageFilesLength > 0) {
                               setImage(URL.createObjectURL(imageFiles[0]));
                           }}}/>
            </div>
            <button className={"btn btn-primary mt-2"} onClick={handleRegister}>Register</button>

        </div>);
}

export default RegisterScreen;