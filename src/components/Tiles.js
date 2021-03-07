import React from 'react'
import useSwr from 'swr'
import { useGetChildren } from 'common/useFileExplorer'
import Router from 'next/router'
export default function Tiles(props) {

    const children = useGetChildren();
    const folders = children?.folders || [];

    return <ul className="container1" style={{ margin: 0 }}>
        <ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', width: 1080 }}>
                {folders.map((folder, i) =>
                    <div style={{}} key={i} onClick={() => Router.push(folder.path)}>
                        <div className="title_name"></div>
                        <img src={folder.thumbnail} className="tile" style={{ borderColor: colors[i], borderRadius: 12 }} />
                    </div>

                )}

            </div>
        </ul>
    </ul>
}
const colors = [
    'rgb(0,122,255)',
    'rgb(255,204,0)',
    'rgb(255,59,48)',
    'rgb(255,45,85)',
    'rgb(115,79,150)',
    'rgb(175,82,222)',
    'rgb(255,149,0)',
    'rgb(52,199,89)',
    'lime',
    'brown',
]