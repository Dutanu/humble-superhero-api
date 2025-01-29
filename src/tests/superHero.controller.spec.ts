import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroController } from '../controllers/superHero.controller';
import { SuperheroService } from '../services/superHero.service';

describe('SuperheroController', () => {
    let controller: SuperheroController;
    let service: SuperheroService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SuperheroController],
            providers: [SuperheroService],
        }).compile();

        controller = module.get<SuperheroController>(SuperheroController);
        service = module.get<SuperheroService>(SuperheroService);
    });

    it('should create a superhero', () => {
        const dto = { name: 'Test', superpower: 'Testing', humilityScore: 5 };
        expect(controller.create(dto)).toEqual({
            id: 1,
            ...dto,
        });
    });
});