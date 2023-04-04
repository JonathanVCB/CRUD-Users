import "./App.css";
import MainRoutes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./contexts/UserContext";
import ContactsProvider from "./contexts/ContactContext";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={600}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <UserProvider>
        <ContactsProvider>
          <MainRoutes />
        </ContactsProvider>
      </UserProvider>
    </>
  );
}

export default App;
