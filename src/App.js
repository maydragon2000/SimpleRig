import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Deposit from './Pages/DEPOSIT/Deposit';
import Withdrawal from './Pages/Withdrawal/Withdrawal';
import Referrals from './Pages/REFERRALS/Referrals';
import CreditCardCheck from './Pages/CreditcardCheck/CreditCardCheck';
import BitcoinCheck from './Pages/BitcoinCheck/BitcoinCheck';
import Company from './Pages/Company/Company';
import FAQ from './Pages/FAQ/FAQ';
import "@fontsource/rajdhani";
import "@fontsource/montserrat";
import Terms from './Pages/Terms/Terms';
import { LoginContextProvider } from './context/Logincontexr';
function App() {
  return (
    <div className="App">
      <LoginContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CREDITCARDCHECK" element={<CreditCardCheck />} />
            <Route path="/BITCOINCHECK" element={<BitcoinCheck />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/TERMS" element={<Terms />} />
            <Route path='/' element={<Layout />}>
              <Route path="DASHBOARD" element={<Dashboard />} />
              <Route path="DEPOSIT" element={<Deposit />} />
              <Route path="WITHDRAWAL" element={<Withdrawal />} />
              <Route path="REFERRAlS" element={<Referrals />} />
              <Route path="/COMPANY" element={<Company />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LoginContextProvider>
    </div>
  );
}

export default App;
