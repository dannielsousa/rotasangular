import { AssessorModule } from './assessor.module';

describe('AssessorModule', () => {
  let assessorModule: AssessorModule;

  beforeEach(() => {
    assessorModule = new AssessorModule();
  });

  it('should create an instance', () => {
    expect(assessorModule).toBeTruthy();
  });
});
