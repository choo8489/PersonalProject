import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll() {
        return 'This will return all movies';
    }

    @Get("/:id")
    getOne(@Param('id') id: string) {
        return `This will return one movie with the id: ${id}`;
    }

    @Post()
    create() {
        return 'This will create a movie';
    }

    @Delete("/:id")
    remove(@Param('id') id: string) {
        return `This will delete a movie with the id: ${id}`;
    }

    @Patch("/:id")
    patch(@Param('id') id: string) {
        return `This will patch a movie with the id: ${id}`;
    }

}
