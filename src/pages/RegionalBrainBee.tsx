import BrainBeeInfoCard from '../components/BrainBeeInfoCard';

const RegionalBrainBee = () => {
  const coordinators = [
    { id: 1, region: 'Hyderabad', coordinator: 'Mr. Sham Tilak\nEmail: travelnat@natcopharma.co.in\nMb. 9866171946' },
    { id: 2, region: 'Mumbai', coordinator: 'Ms. Sushma. RM\nEmail: sushrm@gmail.com\nMb.9867430240' },
    { id: 3, region: 'Chennai', coordinator: 'Ms.Latha Natarajan\nEmail:lathanatarajan@shasuncollege.edu.in\nMb. 944463920' },
    { id: 4, region: 'Delhi', coordinator: 'Ms. BaljinderKuar\nEmail:baljinderajit@gmail.com\nMb.9999668828' },
    { id: 5, region: 'Bangalore', coordinator: 'Ms.Madhavi\nEmail:madhavigarimella@yahoo.com\nMb.9731262618' },
    { id: 6, region: 'Chandigarh', coordinator: 'Ms.Suruchi\nEmail:ctrial2@gmail.com\nMb.91 9876784024' },
    { id: 7, region: 'Amaravati', coordinator: 'Mr. Bhanu Murthy. A\nEmail: bhanu406@gmail.com\nMb.9951073269' },
    { id: 8, region: 'Kolkata', coordinator: 'Mr. Jayanth. G\nEmail:gunturjayanth@gmail.com\nMb.9831012281' },
    { id: 9, region: 'Kerala', coordinator: 'IMA Office\nEmail:kankerala2011@gmail.com\nTel: 0484 2344350' },
    { id: 10, region: 'Ahmedabad', coordinator: 'Dr. Suktara\nEmail:suktarasharma@yahoo.co.in' },
    { id: 11, region: 'Allahabad', coordinator: 'Dr. Bhoomika\nEmail:bhoomika@cbcs.ac.in\nMb.9935974823' },
    { id: 12, region: 'Pune', coordinator: 'Mr.Ravindranadh ( Temporary)\nEmail: ravirmv@gmail.com\nMb.9441065561' }
  ];

  return (
    <div>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
        <div style={{ flex: '0 0 55%' }}>
          <BrainBeeInfoCard backgroundColor="#6aa806">
            <div style={{
              backgroundColor: '#6aa806',
              padding: '0.5rem',
              borderRadius: '0.25rem',
              marginBottom: '0.5rem'
            }}>
              <p style={{ fontSize: '11px', lineHeight: '1.4', margin: '0', color: '#ffffff' }}>
                Regional brain bee is conducted at 12 centers: Ahmedabad, Allahabad, Amaravati, Bangalore, Chennai, Chandigarh, Cochin, Delhi, Hyderabad, Kolkata, Mumbai, and Pune. Two more center are planned for 2019. Regional contests take place during the school calendar year between November and February months.
              </p>
            </div>
            
            <div style={{
              backgroundColor: '#6aa806',
              padding: '0.5rem',
              borderRadius: '0.25rem',
              marginBottom: '0.5rem'
            }}>
              <h3 style={{ fontSize: '12px', marginBottom: '0.25rem', color: '#000000', fontWeight: 'bold' }}>
                Eligibility Criteria for Regional Brain Bee
              </h3>
              <ul style={{ fontSize: '11px', lineHeight: '1.4', margin: '0', paddingLeft: '0.75rem', color: '#ffffff' }}>
                <li style={{ marginBottom: '0.15rem' }}>11th standard (10+1) or Junior Inter Biological Science students</li>
                <li style={{ marginBottom: '0.15rem' }}>Excellent credentials in biology</li>
                <li style={{ marginBottom: '0.15rem' }}>Seeking career in health sciences</li>
                <li style={{ marginBottom: '0.15rem' }}>Nominated by the Principal of the participant's school or college</li>
                <li style={{ marginBottom: '0' }}>Contest is for individual and not for team representing the school</li>
              </ul>
            </div>
            
            <div style={{
              backgroundColor: '#6aa806',
              padding: '0.5rem',
              borderRadius: '0.25rem',
              marginBottom: '0.5rem'
            }}>
              <h3 style={{ fontSize: '12px', marginBottom: '0.25rem', color: '#000000', fontWeight: 'bold' }}>
                Contest Format
              </h3>
              <p style={{ fontSize: '11px', lineHeight: '1.4', marginBottom: '0.15rem', color: '#ffffff' }}>
                (8:30 am- 1:30 pm; Saturday or Sunday)
              </p>
              <ul style={{ fontSize: '11px', lineHeight: '1.4', margin: '0', paddingLeft: '0.75rem', color: '#ffffff' }}>
                <li style={{ marginBottom: '0.15rem' }}>Screening written test</li>
                <li style={{ marginBottom: '0' }}>Oral Quiz competition</li>
              </ul>
            </div>
            
            <div style={{
              backgroundColor: '#6aa806',
              padding: '0.5rem',
              borderRadius: '0.25rem',
              marginBottom: '0.5rem'
            }}>
              <h3 style={{ fontSize: '12px', marginBottom: '0.25rem', color: '#000000', fontWeight: 'bold' }}>
                Contest Preparation
              </h3>
              <p style={{ fontSize: '11px', lineHeight: '1.4', margin: '0', color: '#ffffff' }}>
                All questions are from "Brain Facts" published by the Society for Neuroscience and available on its website brainfacts.org freely downloadable.
              </p>
            </div>
            
            <div style={{
              backgroundColor: '#6aa806',
              padding: '0.5rem',
              borderRadius: '0.25rem',
              marginBottom: '0.5rem'
            }}>
              <h3 style={{ fontSize: '12px', marginBottom: '0.25rem', color: '#ffffff', fontWeight: 'bold' }}>
                Nomination form for Regional contest:
              </h3>
              <a 
                href="http://www.inbb.in/wp-content/uploads/2026/05/Nomination-Form-RBB.docx" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'inline-block',
                  padding: '0.2rem 0.4rem',
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '3px',
                  fontSize: '10px',
                  fontWeight: 'bold'
                }}
              >
                Download Form
              </a>
            </div>
            
            <div style={{
              backgroundColor: '#6aa806',
              padding: '0.5rem',
              borderRadius: '0.25rem',
              marginBottom: '0'
            }}>
              <h3 style={{ fontSize: '12px', marginBottom: '0.25rem', color: '#000000', fontWeight: 'bold' }}>
                Recognition
              </h3>
              <ul style={{ fontSize: '11px', lineHeight: '1.4', margin: '0', paddingLeft: '0.75rem', color: '#ffffff' }}>
                <li style={{ marginBottom: '0.15rem' }}>1st, 2nd and 3rd rankers will receive a trophy and a certificate</li>
                <li style={{ marginBottom: '0' }}>Winner and the 1st runner-up will be eligible to participate in the Indian National Brain Bee Championship</li>
              </ul>
            </div>
          </BrainBeeInfoCard>
        </div>
        
        <div style={{ flex: '1' }}>
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                backgroundColor: '#ffffff',
                border: '2px solid #000000',
              }}
            >
              <thead>
                <tr style={{ backgroundColor: '#ffffff', color: '#000000', borderBottom: '1px solid #000000' }}>
                  <th style={{ padding: '6px 8px', textAlign: 'left', fontSize: '11px', color: '#000000', borderRight: '1px solid #000000' }}>SL.No</th>
                  <th style={{ padding: '6px 8px', textAlign: 'left', fontSize: '11px', color: '#000000', borderRight: '1px solid #000000' }}>Regional Brain Bee</th>
                  <th style={{ padding: '6px 8px', textAlign: 'left', fontSize: '11px', color: '#000000' }}>Details of Coordinators</th>
                </tr>
              </thead>
              <tbody>
                {coordinators.map((coordinator) => (
                  <tr
                    key={coordinator.id}
                    style={{
                      backgroundColor: '#ffffff',
                      borderBottom: '1px solid #000000',
                    }}
                  >
                    <td style={{ padding: '6px 8px', verticalAlign: 'top', fontWeight: 600, color: '#000000', borderRight: '1px solid #000000', fontSize: '10px' }}>
                      {coordinator.id}
                    </td>
                    <td style={{ padding: '6px 8px', verticalAlign: 'top', fontWeight: 600, color: '#000000', borderRight: '1px solid #000000', fontSize: '10px' }}>
                      {coordinator.region}
                    </td>
                    <td style={{ padding: '6px 8px', verticalAlign: 'top', color: '#000000', fontSize: '10px', whiteSpace: 'pre-line' }}>
                      {coordinator.coordinator}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionalBrainBee;
