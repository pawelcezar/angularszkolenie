import { TvmazeModule } from './tvmaze.module';

describe('TvmazeModule', () => {
  let tvmazeModule: TvmazeModule;

  beforeEach(() => {
    tvmazeModule = new TvmazeModule();
  });

  it('should create an instance', () => {
    expect(tvmazeModule).toBeTruthy();
  });
});
