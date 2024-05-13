import neo4j from "neo4j-driver";

const driver = (apiKey) => {
  try {
    const URI = "neo4j://localhost:7687";
    const user = "dummy";
    const pass = "12345";
    console.log(URI, user, pass);
    const connection = neo4j.driver(URI, neo4j.auth.basic(user, pass));
    return connection;
  } catch (err) {
    console.log(err);
    return null;
  }
};

// use the function .getServerInfo

export default driver;
