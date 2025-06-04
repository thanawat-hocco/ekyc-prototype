type Props = {
  onLogout: () => void;
};

export function TopBar({ onLogout }: Props) {
  return (
    <div className="flex justify-between items-center py-2.5 px-5">
      <div>Logo</div>
      <div>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}
