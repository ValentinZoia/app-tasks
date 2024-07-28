import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import TaskCreatePage from './pages/TaskCreatePage';
import TaskEditPage from './pages/TaskEditPage';



const App: React.FC = ()=> {
  

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks/list" element={<TaskListPage/>} />
        <Route path="/tasks/create" element={<TaskCreatePage/>} />
        <Route path='/tasks/edit/:id' element={<TaskEditPage/>} />
      </Routes>
    </>
  )
}

export default App
