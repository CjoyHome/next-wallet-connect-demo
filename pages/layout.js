import { Web3ModalProvider } from "../context/Web3Modal";

// export const metadata = {
//   title: "Web3Modal",
//   description: "Web3Modal Example",
// };

export default function RootLayout({ children }) {
  return (
        <Web3ModalProvider>{children}</Web3ModalProvider>
  );
}