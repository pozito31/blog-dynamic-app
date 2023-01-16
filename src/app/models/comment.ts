import { IComment } from './../interfaces/icomment';
import { set, get } from 'lodash-es';

export class Comment implements IComment {

    constructor(data) {
        set(this, 'data', data)
    }

    get user() {
        return get(this, 'data.user');
    }

    set user(value){
        set(this, 'data.user', value)
    }

    get date() {
        return get(this, 'data.date');
    }

    set date(value){
        set(this, 'data.date', value)
    }

    get text() {
        return get(this, 'data.text');
    }

    set text(value){
        set(this, 'data.text', value)
    }

    get post() {
        return get(this, 'data.post');
    }

    set post(value){
        set(this, 'data.post', value)
    }

    getData() {
        return get(this, 'data');
    }

}
