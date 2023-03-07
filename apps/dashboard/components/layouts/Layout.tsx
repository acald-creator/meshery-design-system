import {LayoutProps} from './types';

const Layout = (props: LayoutProps) => {
	const {children} = props;
	return <div>{children}</div>;
};

export default Layout;
