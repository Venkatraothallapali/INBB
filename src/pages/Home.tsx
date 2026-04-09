import BrainBeeInfoCard from '../components/BrainBeeInfoCard';

const Home = () => {
  return (
    <div style={{
      display: 'flex',
      gap: '2rem',
      alignItems: 'flex-start'
    }}>
      {/* Left Column - Red Card */}
      <div style={{ flex: '1' }}>
        <BrainBeeInfoCard>
          <div style={{
            backgroundColor: 'rgba(175, 0, 0, 0.9)',
            padding: '0.75rem',
            borderRadius: '0.375rem',
            marginBottom: '0.75rem'
          }}>
            <blockquote style={{
              fontStyle: 'italic',
              fontSize: '14px',
              margin: '0',
              borderLeft: 'none',
              paddingLeft: '0',
              color: '#ffffff'
            }}>
              "The number of possible connections in the human brain is greater than the number of atoms in the known universe" – George Edelman
            </blockquote>
          </div>
          
          <div style={{
            backgroundColor: 'rgba(175, 0, 0, 0.9)',
            padding: '0.75rem',
            borderRadius: '0.375rem',
            marginBottom: '0.75rem'
          }}>
            <p style={{
              fontSize: '13px',
              lineHeight: '1.5',
              margin: '0',
              color: '#ffffff'
            }}>
              The human brain is an object of unparalleled fascination and magical abilities. Philosophers, scientists and physicians have devoted their entire lives in trying to figure out its mysterious ways and workings.
            </p>
          </div>
          
          <div style={{
            backgroundColor: 'rgba(175, 0, 0, 0.9)',
            padding: '0.75rem',
            borderRadius: '0.375rem',
            marginBottom: '0.75rem'
          }}>
            <p style={{
              fontSize: '13px',
              lineHeight: '1.5',
              margin: '0',
              color: '#ffffff'
            }}>
              Now you can, too.
            </p>
          </div>
          
          <div style={{
            backgroundColor: 'rgba(175, 0, 0, 0.9)',
            padding: '0.75rem',
            borderRadius: '0.375rem',
            marginBottom: '0'
          }}>
            <p style={{
              fontSize: '13px',
              lineHeight: '1.5',
              margin: '0',
              color: '#ffffff'
            }}>
              If the idea of probing the depths of this fascinating organ, identifying parts of real, dissected brains and asking mock patients questions to diagnose neurological disorders appeals to you, the Brain Bee is for you. It enlightens youngsters about challenges and opportunities in neuroscience research even without a medical degree.
            </p>
          </div>
        </BrainBeeInfoCard>
      </div>
      
      {/* Right Column - Images */}
      <div style={{ flex: '1' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <div style={{
            backgroundColor: '#f0f0f0',
            borderRadius: '0.75rem',
            padding: '1rem',
            textAlign: 'center',
            color: '#666'
          }}>
            <p style={{ margin: '0', fontSize: '14px' }}>Image 1 Placeholder</p>
          </div>
          <div style={{
            backgroundColor: '#f0f0f0',
            borderRadius: '0.75rem',
            padding: '1rem',
            textAlign: 'center',
            color: '#666'
          }}>
            <p style={{ margin: '0', fontSize: '14px' }}>Image 2 Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
