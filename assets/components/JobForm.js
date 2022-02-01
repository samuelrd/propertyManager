import React, { Component } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

class JobForm extends Component {

    state = {
        summary: "",
        description: "",
        status: 1,
        property: 1,
        statuses: [
            {
                id: "",
                name: "please select..."
            }
        ],
        properties: [
            {
                id: "",
                name: "please select..."
            }
        ],
        submitted: false,
        errors: []
    }

    handleSummaryChange = (event) => {
        this.setState({summary: event.target.value})
    }

    handleDescriptionChange = (event) => {
        this.setState({description: event.target.value})
    }

    handleStatusChange = (event) => {
        this.setState({status: event.target.value})
    }

    handlePropertyChange = (event) => {
        this.setState({property: event.target.value})
    }

    submitForm = (event) => {
        event.preventDefault();
        if (this.props.jobId)
        {
            axios.put(`/api/jobs/${this.props.jobId}`, {
                summary: this.state.summary,
                description: this.state.description,
                status:  `api/job_statuses/${this.state.status}`,
                property: `api/properties/${this.state.property}`
            })
            .then(response => {
                this.setState({submitted: true})
            })
            .catch(error => {
                if(error.response.status == 422)
                {
                    this.setState({errors: error.response.data.violations})
                }
                else
                {
                    this.setState({errors: [{ propertyPath:"Unknown error", message: "Error on submission", code: "1"}]})
                }
            })
        }
        else
        {
            axios.post(`/api/jobs`, {
                summary: this.state.summary,
                description: this.state.description,
                status:  `api/job_statuses/${this.state.status}`,
                property: `api/properties/${this.state.property}`
            })
            .then(response => {
                this.setState({submitted: true})
            })
            .catch(error => {
                if(error.response.status == 422)
                {
                    this.setState({errors: error.response.data.violations})
                }
                else
                {
                    this.setState({errors: [{ propertyPath:"Unknown error", message: "Error on submission", code: "1"}]})
                }
            })
        }
    }

    componentDidMount(){
        axios.get(`/api/properties`)
        .then( response => {
            this.setState({
                properties: response.data
            })
        })

        axios.get(`/api/job_statuses`)
        .then( response => {
            this.setState({
                statuses: response.data
            })
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.jobData !== prevProps.jobData) {
            this.setState({
                summary: this.props.jobData.summary,
                description: this.props.jobData.description,
                status: this.props.jobData.statusId,
                property: this.props.jobData.propertyId
            })
            
        }
      }

    render() {
        if (this.state.submitted){
            return (<Navigate to="/jobList" />)
        }

        return (
            <div>
                {this.state.errors.map(error =>
                    <div key={error.code}>{error.propertyPath}: {error.message}</div>
                )}
                <form onSubmit={this.submitForm} className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="summary">Summary</label>
                        <input  className="form-control"
                                value={this.state.summary}
                                onChange={this.handleSummaryChange}
                                id="summary"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea   className="form-control"
                                    value={this.state.description}
                                    onChange={this.handleDescriptionChange}
                                    id="description"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select className="form-control"
                                value={this.state.status}
                                onChange={this.handleStatusChange}
                                id="status">
                                {this.state.statuses.map(status =>
                                    <option key={status.id} value={status.id}>{status.name}</option>
                                )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="property">Property</label>
                        <select  value={this.state.property}
                                onChange={this.handlePropertyChange}
                                className="form-control"
                                id="property">
                            {this.state.properties.map(property =>
                                <option key={property.id} value={property.id}>{property.name}</option>
                            )}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default JobForm;