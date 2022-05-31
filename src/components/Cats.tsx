import { FC } from "react";
import { CatItem as CatItemType } from "../store/slices/cats";
import CatItem from "../components/CatItem";
import Loader from "./Loader";
type CatsProps = {
  catsData: CatItemType[];
  onCatClick: (id: string, url: string) => void;
  loader?: boolean
};

const Cats: FC<CatsProps> = ({ catsData, onCatClick, loader = true }) => {
  return (
    <div className="cats">
      {(!catsData.length && loader)? <Loader /> : ''}

      {catsData.map((cat) => (
        <CatItem
          onCatClick={() => onCatClick(cat.id, cat.url)}
          id={cat.id}
          url={cat.url}
        />
      ))}
    </div>
  );
};

export default Cats;
