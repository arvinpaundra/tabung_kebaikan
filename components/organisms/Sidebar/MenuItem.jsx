import Link from 'next/link';

const MenuItem = (props) => {
  const { Icon, label, active, href } = props;

  return (
    <li
      className={`${
        active === label ? 'active' : ''
      } hover:active leading-10 transition ease-in-out hover:duration-200 pl-3 rounded-l`}
    >
      <Link href={href}>
        <a className="flex items-center">
          <Icon size={24} color={active === label ? '#067B97' : ''} className="mr-3" />
          <p className="tracking-wide">{label}</p>
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
