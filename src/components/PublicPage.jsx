const PublicPage = () => {
  return (
      <div id="Carddiv">
        <h2>Public Page</h2>
        <p>This page is accessible to everyone.</p>
        <img
            src={`https://robohash.org/${Math.random()}.png?size=150x150`}
            alt="Random Robot"
        />
        <div>
          <h3>Random Name</h3>
          <p>Random email</p>
        </div>
      </div>
  );
};

export default PublicPage;
