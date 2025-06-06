import { useNavigate } from 'react-router';

export default function FaceFailurePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-y-8">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-6xl">❌</h1>
        <h1 className="text-5xl font-bold">การตรวจสอบใบหน้าไม่สำเร็จ!</h1>
      </div>
      <h2 className="text-xl">กรุณาลองใหม่อีกครั้ง</h2>
      <button
        className="bg-green-600 hover:bg-green-800 font-bold px-5 py-2 rounded-lg"
        onClick={() => navigate('/face')}
      >
        ลองอีกครั้ง
      </button>
    </div>
  );
}
