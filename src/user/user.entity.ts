import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  // Add any other fields as needed

  async comparePassword(candidatePassword: string): Promise<boolean> {
    // Assuming you have a hashed password stored in this.password
    try {
      const passwordMatch = await bcrypt.compare(candidatePassword, this.password);
      return passwordMatch;
    } catch (error) {
      // Handle the error (e.g., log it, throw a specific error)
      console.error('Error comparing passwords:', error);
      return false; // Return a default value or handle the error according to your requirements
    }
  }
}
