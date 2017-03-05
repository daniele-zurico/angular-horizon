import {Injectable} from '@angular/core';
const Horizon = require('@horizon/client');

@Injectable()
export class HorizonService {
    table = Horizon({host: 'localhost:8181'});
}
