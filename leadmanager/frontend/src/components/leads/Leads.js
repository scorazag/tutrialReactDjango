import React, {Component} from 'react'
import { connect } from 'react-redux';
import PorpTypes from 'prop-types';
import {getLeads} from '../../actions/leads'


export class Leads extends Component {
    static propTypes = {
        leads: PorpTypes.array.isRequired
    }


    render(){
        return (
            <div>
                <h1>Agregagr un Leads</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    leads: state.leads.leads
});

export default connect(mapStateToProps)(Leads);