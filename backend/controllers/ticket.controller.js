const Ticket = require('../models/ticket');
const ticketCtrl = {}

//recuperar todos los tickets
ticketCtrl.getTickets = async (req, res) => {
var tickets = await Ticket.find().populate("espectador");
res.json(tickets);
}

//duda , como obtener por categoria mandada por parametro???
//recuperar todos los tickets de espectador local
ticketCtrl.getTicketsCategoria = async (req, res) => {
    var ticketsF = await Ticket.find({ categoriaEspectador: "l" }).populate("espectador");
    res.json(ticketsF);
    }

//dar de alta un Ticket
ticketCtrl.createTicket = async (req, res) => {
var ticket = new Ticket(req.body);
try {
await ticket.save();
res.json({
'status': '1',
'msg': 'Ticket guardado.'})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando operacion.'})
}
}

//editar ticket
ticketCtrl.editTicket = async (req, res) => {
    const vticket = new Ticket(req.body);
    try {
    await Ticket.updateOne({_id: req.body._id}, vticket);
    res.json({
    'status': '1',
    'msg': 'Ticket actualizado'
    })
    } catch (error) {
    res.status(400).json({
    'status': '0',
    'msg': 'Error procesando la operacion'
    })
    }
    }


//eliminar un ticket
ticketCtrl.deleteTicket = async (req, res)=>{
    try {
    await Ticket.deleteOne({_id: req.params.id});
    res.json({
    status: '1',
    msg: 'Ticket eliminado'
    })
    } catch (error) {
    res.status(400).json({
    'status': '0',
    'msg': 'Error procesando la operacion'
    })
    }
    }

    //obtener un ticket
    ticketCtrl.getTicket = async (req, res) => {
        const ticket = await Ticket.findById(req.params.id).populate("espectador");
        res.json(ticket);
        }
        

module.exports = ticketCtrl;