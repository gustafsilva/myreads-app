import Enzyme from 'enzyme';
import Adpter from 'enzyme-adapter-react-16';

const adapter = new Adpter();
Enzyme.configure({ adapter });
