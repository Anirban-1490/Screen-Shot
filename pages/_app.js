import { Footer } from "Components/Footer/Footer";
import { Navbar } from "Components/Navbar/Navbar";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "styles/globals.css";

export default function App({ Component, pageProps }) {
    const client = new QueryClient();
    return (
        <QueryClientProvider client={client}>
            {/* <ReactQueryDevtools /> */}
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </QueryClientProvider>
    );
}
