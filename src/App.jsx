import React from 'react'
import './App.css'
import Header from './HeaderComponent/Header'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Investments from './InvestmentComponent/Investments';
import Listing from './ListingComponent/Listing'
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
<<<<<<< HEAD
import Lease from './ListingComponent/Lease';
import ComingSoon from './ComingSoonComponent/ComingSoon';
=======
import Wallet from './walletComponent/Wallet';
import Payments from './paymentsComponent/Payments';
>>>>>>> f839effc5df7f80a99def4923132876445e828cb

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
        path: "/Listing",
        element: <Listing/>,
      },
      {
        path: "/Rent&Lease",
        element: <Lease />,
      },
      {
        path: "/investments",
        element: <Investments />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/comingsoon",
        element: <ComingSoon/>,
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
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App