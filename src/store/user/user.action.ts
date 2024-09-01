import { UserData, AdditionalInformation } from './../../utils/firebase/firebase.utils';
import { createAction, Action, withMatcher, ActionWithPayload } from "../../utils/reducer/reducer.utils"
import { USER_ACTION_TYPES } from "./user.types"

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>
export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>
export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>
export type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email: string, password: string }>
export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>
export type SignInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILURE, Error>
export type SingUPStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START, { email: string, password: string, displayName: string }>
export type SingUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user: UserData, additionalDetails: AdditionalInformation }>
export type SingUpFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED, Error>
export type SingOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>
export type SingOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>
export type SingOutFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>

export const checkUserSession = withMatcher((): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION))

export const setCurrentUser = withMatcher((user: UserData): SetCurrentUser => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))

export const googleSignInStart = withMatcher((email: string, password: string): GoogleSignInStart => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START))

export const emailSignInStart = withMatcher((email: string, password: string): EmailSignInStart => createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password }))

export const signInSuccess = withMatcher((user: UserData): SignInSuccess => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user))

export const signInFailed = withMatcher((err: Error): SignInFailed => createAction(USER_ACTION_TYPES.SIGN_IN_FAILURE, err))

export const singUPStart = withMatcher((email: string, password: string, displayName: string): SingUPStart => createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, password, displayName }))

export const singUpSuccess = withMatcher((user: UserData, additionalDetails: AdditionalInformation): SingUpSuccess => createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails }))

export const singUpFailed = withMatcher((err: Error): SingUpFailed => createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, err))

export const signOutStart = withMatcher((): SingOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START))

export const signOutSuccess = withMatcher((): SingOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS))

export const signOutFailed = withMatcher((err: Error): SingOutFailed => createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, err))