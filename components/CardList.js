import React from 'react';
import styles from './CardList.module.css';

const CardList = (props) => {
    return (
        <div className="row">
            {props.items.map((item, index) => {
                const href = "questionnaires/" + item.code
                return (
                    <div className="col-md-4 col-sm-6 mb-3" key={index}>
                        <div className="card">
                            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <a href={href} className="btn btn-primary">Přejít k dotazníku</a>
                            </div>
                        </div>
                    </div>
                    )
            })}
        </div>
    );
};

export default CardList;