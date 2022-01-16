import React, {Component} from 'react'

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Skills</th>
                        <th>Invite</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Joe</td>
                        <td>Linux, git, JSON</td>
                        <td><button type='button'>Contact</button></td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Windows, git, C++, JSON</td>
                        <td><button type='button'>Contact</button></td>
                    </tr>                    
                    <tr>
                        <td>Juan Eduardo</td>
                        <td>Windows, git, Python, JSON</td>
                        <td><button type='button'>Contact</button></td>
                    </tr>
                    <tr>
                        <td>Logan</td>
                        <td>MacOS, Python</td>
                        <td><button type='button'>Contact</button></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table