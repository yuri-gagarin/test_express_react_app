import { Router } from "express";
// test routes and controller //
import { TestController } from "../controllers/testController";
import { TestRoutes } from "./testRoutes";

export class CombinedRoutes {
  private router: Router;
  constructor(router: Router) {
    this.router = router;
  }

  init() {
    this.combineRoutes(this.router);
    return this.router;
  }

  combineRoutes(router: Router) {
    new TestRoutes(router, new TestController());
  }
}