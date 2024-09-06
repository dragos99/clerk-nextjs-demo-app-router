"use client";

import { UserProfile } from "@clerk/nextjs";

export default function Profile() {
	return (
		<UserProfile routing="path" path="/profile">
			<UserProfile.Page label="Custom Page" url="custom" labelIcon={<span>🔥</span>}>
				Custom page
			</UserProfile.Page>
		</UserProfile>
	);
}
