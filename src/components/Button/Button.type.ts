export interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  children?: React.ReactNode;
  height?: number;
  icon?: string | undefined;
  iconAlt?: string;
}
