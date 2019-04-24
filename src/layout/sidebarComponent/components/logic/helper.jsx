// change order of query and items
export function filterItems(query, items) {
  if (items === null) return [];
  return (items.filter(item => item.name.toLowerCase()
    .indexOf(query.toLowerCase()) !== -1));
}

// change to HOC
export function fetchData(url) {
  return (fetch(url).then(res => res.json()));
}
