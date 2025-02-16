import WorkCard from "../components/WorkCard";
import "../components/WorkCard.css";
import { useTranslation } from 'react-i18next';

export default function PortfolioPage() {
    const { t } = useTranslation('common');
    return(
        <div className="container mt-5">
                <div className="justify-content-center">
                    <WorkCard
                        imageSrc="https://www.rinkakuworks.com/public/images/portfolio-blogging/blogging-platform.webp"
                        appName={t('appname1')}
                        roles={t('role1')}
                        description={t('description1')}
                        link="/portfolio-blogging"
                    />  
                    <WorkCard 
                        imageSrc="https://rinkakuworks.com/public/images/simpleplan/simpleplan.webp"
                        appName={t('appname2')}
                        roles={t('role2')}
                        description={t('description2')}
                        link="/simpleplan"
                    />
                    <WorkCard
                        imageSrc="https://www.rinkakuworks.com/public/images/evo11/evo11.webp"
                        appName={t('appname3')}
                        roles={t('role3')}
                        description={t('description3')}
                        link="/evo11"
                    />
                    <WorkCard 
                        imageSrc="https://rinkakuworks.com/public/images/vanityvixen/vanity-vixen.webp"
                        appName={t('appname4')}
                        roles={t('role4')}
                        description={t('description4')}
                        link="/vanityvixen"
                    />
                </div>
        </div>
    )
}