import PropTypes from 'prop-types';
import styles from '../assets/scss/Button.module.scss';

function Button({text}) {
    return (
        <button type="button" className={styles.button}>{text}</button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}


export default Button;