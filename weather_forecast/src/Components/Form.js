import React from 'react'
import './Form.css'

const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.weatherData} className="Form-style">
                <div>
                    <label className="lbl_location">City</label>
                    <input type='text' name='city' />
                </div>
                <div>
                    <label className="lbl_location">Country</label>
                    <input type='text' name='country' />
                </div>
                <div>
                    <button>Get Weather</button>
                </div>
            </form>
        </div>
    );
}

export default Form;