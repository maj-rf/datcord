export const data = [
  {
    name: 'general',
    id: '10001',
    messages: [
      {
        owner: { name: 'Maj', id: '123123' },
        content: 'Hello',
        id: 'messa',
      },
      {
        owner: { name: 'Jed', id: '12111' },
        content: 'Sup',
        id: 'adasdswe1',
      },
    ],
  },
  {
    name: 'spam-playground',
    id: '14325',
    messages: [
      {
        owner: { name: 'Maj', id: '3323' },
        content: 'World!',
        id: 'abcded',
      },
      {
        owner: { name: 'Jed', id: '1123' },
        content: 'Kamote',
        id: 'asdasd',
      },
    ],
  },
];

export function getChannelMessages(id) {
  return data.find((x) => x.id === id);
}
