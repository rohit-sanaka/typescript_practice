type PropsReactNode = {
  children: React.ReactNode;
};

type PropsString = {
  children: string;
};

type HeadingProps = PropsReactNode | PropsString;

const Heading = ({ children }: HeadingProps) => {
  return <div>{children}</div>;
};

export default Heading;
