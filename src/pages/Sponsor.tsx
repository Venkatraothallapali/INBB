const regionalHosts = [
  {
    region: 'Hyderabad',
    organization: 'Krishna Institute of Medical Sciences (KIMS)',
    inCharge: 'Dr. Subash Kaul MD DM, Dr. Sita Jayalakshmi MD DM',
  },
  {
    region: 'Bangalore',
    organization: 'Narayana Hrudayalaya',
    inCharge: 'Dr. Thimappa Hegde MS MCh',
  },
  {
    region: 'Chandigarh',
    organization: 'Post Graduate Institute Medical and Educational Research (PGIMER)',
    inCharge: 'Dr. Dheraj Khurana MD DM',
  },
  {
    region: 'Kolkata',
    organization: 'Institute of Neuroscience (I-NK)',
    inCharge: 'Dr. Hrishkesh Kumar MD DM',
  },
  {
    region: 'Chennai',
    organization: 'Shasun Jain College',
    inCharge: 'Dr. Lakshmi Narasimhan MD DM',
  },
  {
    region: 'Mumbai',
    organization: 'SevenHills Hospital',
    inCharge: 'Dr. J Srinivas MS MCh',
  },
  {
    region: 'Pune',
    organization: 'Noble Hospital',
    inCharge: 'Dr. Chandrashekar Raman MS MCh',
  },
  {
    region: 'Delhi NCR',
    organization: 'FMRI-Gurugram',
    inCharge: 'Dr. Biplab Das MD DM',
  },
  {
    region: 'Kerala',
    organization: 'IMA-Cochin',
    inCharge: 'Dr. K P Vinayan MD DM',
  },
  {
    region: 'Ahmedabad',
    organization: 'Zydus Hospitals-Ahmedabad',
    inCharge: 'Dr. Arvind Sharma MD DM',
  },
  {
    region: 'Allahabad',
    organization: 'Centre of Behavioural And Cognitive Sciences (CBCS)',
    inCharge: 'Dr. Bhoomika PhD',
  },
  {
    region: 'Amaravati',
    organization: 'Guntur GGH',
    inCharge: 'Dr. Sundarachari MD DM',
  },
] as const;

import BrainBeeInfoCard from '../components/BrainBeeInfoCard';

const Sponsor = () => {
  return (
    <div>
      <BrainBeeInfoCard backgroundColor="#1e82c9">
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '1rem', color: '#ffffff' }}>
          The Indian National Brain bee finals and a few of the regional contests are sponsored by the Avanti Educational and Research Charitable Trust (AERCT), Hyderabad, Telangana, India. The AERCT is the INBB chief sponsor.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '0', color: '#ffffff' }}>
          The Indian National Brain Bee is happy to acknowledge the following contest hosts, nation-wide.
        </p>
      </BrainBeeInfoCard>

      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            backgroundColor: '#1e82c9',
            border: '2px solid #ffffff',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#000000', color: '#ffffff', borderBottom: '1px solid #ffffff' }}>
              <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '13px', color: '#ffffff', borderRight: '1px solid #ffffff' }}>Regional Brain Bee</th>
              <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '13px', color: '#ffffff', borderRight: '1px solid #ffffff' }}>Host Organization</th>
              <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '13px', color: '#ffffff' }}>Contest In-Charge</th>
            </tr>
          </thead>
          <tbody>
            {regionalHosts.map((host, index) => (
              <tr
                key={host.region}
                style={{
                  backgroundColor: index % 2 === 0 ? '#1e82c9' : '#2996db',
                  borderBottom: '1px solid #ffffff',
                }}
              >
                <td style={{ padding: '10px 12px', verticalAlign: 'top', fontWeight: 600, color: '#ffffff', borderRight: '1px solid #ffffff', fontSize: '12px' }}>{host.region}</td>
                <td style={{ padding: '10px 12px', verticalAlign: 'top', color: '#ffffff', borderRight: '1px solid #ffffff', fontSize: '12px' }}>{host.organization}</td>
                <td style={{ padding: '10px 12px', verticalAlign: 'top', color: '#ffffff', fontSize: '12px' }}>{host.inCharge}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sponsor;
