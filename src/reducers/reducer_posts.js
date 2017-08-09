
import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {

    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id'); // array of posts, want { 4: post , 5: post }
    default:
      return state;
  }
}
