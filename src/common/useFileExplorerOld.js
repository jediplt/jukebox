import React from 'react'
import useSwr from 'swr'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';

export default function useFileExplorer(filenames1, path1) {

    const filenames = filenames1 || useSwr('/api/filenames')?.data;

    if (filenames) {
        let path = path1 || window.location.pathname.replace(/%20/g, ' ');
        const getNode = path => {
            if (!path || path === '') {
                path = '/';
            }
            const getChildren = path1 => filenames
                .filter(r => r.slice(0, path1.length) === path1.slice(0, path1.length))
                .filter(r => {
                    if (path1 === '/') {
                        return r.match(/\//g).length === 1
                    } else {
                        return (r.match(/\//g) || []).length === ((path1.match(/\//g) || []).length + 1)
                    }
                })

            const getThumbnail = folderPath => (folderPath !== '/') && '/Media' +
                getChildren(folderPath).find(r => r.includes('.jpg') || r.includes('.jpeg') || r.includes('.png'))


            return {
                isFolder: path.includes('.'),
                thumbnail: getThumbnail(path),
                getParent: () => path && getNode(path?.split('/').slice(0, -1)).join('/'),
                folders: getChildren(path)
                    .filter(r => !r.includes('.'))
                    .map(folderPath => ({
                        name: folderPath.split('/').slice(-1)[0],
                        path: folderPath,
                        thumbnail: getThumbnail(folderPath)
                    })),
                media: getChildren(path)
                    .filter(r => r.includes('.mp4') || r.includes('.mp3') || r.includes('.aac'))
                    .map(r => ({
                        name: r.split('/').slice(-1)[0].split('.')[0],
                        path: r.replace(/ /g, '%20'),
                        filePath: '/Media' + r.replace(/ /g, '%20'),
                    }))
            }
        }
        return getNode(path)
    }
    // useEffect(() => {

    // },[typeof window === 'undefined' ])
    // const currentPath = useSelector(state => state.common.path)
}




