###
@apiVersion 1.0.0
@api {post} v1/auth/sign-up Sign Up

@apiName Sign Up
@apiGroup Auth

@apiUse RequestModel
@apiUse HeadersModel
@apiUse HeaderPost
@apiParamExample Params example:
  {
  "name": "Test",
  "email": "test@gmail.com",
  "password": "1Qwerty",
  }
@apiParam {String} name
  required* must be: string
@apiParam {String} email
  required* must be: string
@apiParam {String} password
  required* must be: string
@apiHeader {String} Accept="application/json"
@apiSuccessExample {json} Response-Example:
HTTP/1.1 200 OK

{
    "type": "bearer",
    "token": "MTAz.49zqwlvEhXjQ8tTMVLYFue5X3TU_8aVs2HeDR2whLB4f6ZQVYbkkHlUlmRxX"
}
###
