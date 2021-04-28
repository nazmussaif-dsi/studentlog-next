import React, { useState } from 'react';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';
import {RadioButton} from 'primereact/radiobutton';
import {Dropdown} from 'primereact/dropdown';
import {InputTextarea} from 'primereact/inputtextarea';

export default function prime_react_form() {
    const [cities1, setCities1] = useState([]);
    const [cities2, setCities2] = useState([]);
    const [city1, setCity1] = useState(null);
    const [city2, setCity2] = useState(null);
    const [selectedState, setSelectedState] = useState(null);

    let states = [
        {name: 'Arizona', code: 'Arizona'},
        {name: 'California', value: 'California'},
        {name: 'Florida', code: 'Florida'},
        {name: 'Ohio', code: 'Ohio'},
        {name: 'Washington', code: 'Washington'}
    ];

    const onCityChange1 = (e) => {
        let selectedCities = [...cities1];

        if(e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        setCities1(selectedCities);
    }

    const onCityChange2 = (e) => {
        let selectedCities = [...cities2];

        if(e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        setCities2(selectedCities);
    }

    const onStateChange = (e) => {
        setSelectedState(e.value);
    }

    return (
        <div>
            <h5>Vertical</h5>
            <div className="p-fluid">
                <div className="p-field">
                    <label htmlFor="firstname1">Firstname</label>
                    <InputText id="firstname1" type="text"/>
                </div>
                <div className="p-field">
                    <label htmlFor="lastname1">Lastname</label>
                    <InputText id="lastname1" type="text"/>
                </div>
            </div>

            <h5>Vertical and Grid</h5>
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col">
                    <label htmlFor="firstname2">Firstname</label>
                    <InputText id="firstname2" type="text"/>
                </div>
                <div className="p-field p-col">
                    <label htmlFor="lastname2">Lastname</label>
                    <InputText id="lastname2" type="text"/>
                </div>
            </div>

            <h5>Horizontal and Fixed Width</h5>
            <div className="p-field p-grid">
                <label htmlFor="firstname3" className="p-col-fixed" style={{width:'100px'}}>Firstname</label>
                <div className="p-col">
                    <InputText id="firstname3" type="text"/>
                </div>
            </div>
            <div className="p-field p-grid">
                <label htmlFor="lastname3" className="p-col-fixed" style={{width:'100px'}}>Lastname</label>
                <div className="p-col">
                    <InputText id="lastname3" type="text"/>
                </div>
            </div>

            <h5>Horizontal and Fluid</h5>
            <div className="p-fluid">
                <div className="p-field p-grid">
                    <label htmlFor="firstname4" className="p-col-12 p-md-2">Firstname</label>
                    <div className="p-col-12 p-md-10">
                        <InputText id="firstname4" type="text"/>
                    </div>
                </div>
                <div className="p-field p-grid">
                    <label htmlFor="lastname4" className="p-col-12 p-md-2">Lastname</label>
                    <div className="p-col-12 p-md-10">
                        <InputText id="lastname4" type="text"/>
                    </div>
                </div>
            </div>

            <h5>Inline</h5>
            <div className="p-formgroup-inline">
                <div className="p-field">
                    <label htmlFor="firstname5" className="p-sr-only">Firstname</label>
                    <InputText id="firstname5" type="text" placeholder="Firstname"/>
                </div>
                <div className="p-field">
                    <label htmlFor="lastname5" className="p-sr-only">Lastname</label>
                    <InputText id="lastname5" type="text" placeholder="Lastname"/>
                </div>
                <Button type="button" label="Submit"/>
            </div>

            <h5>Vertical Checkbox</h5>
            <div className="p-field-checkbox">
                <Checkbox inputId="city1" value="Chicago" onChange={onCityChange1} checked={cities1.indexOf('Chicago') !== -1}/>
                <label htmlFor="city1">Chicago</label>
            </div>
            <div className="p-field-checkbox">
                <Checkbox inputId="city2" value="Los Angeles" onChange={onCityChange1} checked={cities1.indexOf('Los Angeles') !== -1}/>
                <label htmlFor="city2">Los Angeles</label>
            </div>

            <h5>Horizontal Checkbox</h5>
            <div className="p-formgroup-inline">
                <div className="p-field-checkbox">
                    <Checkbox inputId="city3" value="Chicago" onChange={onCityChange2} checked={cities2.indexOf('Chicago') !== -1}/>
                    <label htmlFor="city3">Chicago</label>
                </div>
                <div className="p-field-checkbox">
                    <Checkbox inputId="city4" value="Los Angeles" onChange={onCityChange2} checked={cities2.indexOf('Los Angeles') !== -1}/>
                    <label htmlFor="city4">Los Angeles</label>
                </div>
            </div>

            <h5>Vertical RadioButton</h5>
            <div className="p-field-radiobutton">
                <RadioButton inputId="city5" name="city1" value="Chicago" onChange={e => setCity1(e.value)} checked={city1 === 'Chicago'} />
                <label htmlFor="city5">Chicago</label>
            </div>
            <div className="p-field-radiobutton">
                <RadioButton inputId="city6" name="city1" value="Los Angeles" onChange={e => setCity1(e.value)} checked={city1 === 'Los Angeles'} />
                <label htmlFor="city6">Los Angeles</label>
            </div>

            <h5>Horizontal RadioButton</h5>
            <div className="p-formgroup-inline">
                <div className="p-field-checkbox">
                    <RadioButton inputId="city5" name="city2" value="Chicago" onChange={e => setCity2(e.value)} checked={city2 === 'Chicago'} />
                    <label htmlFor="city7">Chicago</label>
                </div>
                <div className="p-field-checkbox">
                    <RadioButton inputId="city8" name="city2" value="Los Angeles" onChange={e => setCity2(e.value)} checked={city2 === 'Los Angeles'} />
                    <label htmlFor="city8">Los Angeles</label>
                </div>
            </div>

            <h5>Help Text</h5>
            <div className="p-field p-fluid">
                <label htmlFor="username">Username</label>
                <InputText id="username" type="username" aria-describedby="username-help"/>
                <small id="username-help">Enter your username to reset your password.</small>
            </div>

            <h5>Advanced</h5>
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="firstname6">Firstname</label>
                    <InputText id="firstname6" type="text" />
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="lastname6">Lastname</label>
                    <InputText id="lastname6" type="text" />
                </div>
                <div className="p-field p-col-12">
                    <label htmlFor="address">Address</label>
                    <InputTextarea id="address" type="text" rows="4" />
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="city">City</label>
                    <InputText id="city" type="text" />
                </div>
                <div className="p-field p-col-12 p-md-3">
                    <label htmlFor="state">State</label>
                    <Dropdown inputId="state" value={selectedState} options={states} onChange={onStateChange} placeholder="Select" optionLabel="name"/>
                </div>
                <div className="p-field p-col-12 p-md-3">
                    <label htmlFor="zip">Zip</label>
                    <InputText id="zip" type="text" />
                </div>
            </div>
        </div>
    )
}