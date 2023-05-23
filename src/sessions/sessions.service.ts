import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from './entities/session.entity';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(Session)
    private sessionRepository: Repository<Session>,
  ) {}

  async create(createSessionDto: CreateSessionDto): Promise<Session> {
    const session = this.sessionRepository.create(createSessionDto);
    return await this.sessionRepository.save(session);
  }

  async findAll(): Promise<Session[]> {
    const options: FindOneOptions<Session> = {
      relations: ['pixels'],
    };
    const foundSessions = await this.sessionRepository.find(options);

    const sessions = foundSessions.map((session) => ({
      ...session,
      pixelsCount: session.pixels.length,
      pixels: undefined,
    }));

    return sessions;
  }

  async findOne(id: number): Promise<Session> {
    const options: FindOneOptions<Session> = {
      where: { id },
      relations: ['pixels'],
    };
    return await this.sessionRepository.findOne(options);
  }

  async update(
    id: number,
    updateSessionDto: UpdateSessionDto,
  ): Promise<Session> {
    const options: FindOneOptions<Session> = {
      where: { id },
    };
    await this.sessionRepository.update(id, updateSessionDto);
    return await this.sessionRepository.findOne(options);
  }

  async remove(id: number): Promise<void> {
    await this.sessionRepository.delete(id);
  }
}
