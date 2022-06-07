export interface Orders {
    status: any;
    _id: string;
    customer: string;
    address: string;
    total: number;
    method: number;
    createdAt: string;
    updatedAt: string;
}

export interface Products {
    _id: string;
    title: string;
    desc: string;
    img: string;
    prices: [number];
    extraOptions: [
        {
            text: string;
            price: number;
        },
    ];
    createdAt: string;
    updatedAt: string;
}

export interface Cart {
    products: [Products];
    total: number;
}

export interface ProdOption {
    _id: string;
    text: string;
    price: number;
}

export interface adminSlices {
    _id: string;
    title: string;
    desc: string;
    img: string;
    prices: [number];
    extraOptions: [ProdOption];
    createdAt: string;
    updatedAt: string;
}

export interface cartSlice {
    products: [Products];
    quantity: number;
    total: number;
}
