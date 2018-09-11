import GenericRegion from '../regions/GenericRegionView.js';
import { Component } from 'react';
import HtmlHead from '../../components/HtmlHead'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

class GenericPageView extends Component {
    constructor(props) {
        super(props);
      };
      render() {
        return (            
            <div>
                <HtmlHead metadata={this.props.metadata}/>
                <header>
                    <Header _isDev={this.props._isDev} />
                </header>    
                 <div id="main">
                    <GenericRegion data={this.props.data.Main}  />
                </div>                 
                <Footer />
            </div>
        );
    };
}

export default GenericPageView;

