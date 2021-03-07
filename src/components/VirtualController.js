import React from 'react'
import {useSelector} from 'react-redux'
export default props => {
    const showVirtualController = useSelector(state => state.common.showVirtualController)

    return <div id="virtualcontroller" style={{
        display: 'flex', position: 'fixed', top: '100vh', top: showVirtualController ? 'calc(100vh - 272px - 8px)' : '100vh',
        backgroundColor: 'black', padding: 16, left: 'calc(100vw - 866px - 8px)', borderRadius: 8, transition: 'all .4s', zIndex: 100
    }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', width: 240, backgroundColor: 'rgb(50,50,50)', padding: 16, borderRadius: 5, alignContent: 'center' }}>
                <div onclick="window.keypress(1)" style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(210,210,210)', borderRadius: 40, width: 40, height: 40, margin: 4 }}>
                    <div style={{ width: 8, height: 8, backgroundColor: 'rgb(0,122,255)', borderRadius: 8 }}>
                    </div>
                </div>
                <div onclick="window.keypress(2)" style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(210,210,210)', borderRadius: 40, width: 40, height: 40, margin: 4 }}>
                    <div style={{ width: 8, height: 8, backgroundColor: 'rgb(255,204,0)', borderRadius: 8 }}>
                    </div>
                </div>
                <div onclick="window.keypress(3)" style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(210,210,210)', borderRadius: 40, width: 40, height: 40, margin: 4 }}>
                    <div style={{ width: 8, height: 8, backgroundColor: 'rgb(255,59,48)', borderRadius: 8 }}>
                    </div>
                </div>
                <div onclick="window.keypress(4)" style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(210,210,210)', borderRadius: 40, width: 40, height: 40, margin: 4 }}>
                    <div style={{ width: 8, height: 8, backgroundColor: 'rgb(255,45,85)', borderRadius: 8 }}>
                    </div>
                </div>
                <div onclick="window.keypress(5)" style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(210,210,210)', borderRadius: 40, width: 40, height: 40, margin: 4 }}>
                    <div style={{ width: 8, height: 8, backgroundColor: 'rgb(115,79,150)', borderRadius: 8 }}>
                    </div>
                </div>
                <div onclick="window.keypress(6)" style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(210,210,210)', borderRadius: 40, width: 40, height: 40, margin: 4 }}>
                    <div style={{ width: 8, height: 8, backgroundColor: 'rgb(175,82,222)', borderRadius: 8 }}>
                    </div>
                </div>
                <div onclick="window.keypress(7)" style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(210,210,210)', borderRadius: 40, width: 40, height: 40, margin: 4 }}>
                    <div style={{ width: 8, height: 8, backgroundColor: 'rgb(255,149,0)', borderRadius: 8 }}>
                    </div>
                </div>
                <div onclick="window.keypress(8)" style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(210,210,210)', borderRadius: 40, width: 40, height: 40, margin: 4 }}>
                    <div style={{ width: 8, height: 8, backgroundColor: 'rgb(52,199,89)', borderRadius: 8 }}>
                    </div>
                </div>
                <div onclick="window.keypress(9)" style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(210,210,210)', borderRadius: 40, width: 40, height: 40, margin: 4 }}>
                    <div style={{ width: 8, height: 8, backgroundColor: 'lime', borderRadius: 8 }}>
                    </div>
                </div>
                <div onclick="window.keypress(10)" style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(210,210,210)', borderRadius: 40, width: 40, height: 40, margin: 4 }}>
                    <div style={{ width: 8, height: 8, backgroundColor: 'brown', borderRadius: 8 }}>
                    </div>
                </div>
            </div>
            <div style={{ minWidth: 32 }} />
            <div style={{ display: 'flex', alignItems: 'center', position: 'relative', backgroundColor: 'rgb(50,50,50)', justifyContent: 'center', padding: 32, borderRadius: 5 }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex' }}>
                        <div onclick="window.back()" style={{ margin: 4, borderRadius: 5, width: 40, height: 40, lineHeight: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', backgroundColor: 'rgb(0,122,255)' }}>
                            <svg style={{ cursor: 'pointer', transform: 'rotateZ(-90deg)', width: 32, height: 32 }} fill="white" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z" />
                                </g>
                            </svg>
                        </div>
                        <div onclick="window.forward()" style={{ margin: 4, borderRadius: 5, width: 40, height: 40, lineHeight: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', backgroundColor: 'lightblue' }}>
                            <svg style={{ cursor: 'pointer', transform: 'rotateZ(90deg)', width: 32, height: 32 }} fill="white" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z" />
                                </g>
                            </svg>
                        </div>
                        <div onclick="window.help()" style={{ cursor: 'pointer', margin: 4, borderRadius: 40, width: 40, height: 40, lineHeight: 40, fontSize: 28, fontWeight: 800, verticalAlign: 'middle', textAlign: 'center', color: 'white', backgroundColor: 'rgb(190,190,190)' }}>
                            ?</div>
                    </div>
                </div>
                <div style={{ minWidth: 2, backgroundColor: 'rgb(190,190,190)', marginLeft: 64, marginRight: 64, minHeight: '100%' }}>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(0,0,0)', padding: 4, borderRadius: 9 }}>
                    <div onclick="window.pause()" style={{ cursor: 'pointer', padding: 4, margin: 4, borderRadius: 40, width: 40, height: 40, lineHeight: 40, verticalAlign: 'middle', textAlign: 'center', color: 'white', backgroundColor: 'rgb(255,59,48)' }}>
                        Stop</div>
                    <div onclick="window.pause()" style={{ cursor: 'pointer', padding: 4, margin: 4, borderRadius: 40, width: 40, height: 40, lineHeight: 40, verticalAlign: 'middle', textAlign: 'center', color: 'rgb(50,50,50)', backgroundColor: 'rgb(255,204,0)' }}>
                        Pause</div>
                    <div onclick="window.play()" style={{ cursor: 'pointer', padding: 4, margin: 4, borderRadius: 40, width: 40, height: 40, lineHeight: 40, verticalAlign: 'middle', textAlign: 'center', color: 'white', backgroundColor: 'rgb(52,188,89)' }}>
                        Go</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', padding: 4, borderRadius: 40, marginLeft: 64 }}>
                    <div onclick="window.home()" style={{ cursor: 'pointer', padding: 4, margin: 4, borderRadius: 40, width: 40, height: 40, lineHeight: 40, verticalAlign: 'middle', textAlign: 'center', color: 'white', backgroundColor: 'rgb(190,190,190)' }}>
                        Reset</div>
                    <div onclick="window.sleep()" style={{ cursor: 'pointer', padding: 4, margin: 4, borderRadius: 40, width: 40, height: 40, lineHeight: 40, verticalAlign: 'middle', textAlign: 'center', color: 'white', backgroundColor: 'rgb(0,0,0)' }}>
                        Off</div>
                </div>
            </div>
        </div>
    </div>

}

