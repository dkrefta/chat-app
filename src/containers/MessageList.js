import { connect } from "react-redux";
import MessageListComponent from "../components/MessagesList";

export const MessageList = connect(
  state => ({
    messages: state.messages
  }),
  {}
)(MessagesListComponent);
