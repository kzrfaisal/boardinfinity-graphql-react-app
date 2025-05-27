import { gql, useQuery } from '@apollo/client';

const GET_USERS = gql`
  query {
    users {
      id
      email
    }
  }
`;

function Users() {
  const { data, loading, error } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data.users.map((user) => (
        <li key={user.id}>{user.email}</li>
      ))}
    </ul>
  );
}
export default Users;
