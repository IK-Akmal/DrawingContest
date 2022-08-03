import Advantage from '../../components/Advantage/Advantage';
import Description from '../../components/Description/Description';
import Diploma from '../../components/Diploma/Diploma';
import FAQ from '../../components/FAQ/FAQ';
import Plans from '../../components/Plans/Plans';
import Registration from '../../components/Registration/Registration';
import Subscription from '../../components/Subscription/Subscription';

function Content() {
  return (
    <main>
      <Description />
      <Advantage />
      <Plans />
      <Diploma />
      <Registration />
      <FAQ />
      <Subscription />
    </main>
  );
}

export default Content;
