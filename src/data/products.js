const products = [
    {
      sku: "sku_HGNjHaxOPl8hcz",
      price: 2000,
      name: 'Sony 1',
      photo: '1000'
    },
    {
      sku: "sku_HGNlqBjorYlLGh",
      price: 2000,
      name: 'Sony 2',
      photo: '1000'
    },
    {
      sku: "sku_HGNljAHJ7qZjpz",
      price: 2000,
      name: 'Sony 3',
      photo: '1000'
    }
]

export default products

// useEffect(() => {
//   fetchItem();
//   // console.log(match)
// }, []);

// const fetchItem = () => {
//    axios.get(`http://localhost:3010/home/${match.params.id}`)
//   .then(response => {
//     const item = response.data;
//     console.log(item)
//     setItem(item);
//   })
// }