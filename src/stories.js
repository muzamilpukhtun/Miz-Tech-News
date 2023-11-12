import {useGlobalContext} from"./Context";
const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();
  if (isLoading) {
    return (
      <>
        <h1>Sabar Naaah...</h1>
      </>
    );
  }

  return (
    <>
      <div className="stories-div">
        {hits.map((currPost) => {
          const { title, author, objectID, url, num_comments } = currPost;
          return (
            <div key={objectID} className="card">
              <h2>{title}</h2>
              <p>
                By <span>{author}</span> | <span>{num_comments}</span>{" "}
                comments
              </p>
              <div className="card-button">
                <a href={url} target="_blank" rel="noreferrer">
                  Read More.
                </a>
                <a href="#" onClick={() => removePost(objectID)}>Remove</a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Stories;
