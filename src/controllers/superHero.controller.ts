import { Body, Controller, Get, Post } from '@nestjs/common';
import { SuperheroService } from '../services/superHero.service';
import { Superhero } from '../entity/superHero.entity';
import { CreateSuperheroDto } from '../dto/create-superHero.dto';

@Controller('superheroes')
export class SuperheroController {
    constructor(private readonly superheroService: SuperheroService) {}

    @Post()
    create(@Body() createSuperheroDto: CreateSuperheroDto) {
        return this.superheroService.create(createSuperheroDto);
    }

    @Get()
    findAll() {
        return this.superheroService.findAll();
    }
}