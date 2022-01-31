import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import JobEdit from './JobEdit';

function Job () {
    const {id} = useParams();

    return (
        <JobEdit jobId={id}/>
    )
}
export default Job;