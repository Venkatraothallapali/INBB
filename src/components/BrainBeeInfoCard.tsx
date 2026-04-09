interface BrainBeeInfoCardProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

const BrainBeeInfoCard = ({ children, backgroundColor = 'rgba(175, 61, 61, 0.96)' }: BrainBeeInfoCardProps) => {
  return (
    <div style={{
      backgroundColor: backgroundColor,
      color: '#ffffff',
      padding: '1rem',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      marginBottom: '1.5rem',
      textAlign: 'left'
    }}>
      {children}
    </div>
  );
};

export default BrainBeeInfoCard;
