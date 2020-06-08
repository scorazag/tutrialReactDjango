import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux';
import PorpTypes from 'prop-types';
import {getLeads,deleteLead} from '../../actions/leads'


export class Leads extends Component {
    static propTypes = {
        leads: PorpTypes.array.isRequired,
        getLeads: PorpTypes.func.isRequired,
        deleteLead: PorpTypes.func.isRequired
    };

    componentDidMount(){
        this.props.getLeads();
    }


    render(){
        return (
            <Fragment>
                <h2>Leads</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Mensaje</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        
                        { this.props.leads.map(lead =>(
                            <tr key={lead.id}>
                                <td>{lead.id}</td>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.message}</td>
                                <td><button onClick={this.props.deleteLead.bind(this,lead.id)}className="btn btn-danger btn-sm">Borrar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    leads: state.leads.leads
});

export default connect(mapStateToProps,{getLeads,deleteLead})(Leads);