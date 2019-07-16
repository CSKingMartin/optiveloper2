<<<<<<< HEAD
import Expandable from '@molecules/Expandable';

const Section = (props) => {
  const {
    children,
    className,
    index,
    ...rest
  } = props;

  return (
    <div className={className}>
      {children}
    </div>
  );
};
=======
import TabsContext from './TabsContext'
>>>>>>> feature/Tabs-Dannon

export const Content = (props) => {
  const {
    className,
<<<<<<< HEAD
    activeIndex,
=======
>>>>>>> feature/Tabs-Dannon
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Tabs__content',
    className
  ]);

<<<<<<< HEAD
  return (
    <Expandable
      className={stack}
      closeHeight="0"
      forceExpand={true}
      {...rest}
    >
      {React.Children.map(children, (child, index) => {
        return (
          <Section
            className={
              index === activeIndex ?
                'Tabs__section is-active' :
                'Tabs__section'
            }
            key={index}
            index={index}>
            {child.props.children}
          </Section>
        );
      })}
    </Expandable>
  );
};

=======
  const childArray = React.Children.toArray(children);

  return (
    <div className={stack} {...rest}>
      <TabsContext.Consumer>
        {
          ({labelState, changeLabelState}) => {
            return childArray[labelState]
          }
        }
      </TabsContext.Consumer>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

>>>>>>> feature/Tabs-Dannon
export default Content;
