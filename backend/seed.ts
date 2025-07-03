import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product';

dotenv.config();

const products = [
  {
    title: 'Apple iPhone 13',
    price: 999,
    description: 'A powerful iPhone with great camera and battery life.',
    image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-2.jpg',
  },
  {
    title: 'Samsung Galaxy S21',
    price: 899,
    description: 'Flagship Samsung phone with great performance.',
    image: 'https://i.guim.co.uk/img/media/460229e455cd38808a11b1d0ebe866fcfd5f06ae/373_437_4638_2783/master/4638.jpg?width=1200&quality=85&auto=format&fit=max&s=8e5f2ac07c6de563bc79c746528b0cf7',
  },
  {
    title: 'Sony WH-1000XM4',
    price: 349,
    description: 'Industry-leading noise cancelling headphones.',
    image: 'https://adminapi.applegadgetsbd.com/storage/media/large/2097-43505.jpg',
  },
  {
    title: 'Dell XPS 13',
    price: 1199,
    description: 'Compact and powerful laptop for professionals.',
    image: 'https://computerzone.com.bd/wp-content/uploads/2023/08/post-DELL-XPS-13-9370-a.jpg',
  },
  {
    title: 'Apple Watch Series 8',
    price: 399,
    description: 'Fitness tracking and smart features in a sleek design.',
    image: 'https://www.apple.com/newsroom/images/product/watch/standard/Apple-Watch-SE-8up-hero-220907_big.jpg.large.jpg',
  },
  {
    title: 'Google Pixel 7 Pro',
    price: 799,
    description: 'Google’s flagship phone with pure Android experience and advanced AI features.',
    image: 'https://static1.pocketnowimages.com/wordpress/wp-content/uploads/2022/10/Pixel-7-Pro-Hazel-Close-Up-Resized.jpg',
  }
];


const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    await Product.deleteMany(); // Clear existing products
    const inserted = await Product.insertMany(products);
    console.log(`✅ Inserted ${inserted.length} products`);
    process.exit();
  } catch (error) {
    console.error('❌ Failed to seed products:', error);
    process.exit(1);
  }
};

seedProducts();
