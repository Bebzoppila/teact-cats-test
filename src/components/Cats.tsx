import { FC } from "react"
import { CatItem as CatItemType } from '../store/slices/cats'
import CatItem from "../components/CatItem";

type CatsProps = {
    catsData: CatItemType[],
    onCatClick: (id: number, url: string) => void
}

const Cats:FC<CatsProps> = ({catsData, onCatClick}) => {

    return(
        <div className="cats">
            {catsData.map((cat) => (
              <CatItem onCatClick={() => onCatClick(cat.id, cat.url)} id={cat.id} url={cat.url} />
            ))}
        </div>
    )
}

export default Cats