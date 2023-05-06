import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import { HOME_ROUTE, MY_PROJECTS } from './assets/helpers/constantAPI';
import { Main } from './components/Layout/Main';
import { Home } from './components/Pages/Home';
import { MyProjects } from './components/Pages/MyProjects';
import { Notfoundpages } from './components/Pages/Notfoundpages';
import { Content } from './components/Layout/Main/Content';
import { Sidebar } from './components/Layout/Sidebar';

function App() {
  return (
    <div className="App container">
      <Layout>
        <Header />
        <Main>
          <Sidebar />
          <Routes>
            <Route path={HOME_ROUTE} element={<Content />}>
              
                <Route index element={<Home />} />
                <Route path={MY_PROJECTS} element={<MyProjects />} />
                <Route path='*' element={<Notfoundpages />} />
              
            </Route>
          </Routes>
        </Main>    
      </Layout>
    </div>
  );
}

export default App;
