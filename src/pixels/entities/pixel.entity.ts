import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Session } from '../../sessions/entities/session.entity';

@Entity()
export class Pixel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 7 })
  color: string;

  @Column({ type: 'integer' })
  x: number;

  @Column({ type: 'integer' })
  y: number;

  @ManyToOne(() => Session, (session) => session.pixels)
  @JoinColumn({ name: 'session_id' })
  session: Session;
}
