import React, { useState } from "react";
import ReactDOM from "react-dom";

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

function processFile(file: FileList): string {
  if (!file[0] || !file[0].name) {
    return "No file selected.";
  }
  if (file[0].name.split(".").pop()?.toLowerCase() !== "slp") {
    return "Only .slp replay files are supported.";
  }
  return file[0].name;
}

function AnalysisArea(): JSX.Element {
  const [file, setFile] = useState<FileList | undefined>();

  return (
    <div>
      <GameUploader setFile={setFile} />
      {file && <p>{processFile(file)}</p>}
    </div>
  );
}

interface GameUploaderProps {
  setFile: (fileList: FileList | undefined) => any;
}

function GameUploader(props: GameUploaderProps): JSX.Element {
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    props.setFile(target.files ?? undefined);
  };

  return (
    <form>
      <input type="file" onChange={onChange} />
    </form>
  );
}
