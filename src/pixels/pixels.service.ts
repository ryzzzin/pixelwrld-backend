import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreatePixelDto } from './dto/create-pixel.dto';
import { UpdatePixelDto } from './dto/update-pixel.dto';
import { Pixel } from './entities/pixel.entity';
import { Session } from 'src/sessions/entities/session.entity';
import { PixelsGateway } from './pixels.gateway';

@Injectable()
export class PixelsService {
  constructor(
    @InjectRepository(Pixel)
    private readonly pixelRepository: Repository<Pixel>,
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>,
    private readonly pixelsGateway: PixelsGateway,
  ) {}

  async create(createPixelDto: CreatePixelDto): Promise<Pixel> {
    const options: FindOneOptions<Session> = {
      where: { id: createPixelDto.sessionId },
    };
    const pixel = this.pixelRepository.create(createPixelDto);
    pixel.session = await this.sessionRepository.findOne(options);
    const createdPixel = await this.pixelRepository.save(pixel);

    this.pixelsGateway.notifyPixelChanges(createdPixel);

    return createdPixel;
  }

  async findAll(): Promise<Pixel[]> {
    return this.pixelRepository.find();
  }

  async findOne(id: number): Promise<Pixel> {
    const options: FindOneOptions<Pixel> = {
      where: { id },
    };
    return this.pixelRepository.findOne(options);
  }

  async update(id: number, updatePixelDto: UpdatePixelDto): Promise<Pixel> {
    const options: FindOneOptions<Pixel> = {
      where: { id },
      relations: ['session'],
    };
    await this.pixelRepository.update(id, updatePixelDto);
    const updatedPixel = await this.pixelRepository.findOne(options);

    this.pixelsGateway.notifyPixelChanges(updatedPixel);

    return updatedPixel;
  }

  async remove(id: number): Promise<void> {
    await this.pixelRepository.delete(id);
  }
}
