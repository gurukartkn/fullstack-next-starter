interface Props {
  errorMsg: string | undefined;
  statusMsg: string | undefined;
}

export const StatusText: React.FC<Props> = ({ errorMsg, statusMsg }) => {
  return errorMsg ?? statusMsg ? (
    <div
      className={
        errorMsg
          ? 'w-full text-center py-3 rounded font-semibold bg-red-100 border-2 border-red-300 text-red-500 focus:outline-none my-1'
          : 'w-full text-center py-3 rounded font-semibold bg-green-100 border-2 border-green-300 text-green-500 focus:outline-none my-1'
      }
    >
      {errorMsg ?? statusMsg}
    </div>
  ) : null;
};
