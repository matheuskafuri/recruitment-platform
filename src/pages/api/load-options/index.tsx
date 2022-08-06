import { NextApiRequest, NextApiResponse } from "next";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../utils/firebase.config";


export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { questionId } = req.body;
    console.log(questionId)
    const collectionRef = collection(db, "questions_options");
    const optionsRef = await getDocs(collectionRef);
    const options = optionsRef.docs.map((option) => {
      return {
        id: option.id,
        value: option.data().value,
        weight: option.data().weight,
        questionId: option.data().questionId,
      };
    })
    console.log(options)
    const questionOptions = options.filter((option) => {
      return option.questionId === questionId;
    })
    res.status(200).json(questionOptions);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};
