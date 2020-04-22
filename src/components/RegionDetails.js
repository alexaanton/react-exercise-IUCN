import React from 'react';
import ApiService  from './ApiService';
import MaterialTable from 'material-table';
import MammalsDetails from './MammalsDetail';
import ECDetails from './ECDetails';

class RegionDetails extends React.Component {
    filterMammals = (items) =>{
        return items.filter(item => item["class_name"] ==="MAMMALIA");
    }
    filterEndanger = (items) =>{
        return items.filter(item => item["category"] ==="CR");
    }
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        mammals: [],
        cr: []
      };
    }

    componentDidMount() {
        ApiService.getSpecieByRegion(this.props.dataRegion)
        .then(
          (result) => {
            let mammalsArray = this.filterMammals(result.data.result)
            let crArray = this.filterEndanger(result.data.result)
            this.setState({
                isLoaded: true,
                items: result.data.result,
                mammals: mammalsArray,
                cr: crArray
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
      const { error, isLoaded, items, mammals, cr } = this.state;
      let mammalsTable;
      let crTable;
      if(mammals.length>0){
        mammalsTable =<MammalsDetails dataArray={mammals} dataRegion={this.props.dataRegion} />
      } else{
        mammalsTable =<i>There are no displayed mammals in {this.props.dataRegion}. You can search "mammalia to verify"</i> 
      }
      if(cr.length>0){
        crTable =<ECDetails dataArray={cr} dataRegion={this.props.dataRegion} />
      } else{
        crTable =<i>There are no displayed Critically Endangered species in {this.props.dataRegion}</i>
      }
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div>
             <MaterialTable
                title= {"Species for " + this.props.dataRegion}
                columns={[
                    { title: 'genus_name', field: 'genus_name' },
                    { title: 'class_name', field: 'class_name' },
                    { title: 'family_name', field: 'family_name' },
                    { title: 'scientific_name', field: 'scientific_name' },
                    //{ title: 'infra_name', field: 'infra_name' },
                    //{ title: 'infra_rank', field: 'infra_rank' },
                    { title: 'kingdom_name', field: 'kingdom_name' },
                    { title: 'order_name', field: 'order_name' },
                    { title: 'phylum_name', field: 'phylum_name' },
                    { title: 'population', field: 'population' },
                    { title: 'category', field: 'category' },
                   // { title: 'taxonid', field: 'taxonid' }
                ]}
                data={items}
                />
                <hr/>
                {crTable}
                <hr/>
                {mammalsTable}
                
            </div>
        );
      }
    }
  }
  
  export default RegionDetails;