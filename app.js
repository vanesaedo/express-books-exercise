
const express = require('express')
const app = express()
const port = 3000
app.use(express.json()); //Para parsear el body de als peticiones


//1. Crea una ruta `/all` para obtener todos los libros

app.get('/all', (req,res)=>{
res.status(200).send(`Aquí datos de todos los libros`);//devuelve lo solicitado
});


//2. Crea una ruta `/first` para obtener el primer libro

app.get("/books/first", (req, res) => {
    
    const first = req.params[0];
    res.status(200).send(`Aquí el primer libro: ${first}`);//devuelve lo solicitado
});


//3. Crea una ruta `/last` para obtener el último libro

app.get("/books/last", (req, res) => {
    
  const last = req.params.lentth - 1;
  res.status(200).send(`Aquí el último libro: ${last}`);//devuelve lo solicitado
});

//4. Crea una ruta `/middle` para obtener el libro en la mitad (número 50 en el array)

app.get("/books/middle", (req, res) => {
    
  const last = req.params.lentth - 1;
  res.status(200).send(`Aquí el libro en el medio: ${middle}`);//devuelve lo solicitado
});

//5. Crea una ruta `/author/dante-alighieri` para obtener **SÓLO EL TÍTULO** del libro de `Dante Alighieri`

app.get("/author/dante-alighieri/:title?", (req, res) => {
    
  const title = req.params.title;
  res.status(200).send(`Aquí el título del libro de Dante Alighieri: ${title}`);//devuelve lo solicitado
});

//6. Crea una ruta `/country/charles-dickens` para obtener **SÓLO EL PAÍS** del libro de `Charles Dickens`

app.get("/country/charles-dickens", (req, res) => {
    
  const country = req.params.country;
  res.status(200).send(`Aquí el título del libro de Dante Alighieri: ${country}`);//devuelve lo solicitado
});

//7. páginas y año de libro  de Miguel  de C.

app.get(`/year&pages/cervantes`, (req, res) => {
    
  const dateBook = req.params.title;
  res.status(200).send(`{ pages: ..., year: ... }`);
});


//8. Crea una ruta `/country/count/spain` para obtener **EL NÚMERO DE LIBROS** de `España`

app.get( `/country/count/spain`, (req, res) => {
    
  const numb = req.params;
  res.status(200).send(`${numb}`);
});

//9. Crea una ruta `/country/at-least/germany` para obtener **VERDADERO O FALSO** dependiendo de si hay o no un libro de `Alemania`

app.get( `/country/at-least/germany`, (req, res) => {
    
  const numb = req.params;
  res.status(200).send(`${numb}`);
});


//10. Crea una ruta `/pages/all-greater/200` para obtener **VERDADERO O FALSO** dependiendo de si todos los libros tienen más de `200` páginas
app.get(`/pages/all-greater/200`, (req, res) => {
    
  const greater200 = req.params;
  res.status(200).send(`${greater200}`);
});

// http://localhost:3000
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
  })