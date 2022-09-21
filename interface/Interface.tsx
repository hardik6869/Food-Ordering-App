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
    map(arg0: (product: Products) => JSX.Element): import('react').ReactNode;
    filter(
        arg0: (product: {_id: string}) => boolean,
    ): import('react').SetStateAction<Products>;
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
    extras: [
        {
            _id: string;
            text: string;
            price: number;
        },
    ];
    quantity: number;
    price: number;
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

export interface Cart {
    products: [Products];
    quantity: number;
    total: number;
}
export interface CartState {
    cart: Cart;
}
