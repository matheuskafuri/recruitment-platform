import { NextApiRequest, NextApiResponse } from "next";
import {
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../../utils/firebase.config";


export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { opportunityId } = req.body;
    const collectionRef = collection(db, "questions");
    const questionsRef = await getDocs(collectionRef);
    const questions = questionsRef.docs.map((question) => {
      return {
        id: question.id,
        title: question.data().title,
        weight: question.data().weight,
        opportunityId: question.data().opportunityId,
      };
    })
    console.log(questions)
    const question = questions.filter((question) => {
      return question.opportunityId === opportunityId;
    })
    res.status(200).json(question);

  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};
