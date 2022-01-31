import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class JobList extends Component {

    state = {
        jobs:[]
    }

    handleDelete(id){
        axios.delete(`/api/jobs/${id}`)
        .then(response => {
            console.log(response);
        })
    }

    componentDidMount(){
        axios.get(`/api/jobs`)
        .then( response => {
            this.setState({
                jobs:response.data
            })
        })
    }

    render() {
        return (
            <div>
                <h2>Jobs</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead><tr><th>#</th><th>Summary</th><th>Description</th><th>Status</th><th>Property</th><th></th></tr></thead>
                        <tbody>
                            {this.state.jobs.map(job =>
                                <tr key={job.id}>
                                    <td>{job.id}</td>
                                    <td>{job.summary}</td>
                                    <td>{job.description}</td>
                                    <td>{job.statusName}</td>
                                    <td>{job.propertyName}</td>
                                    <td>
                                        <NavLink to={`/job/${job.id}`}>Edit</NavLink> <span style={{color: "#007bff"}} onClick={() => this.handleDelete(job.id)} >Delete</span>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default JobList;