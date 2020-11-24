import LinkModel, {ILinkModel} from './linkModel';
import {Link} from './links';

function findByCode(code: string) {
    return LinkModel.findOne<ILinkModel>({where: {code}});
}

function add(link: Link){
    return LinkModel.create<ILinkModel>(link);
}

async function hit(code: string) {
    const link = await findByCode(code);
    if(!link) return null;
    link.hits!++;
    await link.save();
    return link;
}


export default {
    findByCode,
    add,
    hit,
}