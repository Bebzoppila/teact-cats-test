import { FC } from "react";

type CatItemProps = {
    id: number,
    url: string,
    onCatClick: () => void
}
const CatItem:FC<CatItemProps> = ({url, onCatClick}) => {

  return (
    <article className="cats__item">
      <img src={url} alt="Картинка" />
      <div onClick={() => onCatClick()} role="button" className="cats__item-love">
        <svg
          className="cats__item-img"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width="40px"
          height="36px"
          viewBox="0 0 544.582 544.582"
          xmlSpace="preserve"
        >
          <g>
            <path d="M448.069,57.839c-72.675-23.562-150.781,15.759-175.721,87.898C247.41,73.522,169.303,34.277,96.628,57.839   C23.111,81.784-16.975,160.885,6.894,234.708c22.95,70.38,235.773,258.876,263.006,258.876   c27.234,0,244.801-188.267,267.751-258.876C561.595,160.732,521.509,81.631,448.069,57.839z" />
          </g>
        </svg>
      </div>{" "}
    </article>
  );
};

export default CatItem;
