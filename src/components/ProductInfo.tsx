
import React from 'react';
import { Star, Heart, ShoppingCart, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductInfoProps {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  handleAddToCart: () => void;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  quantity,
  increaseQuantity,
  decreaseQuantity,
  handleAddToCart
}) => {
  return (
    <div className="flex flex-col">
      <Badge variant="outline" className="text-secondary self-start mb-2">New Arrival</Badge>
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Premium Laptop XPS15</h1>
      
      <div className="flex items-center mb-4">
        <div className="flex items-center mr-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={16}
              className={star <= 4 ? "fill-secondary text-secondary" : "text-muted"}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">(24 reviews)</span>
      </div>
      
      <div className="mb-6">
        <div className="text-3xl font-bold mb-1">$1,299.00</div>
        <div className="text-sm text-muted-foreground">
          <span className="line-through mr-2">$1,499.00</span>
          <span className="text-secondary">Save $200.00 (13%)</span>
        </div>
      </div>
      
      {/* Color options */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Color</h3>
        <div className="flex space-x-2">
          <button className="h-8 w-8 rounded-full bg-slate-800 ring-2 ring-offset-2 ring-secondary"></button>
          <button className="h-8 w-8 rounded-full bg-gray-300"></button>
          <button className="h-8 w-8 rounded-full bg-zinc-500"></button>
        </div>
      </div>
      
      {/* Configuration options */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Configuration</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <Button variant="outline" className="border-secondary">i5 / 16GB / 512GB</Button>
          <Button variant="outline">i7 / 16GB / 512GB</Button>
          <Button variant="outline">i7 / 32GB / 1TB</Button>
          <Button variant="outline">i9 / 32GB / 1TB</Button>
        </div>
      </div>

      {/* Stock status */}
      <div className="flex items-center mb-6">
        <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
        <span className="text-sm">In Stock - Ready to ship</span>
      </div>
      
      {/* Add to cart */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex items-center border rounded-md h-12">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            className="rounded-r-none"
          >
            <Minus size={16} />
          </Button>
          <div className="w-12 text-center font-medium">{quantity}</div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={increaseQuantity}
            className="rounded-l-none"
          >
            <Plus size={16} />
          </Button>
        </div>
        
        <Button 
          onClick={handleAddToCart} 
          className="flex-1 sm:flex-none sm:min-w-32"
        >
          <ShoppingCart className="mr-2" size={18} />
          Add to Cart
        </Button>
        
        <Button variant="outline" size="icon">
          <Heart />
        </Button>
      </div>
      
      {/* Additional information */}
      <div className="border-t border-border pt-6 space-y-4 text-sm">
        <div className="flex items-start">
          <div className="w-28 text-muted-foreground">Shipping:</div>
          <div>Free shipping on orders over $50</div>
        </div>
        <div className="flex items-start">
          <div className="w-28 text-muted-foreground">Returns:</div>
          <div>Free 30-day returns. See details</div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
