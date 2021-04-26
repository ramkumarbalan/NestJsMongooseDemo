import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { from } from 'rxjs';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { dogSchema } from '../schema/dog.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      {
        name: 'dogs', schema: dogSchema,
      }
    ])
  ],
  controllers: [DogsController],
  providers: [DogsService]
})
export class DogsModule {}
