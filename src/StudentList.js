import React from 'react'

import PropTypes from 'prop-types'
export default function StudentList({students}) {
    const emptyMessage = (
        <p> There are no students</p>
    )

    const studentList =(
        <p>students List</p>
    )
    return(
        <div>
            {students.length=== 0 ? emptyMessage : studentList}
        </div>
    );
}

StudentList.propTypes = {
    students:PropTypes.array.isRequired
}