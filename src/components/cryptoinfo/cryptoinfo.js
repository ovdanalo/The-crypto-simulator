import React from "react";

const CryptoInfo= (props) => {
    return(
        <div className='flex flex-col items-center h-def w-8/12 bg-black-200 mx-auto my-12 rounded-lg '>
             <input list="cryptoList" id="selectCrypto" name="crypto" size="27" autocomplete="off" className='rounded-lg p-1 mt-8' />
            <div className='bg-black-100 w-4/5 mt-8 min-h-info rounded-lg'>

            </div>
            
            
            <datalist id="cryptoList">
                {props.data.map((crypto) => (
                    <option>{crypto.name}</option>
                ))}
            </datalist>
        </div>
    )
}
export default CryptoInfo;