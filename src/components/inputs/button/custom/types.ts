// Types
export type CustomButtonProps = {
  value: string;
  color: 'Co1' | 'Co2' | 'Co3';
  id?: string;
  isActive: boolean;
  onClick: Function
  isPending?: boolean;
};