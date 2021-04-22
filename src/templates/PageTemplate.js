import React, { useState } from 'react';

import NavBar from 'components/organism/navigation/NavBar';
import SideBar from 'components/organism/SideBar/SideBar';
import HeroSection from 'components/organism/HeroSection/HeroSection';
import InfoSection from 'components/organism/InfoSection/InfoSection';

import { homeOne } from 'components/organism/InfoSection/Data';
import { homeTwo } from 'components/organism/InfoSection/Data';
import { homeThree } from 'components/organism/InfoSection/Data';

import { Huberman } from 'components/organism/MentorSection/Data';
import { eagleman } from 'components/organism/MentorSection/Data';
import { JacobRiis } from 'components/organism/MentorSection/Data';

import HealtSection from 'components/organism/HealtSection/HealtSection';
import { HealtCardData } from 'components/organism/HealtSection/Data';
import MentorSection from 'components/organism/MentorSection/MentorSection';

const PageTemplate = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <NavBar toggleNav={toggleNav} />
      <SideBar toggleNav={toggleNav} isOpen={isOpen} />
      <HeroSection />
      <InfoSection {...homeOne} />
      <InfoSection {...homeTwo} />
      <InfoSection {...homeThree} />
      <HealtSection HealtCardData={HealtCardData} />
      <MentorSection {...Huberman} />
      <MentorSection {...eagleman} />
      <MentorSection {...JacobRiis} />
    </>
  );
};

export default PageTemplate;
