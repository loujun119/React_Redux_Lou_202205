export enum HttpStatus {
  Ok = 0, // リクエストは成功し、レスポンスとともに要求に応じた、リソースが返される。
  Created = 1, // リクエストは完了し新たにリソースが作成された。locationヘッダには新たに作成されたリソースのURIが含まれる。POST
  NoContent = 2, // 内容なし。 リクエストを受理したが、返すべきレスポンスエンティティが存在しない場合に返される。PUT,POST,DELETE
  SeeOther = 3, // 他を参照せよ。リクエストに対するレスポンスが他のURIとして存在するときに返される。
  BadRequest = 4, // リクエストが不正である。定義されていないメソッドを使うなど、クライアントのリクエストがおかしい場合に返される。
  Unauthorized = 5, // 認証が必要である。Basic認証やDigest認証などを行うときに使用される。
  NotFound = 6, // 未検出。リソースが見つからなかった。
  MethodNotAllowed = 7, // バッチ処理が走っているため、APIメソッドの実行が許可されていない。
  Conflict = 8, // 競合。リクエストは現在のリソースと競合するので完了できない。
  InternalServerError = 9, // サーバ内部エラー。サーバ内部にエラーが発生した場合に返される。
  ServiceUnavailable = 10, // サービス処理不可。サービスが一時的に過負荷やメンテナンスで使用不可能である。
  UnknownStatusCode = 11, // 未知のステータスコード。
}

export const toHttpStatus = (code: number): HttpStatus => {
  switch (code) {
    case 200:
      return HttpStatus.Ok;
    case 201:
      return HttpStatus.Created;
    case 204:
      return HttpStatus.NoContent;
    case 303:
      return HttpStatus.SeeOther;
    case 400:
      return HttpStatus.BadRequest;
    case 401:
      return HttpStatus.Unauthorized;
    case 404:
      return HttpStatus.NotFound;
    case 405:
      return HttpStatus.MethodNotAllowed;
    case 409:
      return HttpStatus.Conflict;
    case 500:
      return HttpStatus.InternalServerError;
    case 503:
      return HttpStatus.ServiceUnavailable;
    default:
      return HttpStatus.UnknownStatusCode;
  }
};

export const httpStatusToString = (code: number): string => {
  switch (code) {
    case 0:
      return "OK";
    case 1:
      return "Created";
    case 2:
      return "No Content";
    case 3:
      return "See Other";
    case 4:
      return "Bad Request";
    case 5:
      return "Unauthorized";
    case 6:
      return "Not Found";
    case 7:
      return "Method Not Allowed";
    case 8:
      return "Conflict";
    case 9:
      return "Internal Server Error";
    case 10:
      return "Service Unavailable";
    default:
      return "Unknown Status Code";
  }
};
