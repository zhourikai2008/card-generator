export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    card?: boolean;
  };
}

export interface ConnectState {
  loading: Loading;
  card: any;
}
