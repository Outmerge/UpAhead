import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConfigService {

    /**
     * App Config
     */

    public apiUrl: string = document.location.origin + '/api';

    public apiHeaders: any = {
        Default: { "Content-Type": "application/json" },
    };

    constructor() {}
}
