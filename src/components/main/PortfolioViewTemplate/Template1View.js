import Main from './Template1Resource/Main';
import { ThemeProvider } from 'styled-components';
import { chosenTheme } from '../../../pages/theme';
import { GlobalStyles } from '../../../pages/global';

function Template1View(props) {
	return (
		<div className="mypage_form">
			<div>
				<ThemeProvider theme={chosenTheme}>
					<>
						<GlobalStyles />
						<div>
							<Main theme={chosenTheme} email={props.email}/>
						</div>
					</>
				</ThemeProvider>
			</div>
		</div>
	);
}
export default Template1View;
