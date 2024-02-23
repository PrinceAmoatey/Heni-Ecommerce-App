"use client";

interface ProductDetailsProps {
    product: any
}

const ProductDetails: React.FC <ProductDetailsProps> = ({product}) => {
    return ( <div className="grid grid-cols-1 md:grid-cols-2 gap:10"><div>images</div><div>details</div></div> );
}
 
export default ProductDetails;