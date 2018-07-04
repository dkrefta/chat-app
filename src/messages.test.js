import messages from "./messages";
import * as types from "../constants/ActionTypes";

descripe("Messages reducer", () => {
  it("should return the initital state, empty", () => {
    expect(messages(undefined, {})).toEqual([]);
  });

  it("should handle ADD_MESSAGE and store every message", () => {
    expect(
      messages([], {
        type: types.ADD_MESSAGE,
        message: "Hey",
        author: "Me"
      })
    ).toEqual([
      {
        message: "Hey",
        author: "Me"
      }
    ]);
    expect(
      messages(
        [
          {
            message: "Hey",
            author: "Me"
          }
        ],
        {
          type: types.ADD_MESSAGE,
          message: "Hey again",
          author: "Me again"
        }
      )
    ).toEqual([
      {
        message: "Hey",
        author: "Me"
      },
      {
        message: "Hey again",
        author: "Me again"
      }
    ]);
  });
});