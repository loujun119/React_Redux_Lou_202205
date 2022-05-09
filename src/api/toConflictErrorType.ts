/**
 * @member Ok         楽観的以外
 * @member Conflict   楽観的
 * @member Deleted    すでに削除された場合
 * @member Duplicate  二人が同時に同じ変更した場合
 */
export const ConflictErrorTypes = {
  Ok: 0,
  Conflict: 1,
  Deleted: 2,
  Duplicate: 3,
  Unknown: 4,
  InternalServerError: 9,
};

export const toConflictErrorType = (data: any): number => {
  const duplicationMsgEng: string = "There are duplicate values";
  const duplicationMsgJpn: string = "重複した値があります。";
  const conflictMsgJpn: string = "競合チェック(更新済)エラー";
  const deletedMsgJpn: string = "XXX削除済エラー";
  const dataStr = JSON.stringify(data);

  if (dataStr.includes("not found")) {
    return ConflictErrorTypes.Deleted;
  }
  if (
    dataStr.includes(duplicationMsgEng) ||
    dataStr.includes(duplicationMsgJpn)
  ) {
    return ConflictErrorTypes.Duplicate;
  }
  if (dataStr.includes(conflictMsgJpn)) {
    return ConflictErrorTypes.Duplicate;
  }
  if (dataStr.includes(deletedMsgJpn)) {
    return ConflictErrorTypes.Deleted;
  }
  if (dataStr.includes("conflict")) {
    return ConflictErrorTypes.Conflict;
  }
  if (dataStr.includes("unknown")) {
    return ConflictErrorTypes.Unknown;
  }
  if (dataStr.includes("Proxy error")) {
    return ConflictErrorTypes.InternalServerError;
  }

  return ConflictErrorTypes.Ok;
};
