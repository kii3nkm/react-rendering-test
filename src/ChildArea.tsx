import { FC, memo } from "react";

type Props = {
  open: boolean;
  onClickClose: () => void;
};

export const ChildArea: FC<Props> = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildArea was rendered!");

  const data = [...Array.from(Array(2000).keys())];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div>
          <hr />
          <p>child component</p>
          <button onClick={onClickClose}>close</button>
        </div>
      ) : null}
    </>
  );
});
