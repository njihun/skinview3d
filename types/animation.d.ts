import { PlayerObject } from "./model";

type AnimationFn = (player: PlayerObject, time: number) => void;
interface IAnimation {
	play(player: PlayerObject, time: number): void;
}
export type Animation = AnimationFn | IAnimation;

export function invokeAnimation(
	animation: Animation,
	player: PlayerObject,
	time: number,
): void;

export interface AnimationHandle extends IAnimation {
	readonly animation: Animation;
	paused: boolean;
	speed: number;

	reset(): void;
}

export class CompositeAnimation implements IAnimation {
	private handles: Set<AnimationHandle>;

	constructor();

	public add(animation: Animation): AnimationHandle;

	public play(player: PlayerObject, time: number): void;
}

export const WalkAnimation: AnimationFn;
