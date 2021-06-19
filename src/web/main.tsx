import React, { useState } from "react";
import ReactDOM from "react-dom";
import { check } from "_src/utils/checks";

ReactDOM.render(<MainPage />, document.querySelector("#contentStub"));

function MainPage(): JSX.Element {
  return (
    <div>
      <h1>Welcome to Frame Cruncher [In Progress]</h1>
      <p>Upload a file to see which actions preceded a Wait state.</p>
      <AnalysisArea />
    </div>
  );
}

function AnalysisArea(): JSX.Element {
  const [file, setFile] = useState<FileList>();

  return (
    <div>
      <GameUploader setFile={setFile} />
      {file && <p>{file[0].name}</p>}
    </div>
  );
}

interface GameUploaderProps {
  setFile: (fileList: FileList) => any;
}

function GameUploader(props: GameUploaderProps): JSX.Element {
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    props.setFile(check(target.files));
  };

  return (
    <form>
      <input type="file" onChange={onChange} />
    </form>
  );
}
