import Cart from './service/Cart';
import Book from './domain/Book';
import Movie from './domain/Movie';
import MusicAlbum from './domain/MusicAlbum';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1003, 'The Avengers', 500, 2012,'USA',"Avengers Assemble",['fantastic','fantasy'],137));

console.log(cart.items);
console.log(cart.sumWithoutSale());
console.log(cart.sumWithSale(10));
console.log(cart.cartDelete(1003));
console.log(cart.items);
