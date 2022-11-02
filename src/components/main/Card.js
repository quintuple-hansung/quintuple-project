import Grid2 from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';

import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
	...theme.typography.button,
	backgroundColor: theme.palette.background.paper,
	color: 'black',
	textAlign: 'center',
	padding: theme.spacing(1),
}));

const card = (
	<Card sx={{ width: '300px', height: '300px' }} variant="outlined">
		hello
	</Card>
);

function Cards() {
	return (
		<div>
			<Div>{'Title'}</Div>
			<hr />
			<Grid2 container justifyContent={'space-around'} flexDirection={'row'}>
				<Card>{card}</Card>
				<Card>{card}</Card>
				<Card>{card}</Card>
				<Card>{card}</Card>
			</Grid2>
		</div>
	);
}
export default Cards;
