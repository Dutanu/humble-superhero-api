import { Injectable } from '@nestjs/common';
import { Superhero } from '../entity/superHero.entity';
import {MaxPriorityQueue} from "@datastructures-js/priority-queue";
import {CreateSuperheroDto} from "../dto/create-superHero.dto";

@Injectable()
export class SuperheroService {
    private superheroes = new MaxPriorityQueue<Superhero>((hero) => hero.humilityScore);

    create(superhero: CreateSuperheroDto) {
        this.superheroes.enqueue(superhero);
        return superhero;
    }

    findAll() {
        return this.superheroes.toArray();
    }

}