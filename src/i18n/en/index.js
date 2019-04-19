export default {
  button: {
    ok: 'OK',
    cancel: 'CANCEL',
    skip: 'SKIP'
  },

  nav: {
    header: {
      account: 'ACCOUNTS',
      contract: 'CONTRACTS'
    },
    wallet: {
      label: 'Wallet',
      sublabel: 'Address Management',
      account: 'Account Detail'
    },
    transfer: {
      label: 'Transfer',
      sublabel: 'Transfer value between accounts'
    }
  },

  notify: {
    error_password: 'Invalid account\'s password!'
  },

  account: {
    balance: 'Balance',
    account_list: 'Account List',
    total_balance: 'Total Balance',
    mondify_name: 'Modify account name',
    btn: {
      transfer: 'Transfer',
      backupAccount: 'Backup',
      add: 'New Account',
      importAccount: 'Import Account'
    },
    copy: {
      alert: 'WARNING: Copy Address',
      content: 'Do you agree to copy the account address to the system clipboard？',
      success: 'Copy address success!'
    },
    create: {
      title: 'Create a new address',
      text1: 'Set a password for your account.',
      text2: 'Please remember your password. If you forget the password, there will be no way to retrieve it.',
      password_tip1: 'The password of account must not be less than 8 characters',
      password_msg1: 'Enter password',
      password_tip2: 'Entered passwords differ, please try again.',
      password_msg2: 'Confirm password'
    }
  },

  tx: {
    list: {
      caption: 'Recent Transactions',
      pending: 'Pending...',
      block_confirm: 'Blocks',
      abi: 'Create or invoke contract',
      transfer: 'Transfer'
    },
    text: {
      noTxs: 'No transaction history'
    },
    transfer: {
      from_error: 'Please choose an account for transfer',
      from_label: 'From',
      to_error: 'Not a legal address',
      to_label: 'To',
      balance_error: 'The transfer amount must be greater than 0',
      balance_label: 'Amount',
      balance: 'Balance',
      fee: 'Estimated Fee',
      btn: 'confirm',
      insufficient_funds: 'Insufficient funds',
      transaction_detail: 'Transaction Details',
      transaction_hash: 'Transaction Hash',
      block_number: 'Block Number',
      from: 'From',
      to: 'To',
      confirm: {
        title: 'Transfer Confirm',
        transfer_amount: 'Transfer Amount',
        fee: 'Fee',
        total: 'Total Amount',
        enter_pwd: 'Please enter password',
        wrong_pwd: 'Wrong Password!'
      }
    },
    type: {
      a2a: 'Accounts Transfer',
      call_c: 'Transact Contract',
      create_c: 'Create Contract'
    }
  },
  splash: {
    downloading: {
      title: 'Awallet is initializing ...'
    },
    syncing: {
      title: 'Awallet is syncing chaindata ...'
    }
  },

  ui: {
    toolbar: {
      title: 'Awallet'
    }
  }
}
