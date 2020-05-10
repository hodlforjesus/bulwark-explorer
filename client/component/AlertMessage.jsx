
import React from 'react';
import config from '../../config'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Box from '@material-ui/core/Box';

const AlertMessage = () => {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!config.showSwapAlert) {
    return null;
  }

  return <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    fullWidth={true}
    maxWidth={'lg'}
    disableBackdropClick
    disableEscapeKeyDown
  >
    <DialogTitle id="alert-dialog-title">📢📢 IMPORTANT Datamine (DAM) Swap Details 📢📢</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description" style={{ color: '#000', fontSize: '16px' }}>
        <Box my={1}>
          <strong style={{ color: '#F00' }}>PLEASE READ CAREFULLY</strong>
        </Box>
        <Box my={1}>
          We are excited to announce that the first one-time token swap will occur on June 08, 2020 on Graviex exchange.<br />
          Graviex will perform a one-time swap for any account containing Bulwark balance. Swap ratio is 1:1 (meaning 1 BWK = 1 DAM).<br />
          Trading of DAM on Graviex will begin immediately after the swap has taken place. Bulwark will then be officially delisted from Graviex.<br />
        </Box>
        <Box my={1} mt={3}>
          <strong>Instructions</strong>
        </Box>
        <Box my={1}>
          <u>Graviex account registration:</u> You can create an account here: <a href="https://graviex.net/signup" target="_blank" rel="nofollow noopener" style={{ color: '#294dea' }}>https://graviex.net/signup</a><br />
          <u>Deposit Instructions:</u> <strong>You must deposit Bulwark to Graviex BEFORE June 08, 2020</strong>. Your Bulwark balance will automatically be swapped to DAM token on June 08, 2020.<br />
          <u>How many swap opportunities?:</u> First token swap date of June 08, 2020 provides ample 30-day notice to our community, with two more subsequent opportunities on Crex24 and Txbit as outlined below.<br />
          <u>What about Midas Exchange?:</u> Midas exchange swap details are currently being discussed with Midas team, updates to follow.
        </Box>
        <Box my={1} mt={3}>
          <strong>(ALTERNATIVE OPTIONS)</strong>
        </Box>
        <Box my={1}>
          If Graviex is NOT an option for you or you miss the first deadline, TxBit and Crex24 are alternative options with DIFFERENT later dates. You will need to deposit Bulwark into your account before the swap date in order for your balance to be swapped to Datamine.
        </Box>
        <Box my={1}>
          <u>CREX24 SWAP DATE:</u> June 15, 2020. Sign up: <a href="https://crex24.com/register" target="_blank" rel="nofollow noopener" style={{ color: '#294dea' }}>https://crex24.com/register</a><br />
          <u>TXBIT SWAP DATE :</u> June 22, 2020. Sign up: <a href="https://txbit.io/Signup" target="_blank" rel="nofollow noopener" style={{ color: '#294dea' }}>https://txbit.io/Signup</a>
        </Box>
        <Box my={1} style={{ color: '#F00' }}>
          <u><strong>TXBIT is the LAST CHANCE to swap your BWK. After TXBIT swap,  we will burn rest of DAM tokens.</strong></u>
        </Box>
        <Box mt={3}>
          For more details please visit: <a href="https://bitcointalk.org/index.php?topic=5246889.msg54397193#msg54397193" target="_blank" rel="nofollow noopener" style={{ color: '#294dea' }}>https://bitcointalk.org/index.php?topic=5246889.msg54397193#msg54397193</a>
        </Box>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} variant="secondary" autoFocus>
        I UNDERSTAND
      </Button>
    </DialogActions>
  </Dialog >
};

export default AlertMessage;
