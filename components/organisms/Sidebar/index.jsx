import { MdOutlineDashboard } from 'react-icons/md';
import { RiUserHeartLine } from 'react-icons/ri';
import { FiUserCheck } from 'react-icons/fi';
import { BsPinMap } from 'react-icons/bs';
import { AiOutlineBarcode, AiOutlineBarChart } from 'react-icons/ai';
import { IoSettingsOutline, IoLogOutOutline } from 'react-icons/io5';
import MenuItem from './MenuItem';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import ProfileSection from './ProfileSection';

const Sidebar = (props) => {
  const { active, user } = props;

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove('token');
    router.push('/login');
    toast.success('Berhasil logout!');
  };

  return (
    <aside className="flex flex-col gap-6 w-[20%] h-screen py-6 bg-white fixed top-0 left-0 overflow-auto">
      {/* Profile section */}
      <ProfileSection user={user} />

      {/* Sidebar menu */}
      <nav className="text-smoke-grey">
        <ul className="flex flex-col pl-6">
          <MenuItem Icon={MdOutlineDashboard} href="/admin" label="Overview" active={active} />
          <MenuItem Icon={FiUserCheck} href="/admin/petugas" label="Petugas" active={active} />
          <MenuItem Icon={RiUserHeartLine} href="/admin/munfiq" label="Munfiq" active={active} />
          <MenuItem Icon={BsPinMap} href="/admin/kecamatan" label="Kecamatan" active={active} />
          <MenuItem
            Icon={AiOutlineBarcode}
            href="/admin/penarikan"
            label="Penarikan"
            active={active}
          />
          {/* <MenuItem Icon={AiOutlineBarChart} href="/admin/rekap" label="Rekap" active={active} /> */}
          <div className="">
            <div className="leading-10 flex items-center gap-3 pl-3">
              <p>Rekapitulasi</p>
            </div>
            <div className="flex flex-col">
              <MenuItem
                Icon={AiOutlineBarChart}
                href="/admin/rekap/semua-penarikan"
                label="Semua Rekap"
                active={active}
              />
              <MenuItem
                Icon={AiOutlineBarChart}
                href="/admin/rekap/penarikan-status"
                label="Rekap Status"
                active={active}
              />
              <MenuItem
                Icon={AiOutlineBarChart}
                href="/admin/rekap/penarikan-kecamatan"
                label="Rekap Kecamatan"
                active={active}
              />
            </div>
          </div>
          <MenuItem
            Icon={IoSettingsOutline}
            href="/admin/settings"
            label="Settings"
            active={active}
          />
          <button
            className="flex items-center gap-3 pl-3 rounded-l bg-transparent leading-10 hover:active"
            onClick={handleLogout}
          >
            <IoLogOutOutline size={24} />
            <p>Logout</p>
          </button>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
