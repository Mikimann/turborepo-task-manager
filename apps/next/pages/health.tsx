import { InferGetStaticPropsType, NextPage } from "next";
import { GetStaticProps } from "next";

const Health: NextPage = ({
  res,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>Health API</h1>
      <h2>Status: {res?.status}</h2>
    </div>
  );
};

export default Health;

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(`http://localhost:3001/health`);
  const res: Response = await data.json();

  return {
    props: {
      res,
    },
  };
};
