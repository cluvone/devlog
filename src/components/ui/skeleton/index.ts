import { Skeleton as OriginSkeleton } from './skeleton';

export type Skeleton = typeof OriginSkeleton;

const Skeleton = OriginSkeleton as Skeleton;

export default Skeleton;
