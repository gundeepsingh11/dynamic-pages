import { Component } from 'react';
import { TileContainer, Image, ImageContainer } from './Article.style';
import app from '../../app.config.js';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hits: {},
        };
        //const {dataID} = this.props;
      };
      render() {
        let { hits } = this.state; 
        console.log(hits);
        return (
          <TileContainer>
            <ImageContainer>
              <Image src={hits.image}/>
            </ImageContainer>
            
            <p>{hits.name}</p>
            <h3></h3>
          </TileContainer>
        );
    };

  componentDidMount() {
    fetch(app.getContentById('132-28956'))
      .then(response => response.json())
      .then(data => this.setState({ hits: data.content }));
  }

}

export default Article;