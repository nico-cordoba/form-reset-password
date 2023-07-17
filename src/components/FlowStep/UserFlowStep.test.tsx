import { render } from 'src/tests/utils/testUtils';
import Flow from './UserFlow';
import FlowStep from './UserFlowStep';

describe('Flow', () => {
  it('provides expected FlowStep Context', async () => {
    const { container } = render(
      <Flow startWith="01-07-2023" initState={{}}>
        <div>I am ok</div>
      </Flow>
    );

    expect(container).toHaveTextContent('I am ok');
  });
});

describe('FlowStep', () => {
  const TestComponent = () => <div>Rendered</div>;
  it('Should render TestComponent', async () => {
    const { container } = render(
      <Flow startWith="personal-information" initState={{}}>
        <FlowStep id="personal-information" component={TestComponent} />
      </Flow>
    );
    expect(container).toHaveTextContent('Rendered');
  });
});
