import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let provider: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    provider = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
