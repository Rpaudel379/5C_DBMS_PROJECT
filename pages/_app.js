import Wrapper from "../components/Wrapper";
import "../styles/globals.css";
import { AppProvider } from "../context/userContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </AppProvider>
  );
}

export default MyApp;
