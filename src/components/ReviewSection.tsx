
import React from 'react';
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

const reviews = [
  {
    id: 1,
    author: "Alex Thompson",
    rating: 5,
    date: "March 15, 2025",
    title: "Best laptop I've ever owned!",
    content: "I've been using this laptop for about a month now and I'm thoroughly impressed. The performance is stellar, even with resource-intensive applications. The display is crisp and vibrant, perfect for my design work. Battery life exceeds my expectations, lasting a full workday with mixed usage.",
    helpful: 24,
    unhelpful: 2,
    verified: true,
  },
  {
    id: 2,
    author: "Jamie Rodriguez",
    rating: 4,
    date: "February 28, 2025",
    title: "Great performance, minor design flaws",
    content: "The processing power is incredible, handling everything I throw at it with ease. The display is beautiful with accurate colors. My only complaints are the placement of some ports and the keyboard layout takes some getting used to. Overall, still a fantastic machine.",
    helpful: 18,
    unhelpful: 3,
    verified: true,
  },
  {
    id: 3,
    author: "Taylor Wilson",
    rating: 5,
    date: "February 10, 2025",
    title: "Exceeded my expectations",
    content: "After researching laptops for weeks, I decided on this model and couldn't be happier. The build quality is exceptional, and it runs cool even during intensive tasks. The sound quality is surprisingly good for a laptop, and the webcam produces clear video for my conference calls.",
    helpful: 15,
    unhelpful: 1,
    verified: true,
  },
];

const ReviewSection = () => {
  const averageRating = 4.5;
  
  const ratingCounts = {
    5: 42,
    4: 18,
    3: 5,
    2: 2,
    1: 1,
  };
  
  const totalReviews = Object.values(ratingCounts).reduce((a, b) => a + b, 0);
  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* Rating summary */}
        <div className="md:col-span-1">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-5xl font-bold mb-2">{averageRating.toFixed(1)}</div>
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className={star <= Math.floor(averageRating) 
                    ? "fill-secondary text-secondary" 
                    : star <= averageRating 
                      ? "fill-secondary text-secondary opacity-50" 
                      : "text-muted"
                  }
                />
              ))}
            </div>
            <div className="text-sm text-muted-foreground mb-6">{totalReviews} reviews</div>
            
            <div className="w-full space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-2">
                  <div className="text-sm w-2">{rating}</div>
                  <Star size={12} className="fill-secondary text-secondary" />
                  <Progress 
                    value={(ratingCounts[rating as keyof typeof ratingCounts] / totalReviews) * 100} 
                    className="h-2 flex-1" 
                  />
                  <div className="text-sm w-8 text-right">
                    {ratingCounts[rating as keyof typeof ratingCounts]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Reviews list */}
        <div className="md:col-span-2">
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">{review.title}</h3>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        className={star <= review.rating 
                          ? "fill-secondary text-secondary" 
                          : "text-muted"
                        }
                      />
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center mb-3 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{review.author}</span>
                  <span className="mx-2">•</span>
                  <span>{review.date}</span>
                  {review.verified && (
                    <>
                      <span className="mx-2">•</span>
                      <span className="text-green-600">Verified Purchase</span>
                    </>
                  )}
                </div>
                
                <p className="mb-4">{review.content}</p>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center">
                    <Button variant="ghost" size="sm" className="h-8 gap-1">
                      <ThumbsUp size={14} />
                      <span>Helpful ({review.helpful})</span>
                    </Button>
                  </div>
                  <div className="flex items-center">
                    <Button variant="ghost" size="sm" className="h-8 gap-1">
                      <ThumbsDown size={14} />
                      <span>Not helpful ({review.unhelpful})</span>
                    </Button>
                  </div>
                </div>
                
                {review.id !== reviews[reviews.length - 1].id && (
                  <Separator className="mt-6" />
                )}
              </div>
            ))}
          </div>
          
          <Button className="mt-4">Write a Review</Button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
