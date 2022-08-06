import { NextApiRequest, NextApiResponse } from "next";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "../../../utils/firebase.config";


export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { opportunityId, title, weight } = req.body;
    const collectionRef = collection(db, "questions");
    const questionRef = await addDoc(collectionRef, {
      opportunityId,
      title,
      weight,
    });
    res.status(200).json(questionRef.id);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};
