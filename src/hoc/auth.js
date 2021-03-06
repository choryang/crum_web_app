import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "_actions/user_action";
export default function (SpecificComponent, option, adminRoute = null) {
  //option: null 아무나 출입 가능
  //true 로그인한 유저만
  //false 로그인한 유저는 출입 불가
  //adminRoute: null 사용하지 않음
  //true 어드민 유저만
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        //로그인 하지 않은 상태
        if (!response.payload.isAuth) {
          if (option) {
            return props.history.push("/login");
          }
        } 
        else if (!option) {
            return props.history.push("/main");
        }
      });
    }, []);

    return <SpecificComponent />;

  }

  return AuthenticationCheck;
}
