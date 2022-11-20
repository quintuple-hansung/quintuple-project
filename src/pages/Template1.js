import Main from "../containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

function Template1(){
return (
    <div className="mypage_form">
      <div>
        <h1>this isPortFolio Pages</h1>
        <ThemeProvider theme={chosenTheme}>
          <>
            <GlobalStyles />
            <div>
              <Main theme={chosenTheme} />
            </div>
          </>
      </ThemeProvider>
      </div>
    </div>
  );
}
export default Template1;