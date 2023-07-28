import * as S from './styles';

interface ButtonLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  children: React.ReactNode;
  icon: React.ElementType;
}

export default function ButtonLink({
  children,
  icon: Icon,
  ...rest
}: ButtonLinkProps) {
  return (
    <S.Wrapper>
      <div className="glow"></div>
      <a className="background" {...rest}>
        <Icon size={24} />
        {children}
      </a>
    </S.Wrapper>
  );
}
