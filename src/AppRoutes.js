import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import Index from "../src/Pages/Index";
import NotFound from "../src/Pages/NotFound";
export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
