import { FC } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

type Props = {
  open: boolean;
};

export const ChildArea: FC<Props> = (props) => {
  const { open } = props;
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>child component</p>
        </div>
      ) : null}
    </>
  );
};
