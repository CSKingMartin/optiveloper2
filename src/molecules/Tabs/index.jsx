<<<<<<< HEAD
import Cells from '@molecules/Tabs/Cells';
import Content from '@molecules/Tabs/Content';

const Panel = (props) => {
  const {
    headings,
=======
import Content from './Content';
import Panel from './Panel';
import Section from './Section';
import TabsContext from './TabsContext'

export const Tabs = (props) => {

  const {
    className,
>>>>>>> feature/Tabs-Dannon
    children,
    ...rest
  } = props;

<<<<<<< HEAD
  return (
    <div className="Tabs__panel" {...rest}>{children}</div>
  );
};

export class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
    };

    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex (index) {
    this.setState({
      active: index
    });
  };

  render () {
    const {
      className,
      headings,
      children,
      ...rest
    } = this.props;

    const stack = utilities.createClassStack([
      'Tabs',
      className
    ]);
    return (
      <div className={stack} {...rest}>
        <Cells
        updater={this.updateIndex}
        activeIndex={this.state.active}
        headings={this.props.headings}
      />
        <Content activeIndex={this.state.active}>
          {children}
        </Content>
      </div>
    );
  }
};

// Tabs.Content = Content;
// Tabs.Panel = Content;
=======
  const stack = utilities.createClassStack([
    'Tabs',
    className
  ]);

  const [labelState, changeLabelState] = useState(0);

  return (
    <div className={stack} {...rest}>
      <TabsContext.Provider value={{labelState, changeLabelState}}>
        {children}
      </TabsContext.Provider>
    </div>
  );
};

Tabs.Content = Content;
Tabs.Panel = Panel;
Tabs.Section = Section;
>>>>>>> feature/Tabs-Dannon

export default Tabs;
