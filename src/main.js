function decorator(){}

/* Works fine */
@decorator
export class Something {}

/* Breaks because of Unexpected Token '@' */
import {ArvaRouter} from 'arva-js/routers/ArvaRouter.js';
