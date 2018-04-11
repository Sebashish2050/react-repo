import React from 'react';

class FileInput extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(`Enter file name is: ${this.fileInput.files[0].name}`);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Upload File:&nbsp;&nbsp;
                    <input type ="file" ref={(file) => {this.fileInput = file}} />
                </label>&nbsp;&nbsp;
                <button type="submit">Submit</button>
            </form>
        )
    }
}

class App extends React.Component {
    render() {
        return(
            <FileInput />
        )
    }
}
export default App;