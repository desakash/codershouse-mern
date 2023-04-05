import React,{useState} from 'react'
import Card from '../../../../Components/Shared/Card/Card';
import Button from '../../../../Components/Shared/Button/Button';
import TextInput from '../../../../Components/Shared/TextInput/TextInput';
import styles from '../StepPhoneEmail.module.css';
const Email = ({onNext}) => {
  const [email, setEmail] = useState('');
  return (
    <Card title="Enter your email id" icon="email-emoji">
      <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />
      <div>
      <div className={styles.actionButtonWrap}>
                    <Button text="Next" onclick={onNext}></Button>
                </div>
                <p className={styles.bottomPragraph}>
                By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!
                </p>
      </div>
    </Card>
  )
}

export default Email