import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{margin:0,fontFamily:"Arial"}}>

        <Header/>

        <div style={{display:"flex"}}>

          <Sidebar/>

          <main style={{flex:1,padding:"20px"}}>
            {children}
          </main>

        </div>

      </body>
    </html>
  );
}
