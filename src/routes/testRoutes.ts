import type { Router } from "express";

export class TestRoutes {
  private controller: any;
  constructor(router: Router, controller: any) {
    this.controller = controller;
    this.initializeRoutes(router);
  }
  
  initializeRoutes(router: Router) {
    this.testIndexRote(router);
  }

  testIndexRote(router: Router) {
    router
      .route("/api/test_index_route")
      .get(this.controller.index);
  }
};
