import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(
      {
        envFilePath: ['.env']
      }
    ),
    MongooseModule.forRoot(
      process.env.APP_ENV === 'alpha' ? `mongodb://${(process.env.DB_USER) ? process.env.DB_USER + ':' : ''}${(process.env.DB_PASS) ? encodeURIComponent(process.env.DB_PASS) + '@' : ''}${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}${(process.env.DB_AUTH_METHOD !== 'None') ? '?authSource=admin' : ''}` : `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.eaokz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
      ),
    DogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
