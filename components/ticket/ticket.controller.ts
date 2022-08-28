import { Request, Response } from "express";
import ticket from "./ticket.model";

class TicketController {
  constructor() { }

  save() {
    return async (req: Request, res: Response) => {
      try {
        let catData: any = req.body;
        let payload: any = ticket.create(catData);
        res.status(200).send(payload);

      } catch (e: any) {
        res.status(500).send({ message: 'Error al guardar.' })
      }
    }
  }

  generateTheNumbers() {
    return async (req: Request, res: Response) => {

      try {
        for (let i: number = 0; i < 500; i++) {
          let numberToSave: any;
          if (i < 10) {
            numberToSave = `00${i} - ${i + 500}`
          } else if (i > 9 && i < 100) {
            numberToSave = `0${i} - ${i + 500}`
          } else {
            numberToSave = `${i} - ${i + 500}`
          }
          const data: any = await {
            number: numberToSave
          }

          let payload: any = await ticket.create(data);
          await console.log(numberToSave)
        }

        await res.status(200).send('ok');
      } catch (e: any) {
        res.status(500).send({ message: 'Error al guardar.' })
      }
    }
  }

  getById() {
    return async (req: Request, res: Response) => {
      try {
        const catId: string | any = req.params.id;
        let payload: any = await ticket.find(catId)
        res.status(200).send(payload)
      } catch (e: any) {
        res.status(500).send({ message: 'Error al buscar.' })
      }
    }
  }

  getAll() {
    return async (req: Request, res: Response) => {
      try {
        let payload: any = await ticket.find({})
        await res.status(200).send(payload)
      } catch (e: any) {
        res.status(500).send({ message: 'Error al buscar.' })
      }
    }
  }

  update() {
    return async (req: Request, res: Response) => {
      try {
        const id = req.params.id;
        const update = req.body;
        let payload: any = ticket.findByIdAndUpdate(id, update)
        res.status(200).send(payload)
      } catch (e: any) {
        res.status(500).send({ message: 'Error al buscar la ticket.' })
      }
    }
  }

  delete() {
    return async (req: Request, res: Response) => {
      try {
        const id = req.params.id;
        const update = { is_deleted: true };
        let payload: any = ticket.findByIdAndUpdate(id, update)
        res.status(200).send(payload)
      } catch (e: any) {
        res.status(500).send({ message: 'Error al buscar la ticket.' })
      }
    }
  }
}

export default new TicketController();