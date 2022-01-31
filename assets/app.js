import './styles/app.css';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Routes, NavLink, useParams} from 'react-router-dom';

import JobList from './components/JobList';
import Job from './components/Job';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <div className="navbar-brand col-sm-3 col-md-2 mr-0" ><div>Property manager</div></div>
                </nav>
                <div className="container-fluid">
                    <div className="row">
                        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                            <div className="sidebar-sticky">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to ="joblist">Jobs</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to ="job">Add Job</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <Routes>
                                <Route path='/' element={<JobList/>}/>
                                <Route path='/jobList' element={<JobList/>}/>
                                <Route path='/job' element={<Job/>}/>
                                <Route path='/job/:id' element={<Job/>}/>
                            </Routes>
                        </main>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
ReactDom.render(<App />, document.querySelector('#root'));