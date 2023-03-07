import Link from 'next/link';
// Import {useRouter} from 'next/router';
// import {useEffect} from 'react';

// import {useAuth} from '@/lib/hooks/useAuth';

export const getHomeRoute = (role: string) => {
	if (role === 'meshery') return '/provider';
	return '/';
};

export default function Home() {
	/*
	Const auth = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (auth.user?.role) {
			const homeRoute = getHomeRoute(auth.user.role);

			void router.replace(homeRoute);
		}
	}, []);
	*/

	return (
		<>
			<div>Home</div>
			<Link href='/provider'>Login</Link>
			<Link href='/extensions'>Extensions</Link>
			<Link href='/settings'>Settings</Link>
		</>
	);
}
