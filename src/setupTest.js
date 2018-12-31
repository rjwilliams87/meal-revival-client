import Enzyme from '../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/enzyme';
import Adapter from '../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});