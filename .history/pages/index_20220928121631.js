import { Button } from 'semantic-ui-react';

import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  //before, during, after 

  const [loginState, setLoginState] = useState("before");
  var c = "blue";

  if(loginState === "before") {
    c = "blue";
  }
  if(loginState === "during") {
    c = "green";
  }
  if(loginState === "after") {
    c = "grey";
  }

  const HandleButton = () => {
    if(loginState === "before") {
      setLoginState("during");
    }
    if(loginState === "during") {
      setLoginState("after");
    }
  }

  return (
    <div>
      <Button color={c} onClick={()=> HandleButton()}>Click Me</Button>
    </div>
  )
}
