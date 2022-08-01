import React, { Component } from "react";

const WithLogging = (WrappedComponent) => {
  const wrappedComponentName = WrappedComponent.displayName;
  wrappedComponentName ? wrappedComponentName : (wrappedComponentName = "Component")
  return class extends Component {
    componentDidMount() {
      console.log(`Component ${wrappedComponentName} is mounted`)
    }
    componentWillUnmount () {
      console.log(`Component ${wrappedComponentName} is going to unmount`)
    }
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
}


export default WithLogging