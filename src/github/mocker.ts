export interface Mocker {
  setup(): Promise<void>;
  teardown(): Promise<void>;
}
