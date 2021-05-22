import React, { Fragment } from 'react'
import useFileExplorer from 'common/useFileExplorer'
import Router from 'next/router';
export default function Sidebar(props) {
    const currentNode = useFileExplorer();
    const aNode = currentNode?.type === 'media' ? currentNode.getParent() : currentNode;

    const media = (aNode?.nodes || []).filter(r => r.type === 'media');
    return <div style={{
        height: 'calc(100vh - 73px - 20.0px - 20.0px)', width: 300, margin: 20.0, position: 'fixed',
        left: `calc(100vw - ${300 + 20.0 * 2}px)`, top: 73, backgroundColor: 'rgb(50,50,50)',//backgroundColor: 'green',
        border: 'solid 1px rgb(80,80,80)', borderRadius: 8, overflow: 'hidden', ...media.length === 0 && { opacity: 0 }
    }}>
        <div style={{ overflowY: 'scroll', height: 'calc(100vh - 73px - 20.0px - 20.0px)', }}>
            {media.map((r, i, array) => <Fragment key={i}>
                <div onClick={() => Router.replace(media[i].path)} css=":hover {background-color: rgb(80,80,80)}"
                    style={{
                        width: 300, height: 70, display: 'flex',
                        alignItems: 'center', cursor: 'pointer', cursor: 'pointer', color: 'white', justifyContent: 'flex-start',
                        ...currentNode.path === r.path && { backgroundColor: 'rgb(110,110,110)' }
                    }}>
                    <div style={{ width: 40, height: 40, borderRadius: 40, backgroundColor: colors[i], marginLeft: 20, marginRight: 20 }} />
                    {r.name}
                </div>
                {i < array.length - 1 && <div style={{ width: 300, height: 1, backgroundColor: 'rgb(120,120,120)' }} />}
            </Fragment>
            )}
        </div>
    </div >
}

const colors = [
    'rgb(0,122,255)', 'rgb(255,204,0)', 'rgb(255,59,48)', 'rgb(255,45,85)', 'rgb(115,79,150)',
    'rgb(175,82,222)', 'rgb(255,149,0)', 'rgb(52,199,89)', 'lime', 'brown',
]
