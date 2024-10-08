import { Outlet } from "react-router-dom";

import {
  Home,
  HallOfFame,
  TeamView,
  Sponser,
  Team,
  Advertiser,
  Rules,
  AboutUs,
  ContactUs,
  Profile,
  ProfileForm,
  TeamForm,
  Login,
  SignUp,
} from "../user/pages";

import {
  Dashboard,
  Users,
  Team as AdminTeam,
  Advertiser as AdminAdvertiser,
  AdvertiserForm,
  SponserType,
  SponserTypeForm,
  FoodSponser,
  FoodSponserForm,
  OtherSponser,
  OtherSponserForm,
  Profile as AdminProfile,
  ProfileForm as AdminProfileForm,
} from "../admin/pages";

const userRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/halloffame",
    element: <HallOfFame />,
  },
  {
    path: "/teamview",
    element: <TeamView />,
  },
  {
    path: "/sponser",
    element: <Sponser />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/advertiser",
    element: <Advertiser />,
  },
  {
    path: "/rules",
    element: <Rules />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/editprofile",
    element: <ProfileForm />,
  },
  {
    path: "/addteam",
    element: <TeamForm />,
  },
  // {
  //   path: "/addteam2",
  //   element: <Teamform2 />,
  // },
  // {
  //   path: "/daddteam",
  //   element: <Dteamform />,
  // },
];

function AdminLayout() {
  return (
    <div>
      {/* Add any common admin layout elements here */}
      <Outlet />
    </div>
  );
}

const adminRoutes = [
  {
    path: "/admin/",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "users", element: <Users /> },
      { path: "teams", element: <AdminTeam /> },
      { path: "advertisers", element: <AdminAdvertiser /> },
      { path: "advertiserform", element: <AdvertiserForm /> },
      { path: "sponsertype", element: <SponserType /> },
      { path: "sponsertypeform/:id?", element: <SponserTypeForm /> },
      { path: "fsponser", element: <FoodSponser /> },
      { path: "fsponserform", element: <FoodSponserForm /> },
      { path: "osponser", element: <OtherSponser /> },
      { path: "osponserform", element: <OtherSponserForm /> },
      { path: "profile", element: <AdminProfile /> },
      { path: "profileform", element: <AdminProfileForm /> },
    ],
  },
];

export { userRoutes, adminRoutes };
