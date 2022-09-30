import { ActionMocker } from "../../../src/github/action/action-mocker";
import { ArchiveArtifactsMocker } from "../../../src/github/action/archive/archive-mocker";
import { InputMocker } from "../../../src/github/action/input/input-mocker";

test("setup", async () => {
  const spyInputMocker = jest
    .spyOn(InputMocker.prototype, "setup")
    .mockImplementation(async () => undefined);
  const spyArchiveMocker = jest
    .spyOn(ArchiveArtifactsMocker.prototype, "setup")
    .mockImplementation(async () => undefined);

  const actionMocker = new ActionMocker(
    { input: { test: "hello" } },
    __dirname
  );
  await actionMocker.setup();

  expect(spyInputMocker).toHaveBeenCalledTimes(1);
  expect(spyArchiveMocker).toHaveBeenCalledTimes(1);
});

test("teardown", async () => {
  const spyInputMocker = jest
    .spyOn(InputMocker.prototype, "teardown")
    .mockImplementation(async () => undefined);
  const spyArchiveMocker = jest
    .spyOn(ArchiveArtifactsMocker.prototype, "teardown")
    .mockImplementation(async () => undefined);

  const actionMocker = new ActionMocker(
    { input: { test: "hello" } },
    __dirname
  );
  await actionMocker.teardown();

  expect(spyInputMocker).toHaveBeenCalledTimes(1);
  expect(spyArchiveMocker).toHaveBeenCalledTimes(1);
});
