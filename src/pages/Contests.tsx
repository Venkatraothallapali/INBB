import BrainBeeInfoCard from '../components/BrainBeeInfoCard';

const Contests = () => {
  return (
    <div>
      
      <BrainBeeInfoCard backgroundColor="rgba(237, 152, 7, 0.96)">
        <div style={{
          backgroundColor: '#ed9807',
          padding: '0.75rem',
          borderRadius: '0.375rem',
          marginBottom: '0.75rem'
        }}>
          <p style={{ fontSize: '13px', lineHeight: '1.5', margin: '0', color: '#ffffff' }}>
            The Brain Bee is quiz competition on human brain for who have exceptional interest in Biology and interested in pursuing careers in health sciences. The best young brains in India are quizzed about the human brain and how it relates to intelligence, memory, emotions, sensation, movement, stress, sleep, aging and brain disorders such as drug addiction, Alzheimer's, dementia, depression and stroke.
          </p>
        </div>
        
        <div style={{
          backgroundColor: '#ed9807',
          padding: '0.75rem',
          borderRadius: '0.375rem',
          marginBottom: '0.75rem'
        }}>
          <p style={{ fontSize: '13px', lineHeight: '1.5', margin: '0', color: '#ffffff' }}>
            The contest is an attempt to motivate youth to learn about the brain, capture their imagination and inspire them to pursue careers in biomedical brain research even without a medical degree.
          </p>
        </div>
        
        <div style={{
          backgroundColor: '#ed9807',
          padding: '0.75rem',
          borderRadius: '0.375rem',
          marginBottom: '0'
        }}>
          <p style={{ fontSize: '13px', lineHeight: '1.5', margin: '0', color: '#ffffff' }}>
            The contest is conducted in three levels, regional, national and international.
          </p>
        </div>
      </BrainBeeInfoCard>
      
      <div style={{ marginTop: '2rem' }}>
        <BrainBeeInfoCard backgroundColor="#ed9807">
          <h3 style={{ fontSize: '18px', marginBottom: '1rem', color: '#000000', textShadow: '0 1px 2px rgba(255,255,255,0.3)' }}>
            Contact Information
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.6', margin: '0', color: '#ffffff', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
            For all queries, please contact:<br />
            <strong style={{ color: '#ffffff' }}>R V RAVINDRANADH</strong><br />
            National Coordinator<br />
            Indian National Brain Bee<br />
            Hyderabad<br />
            Mb. 9441065561<br />
            <span style={{ color: '#000000' }}>Email: avanti.inbb@gmail.com</span>
          </p>
        </BrainBeeInfoCard>
      </div>
    </div>
  );
};

export default Contests;
