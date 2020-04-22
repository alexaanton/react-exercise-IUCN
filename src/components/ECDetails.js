import React from 'react';
import MaterialTable from 'material-table';
import MessuresDetails from './MessuresDetails';
class ECDetails extends React.Component {
    render() {
        return (
            <div>
             <MaterialTable
                title= {"Critically Endangered in " + this.props.dataRegion}
                columns={[
                    { title: 'genus_name', field: 'genus_name' },
                    { title: 'class_name', field: 'class_name' },
                    { title: 'family_name', field: 'family_name' },
                    { title: 'scientific_name', field: 'scientific_name' },
                    { title: 'category', field: 'category' },
                ]}
                key={this.props.dataArray.taxonid}
                data={this.props.dataArray}
                detailPanel={[
                    {
                      tooltip: 'conservation measures',
                       render: rowData => {
                        return (
                            <MessuresDetails dataArray ={rowData} dataRegion={this.props.dataRegion} />
                        )
                      },
                    }
                  ]}
                />
            </div>
        );
      
    }
  }
  
  export default ECDetails;