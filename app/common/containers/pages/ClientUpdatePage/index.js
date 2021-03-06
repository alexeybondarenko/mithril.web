import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { provideHooks } from 'redial';
import Helmet from 'react-helmet';
import withStyles from 'nebo15-isomorphic-style-loader/lib/withStyles';

import FormPageWrapper from 'containers/blocks/FormPageWrapper';
import ClientForm from 'containers/forms/ClientForm';

import { getAllUsers, getAllClientTypes, getClient } from 'reducers';

import { updateClient, fetchClientByID } from 'redux/clients';
import { onDeleteClient } from './redux';

import styles from './styles.scss';

@withStyles(styles)
@translate()
@provideHooks({
  fetch: ({ dispatch, params: { id } }) => dispatch(fetchClientByID(id)),
})
@connect((state, { params: { id } }) => ({
  users: getAllUsers(state),
  clientTypes: getAllClientTypes(state),
  client: getClient(state, id),
}), ({ updateClient, onDeleteClient }))
export default class ClientUpdatePage extends React.Component {
  render() {
    const {
      users = [],
      clientTypes = [],
      client,
      updateClient,
      onDeleteClient,
      t,
    } = this.props;
    return (
      <FormPageWrapper id="client-update-page" title={t('Update client')} back="/clients">
        <Helmet title={t('Update client')} />
        <ClientForm
          onSubmit={values => updateClient(this.props.params.id, values)}
          data={{ users, clientTypes }}
          initialValues={client}
          onDelete={() => onDeleteClient(this.props.params.id)}
          update
        />
      </FormPageWrapper>
    );
  }
}
