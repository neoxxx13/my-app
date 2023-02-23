import { Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';

const App = (_props) => {
  return (
      <div className='app-wrapper'>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/*'
              element={ <Content
                profilePage={_props.state.profilePage}
                dispatch={_props.dispatch}
              />} />
            <Route path='/dialogs/*'
              element={ <Dialogs
                state={_props.state.dialogsPage}
              />} />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/settings/*' element={<Settings />} />
          </Routes>
        </div>
        <Header />
        <Nav />
        <Routes>
          <Route path='/friends/*'
            element={ <Friends
              state={_props.state.sidebar}
            />} />
        </Routes>
      </div>
  );
}

export default App;