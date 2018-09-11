
import React from 'react';
import * as Map from '../includes/genericComponents';


const findComponent = (_props) => {
    let demo = _props.contentLayout.metadata.view.split(':')[1].trim();
    let newVar = _props.contentItem;
    let uniqueKey = _props.contentItem.id;
    const element = Map[demo];
    if (element) {
        let mani = React.createElement(element, {
            dataID: newVar,
            key: uniqueKey 
        });
        return mani;
    }
    return (
        <div data-log={`component not available ${Object.values(_props)}`} key={Object.values(_props)} />
    );
};

export const getComponentsForRegion = (objs) => {
    if (objs) {
        const components = [];
        objs.map((item) => {
            components.push(
                findComponent(item)
            );
        });
        return components;
    }
    return null;
};