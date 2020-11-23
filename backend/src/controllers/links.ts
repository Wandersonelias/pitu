import {Request,Response} from 'express';
import { Link } from '../models/links';
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
function postLink(req: Request,res: Response) {
    const link = req.body as Link;
    link.id = proxId++;
    link.code = generateCode();
    link.hits = 0;

    links.push(link);
    res.status(201).json(links);
}
function getLink(req: Request,res: Response) {
    const code = req.params.code as string;
    const link = links.find(item => item.code === code);
    if(!link){
        res.status(404).json("url não encontradad");
    }else{
        res.json(link);
    }

}
function hitLink(req: Request, res: Response) {
    const code = req.params.code as string;
    const index = links.findIndex(item => item.code === code); 
    if(index==-1){
        res.sendStatus(404);
    }else{
        links[index].hits!++;
        res.json(links[index])
    }
}
export default {
    postLink,
    getLink,
    hitLink
}
