import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckPincode = () => {

    const [pin, setPin] = useState('');
    const [locality, setLocality] = useState('');
    const [district, setDistrict] = useState('');

    const checkPin = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/pincode');
            const pinJson = await response.json();
            //console.log(pinJson);
            const pinDetails = pinJson[pin];
            if (pinDetails) {
                setLocality(pinDetails.loc);
                setDistrict(pinDetails.dis);
                toast.success('Pincode Found', {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                setLocality('');
                setDistrict('');
                toast.error('Pincode Not-Found', {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error) {
            console.error('Error fetching pincode:', error);
        }
    };

    const onChangePin = (e) => {
        setPin(e.target.value)
    }

    return (
        <div>
            <ToastContainer />
            <input type="text" value={pin} onChange={onChangePin} />
            <button onClick={checkPin}>Check</button>
            <hr />
            <h4>District:</h4><p>{district}</p>
            <hr />
            <h4>Locality:</h4><p>{locality}</p>
        </div>
    );
};

export default CheckPincode;
