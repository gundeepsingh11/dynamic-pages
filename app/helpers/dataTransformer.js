module.exports = (data) => {
    var regionData = {}

    if(data.pageContent){
        data.pageContent.forEach(element => {
            if(element.contentLayout && element.contentLayout.metadata && element.contentLayout.metadata.regionView){
                let regionKey = element.contentLayout.metadata.regionView
                if(regionKey.indexOf(':') !== -1){
                    regionKey = regionKey.split(':')[1].trim()
                }                
                
                if(regionData[regionKey]){
                    //Add
                    regionData[regionKey].push(element)
                }
                else{
                    //create
                    regionData[regionKey] = []
                    regionData[regionKey].push(element)
                }
            }            
        });
    }

    return regionData;
}
