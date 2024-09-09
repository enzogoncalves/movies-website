import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button } from "./styles";

export function GoBackButton() {
	const navigate = useNavigate()

	return (
		<Button onClick={() => navigate(-1)}>
			<FaArrowLeft size={'32px'}/>
		</Button>
	)
}