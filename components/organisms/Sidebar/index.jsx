import Image from 'next/image';
import { MdOutlineDashboard } from 'react-icons/md';
import { RiUserHeartLine } from 'react-icons/ri';
import { FiUserCheck } from 'react-icons/fi';
import { BsPinMap } from 'react-icons/bs';
import { AiOutlineBarcode, AiOutlineBarChart } from 'react-icons/ai';
import { IoSettingsOutline, IoLogOutOutline } from 'react-icons/io5';
import MenuItem from './MenuItem';

const Sidebar = (props) => {
  const { active } = props;

  return (
    <aside className="flex flex-col gap-8 w-[20%] h-screen bg-white fixed top-0 left-0 overflow-auto">
      {/* Profile section */}
      <section className="flex flex-col items-center pt-6">
        <Image src="/profile.jpg" alt="Profile" width={90} height={90} className="rounded-full" />
        <h3 className="mt-2">Shayna Ane</h3>
        <p>shayna@anne.com</p>
      </section>

      {/* Sidebar menu */}
      <nav>
        <ul className="menu pl-6">
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
          <div className="collapse cursor-pointer">
            <input type="checkbox" className="peer cursor-pointer" />
            <div className="collapse-title flex items-center gap-3 leading-10 peer-checked:bg-gsc/10 peer-checked:text-gsc pl-3">
              <AiOutlineBarChart size={24} />
              <p>Rekap</p>
            </div>
            <div className="collapse-content peer-checked:bg-gsc/10 pl-9">
              <MenuItem
                Icon={AiOutlineBarChart}
                href="/admin/rekap/semua-penarikan"
                label="Semua"
                active={active}
              />
              <MenuItem
                Icon={AiOutlineBarChart}
                href="/admin/rekap/penarkan-status"
                label="Status"
                active={active}
              />
              <MenuItem
                Icon={AiOutlineBarChart}
                href="/admin/rekap/penarikan-kecamatan"
                label="Kecamatan"
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
          <button className="flex items-center gap-3 pl-3 rounded-l bg-transparent leading-10 hover:active">
            <IoLogOutOutline size={24} />
            <p>Logout</p>
          </button>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
