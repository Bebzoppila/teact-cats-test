
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Cats from "../../components/Cats";
import { deleteLikedCats } from '../../store/slices/cats'
const Loved = () => {
    const likedCats = useAppSelector(state => state.cats.likedCats)
    const dispatcher = useAppDispatch();

    function deleteCat(id: number, url: string){
        dispatcher(deleteLikedCats(id))
    }

    return(
        <div className="loved">
            <div className="container">
                <div className="loved__inner">
                    <Cats  onCatClick={deleteCat} catsData={likedCats} />
                </div>
            </div>
        </div>
    )
}

export default Loved