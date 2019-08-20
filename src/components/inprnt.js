import React, {useContext} from 'react';
import {LangContext} from '../LangContext';

export default ()=>{
    const [lang,setLang]=useContext(LangContext);
    switch(lang){
        case 'en':
            return(<div className="inprnt">
                    <a href="https://www.inprnt.com/gallery/fischmeister/" target="blank">
                        You can purchase my prints at INPRNT.com
                    </a>
                </div>);
        case 'cz':
            return(<div className="inprnt">
                    <a href="https://www.inprnt.com/gallery/fischmeister/" target="blank">
                        Mé tisky můžete zakoupit na INPRNT.com
                    </a>
                </div>);
        default:null;
    }
}