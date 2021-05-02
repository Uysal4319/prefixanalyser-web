import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li> Country Name : {this.props.article.numberInfo.countryName}</li>
                    <li> Carrier Name : {this.props.article.numberInfo.carrierName}</li>
                    <li> Number Type  : {this.props.article.numberInfo.phoneType}</li>
                </ul>
            </div>
        );
    }
}

export default Item
