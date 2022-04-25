/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Home Inspections',
    title: 'Home Inspections',
    text: 'We cover more items in your home than can be enumerated here, but below are just a few of the many items included in your home inspection.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Commercial Inspections',
    title: 'Commercial Inspections',
    text: 'Before buying or using a commercial building, it is important that all units and the building are checked for possible damages or safety issues.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Home Maintenance Inspection',
    title: 'Home Maintenance Inspection',
    text: 'A home maintenance inspection is generally done annually or seasonally to make a homeowner aware of potential issues before they become costly repairs.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Pre-Listing Inspection',
    title: 'Pre-Listing Inspection',
    text: 'Scheduling a Pre-Listing Inspection can prevent problems from arising once a prospective buyer has taken interest in your property.',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{variant: 'section.keyFeature' }}id='services'>
     <Container>
       <SectionHeader
          slogan="What services we offer?"
          title="Our Services"/>
        <Grid sx={styles.grid}>
          {data.map((dataItem, index) => (
            <FeatureCardColumn
              key={dataItem.id}
              src={dataItem.imgSrc}
              alt={dataItem.altText}
              title={dataItem.title}
              text={dataItem.text}
            />
          ))}
        </Grid>   

      
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
 
};
