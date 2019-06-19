import Expandable from '@molecules/Expandable';

export const Dropdown = (props) => {
  const {
    className,
    heading,
    href,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'GlobalHeader__dropdown',
    className
  ]);

  /*
    Notes on Hooks below👇
    defining a state variable named 'isActive'
    to update isActive, use the funcion 'toggle'
    initializing this variable with useState as false
    👇👇👇
  */
  const [isActive, toggle] = useState(false);

  const onLeave = (e) => {
    if ((e.relatedTarget.dataset
      && e.relatedTarget.dataset.hover !== (`${heading.toLowerCase()}NavHover`)
      && e.relatedTarget.dataset.hover !== 'Root')
      || e.relatedTarget === 'Close') {
      toggle(false);
    }
  };

  return (
    <div className={stack} {...rest}>
      <div
        className="GlobalHeader__dropdown-toggle"
        onMouseEnter={() => toggle(true)}
        onMouseLeave={(e) => onLeave(e)}
        data-hover={`${heading.toLowerCase()}NavHover`}
      >
        <a href={href}>{heading}</a>
      </div>
      <Expandable
        className="GlobalHeader__dropdown-drawer"
        toggleElement="none"
        forceExpand={isActive}
        closeHeight="0"
        onMouseLeave={(e) => onLeave(e)}
        data-hover={`${heading.toLowerCase()}NavHover`}
      >
        {children}
      </Expandable>
    </div>
  );
};

Dropdown.propTypes = {
  heading: PropTypes.string.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Dropdown;
