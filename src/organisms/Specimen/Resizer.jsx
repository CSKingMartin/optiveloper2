import DragHandle from './DragHandle';
import ResizerBar from './ResizerBar';

export class Resizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      isResizing: false
    };

    this.elem = React.createRef();

    this.onDrag = this.onDrag.bind(this);
    this.onStop = this.onStop.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onClick = this.onClick.bind(this);
  };

  componentDidMount() {
    this.setState(() => ({
      maxWidth: this.elem.current.clientWidth
    }));
  };

  onStart() {
    this.setState(() => ({
      isResizing: true
    }));
  }

  onStop() {
    this.setState(() => ({
      isResizing: false,
      maxWidth: this.state.temporaryWidth,
      temporaryWidth: -1
    }));
  }

  onDrag(x) {
    this.setState(() => ({
      offset: x,
      temporaryWidth: this.state.maxWidth - (x * 2)
    }));
  }

  onClick(value) {
    this.setState(() => ({
      temporaryWidth: value,
      maxWidth: value  
    }));
  }

  render() {
    const {
      className,
      children,
      ...rest
    } = this.props;

    const stack = utilities.createClassStack([
      'Specimen__resizer',
      className
    ]);

    return (
      <div className={stack}>
        <ResizerBar
          onClick={this.onClick}
          width={this.state.temporaryWidth || this.state.maxWidth}
        />
        <div className="Specimen__resizer-inner" style={{maxWidth: this.state.temporaryWidth || 'unset'}} ref={this.elem} {...rest}>
          <DragHandle
            side="left"
            onStart={this.onStart}
            onDrag={this.onDrag}
            onStop={this.onStop}
            isActive={this.state.isResizing}
            position={this.state.offset}
          />
            {children}
          <DragHandle
            side="right"
            onStart={this.onStart}
            onDrag={this.onDrag}
            onStop={this.onStop}
            isActive={this.state.isResizing}
            position={this.state.offset}
          />
        </div>
      </div>
    );
  }
};

Resizer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Resizer;
