import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item"> 
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/62653586?s=460&u=7e2429ea1de159e93e1eb414a11e50f224998c38&v=4" 
                             alt="Matheus Lopes"
                        />
                        <div>
                            <strong>Matheus Lopes</strong>
                            <span>Química</span>
                        </div>
                    </header>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        <br/>
                        <br/>
                        Architecto quos dolores est explicabo reprehenderit unde cumque odio aperiam, 
                        facere totam iusto reiciendis, earum, omnis quisquam possimus ducimus vel dolore veritatis?
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp"/>
                            Entrar em contado
                        </button>
                    </footer>
               </article>
    );
}

export default TeacherItem;