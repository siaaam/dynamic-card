import Card from './components/Card';
function App() {
  // dynamic card
  const cards = [
    {
      id: 1,
      text: 'Our course is organized and taught in step by step manner',
      heading: 'organized & step by step',
    },
    {
      id: 2,
      text: 'our courses are most complete and in-depth manner.You will learn by doing',
      heading: 'complete & indpeth',
    },
    {
      id: 3,
      text: 'Get live support through F B and Skype when required',
      heading: 'premium suppport',
    },
  ];

  return (
    <div className="App">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          heading={card.heading}
          text={card.text}
        />
      ))}
    </div>
  );
}

export default App;
