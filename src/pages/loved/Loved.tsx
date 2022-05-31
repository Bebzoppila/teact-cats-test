
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Cats from "../../components/Cats";
import { deleteLikedCats } from '../../store/slices/cats'
const Loved = () => {
    const likedCats = useAppSelector(state => state.cats.allCats.filter(cat => state.cats.likedCats.includes(cat.id)) )
    const dispatcher = useAppDispatch();

    function deleteCat(id: string,){
        dispatcher(deleteLikedCats(id))
    }

    return(
        <div className="loved">
            <div className="container">
                <div className="loved__inner">
                    <Cats loader={false} onCatClick={deleteCat} catsData={likedCats} />
                </div>
            </div>
        </div>
    )
}

export default Loved