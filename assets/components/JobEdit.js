import React, { Component } from 'react';
import axios from 'axios';
import JobForm from './JobForm';

class JobEdit extends Component {

    state = {
        jobData: {}
    }

    componentDidMount(){

        if (this.props.jobId)
        {
            axios.get(`/api/jobs/${this.props.jobId}`)
            .then( response => {
                this.setState({
                    jobData: response.data
                })
            })
        }
    }

    render() {
        return (
            <div>
                <h2>Add a job</h2>
                <JobForm jobData={this.state.jobData} jobId={this.props.jobId} ></JobForm>
            </div>
        )
    }
}

export default JobEdit;