export type ContactState = {
  services: string;
  contractDuration: string;
  clientName: string;
  clientEmail: string;
  clientMessage: string;
  isSubmitting: boolean;
};

export type ContactAction =
  | { type: "SET_SERVICES"; payload: string }
  | { type: "SET_CONTRACT_DURATION"; payload: string }
  | { type: "SET_CLIENT_NAME"; payload: string }
  | { type: "SET_CLIENT_EMAIL"; payload: string }
  | { type: "SET_CLIENT_MESSAGE"; payload: string }
  | { type: "SET_IS_SUBMITTING"; payload: boolean };

export const initialContactState: ContactState = {
  services: "",
  clientName: "",
  contractDuration: "",
  clientMessage: "",
  clientEmail: "",
  isSubmitting: false,
};

export function contactReducer(
  state: ContactState,
  action: ContactAction
): ContactState {
  switch (action.type) {
    case "SET_SERVICES":
      return { ...state, services: action.payload };
    case "SET_CONTRACT_DURATION":
      return { ...state, contractDuration: action.payload };
    case "SET_CLIENT_NAME":
      return { ...state, clientName: action.payload };
    case "SET_CLIENT_EMAIL":
      return { ...state, clientEmail: action.payload };
    case "SET_CLIENT_MESSAGE":
      return { ...state, clientMessage: action.payload };
    case "SET_IS_SUBMITTING":
      return { ...state, isSubmitting: action.payload };
    default:
      return state;
  }
}
