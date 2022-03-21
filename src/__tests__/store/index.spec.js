import store from '../../store/index.js';
import { SHOW_ALL } from '../../actions/visibleFilterActionCreator.js';

describe('store/index.jsのテスト', () => {
    it('combineReducers()を使ったstateを持つ', () => {
        expect(store.getState()).toStrictEqual({
            todos: [],
            visibleFilter: SHOW_ALL
        });
    });
});