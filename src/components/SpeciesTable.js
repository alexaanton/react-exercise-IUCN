import React from 'react';
import MaterialTable from 'material-table';
import RegionDetails from './RegionDetails';
import ApiService  from './ApiService';

class SpeciesTable extends React.Component {
    RandomItem = (array) => {
        if(array.length>0){
            return array[Math.floor(Math.random() * array.length)].identifier;
        }else {
            return "there are no items";
        }
    }
    
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }

    componentDidMount() {
        ApiService.getSpecies()
        .then(
          (result) => {
            this.setState({
                isLoaded: true,
                items: result.data.results
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
      const region = this.RandomItem(items);
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div>
                <MaterialTable
                title="Available regions for species"
                columns={[
                    { title: 'Identifier', field: 'identifier' },
                    { title: 'Specie Region', field: 'name' },
                ]}
                data={items}
                />
                <br />
                <hr />
                <br />
                <RegionDetails dataRegion = {region}></RegionDetails>
            </div>
        );
      }
    }
  }
  
  export default SpeciesTable;