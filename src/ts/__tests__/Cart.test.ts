import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';


test('new card should be empty', () => {
  const cart = new Cart();
    expect(cart.items.length).toBe(0);
});

test('cart add', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1003, 'The Avengers', 500, 2012,'USA',"Avengers Assemble",['fantastic','fantasy'],137));

  expect(cart.items).toEqual([{id: 1001, name: "War and Piece", author: "Leo Tolstoy", price: 2000, pages: 1225},
  {id: 1008, name: "Meteora", author: "Linkin Park", price: 900}, 
  {id: 1003, name: "The Avengers", price: 500, year: 2012, countries: "USA", tagline: "Avengers Assemble", genre: ['fantastic','fantasy'], time: 137}]);
})

test('test sumWithoutSale', ()=>{
  const cart = new Cart();
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1003, 'The Avengers', 500, 2012,'USA',"Avengers Assemble",['fantastic','fantasy'],137));

  expect(cart.sumWithoutSale()).toBe(1400);
})

test('test sumWithoutSale', ()=>{
  const cart = new Cart();

  expect(cart.sumWithoutSale()).toBe(0);
})


test('test sumWithSale', ()=>{
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Movie(1003, 'The Avengers', 500, 2012,'USA',"Avengers Assemble",['fantastic','fantasy'],137));

  expect(cart.sumWithSale(10)).toBe(2250);
})

test('test sumWithSale', ()=>{
  const cart = new Cart();

  expect(cart.sumWithSale(10)).toBe(0);
})

test('cart delete', () => {
  const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(1003, 'The Avengers', 500, 2012,'USA',"Avengers Assemble",['fantastic','fantasy'],137));
    cart.cartDelete(1008);

  expect(cart.items).toEqual([{id: 1001, name: "War and Piece", author: "Leo Tolstoy", price: 2000, pages: 1225},
  {id: 1003, name: "The Avengers", price: 500, year: 2012, countries: "USA", tagline: "Avengers Assemble", genre: ['fantastic','fantasy'], time: 137}]);
})

