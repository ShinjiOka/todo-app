import {
    addTodo,
    deleteTodo,
    toggleTodoCompleted,
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO_COMPLETED
} from "../../actions/todoActionCreator";

describe('todoActionCreatorのテスト', () => {
    it('action.type === ADD_TODO', () => {
        const dummyText = 'ダミーテキスト';
        const addAction = addTodo(dummyText);
        expect(addAction).toStrictEqual({
            type: ADD_TODO,
            text: dummyText
        })
    })

    it('aciton.type === DELTE_TODO', () => {
        const id = 1;
        const deleteAction = deleteTodo(id);
        expect(deleteAction).toStrictEqual({
            type: DELETE_TODO,
            id
        })
    })

    it('action.type === TOGGLE_TODO_COMPLETED', () => {
        const id = 1;
        const toggleAction = toggleTodoCompleted(id);
        expect(toggleAction).toStrictEqual({
            type: TOGGLE_TODO_COMPLETED,
            id
        })
    })
})