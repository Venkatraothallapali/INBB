const AboutFounders = () => {
  return (
    <div>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '2rem',
        alignItems: 'center'
      }}>
        {/* Dr. Norbert Myslinski - Left Image, Right Info */}
        <div style={{
          backgroundColor: '#1e40af',
          color: '#ffffff',
          padding: '2rem',
          borderRadius: '0.75rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          maxWidth: '1000px',
          width: '100%',
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          {/* Left Side - Image */}
          <div style={{
            flex: '0 0 250px',
            height: '250px',
            backgroundColor: '#ffffff',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1e40af',
            fontSize: '16px',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            Dr. Norbert Myslinski<br />Image
          </div>
          
          {/* Right Side - Info */}
          <div style={{ flex: '1' }}>
            <h2 style={{ 
              fontSize: '24px', 
              marginBottom: '1rem', 
              color: '#ffffff',
              fontWeight: 'bold'
            }}>
              Dr. Norbert Myslinski
            </h2>
            <p style={{ 
              fontSize: '16px', 
              lineHeight: '1.6', 
              marginBottom: '0',
              color: '#ffffff'
            }}>
              The International Brain Bee (IBB) was founded in 1999 by Dr. Norbert Myslinski, Associate Professor, Neural and Pain Sciences, School of Dentistry, University of Maryland. The 20th anniversary contest was conducted in Berlin, Germany in July 2018. Dr. Myslinski has been the International Director for all the twenty years. In recognition of his service in advancing the neuroscience educational outreach, he was recognized as the Science Educator of the Year for 2016 by the Society for Neuroscience (SFN).
            </p>
          </div>
        </div>
        
        {/* Dr. Murali Gavini - Left Image, Right Info */}
        <div style={{
          backgroundColor: '#1e40af',
          color: '#ffffff',
          padding: '2rem',
          borderRadius: '0.75rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          maxWidth: '1000px',
          width: '100%',
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          {/* Left Side - Image */}
          <div style={{
            flex: '0 0 250px',
            height: '250px',
            backgroundColor: '#ffffff',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1e40af',
            fontSize: '16px',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            Dr. Murali Gavini<br />Image
          </div>
          
          {/* Right Side - Info */}
          <div style={{ flex: '1' }}>
            <h2 style={{ 
              fontSize: '24px', 
              marginBottom: '1rem', 
              color: '#ffffff',
              fontWeight: 'bold'
            }}>
              Dr. Murali Gavini
            </h2>
            <p style={{ 
              fontSize: '16px', 
              lineHeight: '1.6', 
              marginBottom: '0',
              color: '#ffffff'
            }}>
              The Indian National Brain Bee was founded in January 2005 by Dr. Gavini. He has been a very strong supporter of the International Brain Bee and has been a principal advisor to Dr. Myslinski since 2000.
              Dr. Gavini also founded the Indian American Spelling Bee in 1993 and the Indian National English Vocabulary contest in 1994. He had directed the contests for 11 years as the National Director. Today Indian American children are well recognized for their spelling skills throughout USA. He mentored a number of youngsters in his 45-year stay in the US.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFounders;
