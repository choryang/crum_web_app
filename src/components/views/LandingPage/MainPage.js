import React from "react";
import { Link } from "react-router-dom";
import MainNav from "components/views/NavBar/MainNav";

function MainPage() {
  return (
    <>
      <MainNav />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <h2>메인페이지</h2>
        <Link to={"/mypage"}>마이페이지로 이동</Link>
      </div>
    </>
  );
}

export default MainPage;
