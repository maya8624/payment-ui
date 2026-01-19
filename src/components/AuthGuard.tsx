// import { Navigate, useLocation } from "react-router-dom";
// import { useAuthStore } from "../store/authStore";

// interface Props {
//   children: JSX.Element;
// }

// export default function AuthGuard({ children }: Props) {
//   const token = useAuthStore((s) => s.token);
//   const location = useLocation();

//   if (!token) {
//     return <Navigate to="/login" replace state={{ from: location }} />;
//   }

//   return children;
// }
