import {Request,Response} from 'express';
import { Link } from '../models/links';
import linksRepository from '../models/linksRepository';
const links : Link[] = [];
let proxId = 0;
function generateCode() {
    let text = '';
    const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let index = 0; index < 5; index++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        
    }
    return text;
}
async function postLink(req: Request,res: Response) {
    const link = req.body as Link;
    link.code = generateCode();
    link.hits = 0;
    const resultado = await linksRepository.add(link);
    if(!resultado.id) return res.sendStatus(400);
    link.id = resultado.id!;
    res.status(201).json(link);
}
async function getLink(req: Request,res: Response) {
    const code = req.params.code as string;
    const link = await linksRepository.findByCode(code);
    if(!link){
        res.status(404).json("url não encontradad");
    }else{
        res.json(link);
    }

}
async function hitLink(req: Request, res: Response) {
    const code = req.params.code as string;
    const index = await linksRepository.hit(code); 
    if(!index){
        res.sendStatus(404);
    }else{
        res.json(index);    
    }
}
export default {
    postLink,
    getLink,
    hitLink
}
