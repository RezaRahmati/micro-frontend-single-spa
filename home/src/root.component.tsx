import 'devextreme/dist/css/dx.material.orange.light.css';
import './root.component.css';

import { Button } from 'devextreme-react';
import SingleCard from './single-card/single-card';

export default function Root(props) {
  return <section className='app'>
    <SingleCard
      title="Micro-Frontend"
      description="Micro-frontend architectures decompose a front-end app into individual, semi-independent “microapps” working loosely together. This can help make large projects more manageable, e.g. when transitioning from legacy codebases."
    >
      <img className='micro-fe-img' src='https://miro.medium.com/max/1050/1*rxsVRHNFdG-6gvOIUGAdcw.jpeg'/>

      
    </SingleCard>
  </section>
}
