pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;

contract high_motivation{
//Constructor
    constructor() public { owner = msg.sender; }
    address payable owner;

// Data ________________________________________________________________________________________________________________________
    uint i = 0;
    struct Student{
        string Name;
        string Roll_No;
        string Batch;
        string[] message;
        address student;
        uint count;
    }

    uint16 avg_assignment;
    uint16 avg_quiz;
    uint16 avg_exams;
    uint16 avg_classInteraction;
    uint16 count;

//Mappings _____________________________________________________________________________________________________________________
        mapping(string => Student) public Students;
        mapping(string => uint8) public Assignments;
        mapping(string => uint8) public Quiz;
        mapping(string => uint16) public Exams;
        mapping(string => uint) public Class_interaction;
        mapping(string => uint16) public Attendance;

//Modifier _____________________________________________________________________________________________________________________

        modifier onlyOwner{
            if(msg.sender != owner){
                revert("only owner can call this function");
            }
            _;
        }

//Functions ____________________________________________________________________________________________________________________
        //Create and Load functions__________________________________________________________

        function setAverage(uint16 assign, uint16 quiz, uint16 exams, uint16 classInteraction) public {
            avg_assignment = assign;
            avg_quiz = quiz;
            avg_exams = exams;
            avg_classInteraction = classInteraction;
        }

        function createStudent(string memory _name, string memory _roll_no, string memory _batch, address _sAdd)
        public onlyOwner returns (Student memory){
            Students[_roll_no].Roll_No = _roll_no;
            Students[_roll_no].Name = _name;
            Students[_roll_no].Batch = _batch;
            Students[_roll_no].student = _sAdd;

            return Students[_roll_no];
        }

        function loadAssignment(uint8 _marks, string memory _student_id) public onlyOwner {
            Assignments[_student_id] = Assignments[_student_id] + _marks;
            Students[_student_id].message[Students[_student_id].count] = "Your Assignment marks are uploaded";
            Students[_student_id].count++;
        }

        function loadQuiz(uint8 _marks, string memory _student_id) public onlyOwner{
            Quiz[_student_id] = Quiz[_student_id] + _marks;
            Students[_student_id].message[Students[_student_id].count] = "Your Quiz marks are uploaded";
            Students[_student_id].count++;
        }

        function loadExams(uint8 _marks, string memory _student_id) public onlyOwner{
            Exams[_student_id] += _marks;
            Students[_student_id].message[Students[_student_id].count] = "Your Exam marks are uploaded";
            Students[_student_id].count++;
        }

        function loadClass_interaction(uint8 _marks, string memory _student_id) public onlyOwner{
            Class_interaction[_student_id] = _marks;
            Students[_student_id].message[Students[_student_id].count] = "Your Class Interaction marks are uploaded";
            Students[_student_id].count++;
        }

        function loadAttendance(string memory _student_id, uint16 a) public onlyOwner{
            Attendance[_student_id] = Attendance[_student_id] + a;
            Students[_student_id].message[Students[_student_id].count] = "Your Attendance marks are uploaded";
            Students[_student_id].count++;
        }

//Get Functions_______________________________________________________________________________________________

        function getAssignment(string memory _student_id) public view
        returns (uint8){
            return (Assignments[_student_id]);
        }

        function getQuiz(string memory _student_id) public view
        returns (uint8){
            return (Quiz[_student_id]);
        }

        function getExams(string memory _student_id) public view
        returns (uint16){
            return (Exams[_student_id]);
        }

        function getClass_interaction(string memory _student_id) public view returns (uint){
            return Class_interaction[_student_id];
        }

        function getAttendance(string memory _student_id) public view returns (uint16){
            return Attendance[_student_id];
        }

        function getDetails(string memory _student_id) public view returns (Student memory){
            return Students[_student_id];
        }
    }