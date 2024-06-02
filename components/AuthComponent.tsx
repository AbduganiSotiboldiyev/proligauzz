
import * as React from "react";
import {
  PlasmicAuthComponent,
  DefaultAuthComponentProps
} from "./plasmic/proliga_clone/PlasmicAuthComponent";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useRouter } from "next/router";

import { supabase } from "@/utils/supabaseClient";


export interface AuthComponentProps extends DefaultAuthComponentProps {}

function AuthComponent_(
  props: AuthComponentProps,
  ref: HTMLElementRefOf<"div">
) {

  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [authError,setAuthError] = React.useState({message : "error"} )
  const [formError, setFormError] = React.useState("");
  return (
      <PlasmicAuthComponent
       root={{ ref }} 
       {...props} 
        isError = {!!authError}
       errorMessage = {authError?.message}
       isLoading = {loading}
        emailInput={{
        onChange: (e) => setEmail(e.target.value),
      }}
      passwordInput={{
        onChange: (e) => setPassword(e.target.value),
      }}
      submitButton={{
        onClick: async () => {
          // setAuthError(null)
          setLoading(true);

          try {
            let authFunction = null;
            if(props.isSignUpFlow) {
              authFunction = supabase.auth.signUp({email, password})
              router.replace("/login")
            }
            else {
              authFunction = supabase.auth.signInWithPassword({email, password})
              router.replace("/home-page-admin");
            }

            const { error } =  await authFunction

            if (error) {
              setAuthError(error)
              setLoading(false);
              return;
            }

          } catch (err) {
            // setAuthError(err)
          } finally {
            setLoading(false);
          }
        },
      }}
       />

  )
}

const AuthComponent = React.forwardRef(AuthComponent_);
export default AuthComponent;
// import * as React from "react";
// import {
//   PlasmicAuthComponent,
//   DefaultAuthComponentProps
// } from "./plasmic/proliga_clone/PlasmicAuthComponent";
// import { HTMLElementRefOf } from "@plasmicapp/react-web";
// import { useRouter } from "next/router";

// import { supabase } from "@/utils/supabaseClient";


// export interface AuthComponentProps extends DefaultAuthComponentProps {}

// function AuthComponent_(
//   props: AuthComponentProps,
//   ref: HTMLElementRefOf<"div">
// ) {
 
//   const router = useRouter();
//   const [loading, setLoading] = React.useState(false);
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [authError,setAuthError] = React.useState(null)
//   const [formError, setFormError] = React.useState("");

//   return (
//     <PlasmicAuthComponent
//      root={{ ref }} 
//      {...props} 
//      isError = {!!authError}
//      errorMessage = {authError?.message}
//      isLoading = {loading}
//      emailInput={{
//         onChange: (e) => setEmail(e.target.value),
//       }}
//       passwordInput={{
//         onChange: (e) => setPassword(e.target.value),
//       }}
//       submitButton={{
//         onClick: async () => {
//           setAuthError(null)
//           setLoading(true);

//           try {
//             let authFunction = null;
//             if(props.isSignUpFlow) {
//               authFunction = supabase.auth.signUp({email, password})
//             }
//             else {
//               authFunction = supabase.auth.signInWithPassword({email, password})
//             }

//             const { error } = await  authFunction
            
//             if (error) {
//               setAuthError(error)
//               setLoading(false);
//               return;
//             }

//             router.replace("/");
//           } catch (error) {
//             setAuthError(error)
//           } finally {
//             setLoading(false);
//           }
//         },
//       }}
//      />

//   )
// }

// const AuthComponent = React.forwardRef(AuthComponent_);
// export default AuthComponent;