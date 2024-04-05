import React, {useState} from 'react';
import './style.scss'
function Modal() {
    const [open,setOpen] = useState(false)
    const [open2,setOpen2] = useState(false)
    const url = 'https://media1.tenor.com/m/mJ_Og97j5WwAAAAC/chipi-chapa.gif'
    return (
        <div className="Modal">
            <button className="open-modal-btn" onClick={ () => { setOpen(true) } }>✨ Открыть окно</button>
            {open && (
                <div className='overlay'>
                    <div className='modal'>
                        <svg height='200' viewBox='0 0 200 200' width='200' onClick={ () => { setOpen(false) } }>
                            <title />
                            <path d='M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z' />
                        </svg>
                        <img src={url}/>
                    </div>
                </div>
            )}
            <button className='open-modal-btn' onClick={ () => { setOpen2(true) } }>
                ✨ Открыть окно with animation
            </button>
            <div className={`overlay animated ${ open2 ? 'show' : ''}`}>
                <div className='modal'>
                    <svg height='200' viewBox='0 0 200 200' width='200'  onClick={ () => { setOpen2(false) } }>
                        <title />
                        <path d='M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z' />
                    </svg>
                    <img src={url} />
                </div>
            </div>
        </div>
    );
}

export default Modal;