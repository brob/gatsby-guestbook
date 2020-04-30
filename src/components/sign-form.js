
import React from 'react';
import './style.scss';
import faunadb, { query as q } from "faunadb"

var client = new faunadb.Client({ secret: "fnADpmjHzNACE3RBAwyf6KTohjcyYGI9yJ9wxgME" })

export default class SignForm extends React.Component {
    state = {
      sigName: "",
      sigMessage: ""
    }

    handleSubmit = async event => {
        event.preventDefault();
        const placeSig = await this.createSignature(this.state.sigName, this.state.sigMessage);
        console.log(placeSig);
        this.addSignature(placeSig);
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value,
        })
    }
    addSignature(signatureInfo) {
        this.props.setSigData(oldState => [...oldState, signatureInfo]);
    }
    createSignature = async (sigName, sigMessage) => {
        try {
            const queryResponse = await client.query(
                q.Create(
                    q.Collection('signatures'),
                    { 
                        data: { 
                            name: sigName,
                            message: sigMessage
                        } 
                    }
                )
            )
            const signatureInfo = { name: queryResponse.data.name, message: queryResponse.data.message, _ts: queryResponse.ts, _id: queryResponse.id}

            return signatureInfo
        } catch(err) {
            console.log(err);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field">
                    <div className="control">
                 <label className="label">Label
                    <input 
                        className="input is-fullwidth"
                        name="sigName" 
                        type="text"
                        value={this.state.sigName}
                        onChange={this.handleInputChange}
                    />
                    </label>
                    </div>
                </div>
                <div className="field">
                    <label>
                        Your Message:
                        <textarea 
                            rows="5"
                            name="sigMessage" 
                            value={this.state.sigMessage}
                            onChange={this.handleInputChange} 
                            className="textarea" 
                            placeholder="Leave us a happy note"></textarea>

                    </label>
                </div>
                <div className="buttons">
                    <button className="button is-primary" type="submit">Sign the Guestbook</button>
                </div>
            </form>
        )
    }

}
