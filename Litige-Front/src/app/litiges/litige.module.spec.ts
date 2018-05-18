import { LitigeModule } from './litige.module';

describe('LitigeModule', () => {
  let litigeModule: LitigeModule;

  beforeEach(() => {
    litigeModule = new LitigeModule();
  });

  it('should create an instance', () => {
    expect(litigeModule).toBeTruthy();
  });
});
