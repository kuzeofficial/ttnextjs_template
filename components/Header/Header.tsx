import HeaderProps from '@interfaces/HeaderProps'
export const Header = ({ title }: HeaderProps) => {
  return <h1 className="text-3xl font-bold">{title}</h1>
}
