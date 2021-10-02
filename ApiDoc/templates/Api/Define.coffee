###
@apiDefine ResponseNoAuth
@apiErrorExample {json} 401 Unauthorized:
HTTP/1.1 Error 401 Unauthorized
{
    "message": "Unauthenticated."
}
###

###
@apiDefine RequestModel
###

###
@apiDefine SessionModel
@apiHeader {String} Authorization Auth token. For access to api.
###

###
@apiDefine HeadersModel
###

###
@apiDefine Pagination
@apiHeader {Integer} page  Pagination parameter. Starts from 0.
@apiHeader {Integer} limit Pagination parameter. Describes count of retrieved items
###

###
  @apiDefine HeaderPost
  @apiHeaderExample {json} Header-Example:
  {
    "Accept": "application/json",
    "Accept-Encoding": "gzip, deflate",
    "Content-Type": "multipart/form-data; charset=UTF-8"
  }
###
