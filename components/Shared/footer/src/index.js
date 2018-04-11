import React, {Component} from 'react'
import PropTypes from 'prop-types'

class SharedFooter extends Component {
  render () {
    return (
      <footer>
        <div className="container text-center">
          <p>Copyright &copy; Your Website 2018</p>
        </div>
      </footer>
    )
  }
}

SharedFooter.displayName = 'SharedFooter'

// Remove these comments if you need
// SharedFooter.contextTypes = {i18n: PropTypes.object}
// SharedFooter.propTypes = {}
// SharedFooter.defaultProps = {}

export default SharedFooter
