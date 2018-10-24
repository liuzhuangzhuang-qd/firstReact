import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_TODO_LIST, INIT_LIST_ACTION, GET_INIT_LIST } from './actiontype'
import { initListAction } from './actionCreators'

function*  getInitList() {
    const res = yield axios.get('/list.json')
    const action = initListAction(res.data)
    yield put(action)
    console.log('11111111111111111111')
}

function* todoSagas() {
    yield takeLatest(GET_INIT_LIST, getInitList);
}

export default todoSagas;