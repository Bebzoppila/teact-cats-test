import { useEffect } from "react";
import "./main.sass";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { upoadSomeCats } from "../../store/slices/cats";
import { addLikedCats } from '../../store/slices/cats'
import Cats from "../../components/Cats";

const Main = () => {
  const dispatcher = useAppDispatch();
  const allCats = useAppSelector((state) => state.cats.allCats);

  useEffect(() => {
    if(allCats.length === 0){
      dispatcher(upoadSomeCats());
    }
    
  }, []);

  function addCats(id: number, url: string){
    dispatcher(addLikedCats({id, url}))
  }

  return (
    <main className="main">
      <div className="container">
        <div className="main__inner">
          <Cats onCatClick={addCats} catsData={allCats} />
        </div>
        <div className="main-menu">
          <button onClick={() => dispatcher(upoadSomeCats())} className="btn">Зарузить ещё</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
