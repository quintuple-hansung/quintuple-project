import { CardHeader } from '@mui/material';

export function CardText(props) {
	return <CardHeader title={props.name} subheader={props.id} />;
}

export default CardText;
