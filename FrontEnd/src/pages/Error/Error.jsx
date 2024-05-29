import React from "react";
import { NavLink } from "react-router-dom";

export function Error() {
		return (
			<>
				<main>
						<h1>The requested page does not exist</h1>
					<NavLink to="/">
						<p>
							Back to the homepage to explore our banking services
						</p>
					</NavLink>
				</main>
			</>
		);
	}

