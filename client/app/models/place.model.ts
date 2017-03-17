
import { CoordinateModel } from './coordinate.model';


export class PlaceModel {
    placeId: string;
    name: string;
    description: string;
    address: string;
    contact: Object;
    coordinate: CoordinateModel;
    photoUrl: string;
    photos: Array<string>;
    tags: Array<string>;
    sponsored: boolean;
    distance: number;
    rating: number;
    heartCount: number;
    open: boolean;
} 