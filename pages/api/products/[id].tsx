import {NextApiRequest, NextApiResponse} from 'next';
import dbConnect from '../../../lib/mongo';
import Product from '../../../models/Products';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<void> {
    const {
        method,
        query: {id},
        cookies,
    } = req;
    const token: string = cookies.token;
    dbConnect();
    if (method === 'GET') {
        try {
            const product = await Product.findById(id);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    if (method === 'PUT') {
        if (!token || token !== process.env.TOKEN) {
            return res.status(401).json('Not Authenticated');
        }
        try {
            const product = await Product.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    if (method === 'DELETE') {
        if (!token || token !== process.env.TOKEN) {
            return res.status(401).json('Not Authenticated');
        }
        try {
            await Product.findByIdAndDelete(id);
            res.status(201).json('The Product has been deleted!');
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
