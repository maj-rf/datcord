import {
  uniqueNamesGenerator,
  adjectives,
  animals,
} from 'unique-names-generator';

export default function generateName() {
  const randomName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
  });
  return randomName;
}
