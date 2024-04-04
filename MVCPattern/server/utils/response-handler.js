exports.success_function = function (api_data) {
    let response = {
        success : true,
        statusCode: api_data.statusCode,
        data: api_data.message
    }
}

exports.error_function = function(api_data) {

}
