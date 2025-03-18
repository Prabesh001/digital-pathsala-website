import { social } from "@/utils/data";
import Link from "next/link";

const SocialHandle = () => (
  <ul className="flex gap-2">
    {social.map((platform) => (
      <li key={platform.site} className={platform.color}>
        <Link href={platform.href} aria-label={platform.site}>
          {platform.icon}
          <span className="sr-only">{platform.site}</span>
        </Link>
      </li>
    ))}
  </ul>
);

export default SocialHandle;
