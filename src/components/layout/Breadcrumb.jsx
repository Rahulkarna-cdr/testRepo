import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  if (!items?.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {index > 0 && (
              <span className="text-gray-400 mx-1" aria-hidden>
                /
              </span>
            )}
            {item.href ? (
              <Link
                to={item.href}
                className="hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
