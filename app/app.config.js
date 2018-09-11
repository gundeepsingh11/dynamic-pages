const app = {
    settings: {
        apiServiceHost: "http://apipoc.starbucks.com",
        isDevEnv: true,
        isMocking: true    
        //homePageEndpoint: "/page-v3.json"   
    },
    getContentByPath: function(page){
        var mockedPath = '';
        if(this.settings.isMocking)
        {
            mockedPath = '/mock/pages/';
        }

        return this.settings.apiServiceHost + mockedPath + page;
    },

    getContentById: function(id){
        var mockedPath = '';
        if(this.settings.isMocking)
        {
            mockedPath = '/mock/content/';
        }

        return this.settings.apiServiceHost + mockedPath + id;
    }
}

export default app;