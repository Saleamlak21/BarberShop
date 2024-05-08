// utils/withAuth.js
// "use client";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

const useEffectOnce = (effect) => {
  const didRun = useRef(false);
  useEffect(() => {
    if (!didRun.current) {
      effect();
      didRun.current = true;
    }
  }, []);
};

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();

    useEffectOnce(() => {
      const isAdmin = localStorage.getItem("isAdmin");
      const isLogged = localStorage.getItem("isLogged");

      if (isAdmin === "false" && isLogged === "true") {
        // use router to redirect
        router.push("/pages/Customers");

      } else if (isAdmin === "true" && isLogged === "true") {
        // use router to redirect
        router.push("/pages/admin/admin-dashboard");
       
      } else {
        // use router to redirect
        router.push("/page-not-found");
      }
    });

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default { withAuth };
