import  React from 'react';
import './DocumentListItem.css';

import folderIcon from "../assets/folder_icon.png";

export default ({onClick, active, data}) => {
    return (
        <div
         className={`documentListItem ${active?'active':''}`}
         onClick={onClick}
         >
            <img className="documentListItem--avatar" src={folderIcon} alt="Ícone de pasta (computador)" />
            <div className="documentListItem--lines">
                <div className="documentListItem--line">
                    <div className="documentListItem--name">{data.nome}</div>
                    <div className="documentListItem--data">{data.data}</div>
                </div>
                <div className="documentListItem--line">
                    <div className="documentListItem--lastMsg">
                        <p>{data.tamanho}</p>
                    </div>
                </div>
            </div>
        </div>
    );

}