###
@apiVersion 1.0.0
@api {get} v1/user/me Get current User
@apiDescription This method will get current User
@apiName Me
@apiGroup User

@apiUse RequestModel
@apiUse HeadersModel
@apiUse HeaderPost
@apiHeader {String} Authorization="bearer [you-key]"

@apiSuccessExample {json} Response-Example:
HTTP/1.1 200 OK

  {
    "id": 2,
    "name": "Vladyslav Chaly",
    "email": "chaly95@gmail.com",
    "created_at": "2021-10-02T10:39:08.969+00:00",
    "updated_at": "2021-10-02T10:39:08.969+00:00"
}

###
