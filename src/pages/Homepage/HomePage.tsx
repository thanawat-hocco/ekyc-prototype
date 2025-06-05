import { useNavigate } from 'react-router';

export function HomePage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/capture');
  };

  return (
    <div className="min-h-dvh flex flex-col items-center place-content-center">
      <h1 className="text-2xl font-bold">Hocco EKYC</h1>
      <p className="text-sm text-gray-400 p-2">
        ยืนยันตัวตนออนไลน์ง่ายและปลอดภัยด้วยระบบ eKYC ใช้เทคโนโลยีตรวจสอบเอกสารและภาพถ่ายเพื่อความแม่นยำ รวดเร็ว
        ปกป้องข้อมูลส่วนบุคคลของคุณ
      </p>
      <button className="bg-sky-800 hover:bg-sky-900 px-8 py-2 my-5 rounded-lg" onClick={handleStart}>
        Start
      </button>
    </div>
  );
}
