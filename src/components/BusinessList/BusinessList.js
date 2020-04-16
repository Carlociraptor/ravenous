import React from 'react';
import './BusinessList.css';
import Business from '../business/Business';


class BusinessList extends React.Component {
    render() {
        if(this.props.networkError === true){
           return <h1>Something went wrong!</h1>
        }else{
        return (
            <div class="BusinessList">
                {
                    this.props.businesses.map((business) =>{
                        return <Business key={business.id}business={business}/>
                    })
                }
            </div>
            )
        }
    }
}

export default BusinessList