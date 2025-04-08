export interface IModalProps {
  children:  React.ReactNode;
  close: () => void;
  isOpen: boolean;
}

export interface IModalComponent extends React.FC<IModalProps> {
  Header: React.FC;
}
