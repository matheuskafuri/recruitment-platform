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

interface Opportunity {
  title: string;
  description: string;
}

interface OpportunitiesResponse {
  data: Opportunity[];
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const collectionRef = collection(db, "opportunities");
    const opportunitiesRef = await getDocs(collectionRef);
    const opportunities = opportunitiesRef.docs.map((opportunity) => {
      return {
        id: opportunity.id,
        title: opportunity.data().title,
        description: opportunity.data().description,
      };
    });

    res.status(200).json(opportunities);
  } catch (e: any) {

    res.status(500).json({ error: e.message });
  }
};
