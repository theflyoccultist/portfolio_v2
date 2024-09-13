import { Dropdown, DropdownButton } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return(
        <div>
            <DropdownButton id="dropdown-basic-button"
            title="🌍"
            variant="secondary">
                <Dropdown.Item onClick={() => changeLanguage('fr')}>🇫🇷 Français</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage('en')}>🇬🇧 English</Dropdown.Item>
            </DropdownButton>        
        </div>
    );
}

export default LanguageSwitcher;