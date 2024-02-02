// user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  // Add other properties as needed

  // Example method for password comparison (if using bcrypt or a similar library)
  async comparePassword(candidatePassword: string): Promise<boolean> {
    // Implement password comparison logic (e.g., using bcrypt)
    // Return a Promise<boolean> indicating whether the passwords match
    return true; // Replace with actual implementation
  }
}
