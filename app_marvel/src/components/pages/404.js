import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
	return (
		<div>
			<ErrorMessage />
			<Link to="/">
				<img src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="page not found" />
			</Link>
			<Link to="/">
				Back to main page
			</Link>
		</div>
	)
}

export default Page404;