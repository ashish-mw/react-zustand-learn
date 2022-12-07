import { useQuery } from "@tanstack/react-query";

const BookList = () => {
  const { isLoading, error, data, isFetching } = useQuery(
    ["bookListData"],
    () => fetch("http://localhost:9898").then((res) => res.json())
  );

  if (isLoading) return "Loading ...";
  if (isFetching) return "Fetching ...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="books-container">
      {data.map((book) => (
        <div key={book.id}>
          <p>{book.name}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
