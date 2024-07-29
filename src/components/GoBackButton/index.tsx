import { NavLink } from "react-router-dom";
import { Button } from "./styles";
import { FaArrowLeft } from "react-icons/fa";

export function GoBackButton() {
	return (
		<NavLink to={'/'}>
			<Button>
				<FaArrowLeft size={'32px'}/>
			</Button>
		</NavLink>
	)
}