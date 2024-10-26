import React from 'react'
import Header from './HeaderComponent/Header'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Investments from './InvestmentComponent/Investments';
import About from './AboutComponent/About';
import OutletPage from './OutletPageComponents/OutletPage';
import LandingPage from './LandingPageComponent/LandingPage';
import Login from './LoginComponent/Login';
import Outlet2 from './Outlet2Component/Outlet2';
import LandLord from './LandLordSignupComponent/LandLord';
import Buyer from './BuyerSignupComponent/Buyer';
import WelcomeOnboard from './WelcomeComponents/WelcomeOnboard';
import OtpVerification from './OtpComponent/OtpVerification';
import InputOtp from './OtpInputComponent/InputOtp ';
import DashBoardLandLord from './DashBoardLandLordComponent/DashBoardLandLord';
import DashboardOutlet from './DashBoardOutletComponent/DashboardOutlet';
import Properties from './PropertiesComponent/Properties';
import Wallet from './walletComponent/Wallet';
import Payments from './paymentsComponent/Payments';

const router = createBrowserRouter([
  {
    path: "/",
    element: <OutletPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/investments",
        element: <Investments />,
      },
      {
        path: "/about",
        element: <About />,
      },

    ],
  },

  {
    element: <Outlet2 />,
    children: [
      {
        path: "/welcomeToPropelio",
        element: <WelcomeOnboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/landlordAgentSignup",
        element: <LandLord />,
      },
      {
        path: "/buyerTenantSignup",
        element: <Buyer />,
      },
      {
        path: "/otpVerification",
        element: <OtpVerification />,
      },
      {
        path: "/enterOtp",
        element: <InputOtp />,
      },
    ],
  },

  {
    element: <DashboardOutlet />,
    children: [
      {
        path: "/dashBoard",
        element: <DashBoardLandLord />,
      },
      {
        path: "/properties",
        element: <Properties />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/payments",
        element: <Payments />,
      },
      {
        path: "/setting",
        element: <DashBoardLandLord />,
      },

    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App