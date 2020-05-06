import React from 'react'
import Web3 from 'web3'
import bootstrap from 'react-bootstrap'
import './App.css'

var myaddress = "0x5e9107d98e8B825628788F18DcB24Cb1b67CaFb5"
var abi = [
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_roll_no",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_batch",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_sAdd",
                "type": "address"
            }
        ],
        "name": "createStudent",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "Name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "Roll_No",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "Batch",
                        "type": "string"
                    },
                    {
                        "internalType": "string[30]",
                        "name": "message",
                        "type": "string[30]"
                    },
                    {
                        "internalType": "address",
                        "name": "student",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "count",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct high_motivation.Student",
                "name": "",
                "type": "tuple"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint8",
                "name": "_marks",
                "type": "uint8"
            },
            {
                "internalType": "string",
                "name": "_student_id",
                "type": "string"
            }
        ],
        "name": "loadAssignment",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_student_id",
                "type": "string"
            },
            {
                "internalType": "uint16",
                "name": "a",
                "type": "uint16"
            }
        ],
        "name": "loadAttendance",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint8",
                "name": "_marks",
                "type": "uint8"
            },
            {
                "internalType": "string",
                "name": "_student_id",
                "type": "string"
            }
        ],
        "name": "loadClass_interaction",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint8",
                "name": "_marks",
                "type": "uint8"
            },
            {
                "internalType": "string",
                "name": "_student_id",
                "type": "string"
            }
        ],
        "name": "loadExams",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint8",
                "name": "_marks",
                "type": "uint8"
            },
            {
                "internalType": "string",
                "name": "_student_id",
                "type": "string"
            }
        ],
        "name": "loadQuiz",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "Assignments",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "Attendance",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "Class_interaction",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "Exams",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "_student_id",
                "type": "string"
            }
        ],
        "name": "getAssignment",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "_student_id",
                "type": "string"
            }
        ],
        "name": "getAttendance",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "_student_id",
                "type": "string"
            }
        ],
        "name": "getClass_interaction",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "_student_id",
                "type": "string"
            }
        ],
        "name": "getDetails",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "Name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "Roll_No",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "Batch",
                        "type": "string"
                    },
                    {
                        "internalType": "string[30]",
                        "name": "message",
                        "type": "string[30]"
                    },
                    {
                        "internalType": "address",
                        "name": "student",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "count",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct high_motivation.Student",
                "name": "",
                "type": "tuple"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "_student_id",
                "type": "string"
            }
        ],
        "name": "getExams",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "_student_id",
                "type": "string"
            }
        ],
        "name": "getQuiz",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "Quiz",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "Students",
        "outputs": [
            {
                "internalType": "string",
                "name": "Name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "Roll_No",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "Batch",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "student",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "count",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]
const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/f9ffee15a00549519deb7c718e61b766"))
var contractaddress = "0x87eefbc2c94b3a7b42330682de1e46be3efc9a63"
const myContract = new web3.eth.Contract(abi, contractaddress)


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            Name: '',
            message: [],
            Assignment: '',
            Quiz: '',
            Exams: '',
            Class_Interaction: '',
            Attendance: '',
            input: '',
            on: '',
            print: '',
            grade: ''
        }
    }

    async getDetails() {

        const details = await myContract.methods.getDetails(this.state.input).call({ from: myaddress });
        const assignment = await myContract.methods.getAssignment(this.state.input).call({from: myaddress});
        const quiz = await myContract.methods.getQuiz(this.state.input).call({from: myaddress});
        const exams = await myContract.methods.getExams(this.state.input).call({from: myaddress});
        const class_int = await myContract.methods.getClass_interaction(this.state.input).call({from: myaddress});
        const attendance = await myContract.methods.getClass_interaction(this.state.input).call({from: myaddress});
        this.setState({ Name: details.Name, message: details.message, Assignment: assignment, Quiz: quiz, Exams: exams, Class_Interaction: class_int, Attendance: attendance});
    }

    render() {
        const handleInput = () => {
            const input = document.getElementById("roll").value
            this.setState({ input: input })
            this.setState({ on: true})
            this.getDetails()
            var print = 0
            if(this.state.Attendance == ''){
                print = ''
            }
            else if(this.state.Attendance == '0'){
                print = "You were absent in last class"
            }
            else{
                print = "You were present in last class"
            }
            this.setState({print: print})
        }

        const handleGrade = () => {
            var marks = Number(this.state.Assignment) + Number(this.state.Exams) + Number(this.state.Quiz) + Number(this.state.Class_Interaction)
            var grade = Number(marks) > 50 ? "A":"B";
            this.setState({grade: grade})
        }
        return (
            <div style={{ margin: "100px 0 20px 20px", color: "#ffffff" }} className="container-fluid row">
                <div className="col-4" style={{borderRight: "1px dashed #428bca"}}>
                    <form>
                        <h2>Input Your or Your Peer's Roll Number</h2><br></br>
                        <input className="input" type="text" id="roll" style={{ borderRadius: "5px", width: "100%" }} /><br></br><br></br>
                        <input className="btn btn-primary" type="button" onClick={handleInput} value="submit"></input>
                    </form>
                    <br></br>
                    <br></br>
                    <br></br><br></br>
                    <hr style={{border: "1px dashed #428bca", width: "100%"}}></hr>
                    <br></br>
                    <br></br>
                    <button onClick={handleGrade} className="btn btn-primary" style={{PaddingTop: "300px"}}>
                        <span className="spinner-grow spinner-grow-sm"></span>
                            Calculate Tentative Grade
                    </button>
                    <div>
                        <h1 style={{marginTop: "40px"}}>{this.state.grade}</h1>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br><br></br>
                    <br></br>
                    <br></br>
                    <br></br><br></br>
                </div>
                <div className="col-4" style = {{padding: "20px", borderRight: "1px dashed #428bca"}}>
                    <h1>Details:</h1>
                    <table className="table" style={{marginTop: "50px" }}>
                        <tr>
                            <th>Name:</th>
                            <td> {this.state.Name}</td>
                        </tr>
                        <tr>
                            <th>Assignment Marks</th>
                            <td> {this.state.Assignment}</td>
                        </tr>
                        <tr>
                            <th>Quiz Marks</th>
                            <td> {this.state.Quiz}</td>
                        </tr>
                        <tr>
                            <th>Exam Marks</th>
                            <td> {this.state.Exams}</td>
                        </tr>
                        <tr>
                            <th>Class Interaction</th>
                            <td> {this.state.Class_Interaction}</td>
                        </tr>
                    </table>

                </div>
                <div className="col-4">
                    <div>
                        <h1>Attendance :</h1>
                        <p>{this.state.print}</p>
                    </div>
                    <h1>Notifications</h1>
                    <p>{this.state.message.map(function (item, i) { return item ? <li key={i}>{item}</li> : null })}</p>
                </div>
            </div>
        )
    }
}



export default App