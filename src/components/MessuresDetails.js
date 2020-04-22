import React from 'react';
import ApiService  from './ApiService';

class MessuresDetails extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }

    componentDidMount() {
        ApiService.getMeasures(this.props.dataArray.scientific_name, this.props.dataRegion)
        .then(
          (result) => {
            this.setState({
                isLoaded: true,
                items: result.data.result
              });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    render() {
      const { error, isLoaded, items } = this.state;
      let content;
      if(items.length>0) {
        content = items.map((item, index) =>
        <li key={index}>
          {item.title}
        </li>);
      }else{
          content = <li>There are no messures available</li>
      }

    
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div>
                <h4>Conservation measures for all critically endangered species:</h4>
                <ul>
                    {content}
                </ul>
            </div>
        );
      }
    }
  }
  
  export default MessuresDetails;