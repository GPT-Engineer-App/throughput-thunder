import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Cat, Heart, Info, Paw, Star, ArrowRight, ChevronDown } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const catImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1200px-Kittyply_edit1.jpg",
];

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % catImages.length);
      setProgress(0);
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % 100);
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <motion.div 
        className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-24 px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover the World of Cats
          </motion.h1>
          <motion.p 
            className="text-2xl mb-10 text-pink-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Explore fascinating facts and popular breeds of our feline friends
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              variant="secondary" 
              size="lg" 
              className="group bg-white text-purple-700 hover:bg-pink-100 transition-colors duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Cat className={`mr-2 h-5 w-5 transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`} /> 
              Explore Now
              <ArrowRight className={`ml-2 h-5 w-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <ChevronDown className="h-8 w-8 text-white animate-bounce" />
        </motion.div>
      </motion.div>
      
      <div className="max-w-6xl mx-auto p-8">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="relative mb-12 group"
        >
          <img 
            src={catImages[currentImageIndex]} 
            alt="Cute cat" 
            className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-105"
          />
          <Progress value={progress} className="w-full mt-4" />
          <Badge className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 text-sm font-semibold">
            Featured Cat
          </Badge>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Button variant="secondary" size="lg" className="bg-white/80 text-purple-700 hover:bg-white">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
        
        <Tabs defaultValue="facts" className="mb-12">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="facts" className="text-lg py-3">Feline Facts</TabsTrigger>
            <TabsTrigger value="breeds" className="text-lg py-3">Popular Breeds</TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <TabsContent value="facts" key="facts">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-none shadow-xl overflow-hidden">
                  <CardHeader className="relative">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-300/30 to-pink-300/30"
                      animate={{
                        background: [
                          "linear-gradient(to right, rgba(216, 180, 254, 0.3), rgba(249, 168, 212, 0.3))",
                          "linear-gradient(to left, rgba(216, 180, 254, 0.3), rgba(249, 168, 212, 0.3))",
                        ],
                      }}
                      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <CardTitle className="flex items-center text-3xl text-purple-700 relative z-10">
                      <Paw className="mr-3 h-8 w-8 text-pink-500" />
                      Fascinating Feline Facts
                    </CardTitle>
                    <CardDescription className="text-lg text-purple-600 relative z-10">Uncover the mysteries of our purr-fect companions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px] pr-4">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          "Cats have been domesticated for over 4,000 years.",
                          "An adult cat has 30 teeth.",
                          "Cats can jump up to six times their length.",
                          "A group of cats is called a "clowder".",
                          "Cats spend 70% of their lives sleeping.",
                          "A cat's hearing is much more sensitive than a human's or dog's.",
                          "Cats have a third eyelid called the 'haw' to protect their eyes.",
                          "A cat's nose print is unique, like a human's fingerprint.",
                          "Cats have over 20 different vocalizations for communication.",
                          "The first cat in space was French, named Felicette, in 1963."
                        ].map((fact, index) => (
                          <motion.li 
                            key={index}
                            className="flex items-start bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Star className="mr-3 h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Fun Fact #{index + 1}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <span className="text-purple-800">{fact}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="breeds" key="breeds">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-none shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-3xl text-purple-700">
                      <Cat className="mr-3 h-8 w-8 text-pink-500" />
                      Popular Cat Breeds
                    </CardTitle>
                    <CardDescription className="text-lg text-purple-600">Discover the unique characteristics of beloved feline friends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Carousel className="w-full max-w-3xl mx-auto">
                      <CarouselContent>
                        {[
                          { name: "Siamese", description: "Known for their distinctive coloring and vocal nature.", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg" },
                          { name: "Maine Coon", description: "One of the largest domestic cat breeds with a friendly personality.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG" },
                          { name: "Persian", description: "Recognized for their long fur and flat faces.", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" },
                          { name: "Bengal", description: "Wild-looking cats with leopard-like spots.", image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg" },
                          { name: "Scottish Fold", description: "Characterized by their folded ears and round faces.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Adult_Scottish_Fold.jpg" }
                        ].map((breed, index) => (
                          <CarouselItem key={index}>
                            <Card className="bg-white shadow-lg overflow-hidden">
                              <img src={breed.image} alt={breed.name} className="w-full h-64 object-cover" />
                              <CardHeader>
                                <CardTitle className="text-2xl text-purple-700">{breed.name}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-purple-600">{breed.description}</p>
                              </CardContent>
                            </Card>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
        
        <motion.div 
          className="text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => setLikes(likes + 1)}
            className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none hover:from-purple-600 hover:to-pink-600 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <Heart className="mr-2 h-6 w-6 group-hover:text-red-200 transition-colors" />
              Love Cats! ({likes})
            </span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ scale: 0, opacity: 0 }}
              whileTap={{ scale: 4, opacity: 0.5 }}
              transition={{ duration: 0.5 }}
            />
          </Button>
        </motion.div>
      </div>
      
      <footer className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Stay Connected with Cat Lovers United</h2>
          <p className="text-xl mb-8">Join our community and receive weekly cat facts and adorable photos!</p>
          <div className="flex justify-center space-x-4 mb-8">
            <Button variant="secondary" size="lg" className="bg-white text-purple-700 hover:bg-pink-100">
              Subscribe Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-700">
              Learn More
            </Button>
          </div>
          <p className="text-lg">© 2023 Cat Lovers United. All rights reserved.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-pink-200">About Us</Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-pink-200">Contact</Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-pink-200">Privacy Policy</Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-pink-200">Terms of Service</Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
