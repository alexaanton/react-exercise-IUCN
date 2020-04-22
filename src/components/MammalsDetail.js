import React from 'react';
import MaterialTable from 'material-table';


class MammalsDetails extends React.Component {
    render() {

        return (
            <div>
             <MaterialTable
                title= {"Mammals displayed species in " + this.props.dataRegion}
                columns={[
                    { title: 'genus_name', field: 'genus_name' },
                    { title: 'class_name', field: 'class_name' },
                    { title: 'family_name', field: 'family_name' },
                    { title: 'scientific_name', field: 'scientific_name' },
                    { title: 'category', field: 'category' },
                ]}
                data={this.props.dataArray}
                
                />
                <br/>
            </div>
        );
              }
  }
  
  export default MammalsDetails;