
import React from 'react';
import { DialogActions } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export default function AlertDialog() {
    // 경고 알림창
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"회원가입 알림"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        회원정보를 모두 입력해주세요. 비밀번호는 6자 이상으로 해주세요.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>취소</Button>
                <Button onClick={handleClose} autoFocus>
                    확인
                </Button>
                </DialogActions>
            </Dialog>
    )
}