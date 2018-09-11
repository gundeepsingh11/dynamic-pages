import fetch from 'isomorphic-unfetch';
import app from '../app.config.js';
import transformer from '../helpers/dataTransformer.js';
import GenericPageView from '../layouts/pages/GenericPageView.js';


const Index = (props) => {
  console.log('Generic Controller', props)
  return (
  <div>
    <GenericPageView data={transformer(props.PageData)} metadata={props.PageData.metadata} _isDev= {app.settings.isDevEnv}/>
  </div>
  );
};

Index.getInitialProps = async function(context) {
  let { url } = context.query
  if(!url)
    url="home"
  if(app.settings.isDevEnv){
    const res = await import('../../mock/componentJson.json');
    const data = await res
    console.log('---------------if--------------');
    return {
      PageData: data
    };
  }
  else{
    console.log('-------------else---------------');
    const pageURLAPI = app.getContentByPath(url)
    const res = await fetch(pageURLAPI)
    const data = await res.json()
    return {
      PageData: data
    };
  }
}



export default Index;