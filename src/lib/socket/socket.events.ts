export enum SocketEvents {
  CONNECT = "connect",
  DISCONNECT = "disconnect",
  CONNECT_ERROR = "connect_error",
  AUTHENTICATE = "authenticate",
  AUTHENTICATED = "authenticated",
  AUTHENTICATION_ERROR = "authentication_error",
}

export enum ClientEvents {
  SEND_MESSAGE = "send_message",
  TYPING = "typing",
  JOIN_ROOM = "join_room",
  LEAVE_ROOM = "leave_room",
}

export enum ServerEvents {
  RECEIVE_MESSAGE = "receive_message",
  TYPING = "typing",
  USER_JOINED = "user_joined",
  USER_LEFT = "user_left",
  ERROR = "error",
}
