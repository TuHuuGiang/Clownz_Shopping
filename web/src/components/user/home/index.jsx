import { useAuth } from '../../../queries/apis/firebase-connect';

function HomeUser(props) {
  let currentUser = useAuth();

  return (
    <>
      <div className="content">
        <h1>
          Xin chào: <i>{currentUser && currentUser.email}</i>
        </h1>
      </div>
    </>
  );
}

export default HomeUser;
