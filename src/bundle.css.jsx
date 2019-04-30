require('./static/reset.css');
require('./static/variables/index.css');
require('@atoms/Global/Global.css');

const requireAll = (context) => context.keys().map(context);

// require hanga styleguide components
requireAll(require.context('@hanga/', true, /\.css$/));

// require the rest of the components
requireAll(require.context('@atoms/', true, /\.css$/));
requireAll(require.context('@molecules/', true, /\.css$/));
requireAll(require.context('@organisms/', true, /\.css$/));
