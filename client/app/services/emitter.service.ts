import {Injectable} from '@angular/core';
import {EventEmitter} from '@angular/core';
/**
The EmitterServicefor class broadcasting the selected city name.
**/
    @Injectable()
    export class EmitterService {
    /**
    The _emitters attribute is a EventEmitter used to braodcast selected city name.
    */
    private static _emitters: 
        {
        /**
        The channel property is used to store selected city name.
        */
        [channel: string]: EventEmitter<any> 
        } = {};
    /**
    Returns selected city name if property '_emitters[channel]' exixts
    */
    static get(channel: string): EventEmitter<any>{
    if (!this._emitters[channel])
      this._emitters[channel] = new EventEmitter();
    return this._emitters[channel];
    }
}