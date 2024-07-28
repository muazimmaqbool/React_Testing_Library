import { rest } from "msw";

export const handlers = [
  //here we define api methid: get, post, put, delete, patch etc but mostly we use get
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.status(200), //the status code of get request is 200 (for success)
      //here i'm print name from the response we will print name and that's why we use name
      ctx.json([{ name: "Muazim" }, { name: "Basit" }, { name: "Kaiser" }])
    );
  }),
];
