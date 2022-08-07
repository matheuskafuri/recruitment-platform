import { NextApiRequest, NextApiResponse } from "next";
import {
  addDoc,
  collection,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../utils/firebase.config";


interface Candidate {
  id?: string;
  name: string;
  linkedIn: string;
  score: number;
}


export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { candidate, score } = req.body;
    const docRef = doc(db, "candidates", candidate.id);
    const candidateRef = await updateDoc(docRef, {
      "score": score,
    });
    res.status(200).json(candidateRef);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};
