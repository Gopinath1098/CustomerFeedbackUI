import { TestBed } from '@angular/core/testing';

import { FeedbackSerive } from './feedback-serive';

describe('FeedbackSerive', () => {
  let service: FeedbackSerive;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackSerive);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
