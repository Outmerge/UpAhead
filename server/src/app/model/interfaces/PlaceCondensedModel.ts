/**
 * Created by Cosmin.Atomei on 10-09-2016.
 */

interface PlaceCondensedModel {
    id: string;
    name: string;
    tags: Array<string>;
    distance: number;
    sponsored: boolean;
    photoUrl: string;
    open: boolean;
}

export = PlaceCondensedModel;