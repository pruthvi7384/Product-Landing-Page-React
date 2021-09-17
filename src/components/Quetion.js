import React from 'react'
import './Question.css'

function Quetion() {
    return (
        <div className="qution-container">
            <h1>Questions?</h1>
            <p>Help is free, and TritaTech  is ready to assist you to
            make sure everything goes smoothly
            </p>
            <div>
                <ul>
                    <li>
                        <i class="far fa-envelope"></i>
                    </li>
                    <li>
                        <i class="fas fa-phone-alt"></i>
                    </li>
                    <li>
                        <i class="fab fa-whatsapp"></i>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Quetion
