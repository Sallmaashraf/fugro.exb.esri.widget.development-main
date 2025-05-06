import type { ImmutableObject } from 'seamless-immutable'
// TODO: These are placeholders and will be updated.
export interface Config {
    someStringProp: string | null;
    someBooleanProp: boolean | null;
    someNumberProp: number | null;
    someArrayOfStringsProp: [] | null;
}
export type IMConfig = ImmutableObject<Config>