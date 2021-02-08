import React from 'react';
import './DocumentWindow.css'

import ReportIcon from '@material-ui/icons/Report';
import Button from "@material-ui/core/Button"
import GetAppIcon from '@material-ui/icons/GetApp';

import folderIcon from "../assets/folder_icon.png";
import fileIcon from "../assets/file_icon.png";

export default ({ documentGroup }) => {

    console.log(documentGroup);
    return (
        <div className="documentWindow">
            <div className="documentWindow--header">
                <div className="documentWindow--headerinfo">
                    <img className="documentWindow--avatar" src={folderIcon} alt="Ícone de pasta (computador)" />
                    <div className="documentWindow--name">{documentGroup.nome}</div>

                </div>
                <div className="documentWindow--headerbutton">
                    <div className="documentWindow--btn">
                        <ReportIcon style={{ color: '#919191' }} />
                    </div>
                </div>
            </div>

            {documentGroup.arquivos.map((item, key) => (
                <div className="file-card" key={key}>
                    <img className="documentListItemWindow--avatar" src={fileIcon} alt="Ícone de arquivo (computador)" />
                    <div className="row" style={{ marginLeft: 15 }}>
                        <div className="column">
                            <span className="documentListItemWindow--name">{item.nome}</span>
                            <span className="documentListItemWindow--lastMsg">{item.tamanho}</span>
                        </div>
                        <div className="column" style={{ marginRight: 20 }}>
                            <div className="row">
                                <div className="documentListWindow--headerbutton">
                                    <span className="documentListItemWindow--data">{item.data}</span>
                                </div>
                                <a href={item.link} className="download-btn">
                                    <Button variant="outlined" color="primary" onClick="">
                                        Download
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

}