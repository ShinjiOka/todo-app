import Todo from "../../models/Todo"

describe('Todoのテスト', () => {
    it('Todoクラスのインスタンスチェック', () => {
        const dummyText = 'ダミーテキスト';
        const todo = new Todo(dummyText);
        expect( todo instanceof Todo).toStrictEqual(true);
    })

    it('this._textをgetterを使って取得する', () => {
        const dummyText = 'ダミーテキスト';
        const todo = new Todo(dummyText);
        expect(todo.text).toStrictEqual(dummyText);
    })

    it('hasCompletedメソッドを実行するとthis._completedの値が取得できる', () => {
        const dummytext = 'ダミーテキスト';
        const todo = new Todo(dummytext);
        expect(todo.hasCompleted()).toStrictEqual(todo._completed);
    })

    it('toggleメソッドを実行するとthis._completedの値が反転する', () => {
        const dummyText = 'ダミーテキスト';
        const todo = new Todo(dummyText);
        expect(todo._completed).toStrictEqual(false);
        todo.toggle();
        expect(todo._completed).toStrictEqual(true);
    })
})