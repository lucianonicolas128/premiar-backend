import { Application } from "express";
import ticketRoute from "../components/ticket/ticket.route";
// import CategoryRoutes from '../components/category/category.route';

export default class IndexRoutes {
    constructor(app: Application) {
        // app.use('/api/category', CategoryRoutes);
        app.use('/api/ticket', ticketRoute)
    }
}
