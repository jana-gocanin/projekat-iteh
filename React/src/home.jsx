import React, {useState} from 'react'
import Dogs from './dogs'
import ReactPaginate from 'react-paginate'
import axios from 'axios';

const Home = ({ idKorisnika, cartDogs, setCartDogs, cartNum, setCartNum, data, setData }) => {
  const dogsPerPage = 5;
  
  
  const [currentPage, setCurrentPage] = useState(1);
  
  const addToCart = async (idKorisnika, id, data) => {
    var config = {
      method: "post",
      url: "pas/amount",
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
      data: {
        id: id,
        idKorisnika: idKorisnika
      },
    };
    let response = await axios(config); 
    debugger;
    if (response.status === 200) {
      setData(data.map((dog) => {
        if (dog.id === id) {
          dog.iznos = response.data.iznos;
        } return dog;
      }))
    }



  }

    ;
  const remFromCart = () => {
    // setData(data.map((dog) => {
    //   if (dog.id === id) {
    //     if (dog.amount > 0) {
    //       dog.amount = dog.amount - 100;
    //       const a = cartNum - 100;
    //       setCartNum(a);
    //       refreshCart();
    //       console.log("dog id=", dog.id, "amount=", dog.amount);
    //     } else {
    //       alert("Iznos za doniranje je 0.");
    //     }
    //   }
    //   return dog;
    // }));

  };

  const refreshCart = () => {
    const newDogs = data.filter((dog) => dog.amount > 0);
    setCartDogs(newDogs);
  };

  const updateCart = (dog) => {
    setCartDogs([...cartDogs, dog]);
  };

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <>
      <Dogs
              data={data?.slice(currentPage * dogsPerPage - dogsPerPage, currentPage * dogsPerPage)}
              onAdd={addToCart}
        onRemove={remFromCart}
        idKorisnika={idKorisnika}
          
            />
            <ReactPaginate
                  onPageChange={paginate}
                  pageCount={Math.ceil(data.length / dogsPerPage)}
                  previousLabel={'Prev'}
                  nextLabel={'Next'}
                  containerClassName={'pagination'}
                  pageLinkClassName={'page-number'}
                  previousLinkClassName={'page-number'}
                  nextLinkClassName={'page-number'}
                  activeLinkClassName={'active'}
                />
    </>
  )
}

export default Home