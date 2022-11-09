import { CardHeader } from '@mui/material';

export function CardText(props) {
	return <CardHeader title={props.name} subheader={props.email} />;
}

export default CardText;
