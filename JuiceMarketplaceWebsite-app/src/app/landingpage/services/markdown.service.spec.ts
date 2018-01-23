import { TestBed, inject } from '@angular/core/testing';

import { MarkdownServiceService } from './markdown-service.service';

describe('MarkdownServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarkdownServiceService]
    });
  });

  it('should be created', inject([MarkdownServiceService], (service: MarkdownServiceService) => {
    expect(service).toBeTruthy();
  }));
});
