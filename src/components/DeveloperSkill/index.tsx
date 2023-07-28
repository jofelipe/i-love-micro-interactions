import * as S from './styles';

type DeveloperSkillProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export default function DeveloperSkill({
  icon: Icon,
  title,
  description,
}: DeveloperSkillProps) {
  return (
    <S.Skill>
      <div className="glow"></div>
      <div className="background">
        <div className="icon">
          <Icon size={32} />
        </div>
        <div>
          <strong>{title}</strong>
          <span>{description}</span>
        </div>
      </div>
    </S.Skill>
  );
}
