import { addDoc, collection } from "firebase/firestore";
import { db } from "@/app/firebase";

const addUser = async (user) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            id: user.id,
            email: user.email,
            metadata: {
                createdAt: user.metadata.createdAt,
                creationTime: user.metadata.creationTime,
                lastSignInTime: user.metadata.lastSignInTime
            }
        });

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

export { addUser };
