import { AppDataSource } from '../../core/config/database.config';
import { Request, Response } from 'express';
import { UserModel } from '../models/users.models';





export class userController {
  public async postUserFeedback(req: Request, res: Response) {

    const {userId,userEmail,overallExperience, qualityOfSpeakers, eventOrganization, networkingOpportunities, eventContentRelevant, eventLocationConvenient, eventMetExpectations, favoriteSession, improvementsForFuture,recommendationLikelihood } = req.body;

    try {
      const connection = await AppDataSource.createEntityManager();
      const userRepository = connection.getRepository(UserModel);
      let userFeedback = await userRepository.findOne({ where: { userEmail } });
      
      if (userFeedback) {
        // Update existing feedback
        userFeedback = userRepository.merge(userFeedback, {
          overallExperience,
          qualityOfSpeakers,
          eventOrganization, 
          networkingOpportunities, 
          eventContentRelevant, 
          eventLocationConvenient, 
          eventMetExpectations, 
          favoriteSession, 
          improvementsForFuture,
          recommendationLikelihood,
          UpdateAt: new Date(),
        });
      } else {
        // Create new feedback
        userFeedback = userRepository.create({
          userId,
          userEmail,
          overallExperience, 
          qualityOfSpeakers, 
          eventOrganization, 
          networkingOpportunities, 
          eventContentRelevant, 
          eventLocationConvenient, 
          eventMetExpectations, 
          favoriteSession, 
          improvementsForFuture,
          recommendationLikelihood,
          CreateAt: new Date(),
          UpdateAt: new Date(),
        });
      }

      // Save the user feedback to the database
      await userRepository.save(userFeedback);

      res.status(201).json({ message: 'User feedback saved successfully', data: userFeedback });

      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch user details' });
    }
  }


  public async getUserFeedback (req: Request, res: Response) {
    const {userEmail} = req.params;

    try {
      const connection = await AppDataSource.createEntityManager();
      const userRepository = connection.getRepository(UserModel);

      let userFeedback = await userRepository.findOne({ where: { userEmail: userEmail } });
      
      if (!userFeedback) {
        return res.status(400).json({ error: 'User realated feedback not found' });
      }
  
      res.status(200).json({ data: userFeedback });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch user feedback' });
    }
  };

  public async getAllFeedbacks (req: Request, res: Response) {

    try {
      const connection = await AppDataSource.createEntityManager();
      const userRepository = connection.getRepository(UserModel);
     
      
      // Fetch all user feedbacks from the database
      const feedbacks = await userRepository.find();
      if (!feedbacks) {
        return res.status(400).json({ error: 'no feedbacks' });
      }
  
      res.status(200).json({ data: feedbacks });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch all feedbacks' });
    }
  };

}
