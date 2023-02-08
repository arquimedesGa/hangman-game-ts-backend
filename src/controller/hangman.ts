import express, {Request, Response} from 'express';


function controllerhangman(req: Request, res: Response) {
    res.status(200).json({message: "router check"});
};

module.exports = controllerhangman;