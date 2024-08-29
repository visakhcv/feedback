import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UserModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  userEmail: string;

  @Column({ nullable: true })
  overallExperience: string;

  @Column({ nullable: true })
  qualityOfSpeakers: string;

  @Column({ nullable: true })
  eventOrganization: string;

  @Column({ nullable: true })
  networkingOpportunities: string;

  @Column({ nullable: true })
  eventContentRelevant: string;

  @Column({ nullable: true })
  eventLocationConvenient: string;

  @Column({ nullable: true })
  eventMetExpectations: string;

  @Column({ nullable: true })
  favoriteSession: string;

  @Column({ nullable: true })
  improvementsForFuture: string;

  @Column({ nullable: true })
  recommendationLikelihood: string;
  
  @Column({ type: 'timestamp', nullable: true })
  CreateAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  UpdateAt: Date;
}
