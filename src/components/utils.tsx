// Componente para saltos de línea
export const LineBreak: React.FC = () => {
  return <br />;
};

// Componente para espacios entre elementos
interface SpacerProps {
  height?: string;
}

export const Spacer: React.FC<SpacerProps> = ({ height = '1rem' }) => {
  return <div style={{ height }} />;
};

export function calculateAge(birthday: string): number {
  const birthdayArr = birthday.split("/");
  const birthdayDate = new Date(
    parseInt(birthdayArr[2], 10),
    parseInt(birthdayArr[1], 10) - 1,
    parseInt(birthdayArr[0], 10)
  );
  const ageDifMs = Date.now() - birthdayDate.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
