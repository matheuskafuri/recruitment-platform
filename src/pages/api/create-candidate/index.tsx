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


interface Candidate {
  name: string;
  linkedIn: string;
  score: number;
}


export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, linkedIn, opportunityId } = req.body;
    const collectionRef = collection(db, "candidates");
    const candidateRef = await addDoc(collectionRef, {
      opportunityId,
      name,
      linkedIn,
      score: 0,
    });
    const candidate = {
      id: candidateRef.id,
      opportunityId,
      name,
      linkedIn,
      score: 0,
    }

    res.status(200).json(candidate);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};
