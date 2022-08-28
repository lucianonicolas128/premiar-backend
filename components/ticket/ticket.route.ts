import { Router } from "express";
import TicketController from './ticket.controller';

class CategoryRoutes {
    public router = Router();
    public controller;

    constructor() {
        this.controller = TicketController;
        this.initRoutes();
    }

    initRoutes() {
        this.router.route('/').post(this.controller.save());
        // this.router.route('/generate').get(this.controller.generateTheNumbers());
        this.router.route('/:id').get(this.controller.getById());
        this.router.route('/').get(this.controller.getAll());
        this.router.route('/:id').put(this.controller.update());
        // this.router.route('/:id/:product/product').put(this.controller.patchProduct());
        // this.router.route('/:id/:category/category').put(this.controller.patchSubCategory());
        // this.router.route('/:id/shop').put(this.controller.setShop());
        // this.router.route('/delete/:id').delete(this.controller.delete());
    }
}

export default new CategoryRoutes().router;