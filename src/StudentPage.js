import React,{Component} from 'react'
import {connect} from 'react-redux'
import StudentList from './StudentList'
import PropTypes from 'prop-types'
import {fetchStudents} from './actions'

class StudentPage extends Component{
    componentDidMount(){
        this.props.fetchStudents();
    }
    render(){
        return(
            <div>
                <h1>Students List</h1>
                <StudentList students={this.props.students} />
            </div>
        )
    }
}

StudentPage.propTypes = {
    students: PropTypes.array.isRequired,
    fetchStudents: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return{
        students:state.students
    }
}
export default connect(mapStateToProps,{fetchStudents})(StudentPage)