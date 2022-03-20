import {
    showAll,
    showActive,
    showCompleted,
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED
} from '../../actions/visibleFilterActionCreator.js';
import { visibleFilter } from '../../reducers/visibleFilterReducer.js';

describe('visibleFilterReducerのテスト', () => {
    const createInitialState = () => {
        const mockAction = {};
        const state = visibleFilter(undefined, mockAction);

        return state;
    }

    it('stateの初期値はSHOW_ALL', () => {
        const state = createInitialState();
        expect(state).toStrictEqual(SHOW_ALL);
    });

    it('action.type === SHOW_ALL', () => {
        const action = showAll();
        const state = createInitialState();
        const newState = visibleFilter(state, action);
        expect(newState).toStrictEqual(SHOW_ALL);
    })

    it('action.type === SHOW_ACTIVE', () => {
        const action = showActive();
        const state = createInitialState();
        const newState = visibleFilter(state, action);
        expect(newState).toStrictEqual(SHOW_ACTIVE);
    })

    it('action.type === SHOW_COMPLETED', () => {
        const action = showCompleted();
        const state = createInitialState();
        const newState = visibleFilter(state, action);
        expect(newState).toStrictEqual(SHOW_COMPLETED);
    })
})