export type reducerActionType = {
  type: string;
  payload: {
    // pode ter qualquer propriedade com qualquer valor
    [key: string]: any;
  }
}