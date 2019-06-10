import Heading from '@atoms/Heading';
import Rhythm from '@atoms/Rhythm';
import PageLink from '@atoms/PageLink';
import {
	atomsIndexData,
	moleculesIndexData,
	organismsIndexData
} from './get-context.js';

const NavList = (props) => {
	const {
		label,
		children
	} = props;

	let target; // empty let

	switch (label) {
		case 'atoms':
			target = atomsIndexData;
			break;
		case 'molecules':
			target = moleculesIndexData;
			break;
		case 'organisms':
			target = organismsIndexData;
			break;
	};

	return (
		<Rhythm className="NavList">
			<Heading className="NavList__heading" level="h6">{`${label.charAt(0).toUpperCase()}${label.substr(1, label.length - 1)}`}</Heading>
			{Object.keys(target).map((index) => 
				<PageLink key={index} label={target[index].content} href={`/${target[index].url}`} />
			)}
		</Rhythm>
	);
};

export default NavList;
