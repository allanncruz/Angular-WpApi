import {TestBed, inject} from '@angular/core/testing';

import {BaseService} from './base.service';
import {HttpModule} from '@angular/http';

describe('BaseService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [BaseService]
        });
    });

    it('should be created', inject([BaseService], (service: BaseService) => {
        expect(service).toBeTruthy();
    }));
});
