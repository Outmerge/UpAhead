/**
 * Created by Cosmin.Atomei on 10-09-2016.
 */

interface Read<T> {
    retrieve: (callback: (error: any, result: any)=> void)=> void;
    findById: (id: string, callback: (error:any, result: T) => void) => void;
}

export = Read;