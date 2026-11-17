import { GuideList } from '../components/GuideList';
import { Screen } from '../components/ui';
import { moneyItems } from '../data/guides';
import { useI18n } from '../i18n';

export default function Argent() {
  const { t } = useI18n();
  return (
    <Screen title={t('gMoney')} subtitle={t('gMoneySub')}>
      <GuideList items={moneyItems} color="#1E5B34" bg="#E6F2EA" />
    </Screen>
  );
}
