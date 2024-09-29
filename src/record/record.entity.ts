import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column()
  brand: string;

  @Column({ type: 'datetime' })
  created_at: Date;

  @Column()
  imagePath: string;
}
