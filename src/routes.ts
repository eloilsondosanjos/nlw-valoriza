import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { ListUsersReceiveComplimentsController } from "./controllers/ListUsersReceiveComplimentsController";
import { ListUsersSendComplimentsController } from "./controllers/ListUsersSendComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUsersReceiveComplimentsController =
  new ListUsersReceiveComplimentsController();
const listUsersSendComplimentsController =
  new ListUsersSendComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);

router.get("/tags", ensureAuthenticated, listTagsController.handle);

router.get(
  "/users",
  ensureAuthenticated,
  ensureAdmin,
  listUsersController.handle
);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);

router.get(
  "/users/compliments/send",
  ensureAuthenticated,
  listUsersSendComplimentsController.handle
);

router.get(
  "/users/compliments/receive",
  ensureAuthenticated,
  listUsersReceiveComplimentsController.handle
);

export { router };
