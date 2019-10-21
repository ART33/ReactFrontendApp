import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
  const startIdex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIdex)
    .take(pageSize)
    .value();
}
