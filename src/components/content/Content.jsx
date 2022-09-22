import React from 'react';
import { getPersonajesAxios } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

function Content() {

    const dispatch = useDispatch();
    const personajes = useSelector(state => state.MyReducer.users);

    return (
        <>
            <div className='text-light'>
                <h1 className='text-green'>Rick & Morty</h1>
                <h4>Redux-Saga</h4>
                <small>By Gabriel Padin</small>
                <div className='d-flex '>
                    <a href='https://github.com/gabrielspadin22' className='link-secondary ms-auto me-3'><i className="bi bi-github"></i></a>
                    <a href='https://www.linkedin.com/in/gabriel-sebasti%C3%A1n-padin-86859b221/' className='link-secondary me-auto'><i className="bi bi-linkedin "></i></a>
                </div>
            </div>
            <button className='btn btn-secondary bg-transparent mt-5 green' onClick={() => dispatch(getPersonajesAxios())}>Mostrar personajes</button>
            <div className="m-5 row row-cols-1 row-cols-md-4 g-4">
                {personajes.map((per => (
                <div className="col " key={per.id}>
                    <div className="card bg-transparent s border-success text-light">
                        <img src={per.image} className="card-img-top" alt={per.name} />
                        <div className="card-body">
                            <h5 className="card-title">{per.name}</h5>
                            <p className="card-text">{per.species}</p>
                        </div>
                    </div>
                </div>
                )))}
            </div>
        </>
    );
}

export default Content;