import {Component} from 'react'

class ErrorBoundary extends Component {
  constructor(){
    super()
    this.state = {
      hasError: false
    }
  }
  // React auto passes error object if one occurs
  componentDidCatch(error) {
    this.setState({hasError: true})
  }

  render() {
    // if error occured
    if(this.state.hasError) {
      return <p>Something went wrong</p>
    }
    return this.props.children
  }
}

export default ErrorBoundary