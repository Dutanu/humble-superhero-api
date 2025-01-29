import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SuperheroController} from "./controllers/superHero.controller";
import {SuperheroService} from "./services/superHero.service";

@Module({
  imports: [],
  controllers: [AppController, SuperheroController
  ],
  providers: [AppService, SuperheroService],
})
export class AppModule {}
