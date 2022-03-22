interface EmptyProps {
  click?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  piece?: JSX.Element | null;
}

export default function Empty({ click }: EmptyProps) {
  return (
    <>
      <h1>EMPTY</h1>
      <div className={'h-9 w-9'}></div>
    </>
  );
}
