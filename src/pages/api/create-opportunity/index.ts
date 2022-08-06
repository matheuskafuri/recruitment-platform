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
    const { title, description } = req.body;
    const collectionRef = collection(db, "opportunities");
    const opportunityRef = await addDoc(collectionRef, {
      title,
      description,
    });
    res.status(200).json(opportunityRef.id);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};
