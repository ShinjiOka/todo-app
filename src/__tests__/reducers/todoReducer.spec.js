import { todoReducer } from '../../reducers/todoReducer.js';
import {
    addTodo,
    deleteTodo,
    toggleTodoCompleted 
} from '../../actions/todoActionCreator.js';
import Todo from '../../models/Todo.js';

describe('todoReducerのテスト', () => {
    it('action.type === ADD_TODO', () => {
        const dummyText = 'ダミーテキスト';
        const addAction = addTodo(dummyText);
        let state = [];
        state = todoReducer(state, addAction);
        expect(state[0] instanceof Todo).toStrictEqual(true);
        expect(state[0].text).toStrictEqual(dummyText);
        expect(state[0].hasCompleted()).toStrictEqual(false);
    })

    it('action.type === DELETE_TODO', () => {
        const dummyText = 'ダミーテキスト';
        let state = [];
        for(let i = 0; i < 3; i++) {
            const text = dummyText + i;
            const addAction = addTodo(text);
            state = todoReducer(state, addAction);
            expect(state[i] instanceof Todo).toStrictEqual(true);
            expect(state[i].text).toStrictEqual(text);
            expect(state[i].hasCompleted()).toStrictEqual(false);
        }

        const targetId = state[1].id;
        console.log(state[1].id);
        const deleteAction = deleteTodo(targetId);
        const newState = todoReducer(state, deleteAction);
        console.log(state, newState);
        expect(newState).toStrictEqual([
            state[0],
            state[2]
        ])
    })

    it('action.type === TOGGLE_TODO_COMPLETED', () => {
        let state = [];
        const addAction = addTodo('ダミー');
        const targetId = 0;

        state = todoReducer(state, addAction);
        console.log(state);

        expect( state[targetId].hasCompleted() ).toStrictEqual(false);

        const id = state[0].id
        const toggleAction = toggleTodoCompleted(id);
        console.log(toggleAction);
        state = todoReducer(state, toggleAction);
        console.log(state);
        console.log(state[targetId]);
        expect( state[targetId].hasCompleted() ).toStrictEqual(true);
    })
})