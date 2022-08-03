import React from 'react'
import PropTypes from 'prop-types'

const CourseListRow = ({ id, isHeader, textFirstCell, textSecondCell }) => {
  return (
    <tr style={{backgroundColor: "#f5f5f5ab"}}>
        {
        isHeader ? 
          (textSecondCell === null) ? 
            <th colSpan="2" style={{backgroundColor: "#deb5b545"}}>{textFirstCell}</th> :
            <>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th>
            </>  :
            <>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </>
        }
    </tr>
  )
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null 
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
export default CourseListRow
