import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import { KlassList } from "./components/KlassList";

const Engineer = lazy(() => import("./trees/Engineer"));
const RuneScribe = lazy(() => import("./trees/RuneScribe"));

export const App: React.FC = () => {
  return (
    <div className="App">
      <KlassList />
      <Suspense fallback={null}>
        <Route path="/engineer" component={Engineer} />
        <Route path="/runescribe" component={RuneScribe} />
      </Suspense>
    </div>
  );
};
