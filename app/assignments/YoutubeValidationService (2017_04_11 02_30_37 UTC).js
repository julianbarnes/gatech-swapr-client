/**
 * Created by Vaughan on 11/14/2014.
 */

angular.module('swapr').factory('YoutubeValidation', ['$http', function ($http) {
    var inputUrl = "";
    var videoUrl = "";
    var urlIsValid = true;
    var urlIsUploading = false;

    var checkUrl = function (inputUrl, callback) {
        var inputUrlId = "";
        //TODO: urls must currently be prefaced with "http://"
        if (inputUrl.match(/youtube\.com\/watch\?v=([^\&\?\/]{11})/)) {
            var index = inputUrl.indexOf("watch?v=") + 8;
            inputUrlId = inputUrl.substring(index);
        } else if (inputUrl.match(/youtube\.com\/embed\/([^\&\?\/]{11})/)) {
            var index = inputUrl.indexOf("embed") + 6;
            inputUrlId = inputUrl.substring(index);
        } else if (inputUrl.match(/youtu\.be\/([^\&\?\/]{11})/)) {
            var index = inputUrl.indexOf(".be") + 4;
            inputUrlId = inputUrl.substring(index);
        } else if (inputUrl.match(/youtube\.com\/v\/([^\&\?\/]{11})/)) {
            console.log("youtube.com/v/")
            var index = inputUrl.indexOf("/v/") + 3;
            inputUrlId = inputUrl.substring(index);
            console.log(inputUrlId);
        }
        $http.get('https://www.googleapis.com/youtube/v3/videos?id=' + inputUrlId
        + "&key=AIzaSyAaTtiCEM1194GMdnfNvA-aWFtaNTf_9UY&part=status").
            success(function (data, status, headers, config) {
                console.log(data);
                if (data.items.length < 1) {
                    urlIsValid = false;
                } else if (data.items[0].status.privacyStatus == "public"
                    || data.items[0].status.privacyStatus == "unlisted") {
                    //data.uploadStatus will either be "uploaded" or "processed"
                    if (data.items[0].status.uploadStatus == "uploaded") {
                        urlIsUploading = true;
                    }
                    urlIsValid = true;
                }
                callback(urlIsValid, urlIsUploading);
            }).
            error(function (data, status, headers, config) {
                console.log("Error loading video url");
            });
    };

    return {
        checkUrl: checkUrl
    };
}]);
