import React from "react";

import b1 from '../../assets/img/Main/bank/wavepay.png'
import b2 from '../../assets/img/Main/bank/apay.png';
import b3 from '../../assets/img/Main/bank/cbpay.png'
import b4 from '../../assets/img/Main/bank/kpay.png'
const Bank = ()=>{

    const banks = [b1,b2,b3,b4];
    return <>
    <div className="d-flex mx-2">
        {
            banks.map((bank)=>{
                return <img src={bank} alt=""  className="w-100 mx-3"/>
            })
        }
    </div>
    </>
}

export default Bank