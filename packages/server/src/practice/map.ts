const items = [
  { id: 1, name: 'yamada', value: 100 },
  { id: 2, name: 'suzuki', value: 200 },
  { id: 3, name: 'tanaka', value: 100 },
  { id: 4, name: 'takahashi', value: 200 },
  { id: 5, name: 'toudou', value: 100 },
];

type Props = {
  id: number;
  name: string;
  value: number;
};

const result = items.map(item => {
  return { id: item.id, name: item.name, value: item.value + 100 };
});

console.log(result);
