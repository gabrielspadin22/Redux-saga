import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_PERSONAJES_AXIOS, GET_PERSONAJES_SUCCESS} from './actions';
import axios from 'axios';

async function personajes(){
    try {
        const res = await axios.get('https://rickandmortyapi.com/api/character')
        if (res.status === 200) {
            return res.data.results;
        }
    } catch (error) {
        return "Error";
    }
}

function* getPersonajes(){
    const users = yield call(personajes);
    yield put({ type: GET_PERSONAJES_SUCCESS, users })
}

function* mySaga(){
    yield takeEvery(GET_PERSONAJES_AXIOS, getPersonajes);
}

export default mySaga;