import { doc, setDoc } from "firebase/firestore";
import { db } from "@/app/firebase";

/** Adds a user document that acts as a profile */
const addUser = async (user) => {
    try {
        await setDoc(doc(db, "users", user.id), {
            id: user.id,
            email: user.email,
            metadata: {
                createdAt: user.metadata.createdAt,
                creationTime: user.metadata.creationTime,
                lastSignInTime: user.metadata.lastSignInTime
            }
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

export { addUser };
