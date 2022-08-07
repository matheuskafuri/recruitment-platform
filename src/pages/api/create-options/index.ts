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
import { toast } from "react-toastify";


export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { value, weight, questionId } = req.body;
    const collectionRef = collection(db, "questions_options");
    const optionRef = await addDoc(collectionRef, {
      value,
      weight,
      questionId,
    });

    res.status(200).json(optionRef.id);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};
