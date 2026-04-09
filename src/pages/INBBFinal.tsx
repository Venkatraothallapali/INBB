import BrainBeeInfoCard from '../components/BrainBeeInfoCard';

const INBBFinal = () => {
  return (
    <div>
      <h1 style={{ color: '#ffffff' }}>Indian National Brain Bee (INBB) Final</h1>
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
        <div style={{ flex: '0 0 45%' }}>
          <BrainBeeInfoCard backgroundColor="rgba(175, 61, 61, 0.96)">
            <div style={{
              backgroundColor: 'rgba(175, 0, 0, 0.9)',
              padding: '0.5rem',
              borderRadius: '0.25rem',
              marginBottom: '0.5rem'
            }}>
              <p style={{ fontSize: '11px', lineHeight: '1.4', margin: '0', color: '#ffffff' }}>
                The winner from each regional contest will be invited to participate in 13th Indian National Brain Bee (INBB) scheduled to take place at Bangalore in 4th weekend of April 2020
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'rgba(175, 0, 0, 0.9)',
              padding: '0.5rem',
              borderRadius: '0.25rem',
              marginBottom: '0.5rem'
            }}>
              <p style={{ fontSize: '11px', lineHeight: '1.4', margin: '0', color: '#ffffff' }}>
                Format INBB will be conducted over two days and includes, among other events, a training-session (On day 1) and quiz competitions, a mock doctor-patient diagnosis and a neuroanatomy practical (On day 2). The day-2 culminates with a sight-seeing trip of Ahmedabad. All the events will be invigorating with fun-filled experiences.
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'rgba(175, 0, 0, 0.9)',
              padding: '0.5rem',
              borderRadius: '0.25rem',
              marginBottom: '0.5rem'
            }}>
              <h3 style={{ fontSize: '12px', marginBottom: '0.25rem', color: '#000000', fontWeight: 'bold' }}>
                Requirements
              </h3>
              <ul style={{ fontSize: '11px', lineHeight: '1.4', margin: '0', paddingLeft: '0.75rem', color: '#ffffff' }}>
                <li style={{ marginBottom: '0.15rem' }}>
                  A consent letter in the attached format to be taken from your school principal on the school letterhead signed by the contestant and co-signed by the parent.
                </li>
                <li style={{ marginBottom: '0' }}>
                  A Photostat copy of contestant's passport (photo-page) or the proof of the passport application if not having a passport.
                </li>
              </ul>
            </div>
            
            <div style={{
              backgroundColor: 'rgba(175, 0, 0, 0.9)',
              padding: '0.5rem',
              borderRadius: '0.25rem',
              marginBottom: '0.5rem'
            }}>
              <h3 style={{ fontSize: '12px', marginBottom: '0.25rem', color: '#000000', fontWeight: 'bold' }}>
                Study Materials
              </h3>
              <p style={{ fontSize: '11px', lineHeight: '1.4', margin: '0', color: '#ffffff' }}>
                A book "Neuroscience" published by the British Neuroscience association
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'rgba(175, 0, 0, 0.9)',
              padding: '0.5rem',
              borderRadius: '0.25rem',
              marginBottom: '0'
            }}>
              <h3 style={{ fontSize: '12px', marginBottom: '0.25rem', color: '#000000', fontWeight: 'bold' }}>
                Recognition of Excellence
              </h3>
              <p style={{ fontSize: '11px', lineHeight: '1.4', marginBottom: '0.25rem', color: '#ffffff' }}>
                Become eligible to participate in the International Brain Bee (IBB) finals at international destination (TBD)
              </p>
              <ul style={{ fontSize: '11px', lineHeight: '1.4', margin: '0', paddingLeft: '0.75rem', color: '#ffffff' }}>
                <li style={{ marginBottom: '0.15rem' }}>A laptop computer</li>
                <li style={{ marginBottom: '0.15rem' }}>Free round-trip air ticket the IBB venue for the winner and parent</li>
                <li style={{ marginBottom: '0' }}>4-day paid stay at a hotel at the IBB venue</li>
              </ul>
            </div>
          </BrainBeeInfoCard>
        </div>
        
        <div style={{ flex: '0 0 30%' }}>
          <div>
            <img src="/assets/inbb_final.gif" alt="INBB Final" style={{ display: 'block', margin: 'auto', marginBottom: '1rem' }} />
            {/* Image placeholder */}


            
            
            <div style={{ marginBottom: '0.75rem', textAlign: 'center' }}>
              <h3 style={{ 
                fontSize: '14px', 
                marginBottom: '0.5rem', 
                color: '#000000', 
                fontWeight: 'bold',
                backgroundColor: '#ffc107',
                display: 'inline-block',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.25rem'
              }}>
                National winner- Ms.Disha
              </h3>
            </div>
            
            <div style={{
              backgroundColor: '#ffc107',
              padding: '0.75rem',
              borderRadius: '0.300rem',
              marginBottom: '0'
            }}>
              <p style={{ fontSize: '13px', lineHeight: '1.5', margin: '0', color: '#000000' }}>
                Disha Agrawal is a 12th grade student at Modern School in New Delhi. Her primary topics of study include biology, physics, chemistry and mathematics. She plans to pursue a career in medicine and harness the newer developments of artificial intelligence in healthcare. Her interest in neuroscience developed after reading about the intricacies of the human brain while preparing for the Brain Bee competitions. She wishes to become a neurologist and is driven by the desire to unravel the mechanisms behind several neurological disorders to contribute to finding cures. She is also an enthusiastic pianist and takes keen interest in music and tennis in her spare time. Her favourite compositions are by Yanni – mysterious and powerful, just like the brain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default INBBFinal;
