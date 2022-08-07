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
    const collectionRef = collection(db, "candidates");
    const candidatesRef = await getDocs(collectionRef);
    const candidates = candidatesRef.docs.map((candidate) => {
      return {
        id: candidate.id,
        name: candidate.data().name,
        linkedIn: candidate.data().linkedIn,
        score: candidate.data().score,
        opportunityId: candidate.data().opportunityId
      };
      //sort candidates by score
    }).sort((a, b) => b.score - a.score)

    res.status(200).json(candidates);
  } catch (e: any) {

    res.status(500).json({ error: e.message });
  }
};
