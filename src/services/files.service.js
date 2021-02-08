import firebase from "firebase/app";
import "firebase/firebase-database";

import fbConfig from "../firebase.config";
const fbApp = firebase.initializeApp(fbConfig);
const db = firebase.database();

async function listar() {
    const data = await db
        .ref("ServerPublic")
        .once("value");

    return data;
}

export default { listar }