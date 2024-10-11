const AboutPage = () => {
  return (
    <div>
      <h1> About page !!!</h1>
    </div>
  );
};

export const getServerSideProps = async () => {
  console.log("HELLO FROM GET SERVER SIDE PROPS !!!");
  return { props: { test: "test" } };
};

export default AboutPage;
