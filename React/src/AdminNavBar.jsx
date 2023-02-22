import React from "react";
import { FaDog } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate, Navigate} from "react-router-dom";
// import { useEffect, useState } from "react/cjs/react.development";
import { useEffect, useState } from "react";
import axios from "axios";

function AdminNavBar({cartNum}) {

        let navigate = useNavigate();
        function handleLogout(e) {
          clearInterval(intervalId);
          var config = {
            method: "post",
            url: "logout",
            headers: {
              Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
            },
          };
          axios(config).then((res) => {
            console.log(res.data);
            window.sessionStorage.setItem("auth_token", null);

          });

          navigate("/login");
          e.preventDefault();
        }
        useEffect(() => {
          if (window.sessionStorage.getItem("auth_token") == "null") {
            clearInterval(intervalId);

            navigate("/login");
          }
        });

        var intervalId = window.setInterval(function () {
          //  axios
          //    .get("http://worldtimeapi.org/api/timezone/Europe/Belgrade")
          //    .then((res) => {
          //      var mySubString = res.data.datetime.substring(
          //        res.data.datetime.indexOf("T") + 1,
          //        res.data.datetime.lastIndexOf(".")
          //      );
          //      document.getElementsByClassName("txt-time-api")[0].innerHTML =
          //        mySubString;
          //    })
          //    .catch((e) => console.log(e));
        }, 1000);


    return (
      <>
      {window.sessionStorage.getItem("auth_token") == null ? (
        <Navigate to={"/login"} />
      ) : (
        <>
        <div className="navBar">



                <Link to="/admin" style={{ marginLeft: 20 }}>Admin</Link>
                {/* <Link to="/breeds" style={{ marginLeft: 30 }}>Istraži rase</Link> */}
                <div className="div-time-api">
                          <p className="txt-time-api"></p>
                        </div>
            <a
                              //className="dropdown-item"
                              onClick={handleLogout}
                              href="/login"
                            >
                              Logout
                            </a>
        </div>
        </>
    )
}
</>
)
}



export default AdminNavBar