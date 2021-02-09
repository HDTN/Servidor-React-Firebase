import React, { useState, useEffect } from 'react';
import './App.css';

import DocumentListItem from './components/DocumentListItem';
import DocumentIntro from './components/ServerIntro';
import DocumentWindow from './components/DocumentWindow'

import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';

import Logo from "./assets/logoreact.png";

import fileService from "./services/files.service";

export default () => {
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState();

  async function listar() {
    const list = await fileService.listar();

    let tempFileList = []; 
    list.forEach(file => {
      tempFileList.push(file.val()); 
    });

    setFileList(tempFileList);
    setLoading(true);
  }

  useEffect(() => {
    listar();
  }, [])

  const [activeDocument, setActiveDocument] = useState({});

  return (
    <div className="app-window">
      <div className="sidebar">

        <header>
          <img className="header--logo" src={Logo} />
          <div className="header--names">
            <div className="header--name">
              Document Server
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon fontsize="small" style={{ color: '#919191' }} />
            <input type="search" placeholder="Procurar Documento..." />
          </div>
        </div>

        {!loading && (
          <div className="loading-container">
            <CircularProgress color="secondary" />
            <h4 className="loading-warning">Carregando Arquivos</h4>
          </div>
        )}

        {loading && (
          <div className="documentlist">
            {fileList.map((item, key) => (
              <DocumentListItem
                key={key}
                data={item}
                active={activeDocument.uid === fileList[key].uid}
                onClick={() => setActiveDocument(fileList[key])}
              />
            ))}
          </div>
        )}

      </div>

      <div className="contentarea">
        {activeDocument.uid !== undefined &&
          <DocumentWindow documentGroup={activeDocument} />
        }
        {activeDocument.uid === undefined &&
          <DocumentIntro />
        }

      </div>
    </div>
  );
}