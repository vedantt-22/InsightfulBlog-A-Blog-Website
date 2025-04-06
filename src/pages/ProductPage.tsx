
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Plus, Minus, Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import ProductGallery from '@/components/ProductGallery';
import ProductInfo from '@/components/ProductInfo';
import ReviewSection from '@/components/ReviewSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    toast.success(`${quantity} item(s) added to cart`, {
      description: "The product has been added to your cart",
    });
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-foreground">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Premium Laptop XPS15</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Gallery */}
          <ProductGallery />

          {/* Product Info */}
          <ProductInfo 
            quantity={quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            handleAddToCart={handleAddToCart}
          />
        </div>

        {/* Product description and details */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Product Description</h2>
          <div className="prose">
            <p>Experience ultimate performance with our Premium Laptop XPS15. Designed for professionals who demand the best, this laptop combines cutting-edge technology with elegant design. The vibrant 15-inch 4K OLED display delivers stunning visuals with true-to-life colors, perfect for creative work and entertainment.</p>
            
            <p>Powered by the latest 12th Gen Intel® Core™ i9 processor and NVIDIA® GeForce RTX™ graphics, it handles intensive tasks with ease. The precision-engineered keyboard provides a comfortable typing experience, while the exceptional audio quality immerses you in your content.</p>

            <h3>Key Features:</h3>
            <ul>
              <li>15.6" 4K OLED touch display (3840 x 2160) with anti-reflective coating</li>
              <li>12th Gen Intel® Core™ i9 processor</li>
              <li>32GB DDR5 memory</li>
              <li>1TB PCIe NVMe SSD</li>
              <li>NVIDIA® GeForce RTX™ 3050Ti (4GB GDDR6)</li>
              <li>Up to 12 hours battery life</li>
              <li>Thunderbolt™ 4 ports</li>
              <li>Backlit keyboard</li>
              <li>Windows 11 Pro</li>
            </ul>

            <p>Whether you're editing videos, designing graphics, analyzing data, or enjoying multimedia, the Premium Laptop XPS15 delivers exceptional performance in a sleek, portable package. Its premium aluminum chassis is not only beautiful but durable, making it the perfect companion for professionals on the go.</p>
          </div>
        </div>

        {/* Reviews section */}
        <ReviewSection />

        {/* Related products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {[1, 2, 3, 4, 5].map((item) => (
                <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center p-6">
                        <div className="aspect-square w-full relative mb-3 bg-muted rounded-md overflow-hidden">
                          <img
                            src={`https://source.unsplash.com/random/300x300?laptop&sig=${item}`}
                            alt={`Related product ${item}`}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <h3 className="font-medium mb-1">Related Product {item}</h3>
                        <p className="text-muted-foreground text-sm mb-2">Brief description</p>
                        <p className="font-bold">$999.00</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-6" />
            <CarouselNext className="-right-4 md:-right-6" />
          </Carousel>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;
