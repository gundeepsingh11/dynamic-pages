import React,{ Component } from 'react';
import {getComponentsForRegion} from '../../helpers/getComponent';

export default class GenericRegionView extends Component {
    constructor(props) {
        super(props);
      };

      render() {
       return (
            <div>
               {getComponentsForRegion(this.props.data)}
            </div>
        );
    };
}


