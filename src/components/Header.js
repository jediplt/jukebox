import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'

export default function Header(props) {
    const dispatch = useDispatch();
    const showVirtualController = useSelector(state => state.common.showVirtualController)
    return <div style={{ backgroundColor: 'rgb(50,50,50)', padding: 4, paddingLeft: 20, borderBottom: 'solid 1px rgb(80,80,80)' }}>
        <h1 style={{ margin: 0, color: 'white' }}>Hi Grampa!</h1>
        <h2 style={{ margin: 0, color: 'white' }}><em>What would you like to do today? How about a video by Gaither HomeComing?</em></h2>
        <div style={{ position: 'absolute', left: 'calc(100vw - 80px)', top: 20 }}>
            <svg onClick={() => dispatch({ type: 'SET_VALUE', payload: { showVirtualController: !showVirtualController } })} style={{ cursor: 'pointer' }} stroke="currentColor" fill="rgb(180,180,180)" strokeWidth={0} viewBox="0 0 24 24" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><g>
                <path fill="none" d="M0 0h24v24H0z" /><path d="M18 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12zm-3 13h-2v2h2v-2zm-4 0H9v2h2v-2zm2-9h-2v2H9v2h1.999L11 12h2l-.001-2H15V8h-2V6z" /></g>
            </svg>
        </div>
    </div>
}

