import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./appRoute/appRouter";
import { AppLayout } from "./appLayout/appLayout";
import "./app.css";

export const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </BrowserRouter>
  );
};
