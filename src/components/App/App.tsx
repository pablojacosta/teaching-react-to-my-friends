import CounterWithProps from "../CounterWithProps/CounterWithProps";
import Grid from "../Grid";
import SimpleComponent from "../SimpleComponent";
import SimpleCounter from "../SimpleCounter/SimpleCounter";
import ToDos from "../ToDos/ToDos";

const App = () => (
  <div className="app">
    <SimpleComponent />
    <SimpleCounter />
    <CounterWithProps initialCount={10} />
    <CounterWithProps />
    <Grid columns={3}>
      <div>Column 1</div>
      <div>Column 2</div>
      <div>Column 3</div>
    </Grid>
    <ToDos />
  </div>
);

export default App;
