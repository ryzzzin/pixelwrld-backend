import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Pixel } from '../../pixels/entities/pixel.entity';

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  width: number;

  @Column()
  height: number;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  endsAt: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @OneToMany(() => Pixel, (pixel) => pixel.session)
  pixels: Pixel[];
}
