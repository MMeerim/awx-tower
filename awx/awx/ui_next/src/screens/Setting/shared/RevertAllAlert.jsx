import React from 'react';
import { withI18n } from '@lingui/react';
import { t } from '@lingui/macro';
import { Button } from '@patternfly/react-core';
import AlertModal from '../../../components/AlertModal';

function RevertAllAlert({ i18n, onClose, onRevertAll }) {
  return (
    <AlertModal
      isOpen
      title={i18n._(t`Revert settings`)}
      variant="info"
      onClose={onClose}
      actions={[
        <Button
          key="revert"
          variant="primary"
          aria-label={i18n._(t`Confirm revert all`)}
          onClick={onRevertAll}
        >
          {i18n._(t`Revert all`)}
        </Button>,
        <Button
          key="cancel"
          variant="secondary"
          aria-label={i18n._(t`Cancel revert`)}
          onClick={onClose}
        >
          {i18n._(t`Cancel`)}
        </Button>,
      ]}
    >
      {i18n._(t`This will revert all configuration values on this page to
      their factory defaults. Are you sure you want to proceed?`)}
    </AlertModal>
  );
}

export default withI18n()(RevertAllAlert);
