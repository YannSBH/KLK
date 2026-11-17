import { GuideList } from '../components/GuideList';
import { Screen } from '../components/ui';
import { driveItems } from '../data/guides';
import { useI18n } from '../i18n';

export default function Voiture() {
  const { t } = useI18n();
  return (
    <Screen title={t('gDrive')} subtitle={t('gDriveSub')}>
      <GuideList items={driveItems} color="#0B2E5C" bg="#E7EEF9" />
    </Screen>
  );
}
