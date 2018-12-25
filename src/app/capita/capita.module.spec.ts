import { CapitaModule } from './capita.module';

describe('CapitaModule', () => {
  let capitaModule: CapitaModule;

  beforeEach(() => {
    capitaModule = new CapitaModule();
  });

  it('should create an instance', () => {
    expect(capitaModule).toBeTruthy();
  });
});
