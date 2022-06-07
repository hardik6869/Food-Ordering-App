import {NextApiRequest, NextApiResponse} from 'next';
import {Products} from '../../../interface/Interface';
import dbConnect from '../../../lib/mongo';
import Product from '../../../models/Products';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<void> {
    const {method, cookies} = req;
    const token: string = cookies.token;
    dbConnect();
    if (method === 'GET') {
        try {
            const products: Products[] = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    if (method === 'POST') {
        if (!token || token !== process.env.TOKEN) {
            return res.status(401).json('Not authenticated!');
        }
        try {
            const product: Products = await Product.create(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
