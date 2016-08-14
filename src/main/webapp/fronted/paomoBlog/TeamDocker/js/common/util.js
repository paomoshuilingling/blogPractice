define([], function () {
    return {
        settingInterceptor : function () {
            var interceptor = {
                request : function (config) {
                    return config; 
                },
                requestError : function (rejection) {
                    return rejection;
                },
                response : function (response) {
                    return response;
                },
                responseError : function (response) {
                    if (response.status == 404) {
                        alert("40412121121");
                    }
                    if (response.status == 500) {}
                    if (response.status == 302) {}
                    return response; // 或新的promise
                }
            };
            return interceptor;
        },
        pushInterceptor : function ($httpProvider) {
            $httpProvider.defaults.headers.common["x-requested-with"] = "XMLHttpRequest";
            $httpProvider.interceptors.push("golbalInterceptor"); //向$httpProvider的interceptors数组中注册定义好的全局拦截器golbalInterceptor
        }
        ,promise : null
        ,ajax : function (options){
            this.promise=null;
            if (options.beforeSend && typeof options.beforeSend == "function"){
                options.beforeSend();
            }
            var type=options.type;
            if(type=="get"){
                this.promise = options.$http.get(options.url,{params: options.data})
                .success(function(data, status, headers, config){
                    if (options.success && typeof options.success == "function") {
                        options.success(data);
                    }
                }).error(function(data, status, headers, config) {
                    if (options.error && typeof options.error == "function") {
                        options.error(data);
                    }
                });
            }
            if(type=="post"){
                // console.log('options.data',options.data);
                this.promise=options.$http.post(options.url,{}, {params:options.data})
                .success(function(data, status, headers, config) {
                    if (options.success && typeof options.success=="function"){
                        options.success(data);
                    }
                }).error(function(data, status, headers, config) {
                    if (options.error && typeof options.error == "function"){
                        options.error(data);
                    }
                });
            }
            
            return this.promise;
        }
        
    }
});
