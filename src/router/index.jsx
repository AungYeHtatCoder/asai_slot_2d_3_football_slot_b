import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import HomePage from '../pages/Home';
import PromotionPage from '../pages/Promotion';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import ChangePasswordPage from '../pages/ChangePassword';
import PlayHistoryPage from '../pages/PlayHistory';
import Topup from '../pages/Topup';
import Withdraw from '../pages/Withdraw';
import TransferLog from '../pages/TransferLog';
import HomeTabsPage from '../pages/HomeTabs';
import MainLayout from '../components/Main/MainLayout';
import Home from '../pages/Main/Home';
import ServicePhone from '../pages/Main/ServicePhone';
import Promotion from '../pages/Main/Promotion';
import PromotionDetail from '../pages/Main/PromotionDetail'
import WalletPage from '../pages/Main/Wallet';
import TopUpPage from '../pages/Main/TopUp';
import WithDrawPage from '../pages/Main/WithDraw';
import TwoD from '../pages/Main/TwoD';
import TwoDBetHistory from '../pages/Main/TwoDBetHistory';
import TwoDWinners from '../pages/Main/TwoDWinners';
import TwoDHoliday from '../pages/Main/TwoDHoliday';
import MePage from '../pages/Main/mepage';
import BetHistory from '../pages/Main/BetHistory';
import Result from '../pages/Main/Result';
import Bank from '../pages/Main/Bank'
import ChangePassword from '../pages/Main/ChangePassword';
import Profile from '../pages/Main/Profile';
import ThreeDPage from '../pages/Main/ThreeD';
import ThreeDBetPage from '../pages/Main/ThreeDBet';
import TwoDBetPage from '../pages/Main/TwoDBet';
import ThreeDWinners from '../pages/Main/ThreeDWinners';
import ThreeDHistoryPage from '../pages/Main/ThreeDHistory';
import ThreeDBetHistoryPage from '../pages/Main/ThreeDBetHistory';
import Login from '../pages/Main/Login'
import TwoDComfirm from '../pages/Main/TwoDComfirm';
import ThreeDConfirm from '../pages/Main/ThreeDConfirm';

const router = createBrowserRouter([
  // For Main Routes 
  {
    path:'/',
    element:<MainLayout/>,
    children:[
      {
       path:'/',
        element: <Home />,
      },
      {
        path:'/login',
         element: <Login />,
       },
      {
        path:'/wallet',
         element: <WalletPage />,
       },
       {
        path:'/top-up',
         element: <TopUpPage />,
       },
       {
        path:'/with-draw',
         element: <WithDrawPage />,
       },
      {
        path:'/service-phone',
         element: <ServicePhone />,
       },
       {
        path:'/promotion',
        element:<Promotion/>
       },
       {
        path:'/promotiondetail',
        element:<PromotionDetail/>
       },
       {
        path:'/2d/twoD',
        element:<TwoD/>
       },
       {
        path:'/2d/twodbet',
        element:<TwoDBetPage/>
       },
       {
        path:'/2d/twodcomfirm',
        element:<TwoDComfirm/>
       },
       {
        path:'/2d/bet-history',
        element:<TwoDBetHistory/>
       },
       {
        path:'/2d/winners',
        element:<TwoDWinners/>
       },
       {
        path:'/2d/holiday',
        element:<TwoDHoliday/>
       },
       {
        path:'/3d/threeD',
        element:<ThreeDPage/>
       },
       {
        path:'/3d/winners',
        element:<ThreeDWinners/>
       },
       //3D မှတ်တမ်း
       {
        path:'/3d/bet-history',
        element:<ThreeDBetHistoryPage/>
       },
        // 3D ထွက်ဂဏန်းများ
       {
        path:'/3d/history',
        element:<ThreeDHistoryPage/>
       },
       {
        path:'/3d/bet',
        element:<ThreeDBetPage/>
       },
       {
        path:'/3d/threedConfirm',
        element:<ThreeDConfirm/>
       },

       {
        path:'/mepage',
        element:<MePage/>
       },
       {
        path:'/profile',
        element:<Profile/>
       },
       {
        path:'/bet-history',
        element:<BetHistory/>
       },
       {
        path:'/result',
        element:<Result/>
       },
       {
        path:'/bank',
        element:<Bank/>
       },
       {
        path:'/change-password',
        element:<ChangePassword/>
       }
      
    ]
  },
  // For Slots Routes
  {
    path: '/slots',
    element: <Layout />,
    children: [
      {
        index:true,
        element: <HomeTabsPage />,
      },
      {
        path:'user',
        element:<HomePage/>
      },
      {
        path: 'promotion',
        element: <PromotionPage />,
      },
      {
        path: 'change-password',
        element: <ChangePasswordPage />,
      },
      {
        path: 'play-history',
        element: <PlayHistoryPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'topup',
        element: <Topup />,
      },
      {
        path: 'withdraw',
        element: <Withdraw />,
      },
      {
        path: 'transferlog',
        element: <TransferLog />,
      },
    ],
  },


]);

export default router;
