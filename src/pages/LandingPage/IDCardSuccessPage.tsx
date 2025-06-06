import { useNavigate } from 'react-router';

export default function IDCardSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-y-8">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-6xl">✅</h1>
        <h1 className="text-5xl font-bold">การตรวจสอบบัตรประชาชนสำหรับสำเร็จ!</h1>
      </div>
      <h2 className="text-xl">ระบบได้ยืนยันตัวตนของคุณเรียบร้อยแล้ว</h2>
      <button
        className="bg-green-600 hover:bg-green-800 font-bold px-5 py-2 rounded-lg"
        onClick={() => navigate('/home')}
      >
        กลับสู่หน้าหลัก
      </button>
    </div>
  );
}
