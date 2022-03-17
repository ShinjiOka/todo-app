import {
    showAll,
    showActive,
    showCompleted,
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED 
} from "../../actions/visibleFilterActionCreator";

describe('visibleFilterActionCreatorのテスト', () => {
    it('action.type === SHOW_ALLのとき', () => {
        const action = showAll();
        expect(action).toStrictEqual({
            type: SHOW_ALL,
        })
    })

    it('action.type === SHOW_ACTIVEのとき', () => {
        const action = showActive();
        expect(action).toStrictEqual({
            type: SHOW_ACTIVE,
        })
    })

    it('action.type === SHOW_COMPLETEDのとき', () => {
        const action = showCompleted();
        expect(action).toStrictEqual({
            type: SHOW_COMPLETED,
        })
    })
})