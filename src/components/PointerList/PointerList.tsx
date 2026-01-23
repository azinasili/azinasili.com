import { BasePointerList } from './BasePointerList';
import { PointerListItem } from './PointerListItem';

type PointerListProps = typeof BasePointerList & {
  Item: typeof PointerListItem;
};

export const PointerList = BasePointerList as PointerListProps;
PointerList.Item = PointerListItem;
